import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, Award } from 'lucide-react';

const FeaturedContent = () => {
  const trendingFilms = [
    {
      title: "The Art of Cinematography",
      type: "Documentary",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1489599904649-11aba1df6239?w=400&h=600&fit=crop"
    },
    {
      title: "Indie Film Revolution", 
      type: "Course",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop"
    },
    {
      title: "Behind the Scenes Magic",
      type: "BTS Content",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
    }
  ];

  const featuredCourses = [
    {
      title: "Mastering Film Editing",
      instructor: "Sarah Chen",
      students: 2400,
      duration: "8 hours",
      price: "$99",
      rating: 4.9
    },
    {
      title: "Cinematography Fundamentals", 
      instructor: "Marcus Rodriguez",
      students: 3200,
      duration: "12 hours",
      price: "$149",
      rating: 4.8
    },
    {
      title: "Screenwriting Workshop",
      instructor: "Emma Thompson",
      students: 1800,
      duration: "6 hours", 
      price: "$79",
      rating: 4.9
    }
  ];

  return (
    <div className="py-16 px-6">
      {/* Trending Content */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Trending Now</h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingFilms.map((film, index) => (
            <Card key={index} className="bg-gradient-card border-border overflow-hidden group hover:shadow-glow transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img 
                  src={film.image} 
                  alt={film.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                  {film.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{film.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-primary fill-current" />
                  <span className="text-sm text-muted-foreground">{film.rating}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Featured Courses</h2>
          <Button variant="outline">Browse All Courses</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map((course, index) => (
            <Card key={index} className="bg-gradient-card border-border p-6 group hover:shadow-glow transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <Award className="h-8 w-8 text-primary" />
                <span className="text-lg font-bold text-primary">{course.price}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">{course.title}</h3>
              <p className="text-muted-foreground mb-4">by {course.instructor}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {course.students} students
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-primary fill-current" />
                  <span className="text-muted-foreground">{course.rating}</span>
                </div>
              </div>
              
              <Button variant="hero" className="w-full">
                Enroll Now
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedContent;