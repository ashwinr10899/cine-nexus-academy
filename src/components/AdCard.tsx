import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Star } from 'lucide-react';

interface AdCardProps {
  type: 'banner' | 'sponsored-post' | 'sidebar';
  title: string;
  description: string;
  image?: string;
  ctaText: string;
  sponsor: string;
  rating?: number;
}

const AdCard = ({ type, title, description, image, ctaText, sponsor, rating }: AdCardProps) => {
  if (type === 'banner') {
    return (
      <Card className="bg-gradient-accent border-accent/20 overflow-hidden mb-6">
        <div className="flex items-center justify-between p-4">
          <Badge variant="secondary" className="text-xs">Sponsored</Badge>
          <span className="text-xs text-muted-foreground">by {sponsor}</span>
        </div>
        <div className="px-4 pb-4">
          <div className="flex items-center gap-4">
            {image && (
              <img 
                src={image} 
                alt={title}
                className="w-16 h-16 rounded-lg object-cover"
              />
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{description}</p>
              <Button size="sm" variant="secondary" className="text-accent border-accent/30">
                {ctaText}
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (type === 'sponsored-post') {
    return (
      <Card className="bg-gradient-card border-accent/20 overflow-hidden">
        {/* Sponsored Header */}
        <div className="flex items-center justify-between p-4 pb-3 bg-accent/5">
          <Badge variant="outline" className="text-xs border-accent/30 text-accent">
            Sponsored Content
          </Badge>
          <span className="text-xs text-muted-foreground">by {sponsor}</span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          {image && (
            <img 
              src={image} 
              alt={title}
              className="w-full rounded-lg object-cover max-h-64 mb-4"
            />
          )}

          {rating && (
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) 
                      ? 'text-accent fill-current' 
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-1">
                {rating}/5 - 2.3K reviews
              </span>
            </div>
          )}

          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {ctaText}
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    );
  }

  // sidebar type
  return (
    <Card className="bg-gradient-card border-border/50 overflow-hidden">
      <div className="p-3">
        <Badge variant="outline" className="text-xs mb-2">Sponsored</Badge>
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-24 rounded object-cover mb-3"
          />
        )}
        <h4 className="font-semibold text-sm text-foreground mb-2">{title}</h4>
        <p className="text-xs text-muted-foreground mb-3">{description}</p>
        <Button size="sm" variant="outline" className="w-full text-xs">
          {ctaText}
        </Button>
        <p className="text-xs text-muted-foreground mt-2 text-center">by {sponsor}</p>
      </div>
    </Card>
  );
};

export default AdCard;