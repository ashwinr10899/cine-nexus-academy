import { Card } from '@/components/ui/card';
import { MessageSquare, GraduationCap, Star, Users } from 'lucide-react';

const AboutLicon = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Share and Discover",
      description: "Post reviews, create discussions, and discover amazing film-related content from passionate creators worldwide."
    },
    {
      icon: GraduationCap,
      title: "Learn from Professionals",
      description: "Access verified courses taught by industry professionals and master the art of filmmaking."
    },
    {
      icon: Star,
      title: "Reviews & Discussions",
      description: "Share your thoughts on films, participate in meaningful discussions, and promote your own work."
    },
    {
      icon: Users,
      title: "Passionate Community",
      description: "Connect with fellow film lovers, creators, students, and industry professionals in one vibrant community."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Licon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The ultimate platform where film enthusiasts, learners, and creators come together to share, learn, and grow in the world of cinema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border p-6 text-center group hover:shadow-glow transition-all duration-300">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLicon;