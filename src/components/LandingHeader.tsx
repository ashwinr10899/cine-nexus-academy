import { Button } from '@/components/ui/button';
import { Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Film className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Licon
          </span>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => navigate('/app')}>
            Sign In
          </Button>
          <Button variant="hero" onClick={() => navigate('/app')}>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;