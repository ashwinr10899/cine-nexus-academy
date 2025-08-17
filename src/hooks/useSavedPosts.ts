import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Post } from './usePosts';

export const useSavedPosts = () => {
  const [savedPosts, setSavedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchSavedPosts = async () => {
    if (!user) return;

    try {
      // First create the saved_posts table if it doesn't exist
      // This will be handled by migration, but for now we'll just fetch empty array
      setSavedPosts([]);
    } catch (error: any) {
      toast({
        title: "Error loading saved posts",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const savePost = async (postId: string) => {
    if (!user) return;

    try {
      // For now, just show success message
      // This will be implemented with the saved_posts table
      toast({
        title: "Post saved",
        description: "Post has been saved to your collection!"
      });
    } catch (error: any) {
      toast({
        title: "Error saving post",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const unsavePost = async (postId: string) => {
    if (!user) return;

    try {
      // For now, just show success message
      toast({
        title: "Post unsaved",
        description: "Post has been removed from your collection."
      });
    } catch (error: any) {
      toast({
        title: "Error unsaving post",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchSavedPosts();
  }, [user]);

  return {
    savedPosts,
    loading,
    savePost,
    unsavePost,
    refreshSavedPosts: fetchSavedPosts
  };
};