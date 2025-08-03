import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, Film, ArrowRight, Mail, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleAuth = () => {
    navigate('/app');
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-background via-card/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join the <span className="bg-gradient-primary bg-clip-text text-transparent">Licon</span> Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow film enthusiasts, access exclusive content, and start your cinematic journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Auth Forms */}
          <div className={`order-2 md:order-1 scroll-reveal seq-reveal-2 ${isVisible ? 'revealed' : ''}`}>
            <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500">
              <Tabs defaultValue="signup" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="signup" className="text-lg py-3">Sign Up</TabsTrigger>
                  <TabsTrigger value="signin" className="text-lg py-3">Sign In</TabsTrigger>
                </TabsList>
                
                <TabsContent value="signup" className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Full Name"
                        className="pl-10 py-3 text-lg"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="pl-10 py-3 text-lg"
                      />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="pl-10 pr-10 py-3 text-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <Button 
                    className="w-full py-3 text-lg hover:scale-[1.02] hover:shadow-glow transition-all duration-300 animate-glow-pulse" 
                    variant="hero"
                    onClick={handleAuth}
                  >
                    Create Account
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    By signing up, you agree to our Terms & Privacy Policy
                  </p>
                </TabsContent>

                <TabsContent value="signin" className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="pl-10 py-3 text-lg"
                      />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="pl-10 pr-10 py-3 text-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <Button 
                    className="w-full py-3 text-lg hover:scale-[1.02] hover:shadow-glow transition-all duration-300 animate-glow-pulse group" 
                    variant="hero"
                    onClick={handleAuth}
                  >
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <div className="text-center">
                    <Button variant="link" className="text-primary hover:text-primary/80">
                      Forgot your password?
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Visual Content */}
          <div className={`order-1 md:order-2 space-y-8 scroll-reveal seq-reveal-3 ${isVisible ? 'revealed' : ''}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl blur-3xl" />
              <Card className="relative p-8 bg-gradient-card border-border/50 backdrop-blur-sm">
                <Film className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Exclusive Access Awaits
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Premium film analysis and reviews
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Interactive community discussions
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Professional course catalog
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Connect with industry experts
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center p-6 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-accent font-medium mb-2">Already have an account?</p>
              <Button 
                variant="outline" 
                className="border-accent/30 text-accent hover:bg-accent/10"
                onClick={() => navigate('/app')}
              >
                Quick Access →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;