import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Star, TrendingUp } from 'lucide-react';
import AdCard from '@/components/AdCard';

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

  const ads = [
    {
      type: 'banner' as const,
      title: 'Master Cinematic Storytelling',
      description: 'Learn from industry professionals with our comprehensive course package.',
      image: 'https://images.unsplash.com/photo-1489599112025-049e67bcc828?w=200&h=200&fit=crop',
      ctaText: 'Start Learning',
      sponsor: 'Film Academy Pro'
    },
    {
      type: 'sponsored-post' as const,
      title: 'Adobe Creative Suite - 50% Off for Students',
      description: 'Get professional video editing tools used by Hollywood studios. Perfect for aspiring filmmakers and content creators.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      ctaText: 'Claim Student Discount',
      sponsor: 'Adobe',
      rating: 4.8
    }
  ];

  const sidebarAds = [
    {
      type: 'sidebar' as const,
      title: 'Film Festival Submissions',
      description: 'Submit your work to 100+ festivals worldwide',
      image: 'https://images.unsplash.com/photo-1489599112025-049e67bcc828?w=150&h=100&fit=crop',
      ctaText: 'Submit Now',
      sponsor: 'FilmFreeway'
    },
    {
      type: 'sidebar' as const,
      title: 'Professional Camera Gear',
      description: 'Rent cinema-grade equipment at affordable prices',
      ctaText: 'Browse Gear',
      sponsor: 'CineRental'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Trending & Quick Access */}
          <div className="hidden lg:block space-y-6">
            <Card className="bg-gradient-card border-border/50 p-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Trending Now</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted/70 transition-colors">
                  <p className="text-sm font-medium text-foreground">#DunePartTwo</p>
                  <p className="text-xs text-muted-foreground">2.1K discussions</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted/70 transition-colors">
                  <p className="text-sm font-medium text-foreground">#IndieFilmTips</p>
                  <p className="text-xs text-muted-foreground">1.8K posts</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted/70 transition-colors">
                  <p className="text-sm font-medium text-foreground">#CinematographyMasterclass</p>
                  <p className="text-xs text-muted-foreground">956 enrolled</p>
                </div>
              </div>
            </Card>

            {/* Sidebar Ads */}
            <div className="space-y-4">
              {sidebarAds.map((ad, index) => (
                <AdCard key={index} {...ad} />
              ))}
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Banner Ad at top */}
            <AdCard {...ads[0]} />

            {posts.map((post, index) => (
              <div key={post.id}>
                <Card className="bg-gradient-card border-border/50 overflow-hidden hover:shadow-elegant transition-all duration-300">
                  {/* Post Header */}
                  <div className="flex items-center justify-between p-6 pb-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {post.user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-foreground text-lg">
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
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="px-6 pb-4">
                    <p className="text-foreground mb-4 text-lg leading-relaxed">
                      {post.content}
                    </p>
                    
                    {/* Rating for reviews */}
                    {post.rating && (
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(post.rating!) 
                                ? 'text-primary fill-current' 
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                        <span className="text-muted-foreground ml-2 font-medium">
                          {post.rating}/5
                        </span>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-primary hover:text-primary/80 cursor-pointer transition-colors font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                    <div className="px-6 pb-4">
                      <img 
                        src={post.image} 
                        alt="Post content" 
                        className="w-full rounded-xl object-cover max-h-96 shadow-md"
                      />
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center justify-between px-6 py-4 border-t border-border/50">
                    <div className="flex items-center gap-6">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500 transition-colors">
                        <Heart className="h-5 w-5 mr-2" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500 transition-colors">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500 transition-colors">
                        <Share className="h-5 w-5" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>

                {/* Insert sponsored post after second post */}
                {index === 1 && (
                  <div className="mt-6">
                    <AdCard {...ads[1]} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Sidebar - Suggestions & Activity */}
          <div className="hidden lg:block space-y-6">
            <Card className="bg-gradient-card border-border/50 p-4">
              <h3 className="font-semibold text-foreground mb-4">Suggested Connections</h3>
              <div className="space-y-4">
                {[
                  { name: "Alex Rodriguez", role: "Film Director", avatar: "AR" },
                  { name: "Maya Patel", role: "Cinematographer", avatar: "MP" },
                  { name: "Jordan Kim", role: "Screenwriter", avatar: "JK" }
                ].map((person, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                        {person.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{person.name}</p>
                      <p className="text-xs text-muted-foreground">{person.role}</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-card border-border/50 p-4">
              <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-foreground">New course available:</p>
                  <p className="text-muted-foreground">"Advanced Color Grading"</p>
                </div>
                <div className="text-sm">
                  <p className="text-foreground">Sarah Chen liked your review</p>
                  <p className="text-muted-foreground">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="text-foreground">Film festival deadline:</p>
                  <p className="text-muted-foreground">Sundance submissions close in 5 days</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;