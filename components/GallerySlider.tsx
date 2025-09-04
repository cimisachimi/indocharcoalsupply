"use client";
import React, { useState, useEffect } from 'react'; // Import useEffect
import Image from 'next/image';

const images = [
  '/gallery/gallery1.webp',
  '/gallery/gallery2.webp',
  '/gallery/gallery3.webp',
  '/gallery/gallery4.webp',
  '/gallery/galerry5.webp', // Perhatikan typo 'galerry' sesuai nama file Anda
  '/gallery/gallery6.webp', // Pastikan file ini ada
];

const GallerySlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  // --- PERUBAHAN #1: Gunakan state untuk itemsPerPage ---
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // --- PERUBAHAN #2: useEffect untuk membuat slider responsif ---
  useEffect(() => {
    const handleResize = () => {
      // Tampilkan 1 gambar jika lebar layar < 768px (breakpoint 'md' Tailwind)
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    // Panggil sekali saat komponen dimuat
    handleResize();

    // Tambahkan event listener untuk memantau perubahan ukuran jendela
    window.addEventListener('resize', handleResize);

    // Cleanup: Hapus event listener saat komponen tidak lagi digunakan
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlideIndex = images.length > itemsPerPage ? images.length - itemsPerPage : 0;

  const prevSlide = () => {
    setCurrent(current === 0 ? maxSlideIndex : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === maxSlideIndex ? 0 : current + 1);
  };

  return (
    // --- PERUBAHAN #3: Latar belakang gelap ditambahkan ---
    <section className="bg-gray-900 w-full py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold text-brand-orange sm:text-4xl lg:text-5xl text-center mb-12">
          Company Gallery
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              // --- PERUBAHAN #4: Perhitungan translateX sekarang dinamis ---
              style={{ transform: `translateX(-${current * (100 / itemsPerPage)}%)` }}
            >
              {images.map((src, idx) => (
                <div
                  key={idx}
                  // Lebar item sekarang juga dinamis berdasarkan itemsPerPage
                  style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                  className="px-2"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={src}
                      alt={`Gallery image ${idx + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Navigasi */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 md:-left-5 -translate-y-1/2 z-10 grid h-10 w-10 md:h-12 md:w-12 place-content-center rounded-full bg-white/80 text-gray-700 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-105"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 md:-right-5 -translate-y-1/2 z-10 grid h-10 w-10 md:h-12 md:w-12 place-content-center rounded-full bg-white/80 text-gray-700 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-105"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indikator Titik */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: maxSlideIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-orange-500 scale-125' : 'bg-gray-400 hover:bg-gray-500'}`}
              aria-current={idx === current ? 'true' : 'false'}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;