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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col p-6 border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{product.type}</h3>

      <div className="relative w-full h-60 flex items-center justify-center">
        {/* Carousel Image */}
        <Image
          src={product.images[currentImageIndex]}
          alt={`${product.type} image ${currentImageIndex + 1}`}
          width={200}
          height={200}
          style={{ objectFit: 'contain' }}
          className="max-h-full max-w-full"
        />

        {/* Carousel Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 p-2 text-gray-400 hover:text-gray-800 transition-colors z-10"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 p-2 text-gray-400 hover:text-gray-800 transition-colors z-10"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <span
              key={idx}
              className={`block h-2 w-2 rounded-full cursor-pointer ${idx === currentImageIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              onClick={() => setCurrentImageIndex(idx)}
              aria-current={idx === currentImageIndex ? 'true' : 'false'}
              aria-label={`Go to image ${idx + 1}`}
            ></span>
          ))}
        </div>
      )}

      <div className="mt-4 pt-4 flex flex-col flex-grow">
        <h4 className="text-sm font-bold text-gray-500 mb-3 tracking-wider">SPECIFICATIONS</h4>
        <ul className="space-y-2 text-gray-700">
          {product.specifications.map((spec, index) => (
            <li key={index} className="flex justify-between items-center text-sm">
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
        { label: 'Caloric Value', value: '7000 Kcal - 7500 Kcal' },
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
        { label: 'Caloric Value', value: '6400 Kcal - 8800 Kcal' },
        { label: 'Moisture', value: '4% - 7%' },
        { label: 'Fixed Carbon', value: '70% - 85%' },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Custom Briquettes Banner */}
        <div className="mt-20 bg-brand-orange text-white p-8 rounded-full shadow-lg max-w-3xl mx-auto text-xl font-semibold leading-relaxed">
          PARTNER WITH US TO CREATE CUSTOM BRIQUETTES SHAPES AND SIZES THAT REFLECT YOUR BRAND IDENTITY, INSIDE AND OUT.
        </div>
      </div>
    </section>
  );
};

export default Products;