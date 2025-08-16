import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNavigation from '@/components/MainNavigation';
import HomeFeed from '@/components/HomeFeed';
import SearchPage from '@/components/SearchPage';
import PostCreation from '@/components/PostCreation';
import ExplorePage from '@/components/ExplorePage';
import ProfilePage from '@/components/ProfilePage';
import { useAuth } from '@/contexts/AuthContext';

const MainApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth page
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeFeed />;
      case 'search':
        return <SearchPage />;
      case 'post':
        return <PostCreation />;
      case 'explore':
        return <ExplorePage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomeFeed />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pb-20 md:pb-0">
        {renderContent()}
      </main>
    </div>
  );
};

export default MainApp;