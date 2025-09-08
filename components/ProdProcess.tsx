"use client";

import React, { useState } from "react";
import Image from "next/image";



const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
      stroke="currentColor"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const processSteps = [
  {
    id: "01",
    icon: "/prod-icon/mount.svg",
    title: "Sourcing and Selection",
    description:
      "We begin by sourcing the finest coconut shells from sustainable plantations. Carefully selected for quality and purity.",
  },
  {
    id: "02",
    icon: "/prod-icon/sun.svg",
    title: "Drying",
    description:
      "The coconut shells are dried to reduce moisture content, ensuring efficient carbonization and high-quality briquettes.",
  },
  {
    id: "03",
    icon: "/prod-icon/bike.svg",
    title: "Carbonization",
    description:
      "Shells are carbonized in kilns under controlled temperature and oxygen conditions, producing high-carbon charcoal.",
  },
  {
    id: "04",
    icon: "/prod-icon/double.svg",
    title: "Crushing and Screening",
    description:
      "Charcoal is crushed and screened to achieve uniform particle size, optimizing burning properties.",
  },
  {
    id: "05",
    icon: "/prod-icon/mix.svg",
    title: "Mixing and Binding",
    description:
      "The charcoal is mixed with natural binders like starch or clay to hold the briquettes together.",
  },
  {
    id: "06",
    icon: "/prod-icon/arrow.svg",
    title: "Molding and Pressing",
    description:
      "The blend is pressed into molds. Pressure determines the briquette’s density and durability.",
  },
  {
    id: "07",
    icon: "/prod-icon/sun 2.svg",
    title: "Final Drying",
    description:
      "The molded briquettes are dried again to remove residual moisture, ready for packaging.",
  },
  {
    id: "08",
    icon: "/prod-icon/shield.svg",
    title: "Quality Control",
    description:
      "Each batch undergoes strict quality checks: density, ash, moisture, and burn duration.",
  },
  {
    id: "09",
    icon: "/prod-icon/package.svg",
    title: "Packaging",
    description:
      "Finished briquettes are carefully packaged to protect them during transport and storage.",
  },
  {
    id: "10",
    icon: "/prod-icon/safe.svg",
    title: "Storage",
    description:
      "Briquettes should be stored in a dry, ventilated place away from direct sunlight and heat.",
  },
];

const ProductionProcess = () => {
  // State to manage which accordion item is open on mobile. Default to '01'.
  const [openStep, setOpenStep] = useState<string | null>("01");

  const toggleStep = (id: string) => {
    // If the clicked step is already open, close it. Otherwise, open it.
    setOpenStep(openStep === id ? null : id);
  };

  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          PRODUCTION PROCESS
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our coconut charcoal briquettes are crafted through a meticulous
          process that ensures the highest quality and sustainability. Here’s a
          breakdown of our production steps:
        </p>

        {/* =============================================================== */}
        {/* Mobile View: Accordion (visible below lg breakpoint)            */}
        {/* =============================================================== */}
        <div className="lg:hidden space-y-3">
          {processSteps.map((step) => (
            <div key={step.id} className="rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleStep(step.id)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-orange-100">
                    <Image
                      src={step.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="filter invert-[39%] sepia-[98%] saturate-[2976%] hue-rotate-[359deg] brightness-[97%] contrast-[101%]"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">{step.title}</h3>
                </div>
                <ChevronDownIcon
                  className={`w-6 h-6 text-orange-500 transition-transform duration-300 ${openStep === step.id ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openStep === step.id ? "max-h-48" : "max-h-0"
                  }`}
              >
                <div className="px-4 pb-4 pt-2">
                  <p className="text-sm text-gray-600 text-left">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =============================================================== */}
        {/* Desktop View: Enhanced Grid (hidden below lg breakpoint)       */}
        {/* =============================================================== */}
        <div className="hidden lg:grid gap-x-6 gap-y-16 lg:grid-cols-5">
          {processSteps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center pt-8">
              {/* Step number, styled to clearly show order */}
              <div className="absolute top-0 flex items-center justify-center w-16 h-16 bg-white border-2 border-orange-200 text-orange-500 font-extrabold text-2xl rounded-full">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-100 mb-4">
                <Image
                  src={step.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="filter invert-[39%] sepia-[98%] saturate-[2976%] hue-rotate-[359deg] brightness-[97%] contrast-[101%]"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;