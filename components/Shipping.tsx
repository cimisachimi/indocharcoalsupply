import React from 'react';
import Image from 'next/image';

// --- Komponen Kartu Informasi Baru (Reusable) ---
const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-shadow duration-300 hover:shadow-xl">
    <div className="flex items-center gap-4 mb-4">
      <div className="flex-shrink-0 grid h-12 w-12 place-content-center rounded-full bg-orange-100 text-brand-orange">
        {icon}
      </div>
      <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">{title}</h3>
    </div>
    <div className="text-gray-600 space-y-4 leading-relaxed">
      {children}
    </div>
  </div>
);

// --- Komponen Utama Shipping ---
const Shipping: React.FC = () => {
  return (
    <section id="shipping" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        {/* Layout diubah menjadi 2 kolom di desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kolom 1: Gambar Kontainer */}
          <div className="transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/kontainer.png" // Pastikan nama dan path file ini benar
              width={600}
              height={400}
              alt="Indo Charcoal Supply Shipping Container"
              className="rounded-2xl  w-full h-auto"
            />
          </div>

          {/* Kolom 2: Teks Informasi */}
          <div className="flex flex-col gap-8">
            <InfoCard icon={<IconShipping />} title="ABOUT SHIPPING">
              <p>
                Our team can provide support with your shipping needs. Please contact us for further information.
              </p>
              <p>
                Our minimum order quantity (MOQ) is 1 container 18 tons (20’ft). Contact us to discuss your needs with our team to determine the optimal MOQ for your business.
              </p>
            </InfoCard>

            <InfoCard icon={<IconGuide />} title="PURCHASE GUIDE: POLICIES & PROCEDURES">
              <p>
                We ensure secure transactions with T/T and L/C payment methods. A 50% deposit confirms your order and starts production. The final 50% is processed upon production completion.
              </p>
            </InfoCard>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Komponen Ikon Baru (ditempatkan di file yang sama) ---
const IconShipping = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16h2a2 2 0 002-2V7a2 2 0 00-2-2h-3.382a1 1 0 00-.894.553L12 8" />
  </svg>
);

const IconGuide = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default Shipping;