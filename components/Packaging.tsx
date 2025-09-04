import React from 'react';
import Image from 'next/image';

const Packaging: React.FC = () => {
  return (
    <section id="packaging" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-brand-orange sm:text-4xl text-center mb-16">
          Packaging Options
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Master Box Section - Centered Content */}
          <div className="flex flex-col items-center text-center">
            <div className="relative h-80 w-full max-w-md mb-6 bg-gray-100 rounded-lg">
              <Image src="/packaging/masterbox.webp" alt="Master Box" fill style={{ objectFit: 'contain' }} className="p-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand-orange mb-4">MASTER BOX</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              This large master box is designed to hold and protect your charcoal briquettes during shipping and storage.
            </p>
            <h4 className="font-semibold text-gray-800 mb-3">Available in sizes:</h4>
            <ul className="flex justify-center gap-x-6 gap-y-2 flex-wrap text-lg">
              <li className="font-medium text-gray-700">10 kg</li>
              <li className="font-medium text-gray-700">12 kg</li>
              <li className="font-medium text-gray-700">15 kg</li>
              <li className="font-medium text-gray-700">20 kg</li>
            </ul>
          </div>

          {/* Inner Box Section - Centered Content */}
          <div className="flex flex-col items-center text-center">
            <div className="relative h-80 w-full max-w-md mb-6 bg-gray-100 rounded-lg">
              <Image src="/packaging/innerbox.webp" alt="Inner Box" fill style={{ objectFit: 'contain' }} className="p-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand-orange mb-4">INNER BOX</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              This box is designed to protect your briquettes from moisture and damage, making them easy to carry and store.
            </p>
            <h4 className="font-semibold text-gray-800 mb-3">Available sizes:</h4>
            <ul className="flex justify-center gap-x-6 gap-y-2 flex-wrap text-lg">
              <li className="font-medium text-gray-700">1 - 2 kg</li>
              <li className="font-medium text-gray-700">250 - 500 gr</li>
            </ul>
          </div>
        </div>

        {/* Customization Footer Banner */}
        <div className="mt-24 text-center bg-zinc-800 text-white p-8 rounded-lg shadow-lg">
          <p className="text-xl font-semibold leading-relaxed max-w-3xl mx-auto">
            Our master boxes can be customized to feature your logo and branding. <a href="#contact" className="font-bold text-brand-orange hover:underline">Contact us</a> to discuss your custom design needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packaging;