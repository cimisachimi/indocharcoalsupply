import React from 'react';
import StatsBar from './StatsBar';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/charcoal-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* The `z-10` class has been removed from this div */}
      <div className="relative flex h-full flex-col">
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-7xl">
            Indo Charcoal
          </h1>
          <h2 className="text-4xl font-extrabold text-brand-orange sm:text-5xl md:text-7xl">
            Supply
          </h2>
          <p className="mt-6 max-w-2xl text-white/80">
            The company of Indo charcoal supply was established in 2021 with a strong
            commitment to providing customers with the best, fastest, and most reliable
            services. Since its inception, the company has focused on the production
            and export of high-quality briquettes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-opacity duration-300">
              Download Catalogue
            </button>
            <button className="border border-white/50 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </main>

      </div>
    </div>
  );
};

export default Hero;