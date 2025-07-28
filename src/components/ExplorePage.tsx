import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, MessageSquare, BookOpen, Star, Users } from 'lucide-react';

const ExplorePage = () => {
  const trendingPosts = [
    {
      id: 1,
      user: { name: "Alex Johnson", avatar: "AJ" },
      content: "The new Blade Runner sequel's use of practical effects is revolutionary...",
      likes: 342,
      comments: 89,
      type: "Review"
    },
    {
      id: 2, 
      user: { name: "Maya Patel", avatar: "MP" },
      content: "Just finished my short film on 16mm. The texture is incredible!",
      likes: 156,
      comments: 34,
      type: "Behind the Scenes"
    }
  ];

  const newCourses = [
    {
      title: "Advanced Color Grading",
      instructor: "David Park",
      students: 1200,
      rating: 4.9,
      price: "$129"
    },
    {
      title: "Documentary Storytelling",
      instructor: "Lisa Chen",
      students: 890,
      rating: 4.8,
      price: "$99"
    }
  ];

  const featuredFilmmaker = {
    name: "Jordan Martinez",
    bio: "Award-winning cinematographer known for indie dramas",
    followers: "12.5K",
    films: 24,
    avatar: "JM"
  };

  const topRatedFilms = [
    { title: "Moonlight Sonata", rating: 4.9, reviews: 234 },
    { title: "The Silent Observer", rating: 4.8, reviews: 156 },
    { title: "Urban Decay", rating: 4.7, reviews: 89 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      {/* Trending Posts */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Trending Posts</h2>
        </div>
        <div className="space-y-4">
          {trendingPosts.map((post) => (
            <Card key={post.id} className="bg-gradient-card border-border p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      {post.user.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="font-semibold text-foreground">{post.user.name}</span>
                    <Badge variant="outline" className="ml-2 text-xs">{post.type}</Badge>
                  </div>
                </div>
              </div>
              <p className="text-foreground mb-3">{post.content}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* New Courses */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">New Courses</h2>
          </div>
          <div className="space-y-4">
            {newCourses.map((course, index) => (
              <Card key={index} className="bg-gradient-card border-border p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-foreground">{course.title}</h3>
                  <span className="text-primary font-bold">{course.price}</span>
                </div>
                <p className="text-muted-foreground mb-3">by {course.instructor}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Filmmaker */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Filmmaker</h2>
          <Card className="bg-gradient-card border-border p-6">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {featuredFilmmaker.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{featuredFilmmaker.name}</h3>
                <p className="text-muted-foreground">{featuredFilmmaker.bio}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{featuredFilmmaker.followers}</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{featuredFilmmaker.films}</div>
                <div className="text-sm text-muted-foreground">Films</div>
              </div>
            </div>
            <Button className="w-full">Follow</Button>
          </Card>
        </section>
      </div>

      {/* Top Rated Films */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Top Rated Films</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topRatedFilms.map((film, index) => (
            <Card key={index} className="bg-gradient-card border-border p-4">
              <h3 className="font-semibold text-foreground mb-2">{film.title}</h3>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-primary fill-current" />
                  <span>{film.rating}</span>
                </div>
                <span className="text-muted-foreground">{film.reviews} reviews</span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;