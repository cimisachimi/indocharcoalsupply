import React from 'react';
import StatItem from './ui/StatItem';
import { useTranslations } from 'next-intl'


const StatsBar: React.FC = () => {

  const t = useTranslations('stat')
  return (
    // Container absolut untuk memposisikan bar di tengah bawah parent-nya
    <div className="absolute bottom-0 left-0 w-full flex justify-center px-4">
      {/* Bar utama dengan semua perbaikan:
        - Bentuk: rounded-[50px] untuk sudut tumpul modern.
        - Lebar: w-11/12 max-w-3xl agar memanjang di semua layar dengan batas maks.
        - Padding & Gap: Responsif, membesar di layar lebar.
        - Posisi: -bottom-12 untuk efek "menggantung" di bawah parent.
      */}
      <div className="
        relative -bottom-12
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
    </div>
  );
};

export default StatsBar;