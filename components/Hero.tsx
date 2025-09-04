import React from 'react';
import StatsBar from './StatsBar';

const Hero: React.FC = () => {
  return (
    // The main container's height has been changed from h-screen to h-[90vh]
    <div className="relative h-[90vh] w-full pb-24 -mb-12">
      {/* Background Layers */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/charcoal-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Container for centering the text content */}
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-7xl">
            Indo Charcoal
          </h1>
          <h2 className="text-4xl font-extrabold text-brand-orange sm:text-5xl md:text-7xl">
            Supply
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/80">
            The company of Indo charcoal supply was established in 2021 with a strong
            commitment to providing customers with the best, fastest, and most reliable
            services. Since its inception, the company has focused on the production
            and export of high-quality briquettes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/14N-Yzy3S-mlXNmzGgq9b67ZCsbWGCbSa/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-opacity duration-300"
            >
              Download Catalogue
            </a>
            <button className="border border-white/50 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <StatsBar />
    </div>
  );
};

export default Hero;