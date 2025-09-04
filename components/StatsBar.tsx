import React from 'react';
import StatItem from './ui/StatItem';

const StatsBar: React.FC = () => {
  return (
    // Position this container absolutely to the bottom of its parent
    <div className="absolute bottom-0 left-0 w-full flex justify-center px-4">
      {/* This relative positioning now works correctly to pull the bar down */}
      <div className="relative -bottom-12 sm:-bottom-10 flex justify-around items-center gap-4 sm:gap-8 md:gap-12 bg-brand-orange text-white px-8 py-6 rounded-full shadow-lg">
        <StatItem value="15+" label="Product" />
        <StatItem value="20+" label="Client" />
        <StatItem value="15+" label="Testimonie" />
      </div>
    </div>
  );
};

export default StatsBar;