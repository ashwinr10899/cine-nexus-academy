import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-banner.jpg';

const LandingHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Cinema background" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/40 rounded-full animate-float-slower" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/50 rounded-full animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Star className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">Trusted by 10K+ Film Enthusiasts</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-tight animate-scale-in">
          Your Ultimate Hub for{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse-subtle">
            Film Lovers
          </span>
          ,{' '}
          <span className="bg-gradient-secondary bg-clip-text text-transparent animate-pulse-subtle">
            Learners
          </span>
          , and{' '}
          <span className="bg-gradient-accent bg-clip-text text-transparent animate-pulse-subtle">
            Creators
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-10 max-w-3xl mx-auto font-light animate-fade-in-delayed">
          Discover, discuss, learn, and grow in the world of cinema with our vibrant community.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-delayed">
          <Button size="lg" variant="hero" className="text-xl px-10 py-5 shadow-glow hover:shadow-glow-lg transition-all duration-300" onClick={() => navigate('/app')}>
            Start Your Journey
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button size="lg" variant="outline" className="text-xl px-10 py-5 backdrop-blur-sm">
            Explore Platform
          </Button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-delayed">
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <Star className="h-6 w-6 text-primary fill-current" />
            <span className="font-semibold text-foreground">4.9/5 Rating</span>
            <span className="text-sm text-muted-foreground">User Reviews</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <span className="font-bold text-2xl text-primary">10K+</span>
            <span className="text-sm text-muted-foreground">Film Enthusiasts</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <span className="font-bold text-2xl text-accent">500+</span>
            <span className="text-sm text-muted-foreground">Verified Courses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;