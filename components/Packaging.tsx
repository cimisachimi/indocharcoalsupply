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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Master Box Section */}
          <div className="flex flex-col items-center text-center">
            <div className="relative h-80 w-full max-w-md mb-6 bg-gray-100 rounded-lg">
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
            <div className="relative h-80 w-full max-w-md mb-6 bg-gray-100 rounded-lg">
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
        <div className="mt-24 text-center bg-zinc-800 text-white p-8 rounded-lg shadow-lg">
          <p className="text-xl font-semibold leading-relaxed max-w-3xl mx-auto">
            {t('customizationText')}{' '}
            <a
              href="#contact"
              className="font-bold text-brand-orange hover:underline"
            >
              {t('customizationContact')}
            </a>{' '}
            {t('customizationSuffix')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
