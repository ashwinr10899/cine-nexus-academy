import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Story {
  id: string;
  src: string;
  userId: string;
  userName: string;
  userAvatar: string;
  timestamp: string;
}

interface StoryViewerProps {
  stories: Story[];
  initialStoryId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const StoryViewer = ({ stories, initialStoryId, isOpen, onClose }: StoryViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Find user stories for the initial story
  const initialStory = stories.find(s => s.id === initialStoryId);
  const userStories = stories.filter(s => s.userId === initialStory?.userId) || [];
  
  useEffect(() => {
    if (initialStory) {
      const initialIndex = userStories.findIndex(s => s.id === initialStoryId);
      setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
    }
  }, [initialStoryId, initialStory]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          // Move to next story
          if (currentIndex < userStories.length - 1) {
            setCurrentIndex(currentIndex + 1);
            return 0;
          } else {
            onClose();
            return 0;
          }
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isOpen, currentIndex, userStories.length, onClose]);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress(0);
    }
  };

  const goToNext = () => {
    if (currentIndex < userStories.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const currentStory = userStories[currentIndex];

  if (!isOpen || !currentStory) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-md w-full h-[80vh] bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress bars */}
            <div className="absolute top-4 left-4 right-4 flex gap-1 z-10">
              {userStories.map((_, index) => (
                <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white transition-all duration-100"
                    style={{ 
                      width: index < currentIndex ? '100%' : 
                             index === currentIndex ? `${progress}%` : '0%' 
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Header */}
            <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={currentStory.userAvatar} />
                  <AvatarFallback>{currentStory.userName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white text-sm font-medium">{currentStory.userName}</p>
                  <p className="text-white/70 text-xs">{currentStory.timestamp}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Story Image */}
            <img
              src={currentStory.src}
              alt={`Story by ${currentStory.userName}`}
              className="w-full h-full object-cover"
            />

            {/* Navigation */}
            <div className="absolute inset-0 flex">
              {/* Left half - previous */}
              <div 
                className="w-1/2 h-full cursor-pointer" 
                onClick={goToPrevious}
              />
              {/* Right half - next */}
              <div 
                className="w-1/2 h-full cursor-pointer" 
                onClick={goToNext}
              />
            </div>

            {/* Navigation arrows */}
            {currentIndex > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            )}

            {currentIndex < userStories.length - 1 && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={goToNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};