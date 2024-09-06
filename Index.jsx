import React from 'react';
import ProfileCard from '../components/ProfileCard';
import InfoPayments from '../components/InfoPayments';
import AboutMe from '../components/AboutMe';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProfileCard />
          <div>
            <InfoPayments />
            <AboutMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;