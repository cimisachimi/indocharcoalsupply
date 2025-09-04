"use client"; // This component needs to be a Client Component because it uses state for the carousel.

import React, { useState } from 'react';
import Image from 'next/image';

// Defines the structure for a product specification item
interface SpecificationItem {
  label: string;
  value: string;
}

// Defines the structure for a product
interface Product {
  id: string;
  type: string;
  images: string[]; // Array of image paths for the carousel
  specifications: SpecificationItem[];
}

// ProductCard component to display individual product details
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    // --- PENYEMPURNAAN VISUAL ---
    // Efek hover untuk mengangkat kartu dan memperkuat bayangan.
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col p-6 border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{product.type}</h3>

      {/* --- PENYEMPURNAAN VISUAL --- */}
      {/* Menggunakan aspect-square agar area gambar selalu konsisten */}
      <div className="relative w-full aspect-square flex items-center justify-center">
        {/* Carousel Image */}
        <Image
          src={product.images[currentImageIndex]}
          alt={`${product.type} image ${currentImageIndex + 1}`}
          fill // Gunakan fill agar gambar mengisi container
          style={{ objectFit: 'contain' }}
          className="p-4" // Beri sedikit padding agar gambar tidak menempel di tepi
        />

        {/* Carousel Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            {/* --- PENYEMPURNAAN VISUAL --- */}
            {/* Tombol diberi background lingkaran semi-transparan */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-content-center rounded-full bg-white/60 text-gray-600 backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-content-center rounded-full bg-white/60 text-gray-600 backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Carousel Dots Indicator */}
      {product.images.length > 1 && (
        <div className="flex justify-center space-x-2 my-4 z-10">
          {product.images.map((_, idx) => (
            <button
              key={idx}
              className={`block h-2 w-2 rounded-full cursor-pointer transition-colors duration-300 ${idx === currentImageIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              onClick={() => setCurrentImageIndex(idx)}
              aria-current={idx === currentImageIndex ? 'true' : 'false'}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* --- PENYEMPURNAAN VISUAL --- */}
      {/* Diberi garis pemisah atas */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col flex-grow">
        <h4 className="text-sm font-bold text-gray-500 mb-3 tracking-wider text-left">SPECIFICATIONS</h4>
        <ul className="space-y-0 text-gray-700">
          {product.specifications.map((spec, index) => (
            // --- PENYEMPURNAAN VISUAL ---
            // Setiap item diberi garis pemisah bawah untuk keterbacaan
            <li key={index} className="flex justify-between items-center text-sm py-3 border-b border-gray-100 last:border-b-0">
              <span className="font-medium text-gray-600 uppercase">{spec.label}</span>
              <span className="font-semibold">{spec.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main Products component
const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 'shisha-briquette',
      type: 'Briquette for Shisha',
      images: ['/coal-shape/cube.webp', '/coal-shape/cube-high-temperature.webp', '/coal-shape/cloud.webp', '/coal-shape/flat.webp', '/coal-shape/cube-high-flow.webp'],
      specifications: [
        { label: 'Ash Content', value: '2,0% - 2,5%' },
        { label: 'Burning Time', value: '2 - 2,5 HOURS' },
        { label: 'Caloric Value', value: '7000 - 7500 Kcal' },
        { label: 'Moisture', value: '7% - 10%' },
        { label: 'Fixed Carbon', value: '70% - 85%' },
      ],
    },
    {
      id: 'bbq-briquette',
      type: 'Briquette for BBQ',
      images: ['/coal-shape/octa.webp', '/coal-shape/dome.webp', '/coal-shape/hexa.webp', '/coal-shape/finger.webp'],
      specifications: [
        { label: 'Ash Content', value: '7% - 8%' },
        { label: 'Burning Time', value: '5 - 6 HOURS' },
        { label: 'Caloric Value', value: '6400 - 8800 Kcal' },
        { label: 'Moisture', value: '4% - 7%' },
        { label: 'Fixed Carbon', value: '70% - 85%' },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* --- PENYEMPURNAAN VISUAL --- */}
        {/* Banner CTA yang sudah diperbaiki */}
        <div className="
          mt-20
          w-full max-w-4xl mx-auto
          text-white rounded-[50px] shadow-lg
          bg-brand-orange
          px-6 py-8 sm:px-10 md:px-16 md:py-10
          text-center text-xl font-extrabold leading-relaxed
          sm:text-2xl lg:text-3xl
          transition-all duration-300 ease-in-out
          hover:shadow-2xl hover:scale-[1.02]
        ">
          PARTNER WITH US TO CREATE CUSTOM BRIQUETTES SHAPES AND SIZES THAT REFLECT YOUR BRAND IDENTITY, INSIDE AND OUT.
        </div>
      </div>
    </section>
  );
};

export default Products;