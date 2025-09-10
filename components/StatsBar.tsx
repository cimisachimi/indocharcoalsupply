// components/StatsBar.tsx
import React from 'react';
import StatItem from './ui/StatItem';
import { useTranslations } from 'next-intl'

const StatsBar: React.FC = () => {
  const t = useTranslations('stat')
  return (
    // This is now the main component element.
    // It's positioned absolutely to the Hero container.
    // '-bottom-12' makes it hang, and 'left-1/2 -translate-x-1/2' centers it.
    <div className="
      absolute -bottom-12 left-1/2 -translate-x-1/2
      flex justify-around items-center
      bg-brand-orange text-white shadow-lg
      rounded-[50px]
      w-11/12 max-w-3xl
      gap-4    px-6  py-4
      sm:gap-8 sm:px-10 sm:py-5
      lg:gap-16 lg:px-16 lg:py-8
    ">
      <StatItem value="15+" label={t('product')} />
      <StatItem value="20+" label={t('client')} />
      <StatItem value="15+" label={t('testimonie')} />
    </div>
  );
};

export default StatsBar;