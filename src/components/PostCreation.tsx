import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ImagePlus, Video, Hash, Film, X } from 'lucide-react';

const PostCreation = () => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [relatedFilm, setRelatedFilm] = useState('');
  const [promotePost, setPromotePost] = useState(false);
  const [postType, setPostType] = useState('general');

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Card className="bg-gradient-card border-border">
        {/* Header */}
        <div className="flex items-center gap-3 p-6 border-b border-border">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              YU
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-foreground">Your Name</div>
            <div className="text-sm text-muted-foreground">Create a new post</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Post Type Selection */}
          <div className="space-y-2">
            <Label htmlFor="post-type">Post Type</Label>
            <Select value={postType} onValueChange={setPostType}>
              <SelectTrigger>
                <SelectValue placeholder="Select post type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Post</SelectItem>
                <SelectItem value="review">Film Review</SelectItem>
                <SelectItem value="forum">Forum Discussion</SelectItem>
                <SelectItem value="course">Course Share</SelectItem>
                <SelectItem value="behind-scenes">Behind the Scenes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <Label htmlFor="content">What's on your mind?</Label>
            <Textarea
              id="content"
              placeholder="Share your thoughts, reviews, questions, or anything film-related..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-32 resize-none"
            />
          </div>

          {/* Media Upload */}
          <div className="space-y-2">
            <Label>Add Media</Label>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ImagePlus className="h-4 w-4 mr-2" />
                Add Photo
              </Button>
              <Button variant="outline" size="sm">
                <Video className="h-4 w-4 mr-2" />
                Add Video
              </Button>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex gap-2 mb-2">
              <Input
                placeholder="Add tag (e.g., #cinematography)"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={handleAddTag} size="sm">
                <Hash className="h-4 w-4" />
              </Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <div key={index} className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
                    {tag}
                    <button onClick={() => handleRemoveTag(tag)}>
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Related Film */}
          <div className="space-y-2">
            <Label htmlFor="related-film">Related Film (Optional)</Label>
            <div className="flex gap-2">
              <Film className="h-5 w-5 text-muted-foreground mt-2" />
              <Input
                id="related-film"
                placeholder="Tag a film this post relates to..."
                value={relatedFilm}
                onChange={(e) => setRelatedFilm(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>

          {/* Promote Toggle */}
          <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
            <div className="space-y-1">
              <Label htmlFor="promote-post" className="font-medium">
                Promote this post
              </Label>
              <p className="text-sm text-muted-foreground">
                Boost visibility to reach more people
              </p>
            </div>
            <Switch
              id="promote-post"
              checked={promotePost}
              onCheckedChange={setPromotePost}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <div className="text-sm text-muted-foreground">
            {content.length}/500 characters
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              Save Draft
            </Button>
            <Button disabled={!content.trim()}>
              Post
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PostCreation;