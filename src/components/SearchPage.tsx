import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Film, Users, BookOpen, MessageSquare, Megaphone, TrendingUp } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: Search },
    { id: 'films', label: 'Films', icon: Film },
    { id: 'people', label: 'People', icon: Users },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'discussions', label: 'Discussions', icon: MessageSquare },
    { id: 'promotions', label: 'Promotions', icon: Megaphone },
  ];

  const trendingSearches = [
    '#Dune', '#cinematography', '#indiefilm', '#screenwriting', '#filmmaking', '#editing'
  ];

  const recentSearches = [
    'Christopher Nolan', 'film noir lighting', 'Sundance 2024'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search films, creators, posts, tags, users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-3 text-lg"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeFilter === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(category.id)}
            className="flex items-center gap-2"
          >
            <category.icon className="h-4 w-4" />
            {category.label}
          </Button>
        ))}
      </div>

      {!searchQuery && (
        <>
          {/* Trending Searches */}
          <Card className="bg-gradient-card border-border p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Trending</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSearchQuery(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Recent Searches */}
          <Card className="bg-gradient-card border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent Searches</h2>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-accent"
                >
                  {search}
                </button>
              ))}
            </div>
          </Card>
        </>
      )}

      {searchQuery && (
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Showing results for "{searchQuery}"
          </div>
          {/* Search results would be populated here */}
          <Card className="bg-gradient-card border-border p-6">
            <div className="text-center text-muted-foreground">
              Search results will appear here...
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SearchPage;