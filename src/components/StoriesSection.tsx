import { PhotoGallery } from "@/components/ui/photo-gallery";

const StoriesSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <PhotoGallery animationDelay={0.3} />
      </div>
    </section>
  );
};

export default StoriesSection;