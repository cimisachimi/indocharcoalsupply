import React from 'react';
import StatItem from './StatItem';

const StatsBar: React.FC = () => {
  return (
    <div className="flex justify-center w-full px-4">
      <div className="relative -bottom-12 sm:-bottom-10 flex justify-around items-center gap-4 sm:gap-8 md:gap-12 bg-brand-orange text-white px-8 py-6 rounded-full shadow-lg">
        <StatItem value="15+" label="Product" />
        <StatItem value="20+" label="Client" />
        <StatItem value="15+" label="Testimonie" />
      </div>
    </div>
  );
};

export default StatsBar;