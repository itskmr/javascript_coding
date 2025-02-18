import React from 'react';
import OverviewCard from './OverviewCard';
import ThisMonthCard from './ThisMonthCard';
import Leaderboard from './Leaderboard';
import RecentlySold from './RecentlySold';
import FooterBar from './FooterBar';

function App() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      {/* Top row: Overview + ThisMonth side by side */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-1/2">
          <OverviewCard />
        </div>
        <div className="md:w-1/2">
          <ThisMonthCard />
        </div>
      </div>

      {/* Middle row: Leaderboard + Recently Sold side by side */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <Leaderboard />
        </div>
        <div className="md:w-1/2">
          <RecentlySold />
        </div>
      </div>

      {/* Footer */}
      <FooterBar />
    </div>
  );
}

export default App;
