// components/Hero.tsx

import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import StatsBar from './StatsBar';
import { useTranslations } from 'next-intl'

const Hero: React.FC = () => {
  const t = useTranslations('hero')

  return (
    // In components/Hero.tsx
    <div className="relative h-[90vh] w-full">
      {/* Background Layers */}

      {/* USE NEXT/IMAGE INSTEAD OF A DIV BACKGROUND */}
      <Image
        src="/charcoal-bg.webp"
        alt="Hot charcoal briquettes"
        fill
        priority // This is the crucial part for LCP optimization!
        style={{
          objectFit: 'cover', // Replicates background-size: cover
          zIndex: -1,         // Puts the image behind the content
        }}
        sizes="100vw" // Informs the browser the image will span the full viewport width
      />

      <div className="absolute inset-0 bg-black/70" />

      {/* Container for centering the text content (no changes here) */}
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
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
            <a
              href="#contact"
              className="border border-white/50 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              {t('contact')}
            </a>
          </div>
        </div>
      </div>

      <StatsBar />
    </div>
  );
};

export default Hero;