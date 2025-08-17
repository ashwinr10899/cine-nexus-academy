import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface Profile {
  id: string;
  user_id: string;
  username: string;
  display_name?: string | null;
  bio?: string | null;
  avatar_url?: string | null;
  location?: string | null;
  website?: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfileStats {
  followers_count: number;
  following_count: number;
  posts_count: number;
}

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [stats, setStats] = useState<ProfileStats>({ followers_count: 0, following_count: 0, posts_count: 0 });
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchProfile = async () => {
    if (!user) return;

    try {
      // Fetch profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (profileError) throw profileError;
      setProfile(profileData);

      // Fetch stats
      const [followersResult, followingResult, postsResult] = await Promise.all([
        supabase.from('follows').select('id').eq('following_id', user.id),
        supabase.from('follows').select('id').eq('follower_id', user.id),
        supabase.from('posts').select('id').eq('user_id', user.id)
      ]);

      setStats({
        followers_count: followersResult.data?.length || 0,
        following_count: followingResult.data?.length || 0,
        posts_count: postsResult.data?.length || 0
      });
    } catch (error: any) {
      toast({
        title: "Error loading profile",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user || !profile) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('user_id', user.id);

      if (error) throw error;

      setProfile({ ...profile, ...updates });
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully!"
      });
    } catch (error: any) {
      toast({
        title: "Error updating profile",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  return {
    profile,
    stats,
    loading,
    updateProfile,
    refreshProfile: fetchProfile
  };
};