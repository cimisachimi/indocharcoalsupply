import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Packaging: React.FC = () => {
  const t = useTranslations('packaging');

  return (
    <section id="packaging" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-brand-orange sm:text-4xl text-center mb-16">
          {t('title')}
        </h2>

        {/* Changed items-start to items-center for better vertical alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Master Box Section */}
          <div className="flex flex-col items-center text-center">
            {/* Increased container size for the Master Box image */}
            <div className="relative h-96 w-full max-w-lg mb-6 bg-gray-100 rounded-lg">
              <Image
                src="/packaging/masterbox.webp"
                alt={t('masterAlt')}
                fill
                style={{ objectFit: 'contain' }}
                className="p-8"
              />
            </div>
            <h3 className="text-2xl font-bold text-brand-orange mb-4">{t('masterTitle')}</h3>
            <p className="text-gray-600 mb-6 max-w-md">{t('masterDescription')}</p>
            <h4 className="font-semibold text-gray-800 mb-3">{t('masterAvailable')}</h4>
            <ul className="flex justify-center gap-x-6 gap-y-2 flex-wrap text-lg">
              <li className="font-medium text-gray-700">{t('masterSize10')}</li>
              <li className="font-medium text-gray-700">{t('masterSize12')}</li>
              <li className="font-medium text-gray-700">{t('masterSize15')}</li>
              <li className="font-medium text-gray-700">{t('masterSize20')}</li>
            </ul>
          </div>

          {/* Inner Box Section */}
          <div className="flex flex-col items-center text-center">
            {/* Decreased container size for the Inner Box for contrast */}
            <div className="relative h-72 w-full max-w-sm mb-6 bg-gray-100 rounded-lg">
              <Image
                src="/packaging/innerbox.webp"
                alt={t('innerAlt')}
                fill
                style={{ objectFit: 'contain' }}
                className="p-8"
              />
            </div>
            <h3 className="text-2xl font-bold text-brand-orange mb-4">{t('innerTitle')}</h3>
            <p className="text-gray-600 mb-6 max-w-md">{t('innerDescription')}</p>
            <h4 className="font-semibold text-gray-800 mb-3">{t('innerAvailable')}</h4>
            <ul className="flex justify-center gap-x-6 gap-y-2 flex-wrap text-lg">
              <li className="font-medium text-gray-700">{t('innerSize1to2')}</li>
              <li className="font-medium text-gray-700">{t('innerSize250to500')}</li>
            </ul>
          </div>
        </div>

        {/* Customization Footer Banner */}
        <div className="mt-24 w-full max-w-5xl mx-auto">
          <div className="bg-zinc-800 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white text-center md:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Need Custom Packaging?
                </h3>
                <p className="text-white/80 max-w-lg">
                  {t('customizationText')} {t('customizationSuffix')}
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <a
                  href="#contact"
                  className="inline-block bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-opacity duration-300"
                >
                  {t('customizationContact')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;