import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Star } from 'lucide-react';

const HomeFeed = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        username: "sarahfilms",
        avatar: "SC"
      },
      type: "Review",
      content: "Just watched 'Dune: Part Two' and I'm absolutely blown away! The cinematography by Greig Fraser is nothing short of masterful. Every frame feels like a painting.",
      tags: ["#Dune", "#cinematography", "#sciencefiction"],
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=400&fit=crop",
      likes: 124,
      comments: 23,
      timestamp: "2h ago",
      rating: 4.5
    },
    {
      id: 2,
      user: {
        name: "Marcus Rodriguez",
        username: "filmmaker_marcus",
        avatar: "MR"
      },
      type: "Forum",
      content: "Question for fellow indie filmmakers: What's your go-to camera for low-budget productions? Looking for something that delivers cinematic quality without breaking the bank.",
      tags: ["#indiefilm", "#filmmaking", "#gear"],
      likes: 89,
      comments: 45,
      timestamp: "4h ago"
    },
    {
      id: 3,
      user: {
        name: "Emma Thompson",
        username: "emmacritic",
        avatar: "ET"
      },
      type: "Course",
      content: "Starting my new course 'Screenplay Analysis: Breaking Down Character Arcs' tomorrow! Limited spots available. Use code EARLY20 for 20% off.",
      tags: ["#screenwriting", "#course", "#characterdevelopment"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      likes: 67,
      comments: 12,
      timestamp: "6h ago",
      isPromoted: true
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="bg-gradient-card border-border overflow-hidden">
          {/* Post Header */}
          <div className="flex items-center justify-between p-4 pb-3">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  {post.user.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">
                    {post.user.name}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {post.type}
                  </Badge>
                  {post.isPromoted && (
                    <Badge variant="secondary" className="text-xs">
                      Promoted
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>@{post.user.username}</span>
                  <span>•</span>
                  <span>{post.timestamp}</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-3">
            <p className="text-foreground mb-3">
              {post.content}
            </p>
            
            {/* Rating for reviews */}
            {post.rating && (
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(post.rating!) 
                        ? 'text-primary fill-current' 
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  {post.rating}/5
                </span>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag, index) => (
                <span key={index} className="text-primary text-sm hover:underline cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Post Image */}
          {post.image && (
            <div className="px-4 pb-3">
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full rounded-lg object-cover max-h-96"
              />
            </div>
          )}

          {/* Post Actions */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-border">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                <Heart className="h-5 w-5 mr-1" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
                <MessageCircle className="h-5 w-5 mr-1" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                <Share className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HomeFeed;