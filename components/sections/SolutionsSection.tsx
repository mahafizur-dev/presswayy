"use client";

import type { Metadata } from "next";
import Image from "next/image";

// 💡 Next.js Tip: "use client" file-e metadata export kora jay na (build error asbe).
// Eita page.tsx ba layout.tsx (server component)-e rakhte hobe.
export const metadata: Metadata = {
  title: "Industry Solutions | Presswayy",
  description: "Tailored solutions for E-commerce, SaaS, Agencies, and more.",
};

export default function SolutionsSection() {
  const categories = [
    "Service Providers",
    "Hotels",
    "Resorts",
    "Restaurants",
    "Travel Agencies",
    "Event Managements",
    "E-Commerce",
  ];

  const hoverColors = [
    "hover:bg-[#FF4D2E]",
    "hover:bg-[#3B82F6]",
    "hover:bg-[#10B981]",
    "hover:bg-[#8B5CF6]",
    "hover:bg-[#EAB308]",
    "hover:bg-[#EC4899]",
    "hover:bg-[#06B6D4]",
  ];

  return (
    <div id="solutions" className="bg-white">
      <section className="pt-12 sm:pt-20 md:pt-24 pb-10 sm:pb-12 px-4 overflow-hidden relative">
        <div className="container mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6 sm:mb-6 relative z-10">
            <span className="bg-[#e4ffdb] text-[#00063D] px-4 sm:px-4 py-1.5 sm:py-1 text-[13px] sm:text-sm md:text-base font-medium font-sans rounded-sm">
              Solutions for every Business
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-semibold text-[#00063D] text-center mb-6 sm:mb-8 md:mb-10 relative z-10 tracking-tight md:tracking-[-3px] text-[32px] sm:text-[48px] md:text-[74px] leading-[1.2] md:leading-[1.1]"
            style={{
              fontFamily: '"Times New Roman", sans-serif',
            }}
          >
            Smart replies - Happy customers
            <br className="hidden sm:block" /> More sales.
          </h1>

          {/* Category buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-16 md:mb-20 max-w-4xl mx-auto relative z-10">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[14px] sm:text-sm font-medium rounded-md shadow-sm transition-all duration-300 ${
                  idx === 0
                    ? "bg-[#FF4D2E] text-white"
                    : `bg-[#e2e4e9] text-[#0a1435] ${hoverColors[idx % hoverColors.length]} hover:text-white hover:-translate-y-1 hover:shadow-md`
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          
          {/* <div className="w-full max-w-5xl mx-auto flex justify-center items-center px-4 sm:px-4 md:px-8">
            <Image
              src={
                "https://res.cloudinary.com/drchxbdit/image/upload/v1774606339/solution_wuwsem.png"
              }
              alt="Solution Presentation"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div> */}
        </div>
      </section>
    </div>
  );
}
