import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface FollowUser {
  id: string;
  username: string;
  display_name?: string | null;
  avatar_url?: string | null;
  bio?: string | null;
}

export const useFollow = () => {
  const [followers, setFollowers] = useState<FollowUser[]>([]);
  const [following, setFollowing] = useState<FollowUser[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchFollows = async () => {
    if (!user) return;

    try {
      // Fetch followers
      const { data: followersData, error: followersError } = await supabase
        .from('follows')
        .select(`
          follower_id,
          profiles!follows_follower_id_fkey(id, username, display_name, avatar_url, bio)
        `)
        .eq('following_id', user.id);

      if (followersError) throw followersError;

      // Fetch following
      const { data: followingData, error: followingError } = await supabase
        .from('follows')
        .select(`
          following_id,
          profiles!follows_following_id_fkey(id, username, display_name, avatar_url, bio)
        `)
        .eq('follower_id', user.id);

      if (followingError) throw followingError;

      setFollowers(followersData?.map(f => f.profiles).filter(Boolean) || []);
      setFollowing(followingData?.map(f => f.profiles).filter(Boolean) || []);
    } catch (error: any) {
      toast({
        title: "Error loading follows",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const followUser = async (targetUserId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('follows')
        .insert({
          follower_id: user.id,
          following_id: targetUserId
        });

      if (error) throw error;

      toast({
        title: "User followed",
        description: "You are now following this user!"
      });

      fetchFollows(); // Refresh the lists
    } catch (error: any) {
      toast({
        title: "Error following user",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const unfollowUser = async (targetUserId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('follows')
        .delete()
        .eq('follower_id', user.id)
        .eq('following_id', targetUserId);

      if (error) throw error;

      toast({
        title: "User unfollowed",
        description: "You are no longer following this user."
      });

      fetchFollows(); // Refresh the lists
    } catch (error: any) {
      toast({
        title: "Error unfollowing user",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const isFollowing = (targetUserId: string) => {
    return following.some(f => f.id === targetUserId);
  };

  useEffect(() => {
    fetchFollows();
  }, [user]);

  return {
    followers,
    following,
    loading,
    followUser,
    unfollowUser,
    isFollowing,
    refreshFollows: fetchFollows
  };
};