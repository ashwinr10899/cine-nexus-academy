import LandingHeader from '@/components/LandingHeader';
import ParallaxHero from '@/components/ParallaxHero';
import AuthSection from '@/components/AuthSection';
import StoriesSection from '@/components/StoriesSection';
import AboutLicon from '@/components/AboutLicon';
import WhyJoinLicon from '@/components/WhyJoinLicon';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main>
        <ParallaxHero />
        <AuthSection />
        <StoriesSection />
        <AboutLicon />
        <WhyJoinLicon />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
