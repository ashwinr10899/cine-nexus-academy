import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface Post {
  id: string;
  user_id: string;
  content: string;
  images?: string[] | null;
  post_type: 'regular' | 'promotion' | 'discussion';
  tags?: string[] | null;
  related_film?: string | null;
  likes_count: number | null;
  comments_count: number | null;
  created_at: string;
  profiles: {
    username: string;
    display_name?: string | null;
    avatar_url?: string | null;
  };
  user_has_liked?: boolean;
}

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchPosts = async () => {
    try {
      let query = supabase
        .from('posts')
        .select(`
          *,
          profiles!inner(username, display_name, avatar_url)
        `)
        .order('created_at', { ascending: false });

      const { data, error } = await query;

      if (error) throw error;

      // Check which posts current user has liked
      if (user && data) {
        const postIds = data.map(post => post.id);
        const { data: likes } = await supabase
          .from('likes')
          .select('post_id')
          .eq('user_id', user.id)
          .in('post_id', postIds);

        const likedPostIds = new Set(likes?.map(like => like.post_id) || []);
        
        const postsWithLikes = data.map(post => ({
          ...post,
          post_type: (post.post_type as 'regular' | 'promotion' | 'discussion') || 'regular',
          likes_count: post.likes_count || 0,
          comments_count: post.comments_count || 0,
          user_has_liked: likedPostIds.has(post.id),
          profiles: Array.isArray(post.profiles) ? post.profiles[0] : post.profiles
        })) as Post[];

        setPosts(postsWithLikes);
      } else if (data) {
        const processedPosts = data.map(post => ({
          ...post,
          post_type: (post.post_type as 'regular' | 'promotion' | 'discussion') || 'regular',
          likes_count: post.likes_count || 0,
          comments_count: post.comments_count || 0,
          profiles: Array.isArray(post.profiles) ? post.profiles[0] : post.profiles
        })) as Post[];
        setPosts(processedPosts);
      }
    } catch (error: any) {
      toast({
        title: "Error loading posts",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (content: string, postType: string = 'regular', tags: string[] = [], relatedFilm?: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('posts')
        .insert({
          user_id: user.id,
          content,
          post_type: postType,
          tags,
          related_film: relatedFilm
        });

      if (error) throw error;

      toast({
        title: "Post created",
        description: "Your post has been published successfully!"
      });

      fetchPosts(); // Refresh posts
    } catch (error: any) {
      toast({
        title: "Error creating post",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const toggleLike = async (postId: string) => {
    if (!user) return;

    try {
      const post = posts.find(p => p.id === postId);
      if (!post) return;

      if (post.user_has_liked) {
        // Unlike
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('user_id', user.id)
          .eq('post_id', postId);

        if (error) throw error;
      } else {
        // Like
        const { error } = await supabase
          .from('likes')
          .insert({
            user_id: user.id,
            post_id: postId
          });

        if (error) throw error;
      }

      // Update local state
      setPosts(posts.map(p => 
        p.id === postId 
          ? { 
              ...p, 
              user_has_liked: !p.user_has_liked,
              likes_count: p.user_has_liked ? p.likes_count - 1 : p.likes_count + 1
            }
          : p
      ));
    } catch (error: any) {
      toast({
        title: "Error updating like",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [user]);

  return {
    posts,
    loading,
    createPost,
    toggleLike,
    refreshPosts: fetchPosts
  };
};