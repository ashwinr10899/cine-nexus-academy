import { Button } from '@/components/ui/button';
import { Play, Star, TrendingUp } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="Cinematic hero banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Welcome to Licon
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          The ultimate platform for film enthusiasts, creators, and industry professionals.
          <br />
          Learn, create, share, and discover the world of cinema.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            <Play className="mr-2 h-5 w-5" />
            Start Exploring
          </Button>
          <Button variant="film" size="lg" className="text-lg px-8 py-3">
            Join Community
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-6 w-6 text-primary mr-2" />
              <span className="text-2xl font-bold text-primary">50K+</span>
            </div>
            <p className="text-muted-foreground">Film Reviews</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-6 w-6 text-primary mr-2" />
              <span className="text-2xl font-bold text-primary">1M+</span>
            </div>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Play className="h-6 w-6 text-primary mr-2" />
              <span className="text-2xl font-bold text-primary">500+</span>
            </div>
            <p className="text-muted-foreground">Verified Courses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;