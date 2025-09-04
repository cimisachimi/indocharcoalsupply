import React from 'react';
import Image from 'next/image';

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  // On extra-small screens, stack icon and text. On small screens and up, go side-by-side.
  <div className="bg-gray-50/80 rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center gap-4 sm:flex-row sm:items-start sm:text-left sm:gap-5">
    {/* Reduced icon size on mobile */}
    <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-brand-orange/10 flex items-center justify-center">
      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-brand-orange flex items-center justify-center text-white">
        {icon}
      </div>
    </div>
    <div>
      {/* Reduced title size on mobile */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-gray-600 space-y-2">{children}</div>
    </div>
  </div>
);

const VisionMission: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Reduced image height on mobile for better balance */}
          <div className="relative h-[350px] lg:h-[550px] w-full rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/hookah-charcoal.webp"
              alt="Glowing hookah charcoal in a metal holder"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
              Our Vision and Mission
            </h2>
            <div className="space-y-6">
              <InfoCard icon={<IconTarget />} title="Vision">
                <p>To be a leading export company that provides high quality and sustainable products, and makes a positive contribution to the global economy.</p>
              </InfoCard>
              <InfoCard icon={<IconList />} title="Mission">
                <ul className="list-disc list-outside pl-5 space-y-2">
                  <li>Establish long-term relationships with customers and business partners based on trust and mutual satisfaction.</li>
                  <li>Develop an efficient and reliable international distribution network to meet the needs of the global market.</li>
                  <li>Enhance employee skills and welfare through continuous training and professional development.</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// SVG Icons
const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 10-7.07 0M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);
const IconList = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

export default VisionMission;