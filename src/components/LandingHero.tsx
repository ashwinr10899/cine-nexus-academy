import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-banner.jpg';

const LandingHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Cinema background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Your Ultimate Hub for{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Film Lovers
          </span>
          ,{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Learners
          </span>
          , and{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Creators
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join Licon to discover, discuss, learn, and grow in the world of cinema.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" variant="hero" className="text-lg px-8 py-4" onClick={() => navigate('/app')}>
            Sign Up to Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4">
            Learn More
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-primary fill-current" />
            <span>4.9/5 Rating</span>
          </div>
          <div>10K+ Film Enthusiasts</div>
          <div>500+ Verified Courses</div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;