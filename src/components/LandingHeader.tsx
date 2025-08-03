import { Button } from '@/components/ui/button';
import { Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LandingHeader = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
      isLoaded ? 'animate-slide-down' : 'opacity-0 -translate-y-full'
    } ${isScrolled ? 'animate-nav-shrink shadow-elegant' : ''}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        {/* Logo with Animation */}
        <div className={`flex items-center gap-2 transition-all duration-500 ${
          isLoaded ? 'animate-scale-fade-in' : 'opacity-0 scale-75'
        }`}>
          <Film className="h-8 w-8 text-primary animate-float-slower" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Licon
          </span>
        </div>

        {/* Auth Buttons with Staggered Animation */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/app')}
            className={`transition-all duration-500 delay-300 hover:scale-105 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            Sign In
          </Button>
          <Button 
            variant="hero" 
            onClick={() => navigate('/app')}
            className={`transition-all duration-500 delay-500 hover:scale-105 hover:shadow-glow ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;