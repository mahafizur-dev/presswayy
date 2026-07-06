"use client";

import React, { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const bannerText =
    "Created specifically for the average Bangladeshi business with 100% locally inspired tone and customer psychology in mind. →";

  return (
    <section
      ref={containerRef}
      className="relative bg-white mt-20 md:mt-24 py-12 md:py-16 min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        ref={textRef}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 text-center"
      >
        {/* Top Text Banner */}
        <div className="inline-block bg-white px-4 py-2 mb-6 md:mb-8 text-[13px] md:text-[14px] text-[#00063D] font-medium leading-relaxed max-w-[600px] rounded shadow-sm border border-gray-200">
          {bannerText}
        </div>

        {/* Main Heading */}
        <h1
          className="text-[32px] md:text-5xl lg:text-[60px] text-[#00063D] font-bold leading-[1.2] md:leading-[1.1] tracking-tight mb-5 md:mb-6"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Your business inbox, empowered
          <br className="hidden md:block" /> & automated with AI
        </h1>

        {/* Subheading */}
        <p className="text-[16px] md:text-[18px] text-[#00063D] mb-8 md:mb-10 max-w-2xl font-sans font-medium opacity-80 leading-[1.5] md:leading-normal">
          Works with Facebook pages, Instagram pages & soon with WhatsApp.
        </p>

        {/* CTA Button */}
        <div className="mb-12 md:mb-16 relative z-10 w-full sm:w-auto px-2 sm:px-0">
          <button
            onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
            className="inline-block w-full sm:w-auto bg-[#ff4e33] text-white px-6 md:px-8 py-3.5 text-[16px] font-medium hover:bg-[#e63e26] transition-colors duration-300 rounded shadow-md hover:shadow-lg"
          >
            Connect with Presswayy
          </button>
        </div>
      </div>
    </section>
  );
}
