"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Overview {
  shape: string;
  size: string;
  quality: string;
  features: string;
  customization: string;
}
interface Specification {
  label: string;
  min: string;
  max: string;
}
interface Product {
  id: string;
  type: string;
  images: { src: string; name: string }[];
  overview: Overview;
  specifications?: Specification[];
}

const ToggleSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg font-medium text-gray-800 hover:bg-gray-200"
      >
        {title}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="mt-2 p-2 bg-gray-50 rounded-lg">{children}</div>}
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Unique navigation class for each card
  const navPrev = `swiper-prev-${product.id}`;
  const navNext = `swiper-next-${product.id}`;
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col p-6 border border-gray-100 h-full"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      <div className="w-full h-56 mb-4 relative">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation={{
            nextEl: `.${navNext}`,
            prevEl: `.${navPrev}`,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop
          className="h-full rounded-xl overflow-hidden"
        >
          {product.images.map((shape, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-center h-56 bg-gray-50 relative">
                <img
                  src={shape.src}
                  alt={shape.name}
                  className="h-40 object-contain"
                />
                <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  {shape.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div
            className={`${navPrev} absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer bg-white/80 hover:bg-brand-orange text-brand-orange hover:text-white rounded-full w-8 h-8 shadow transition`}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-4-4 4-4" /></svg>
          </div>
          <div
            className={`${navNext} absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer bg-white/80 hover:bg-brand-orange text-brand-orange hover:text-white rounded-full w-8 h-8 shadow transition`}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4-4 4" /></svg>
          </div>
        </Swiper>
      </div>
      <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
        {product.type}
      </h3>
      <ToggleSection title="Overview">
        <ul className="space-y-1 text-sm text-gray-700">
          <li className="flex justify-between">
            <span className="font-medium">Size</span>
            <span>{product.overview.size}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Quality</span>
            <span>{product.overview.quality}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Key Features</span>
            <span className="text-right">{product.overview.features}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Customization</span>
            <span className="text-right">{product.overview.customization}</span>
          </li>
        </ul>
      </ToggleSection>
      {product.specifications && product.specifications.length > 0 && (
        <ToggleSection title="Technical Specifications">
          <table className="w-full text-xs text-left border border-gray-200">
            <thead className="bg-brand-orange text-white">
              <tr>
                <th className="px-2 py-1">Specification</th>
                <th className="px-2 py-1">Min</th>
                <th className="px-2 py-1">Max</th>
              </tr>
            </thead>
            <tbody>
              {product.specifications.map((spec, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-2 py-1 text-gray-800">{spec.label}</td>
                  <td className="px-2 py-1 text-gray-600">{spec.min}</td>
                  <td className="px-2 py-1 text-gray-600">{spec.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ToggleSection>
      )}
    </motion.div>
  );
};

const products: Product[] = [
  {
    id: "standard",
    type: "Standard Coconut Charcoal Briquettes",
    images: [
      { src: "/coal-shape/dome.webp", name: "Dome" },
      { src: "/coal-shape/cube.webp", name: "Cube" },
      { src: "/coal-shape/hexa.webp", name: "Hexa" },
      { src: "/coal-shape/flat.webp", name: "Flat" },
    ],
    overview: {
      shape: "Various",
      size: "Various sizes",
      quality: "Standard",
      features: "Consistent quality, affordable",
      customization: "Size, packaging, labeling",
    },
  },
  {
    id: "premium",
    type: "Premium Coconut Charcoal Briquettes",
    images: [
      { src: "/coal-shape/dome.webp", name: "Dome" },
      { src: "/coal-shape/cube.webp", name: "Cube" },
      { src: "/coal-shape/hexa.webp", name: "Hexa" },
      { src: "/coal-shape/flat.webp", name: "Flat" },
    ],
    overview: {
      shape: "Various",
      size: "Various sizes",
      quality: "High quality",
      features: "Long burn time, low ash, consistent heat",
      customization: "Size, shape, packaging, branding",
    },
  },
  {
    id: "bbq",
    type: "Barbeque Coconut Charcoal Briquettes",
    images: [
      { src: "/coal-shape/dome.webp", name: "Dome" },
      { src: "/coal-shape/octa.webp", name: "Octa" },
      { src: "/coal-shape/finger.webp", name: "Finger" },
    ],
    overview: {
      shape: "Various",
      size: "Various sizes",
      quality: "High quality",
      features: "No chemicals, environmentally friendly",
      customization: "Size, packaging, certification (e.g., USDA Organic)",
    },
    specifications: [
      { label: "Ash Content", min: "7%", max: "8%" },
      { label: "Burning Time", min: "5 Hours", max: "6 Hours" },
      { label: "Caloric Value", min: "6400 Kcal", max: "8800 Kcal" },
      { label: "Moisture", min: "4%", max: "7%" },
    ],
  },
  {
    id: "shisha",
    type: "Shisha Coconut Charcoal Briquettes",
    images: [
      { src: "/coal-shape/dome.webp", name: "Dome" },
      { src: "/coal-shape/cube.webp", name: "Cube" },
      { src: "/coal-shape/cloud.webp", name: "Cloud" },
    ],
    overview: {
      shape: "Various",
      size: "Various sizes",
      quality: "High quality",
      features: "Smooth smoke, pure flavor",
      customization: "Size, packaging, flavor additives",
    },
    specifications: [
      { label: "Ash Content", min: "2.0%", max: "2.5%" },
      { label: "Burning Time", min: "2 Hours", max: "2.5 Hours" },
      { label: "Caloric Value", min: "7000 Kcal", max: "7500 Kcal" },
      { label: "Moisture", min: "7%", max: "10%" },
      { label: "Fixed Carbon", min: "70%", max: "85%" },
    ],
  },
];

const Products: React.FC = () => {
  const t = useTranslations('product');
  return (
    <section className="bg-gray-50 py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-brand-orange sm:text-4xl lg:text-5xl mb-10 text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Customization Footer Banner - NEW DESIGN */}
        <div className="mt-24 w-full max-w-5xl mx-auto">
          <div className="bg-zinc-800 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white text-center md:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  {t('customTitle')}
                </h3>
                <p className="text-white/80 max-w-lg">
                  {t('customDescription')}
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <a
                  href="#contact"
                  className="inline-block bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-opacity duration-300"
                >
                  {t('customButton')}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;