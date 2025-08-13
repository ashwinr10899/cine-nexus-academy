"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StoryViewer } from "@/components/ui/story-viewer";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedStoryId, setSelectedStoryId] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, animationDelay * 1000);

    return () => clearTimeout(timer);
  }, [animationDelay]);

  // Mock story data with user information
  const stories = [
    {
      id: "1",
      x: "-100px",
      y: "8px",
      zIndex: 50,
      rotation: -2,
      src: "https://images.pexels.com/photos/32025694/pexels-photo-32025694/free-photo-of-romantic-wedding-in-ancient-ruins.jpeg",
      userId: "user1",
      userName: "Emma Wilson",
      userAvatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      timestamp: "2h ago"
    },
    {
      id: "2",
      x: "-50px",
      y: "15px",
      zIndex: 40,
      rotation: 1,
      src: "https://images.pexels.com/photos/31596551/pexels-photo-31596551/free-photo-of-winter-scene-with-lake-view-in-van-turkiye.jpeg",
      userId: "user2",
      userName: "Alex Chen",
      userAvatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      timestamp: "4h ago"
    },
    {
      id: "3",
      x: "0px",
      y: "5px",
      zIndex: 30,
      rotation: 0,
      src: "https://images.pexels.com/photos/31890053/pexels-photo-31890053/free-photo-of-moody-portrait-with-heart-shaped-light.jpeg",
      userId: "user1",
      userName: "Emma Wilson",
      userAvatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      timestamp: "1h ago"
    },
    {
      id: "4",
      x: "50px",
      y: "12px",
      zIndex: 20,
      rotation: -1,
      src: "https://images.pexels.com/photos/19936068/pexels-photo-19936068/free-photo-of-women-sitting-on-hilltop-with-clouds-below.jpeg",
      userId: "user3",
      userName: "Maya Patel",
      userAvatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      timestamp: "6h ago"
    },
    {
      id: "5",
      x: "100px",
      y: "18px",
      zIndex: 10,
      rotation: 2,
      src: "https://images.pexels.com/photos/20494995/pexels-photo-20494995/free-photo-of-head-of-peacock.jpeg",
      userId: "user2",
      userName: "Alex Chen",
      userAvatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      timestamp: "3h ago"
    },
  ];

  const handleStoryClick = (storyId: string) => {
    setSelectedStoryId(storyId);
    setViewerOpen(true);
  };

  return (
    <div className="py-8 relative bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:8px_8px]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:16px_16px]" />
      
      {/* Content wrapper with backdrop blur */}
      <div className="relative backdrop-blur-[0.5px]">
      <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
        Film Stories
      </p>
      
      <div className="relative mb-4 h-[160px] w-full flex items-center justify-center">
        <div className="relative h-[120px] w-[120px]">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              className="absolute left-0 top-0"
              style={{ zIndex: story.zIndex }}
              initial={{ 
                x: 0, 
                y: 0, 
                rotate: 0, 
                scale: 0.8,
                opacity: 0
              }}
              animate={isLoaded ? { 
                x: story.x, 
                y: story.y, 
                rotate: story.rotation, 
                scale: 1,
                opacity: 1
              } : {}}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: index * 0.08,
                duration: 0.6
              }}
            >
              <StoryPhoto
                story={story}
                onClick={() => handleStoryClick(story.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <StoryViewer
        stories={stories}
        initialStoryId={selectedStoryId}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
      
        <div className="flex w-full justify-center">
          <Button variant="ghost" size="sm" className="text-sm backdrop-blur-sm bg-background/50 hover:bg-background/70 border border-border/50">
            View All Stories
          </Button>
        </div>
      </div>
    </div>
  );
};

// Story photo component with user avatar
const StoryPhoto = ({ story, onClick }: { 
  story: any; 
  onClick: () => void; 
}) => {
  return (
    <motion.div
      className="relative h-[120px] w-[120px] cursor-pointer"
      whileHover={{ 
        scale: 1.05, 
        zIndex: 999,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      onClick={onClick}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl shadow-md border border-border/20 bg-muted">
        <img
          src={story.src}
          alt={`Story by ${story.userName}`}
          className="w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
        
        {/* User avatar indicator */}
        <div className="absolute top-2 left-2">
          <Avatar className="w-8 h-8 border-2 border-white shadow-md">
            <AvatarImage src={story.userAvatar} />
            <AvatarFallback className="text-xs">{story.userName[0]}</AvatarFallback>
          </Avatar>
        </div>
        
        {/* Gradient overlay for better avatar visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
};