import React from 'react';
import Image from 'next/image'; // Import the Image component
import StatsBar from './StatsBar';
import { useTranslations } from 'next-intl';

const Hero: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <div className="relative h-[90vh] w-full pb-24 -mb-12">
      {/* Background Layers */}
      <Image
        src="/charcoal-bg.webp"
        alt="Hot glowing charcoal briquettes in a grill"
        fill
        priority // <-- Tells Next.js to load this image first
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -1, // Places the image behind the content
        }}
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* Container for centering the text content (add z-10) */}
      <div className="relative z-10 top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-7xl">
            Indo Charcoal
          </h1>
          <h2 className="text-4xl font-extrabold text-brand-orange sm:text-5xl md:text-7xl">
            Supply
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/80">
            {t('paragraph')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/14N-Yzy3S-mlXNmzGgq9b67ZCsbWGCbSa/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-opacity duration-300"
            >
              {t('catalog')}
            </a>
            <button className="border border-white/50 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors duration-300">
              {t('contact')}
            </button>
          </div>
        </div>
      </div>

      <StatsBar />
    </div>
  );
};

export default Hero;