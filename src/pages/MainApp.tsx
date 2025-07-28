import { useState } from 'react';
import MainNavigation from '@/components/MainNavigation';
import HomeFeed from '@/components/HomeFeed';
import SearchPage from '@/components/SearchPage';
import PostCreation from '@/components/PostCreation';
import ExplorePage from '@/components/ExplorePage';
import ProfilePage from '@/components/ProfilePage';

const MainApp = () => {
  const [activeTab, setActiveTab] = useState('home');

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