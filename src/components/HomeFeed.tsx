import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Star, TrendingUp } from 'lucide-react';
import AdCard from '@/components/AdCard';
import { PhotoGallery } from '@/components/ui/photo-gallery';
import { usePosts } from '@/hooks/usePosts';
import { useAuth } from '@/contexts/AuthContext';
import { formatDistanceToNow } from 'date-fns';

const HomeFeed = () => {
  const { posts, loading, toggleLike } = usePosts();
  const { user } = useAuth();

  // Mock stories data
  const stories = [
    { id: 1, userName: 'alex.doe', src: '/placeholder.svg', isViewed: false },
    { id: 2, userName: 'sarah.j', src: '/placeholder.svg', isViewed: true },
    { id: 3, userName: 'mike.film', src: '/placeholder.svg', isViewed: false },
    { id: 4, userName: 'emma.edit', src: '/placeholder.svg', isViewed: false },
    { id: 5, userName: 'john.direct', src: '/placeholder.svg', isViewed: true },
  ];

  // Mock sidebar data
  const bannerAds = [
    {
      id: 1,
      type: "banner" as const,
      title: "New Film Equipment Sale",
      description: "Up to 50% off professional cameras and lenses",
      image: "/placeholder.svg",
      ctaText: "Shop Now",
      sponsor: "FilmGear Pro"
    }
  ];

  const sidebarAds = [
    {
      id: 1,
      type: "sidebar" as const,
      title: "Masterclass: Cinematography",
      description: "Learn from award-winning directors",
      image: "/placeholder.svg",
      ctaText: "Enroll",
      sponsor: "MasterClass"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Trending Topics */}
            <Card className="bg-gradient-card border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Trending Now</h2>
              </div>
              <div className="space-y-3">
                {['#Dune2024', '#IndieFilm', '#Cinematography', '#FilmFest', '#Documentary'].map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{topic}</span>
                    <span className="text-sm text-muted-foreground">2.4k posts</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Sidebar Ads */}
            {sidebarAds.map((ad) => (
              <AdCard key={ad.id} {...ad} />
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Stories Section */}
            <Card className="bg-gradient-card border-border p-4">
              <h2 className="text-lg font-semibold text-foreground mb-4">Stories</h2>
              <PhotoGallery />
            </Card>

            {/* Banner Ads */}
            {bannerAds.map((ad) => (
              <AdCard key={ad.id} {...ad} />
            ))}

            {/* Posts Feed */}
            <div className="space-y-6">
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading posts...</p>
                </div>
              ) : posts.length === 0 ? (
                <Card className="bg-gradient-card border-border p-8 text-center">
                  <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
                  <p className="text-muted-foreground">Be the first to share something with the community!</p>
                </Card>
              ) : (
                posts.map((post) => (
                  <Card key={post.id} className="bg-gradient-card border-border p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={post.profiles.avatar_url || '/placeholder.svg'} alt={post.profiles.display_name || 'User'} />
                        <AvatarFallback>{(post.profiles.display_name || post.profiles.username)?.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-foreground">{post.profiles.display_name || post.profiles.username}</h3>
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
                        <button 
                          onClick={() => toggleLike(post.id)}
                          className={`flex items-center space-x-2 transition-colors ${
                            post.user_has_liked 
                              ? 'text-red-500' 
                              : 'text-muted-foreground hover:text-red-500'
                          }`}
                        >
                          <Heart className={`h-5 w-5 ${post.user_has_liked ? 'fill-current' : ''}`} />
                          <span className="text-sm">{post.likes_count || 0}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-muted-foreground hover:text-blue-500 transition-colors">
                          <MessageCircle className="h-5 w-5" />
                          <span className="text-sm">{post.comments_count || 0}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-muted-foreground hover:text-green-500 transition-colors">
                          <Share2 className="h-5 w-5" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <Bookmark className="h-5 w-5" />
                      </button>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Suggested Connections */}
            <Card className="bg-gradient-card border-border p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Suggested Connections</h2>
              <div className="space-y-4">
                {[
                  { name: 'Sofia Chen', role: 'Director', avatar: '/placeholder.svg' },
                  { name: 'Marcus Rodriguez', role: 'Cinematographer', avatar: '/placeholder.svg' },
                  { name: 'Emma Thompson', role: 'Producer', avatar: '/placeholder.svg' }
                ].map((person, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={person.avatar} alt={person.name} />
                      <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{person.name}</p>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                    </div>
                    <Button size="sm" variant="outline">Follow</Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-card border-border p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Alex Johnson</span> liked your post about cinematography
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Sarah Kim</span> started following you
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Film Society</span> invited you to join their group
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;