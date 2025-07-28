import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Settings, Edit, MapPin, Calendar, Link } from 'lucide-react';

const ProfilePage = () => {
  const userProfile = {
    name: "Your Name",
    username: "yourhandle",
    bio: "Passionate filmmaker and cinema enthusiast. Always learning, always creating.",
    location: "Los Angeles, CA",
    joinDate: "Joined March 2023",
    website: "yourwebsite.com",
    followers: 1247,
    following: 892,
    postsCount: 156,
    avatar: "YN"
  };

  const userPosts = [
    {
      id: 1,
      content: "Just wrapped filming my latest short film! The golden hour lighting was absolutely perfect.",
      type: "Behind the Scenes",
      likes: 89,
      comments: 23,
      timestamp: "2 days ago"
    },
    {
      id: 2,
      content: "My review of 'Everything Everywhere All at Once' - a masterpiece of editing and storytelling.",
      type: "Review",
      likes: 156,
      comments: 45,
      timestamp: "1 week ago"
    }
  ];

  const savedPosts = [
    { id: 1, title: "Color Grading Techniques", author: "David Park" },
    { id: 2, title: "Indie Film Distribution Guide", author: "Sarah Miller" }
  ];

  const enrolledCourses = [
    { title: "Advanced Cinematography", progress: 75, instructor: "Marcus Lee" },
    { title: "Screenwriting Fundamentals", progress: 100, instructor: "Lisa Chen" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <Card className="bg-gradient-card border-border p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">
              {userProfile.avatar}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-foreground">{userProfile.name}</h1>
              <Button size="sm" variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
            
            <p className="text-muted-foreground mb-3">@{userProfile.username}</p>
            <p className="text-foreground mb-4">{userProfile.bio}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {userProfile.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {userProfile.joinDate}
              </div>
              <div className="flex items-center gap-1">
                <Link className="h-4 w-4" />
                <a href="#" className="text-primary hover:underline">{userProfile.website}</a>
              </div>
            </div>
            
            <div className="flex gap-6 text-sm">
              <span>
                <strong className="text-foreground">{userProfile.followers}</strong>{' '}
                <span className="text-muted-foreground">followers</span>
              </span>
              <span>
                <strong className="text-foreground">{userProfile.following}</strong>{' '}
                <span className="text-muted-foreground">following</span>
              </span>
              <span>
                <strong className="text-foreground">{userProfile.postsCount}</strong>{' '}
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
          <div className="space-y-4">
            {userPosts.map((post) => (
              <Card key={post.id} className="bg-gradient-card border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">{post.type}</Badge>
                  <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                </div>
                <p className="text-foreground mb-3">{post.content}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-6">
          <div className="space-y-4">
            {savedPosts.map((post) => (
              <Card key={post.id} className="bg-gradient-card border-border p-4">
                <h3 className="font-semibold text-foreground">{post.title}</h3>
                <p className="text-sm text-muted-foreground">by {post.author}</p>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="courses" className="mt-6">
          <div className="space-y-4">
            {enrolledCourses.map((course, index) => (
              <Card key={index} className="bg-gradient-card border-border p-6">
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
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="followers" className="mt-6">
          <Card className="bg-gradient-card border-border p-6">
            <div className="text-center text-muted-foreground">
              Followers and following lists would appear here
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="about" className="mt-6">
          <Card className="bg-gradient-card border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">About</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-foreground">Bio:</span>
                <p className="text-muted-foreground mt-1">{userProfile.bio}</p>
              </div>
              <div>
                <span className="font-medium text-foreground">Location:</span>
                <span className="text-muted-foreground ml-2">{userProfile.location}</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Website:</span>
                <a href="#" className="text-primary hover:underline ml-2">{userProfile.website}</a>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;