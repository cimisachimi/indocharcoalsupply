import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="text-center px-4">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold">{value}</p>
      <p className="text-sm">{label}</p>
    </div>
  );
};

export default StatItem;