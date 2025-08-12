"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, animationDelay * 1000);

    return () => clearTimeout(timer);
  }, [animationDelay]);

  // Simplified photo positions - smaller, optimized layout
  const photos = [
    {
      id: 1,
      x: "-100px",
      y: "8px",
      zIndex: 50,
      rotation: -2,
      src: "https://images.pexels.com/photos/32025694/pexels-photo-32025694/free-photo-of-romantic-wedding-in-ancient-ruins.jpeg",
    },
    {
      id: 2,
      x: "-50px",
      y: "15px",
      zIndex: 40,
      rotation: 1,
      src: "https://images.pexels.com/photos/31596551/pexels-photo-31596551/free-photo-of-winter-scene-with-lake-view-in-van-turkiye.jpeg",
    },
    {
      id: 3,
      x: "0px",
      y: "5px",
      zIndex: 30,
      rotation: 0,
      src: "https://images.pexels.com/photos/31890053/pexels-photo-31890053/free-photo-of-moody-portrait-with-heart-shaped-light.jpeg",
    },
    {
      id: 4,
      x: "50px",
      y: "12px",
      zIndex: 20,
      rotation: -1,
      src: "https://images.pexels.com/photos/19936068/pexels-photo-19936068/free-photo-of-women-sitting-on-hilltop-with-clouds-below.jpeg",
    },
    {
      id: 5,
      x: "100px",
      y: "18px",
      zIndex: 10,
      rotation: 2,
      src: "https://images.pexels.com/photos/20494995/pexels-photo-20494995/free-photo-of-head-of-peacock.jpeg",
    },
  ];

  return (
    <div className="py-4 relative">
      <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
        Film Stories
      </p>
      
      <div className="relative mb-4 h-[160px] w-full flex items-center justify-center">
        <div className="relative h-[120px] w-[120px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="absolute left-0 top-0"
              style={{ zIndex: photo.zIndex }}
              initial={{ 
                x: 0, 
                y: 0, 
                rotate: 0, 
                scale: 0.8,
                opacity: 0
              }}
              animate={isLoaded ? { 
                x: photo.x, 
                y: photo.y, 
                rotate: photo.rotation, 
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
              <SimplePhoto
                src={photo.src}
                alt="Story"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="flex w-full justify-center">
        <Button variant="ghost" size="sm" className="text-sm">
          View All Stories
        </Button>
      </div>
    </div>
  );
};

// Lightweight photo component optimized for performance
const SimplePhoto = ({ src, alt }: { src: string; alt: string }) => {
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
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl shadow-md border border-border/20 bg-muted">
        <img
          className="w-full h-full object-cover"
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
        />
      </div>
    </motion.div>
  );
};