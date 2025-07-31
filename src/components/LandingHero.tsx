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

      {/* Cinematic Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        {/* Film Strip Border Effect */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
        
        {/* Cinematic Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-flex items-center">
            {/* Film reel decorative elements */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-3 h-3 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-3 h-3 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
            
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 backdrop-blur-md shadow-glow">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Star className="h-5 w-5 text-primary animate-pulse-subtle" />
                  <div className="absolute inset-0 h-5 w-5 text-primary animate-ping opacity-30">
                    <Star className="h-5 w-5" />
                  </div>
                </div>
                <span className="text-primary font-semibold tracking-wide text-sm uppercase">
                  Trusted by 10K+ Film Enthusiasts
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cinematic Main Title */}
        <div className="relative mb-10">
          {/* Title backdrop effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent blur-3xl"></div>
          
          <h1 className="relative text-7xl md:text-9xl font-black text-foreground mb-6 leading-[0.9] tracking-tight animate-scale-in">
            <span className="block mb-2">Your Ultimate</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-shimmer">
              CINEMATIC
            </span>
            <span className="block text-5xl md:text-7xl font-light text-muted-foreground/80 tracking-widest">
              H U B
            </span>
          </h1>
          
          {/* Subtitle with film strip styling */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-0.5 bg-primary"></div>
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-0.5 bg-primary"></div>
            
            <p className="text-xl md:text-2xl text-accent font-medium tracking-wider uppercase">
              For{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">Film Lovers</span>
              ,{' '}
              <span className="bg-gradient-secondary bg-clip-text text-transparent font-bold">Learners</span>
              , and{' '}
              <span className="bg-gradient-accent bg-clip-text text-transparent font-bold">Creators</span>
            </p>
          </div>
        </div>
        
        {/* Cinematic Description */}
        <div className="relative mb-12 animate-fade-in-delayed">
          <p className="text-2xl md:text-3xl text-muted-foreground/90 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            Discover, discuss, learn, and grow in the world of cinema with our vibrant community of storytellers.
          </p>
          
          {/* Decorative film elements */}
          <div className="flex justify-center mt-6 gap-2 opacity-40">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Cinematic Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20 animate-fade-in-delayed">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-primary rounded-full blur opacity-30 group-hover:opacity-70 transition-all duration-300"></div>
            <Button 
              size="lg" 
              variant="hero" 
              className="relative text-xl px-12 py-6 shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105" 
              onClick={() => navigate('/app')}
            >
              <span className="tracking-wide font-semibold">START YOUR JOURNEY</span>
              <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-xl px-12 py-6 backdrop-blur-md border-primary/30 hover:bg-primary/10 transition-all duration-300 tracking-wide"
          >
            EXPLORE PLATFORM
          </Button>
        </div>

        {/* Cinematic Trust Indicators */}
        <div className="relative">
          {/* Film strip design */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-8 animate-fade-in-delayed">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative flex flex-col items-center gap-4 p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="relative">
                  <Star className="h-8 w-8 text-primary fill-current animate-pulse-subtle" />
                  <div className="absolute -inset-2 border border-primary/20 rounded-full animate-spin-slow"></div>
                </div>
                <div className="text-center">
                  <span className="font-bold text-3xl text-foreground block">4.9</span>
                  <span className="text-primary font-medium tracking-wide">RATING</span>
                  <span className="text-xs text-muted-foreground block mt-1">User Reviews</span>
                </div>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-accent/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative flex flex-col items-center gap-4 p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-300">
                <div className="relative">
                  <span className="font-black text-4xl text-accent animate-pulse-subtle">10K+</span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-accent"></div>
                </div>
                <div className="text-center">
                  <span className="text-accent font-medium tracking-wide">ENTHUSIASTS</span>
                  <span className="text-xs text-muted-foreground block mt-1">Active Community</span>
                </div>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-secondary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative flex flex-col items-center gap-4 p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all duration-300">
                <div className="relative">
                  <span className="font-black text-4xl text-secondary-foreground animate-pulse-subtle">500+</span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-secondary"></div>
                </div>
                <div className="text-center">
                  <span className="text-secondary-foreground font-medium tracking-wide">COURSES</span>
                  <span className="text-xs text-muted-foreground block mt-1">Verified Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;