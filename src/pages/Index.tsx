import LandingHeader from '@/components/LandingHeader';
import LandingHero from '@/components/LandingHero';
import AboutLicon from '@/components/AboutLicon';
import WhyJoinLicon from '@/components/WhyJoinLicon';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main>
        <LandingHero />
        <AboutLicon />
        <WhyJoinLicon />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
