import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Clapperboard, Camera, Popcorn, Film, Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-banner.jpg';

const ParallaxHero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const filmIcons = [
    { icon: Clapperboard, delay: '0.2s' },
    { icon: Camera, delay: '0.4s' },
    { icon: Popcorn, delay: '0.6s' },
    { icon: Film, delay: '0.8s' },
    { icon: Star, delay: '1.0s' },
    { icon: Heart, delay: '1.2s' }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations on load
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-reel-bg">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Main background image with parallax */}
        <div 
          className="absolute inset-0 scale-110"
          style={{
            transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10 + scrollY * 0.5}px, 0) scale(1.1)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src={heroImage} 
            alt="Cinema background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Parallax overlay layers */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90"
          style={{
            transform: `translate3d(${mousePosition.x * 5}px, ${mousePosition.y * 5 + scrollY * 0.3}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        <div 
          className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5"
          style={{
            transform: `translate3d(${mousePosition.x * -8}px, ${mousePosition.y * -8 + scrollY * 0.2}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      {/* Floating particles with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full"
          style={{
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20 + scrollY * 0.8}px, 0)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/30 rounded-full"
          style={{
            transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15 + scrollY * 0.6}px, 0)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/10 rounded-full blur-sm"
          style={{
            transform: `translate3d(${mousePosition.x * 25}px, ${mousePosition.y * 25 + scrollY * 1.2}px, 0)`,
            transition: 'transform 0.15s ease-out'
          }}
        />
      </div>

      {/* Minimalist Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Minimalist Badge with Animation */}
        <div className="mb-12">
          <div className={`inline-flex items-center px-6 py-2 rounded-full border border-border/30 bg-background/20 backdrop-blur-md transition-all duration-1000 ${
            isLoaded ? 'animate-scale-fade-in' : 'opacity-0 scale-75'
          }`}>
            <span className="text-sm font-inter text-muted-foreground tracking-wide">
              Trusted by 10,000+ creators
            </span>
          </div>
        </div>
        
        {/* Cinematic Main Title with Projector Light */}
        <div className="mb-8 projector-light">
          <h1 className={`font-playfair text-6xl md:text-8xl font-light text-foreground leading-tight tracking-tight transition-all duration-1000 delay-300 ${
            isLoaded ? 'animate-slide-in-left' : 'opacity-0 -translate-x-12'
          }`}>
            <span className="block">Discover, Learn</span>
            <span className="block font-medium bg-gradient-primary bg-clip-text text-transparent">
              & Review
            </span>
            <span className="block text-4xl md:text-6xl font-light text-muted-foreground">
              Films
            </span>
          </h1>
        </div>
        
        {/* Film Icons Row */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {filmIcons.map(({ icon: Icon, delay }, index) => (
              <div
                key={index}
                className={`transition-all duration-600 ${
                  isLoaded ? 'animate-icon-pop' : 'opacity-0 scale-0'
                }`}
                style={{ animationDelay: delay }}
              >
                <Icon className="h-6 w-6 text-primary/70 hover:text-primary transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Minimalist Description */}
        <div className="mb-16">
          <p className={`font-inter text-xl md:text-2xl text-muted-foreground/80 font-light leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Experience cinema like never before with our immersive platform
          </p>
        </div>

        {/* Cinematic Action Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button 
            size="lg" 
            variant="default" 
            className="font-inter text-base px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-glow group" 
            onClick={() => navigate('/app')}
          >
            <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Start Your Journey
          </Button>
          
          <Button 
            size="lg" 
            variant="ghost" 
            className="font-inter text-base px-8 py-3 transition-all duration-300 hover:bg-background/10 hover:scale-105 group"
          >
            Explore Platform
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;