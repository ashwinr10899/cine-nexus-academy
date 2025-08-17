import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Link, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { useProfile } from '@/hooks/useProfile';
import { useFollow } from '@/hooks/useFollow';
import { usePosts } from '@/hooks/usePosts';
import { useSavedPosts } from '@/hooks/useSavedPosts';
import EditProfileDialog from './EditProfileDialog';
import FollowButton from './FollowButton';
import { formatDistanceToNow } from 'date-fns';

const ProfilePage = () => {
  const { profile, stats, loading } = useProfile();
  const { followers, following } = useFollow();
  const { posts } = usePosts();
  const { savedPosts } = useSavedPosts();

  // Mock course data - will be replaced with real data later
  const enrolledCourses = [
    { id: 1, title: "Advanced Cinematography", progress: 75, instructor: "Marcus Lee" },
    { id: 2, title: "Screenwriting Fundamentals", progress: 100, instructor: "Lisa Chen" }
  ];

  if (loading || !profile) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="animate-pulse">
          <div className="h-32 bg-muted rounded-lg mb-8"></div>
          <div className="h-96 bg-muted rounded-lg"></div>
        </div>
      </div>
    );
  }

  // Filter posts by current user
  const userPosts = posts.filter(post => post.user_id === profile.user_id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <Card className="bg-gradient-card border-border p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={profile.avatar_url || ''} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">
              {(profile.display_name || profile.username)?.charAt(0).toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-foreground">
                {profile.display_name || profile.username}
              </h1>
              <EditProfileDialog />
            </div>
            
            <p className="text-muted-foreground mb-3">@{profile.username}</p>
            {profile.bio && (
              <p className="text-foreground mb-4">{profile.bio}</p>
            )}
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              {profile.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Joined {formatDistanceToNow(new Date(profile.created_at), { addSuffix: true })}
              </div>
              {profile.website && (
                <div className="flex items-center gap-1">
                  <Link className="h-4 w-4" />
                  <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {profile.website}
                  </a>
                </div>
              )}
            </div>
            
            <div className="flex gap-6 text-sm">
              <span>
                <strong className="text-foreground">{stats.followers_count}</strong>{' '}
                <span className="text-muted-foreground">followers</span>
              </span>
              <span>
                <strong className="text-foreground">{stats.following_count}</strong>{' '}
                <span className="text-muted-foreground">following</span>
              </span>
              <span>
                <strong className="text-foreground">{stats.posts_count}</strong>{' '}
                <span className="text-muted-foreground">posts</span>
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="followers">Followers</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="mt-6">
          <div className="space-y-6">
            {userPosts.length === 0 ? (
              <Card className="bg-gradient-card border-border p-8 text-center">
                <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
                <p className="text-muted-foreground">Start sharing your thoughts with the community!</p>
              </Card>
            ) : (
              userPosts.map((post) => (
                <Card key={post.id} className="bg-gradient-card border-border p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.profiles.avatar_url || ''} />
                      <AvatarFallback>
                        {(post.profiles.display_name || post.profiles.username)?.charAt(0).toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-foreground">
                          {post.profiles.display_name || post.profiles.username}
                        </h3>
                        <span className="text-sm text-muted-foreground">@{post.profiles.username}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                        </span>
                      </div>
                      {post.post_type !== 'regular' && (
                        <Badge variant="secondary" className="mt-1 capitalize">
                          {post.post_type}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {post.related_film && (
                    <div className="mb-4 p-3 bg-accent/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Related to: <span className="font-medium">{post.related_film}</span></p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Heart className="h-5 w-5" />
                        <span className="text-sm">{post.likes_count || 0}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm">{post.comments_count || 0}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Share2 className="h-5 w-5" />
                        <span className="text-sm">Share</span>
                      </div>
                    </div>
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-6">
          <div className="space-y-4">
            {savedPosts.length === 0 ? (
              <Card className="bg-gradient-card border-border p-8 text-center">
                <h3 className="text-lg font-semibold mb-2">No saved posts</h3>
                <p className="text-muted-foreground">Posts you save will appear here</p>
              </Card>
            ) : (
              savedPosts.map((post) => (
                <Card key={post.id} className="bg-gradient-card border-border p-4">
                  <h3 className="font-semibold text-foreground">{post.content.substring(0, 50)}...</h3>
                  <p className="text-sm text-muted-foreground">by @{post.profiles.username}</p>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="courses" className="mt-6">
          <div className="space-y-4">
            {enrolledCourses.length === 0 ? (
              <Card className="bg-gradient-card border-border p-8 text-center">
                <h3 className="text-lg font-semibold mb-2">No enrolled courses</h3>
                <p className="text-muted-foreground">Discover and enroll in courses to enhance your skills!</p>
              </Card>
            ) : (
              enrolledCourses.map((course) => (
                <Card key={course.id} className="bg-gradient-card border-border p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">{course.title}</h3>
                    <Badge variant={course.progress === 100 ? "default" : "secondary"}>
                      {course.progress === 100 ? "Completed" : `${course.progress}%`}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-3">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="followers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Followers ({followers.length})</h3>
              <div className="space-y-4">
                {followers.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">No followers yet</p>
                ) : (
                  followers.map((follower) => (
                    <div key={follower.id} className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={follower.avatar_url || ''} />
                        <AvatarFallback>
                          {(follower.display_name || follower.username)?.charAt(0).toUpperCase() || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">
                          {follower.display_name || follower.username}
                        </p>
                        <p className="text-sm text-muted-foreground">@{follower.username}</p>
                      </div>
                      <FollowButton userId={follower.id} />
                    </div>
                  ))
                )}
              </div>
            </Card>

            <Card className="bg-gradient-card border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Following ({following.length})</h3>
              <div className="space-y-4">
                {following.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">Not following anyone yet</p>
                ) : (
                  following.map((followed) => (
                    <div key={followed.id} className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={followed.avatar_url || ''} />
                        <AvatarFallback>
                          {(followed.display_name || followed.username)?.charAt(0).toUpperCase() || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">
                          {followed.display_name || followed.username}
                        </p>
                        <p className="text-sm text-muted-foreground">@{followed.username}</p>
                      </div>
                      <FollowButton userId={followed.id} />
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="about" className="mt-6">
          <Card className="bg-gradient-card border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">About</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-foreground">Bio:</span>
                <p className="text-muted-foreground mt-1">{profile.bio || 'No bio provided'}</p>
              </div>
              {profile.location && (
                <div>
                  <span className="font-medium text-foreground">Location:</span>
                  <span className="text-muted-foreground ml-2">{profile.location}</span>
                </div>
              )}
              {profile.website && (
                <div>
                  <span className="font-medium text-foreground">Website:</span>
                  <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">
                    {profile.website}
                  </a>
                </div>
              )}
              <div>
                <span className="font-medium text-foreground">Member since:</span>
                <span className="text-muted-foreground ml-2">
                  {formatDistanceToNow(new Date(profile.created_at), { addSuffix: true })}
                </span>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;