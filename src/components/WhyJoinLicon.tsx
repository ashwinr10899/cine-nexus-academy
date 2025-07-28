import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const WhyJoinLicon = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Independent Filmmaker",
      avatar: "SC",
      quote: "Licon transformed how I connect with fellow filmmakers. The courses are top-notch and the community is incredibly supportive.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Film Student",
      avatar: "MR", 
      quote: "As a film student, Licon has been invaluable. I've learned from industry professionals and built a network that's helping my career.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Film Critic",
      avatar: "ET",
      quote: "The discussions on Licon are thoughtful and engaging. It's become my go-to platform for discovering new films and sharing reviews.",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "For Filmmakers",
      description: "Showcase your work, get feedback from peers, and learn advanced techniques from industry veterans."
    },
    {
      title: "For Students", 
      description: "Access professional courses, connect with mentors, and build your portfolio with guidance from experts."
    },
    {
      title: "For Critics",
      description: "Share thoughtful reviews, engage in meaningful discussions, and discover hidden gems from emerging creators."
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Join <span className="bg-gradient-primary bg-clip-text text-transparent">Licon?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of film enthusiasts who are already part of our growing community.
          </p>
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-gradient-card border-border p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground">
                {useCase.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-border p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinLicon;