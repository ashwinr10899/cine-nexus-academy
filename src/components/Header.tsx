import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu, Bell, MessageCircle, User, Film } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');
  
  const navigationTabs = [
    'Home', 'Discover', 'Learn', 'Social', 'Forums', 'Reviews', 'Promote', 'Marketplace'
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Film className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Licon
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search films, creators, courses..."
              className="w-full pl-10 pr-4 py-2 bg-input rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="hero" size="sm">
            Upload
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex items-center gap-1 px-4 pb-2 overflow-x-auto">
        {navigationTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
              activeTab === tab
                ? "bg-primary text-primary-foreground shadow-golden"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;