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
  category: string;
  name: string;
  images: string[]; // Array of image paths for the carousel
  type: string;
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:scale-[1.02] transition-transform duration-300">
      <div className="relative w-full h-60 bg-gray-100 flex items-center justify-center p-4">
        {/* Carousel Image */}
        <Image
          src={product.images[currentImageIndex]}
          alt={`${product.name} image ${currentImageIndex + 1}`}
          width={200}
          height={200}
          objectFit="contain"
          className="max-h-full max-w-full"
        />

        {/* Carousel Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors z-10"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors z-10"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Carousel Dots Indicator */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 flex space-x-1 z-10">
            {product.images.map((_, idx) => (
              <span
                key={idx}
                className={`block h-2 w-2 rounded-full ${idx === currentImageIndex ? 'bg-brand-orange' : 'bg-gray-400'
                  }`}
                aria-current={idx === currentImageIndex ? 'true' : 'false'}
                aria-label={`Go to image ${idx + 1}`}
              ></span>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-1">{product.category}</h3>
        <p className="text-lg text-gray-700 text-center mb-4 border-b border-gray-200 pb-4">{product.type}</p>

        <div className="flex-grow">
          <h4 className="text-sm font-semibold text-brand-orange mb-3">SPECIFICATIONS</h4>
          <div className="space-y-2">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between items-center text-gray-700 text-sm">
                <span className="font-medium text-gray-600">{spec.label}</span>
                <span className="text-right font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Products component
const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 'shisha-cube',
      category: 'Cube',
      name: 'Briquette for Shisha',
      images: ['/cube-shisha-1.webp', '/cube-shisha-2.webp'], // Example images
      type: 'Briquette for Shisha',
      specifications: [
        { label: 'Ash Content', value: '2,0% - 2,5%' },
        { label: 'Burning Time', value: '2 hours – 2,5 hours' },
        { label: 'Caloric Value', value: '7000 Kcal – 7500 Kcal' },
        { label: 'Moisture', value: '7% – 10%' },
        { label: 'Fixed Carbon', value: '70% – 85%' },
      ],
    },
    {
      id: 'bbq-cube',
      category: 'Cube',
      name: 'Briquette for BBQ',
      images: ['/cube-bbq-1.webp', '/cube-bbq-2.webp'], // Example images
      type: 'Briquette for BBQ',
      specifications: [
        { label: 'Ash Content', value: '7% – 8%' },
        { label: 'Burning Time', value: '5 hours – 6 hours' },
        { label: 'Caloric Value', value: '6400 Kcal – 8800 Kcal' },
        { label: 'Moisture', value: '4% – 7%' },
        { label: 'Fixed Carbon', value: '70% – 85%' },
      ],
    },
    // Add more products as needed
  ];

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;