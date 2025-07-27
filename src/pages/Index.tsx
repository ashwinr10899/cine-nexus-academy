import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedContent from '@/components/FeaturedContent';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="max-w-7xl mx-auto">
          <FeaturedContent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
