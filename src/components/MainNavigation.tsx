import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Search, Plus, Compass, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MainNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const MainNavigation = ({ activeTab, onTabChange }: MainNavigationProps) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'post', label: 'Post', icon: Plus },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border md:relative md:bottom-auto md:border-t-0 md:border-b md:top-0">
      <div className="flex items-center justify-around px-4 py-3 max-w-md mx-auto md:max-w-none md:justify-center md:gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200",
              activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <tab.icon className={cn(
              "h-6 w-6",
              activeTab === tab.id && "scale-110"
            )} />
            <span className="text-xs font-medium">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MainNavigation;