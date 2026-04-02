"use client";

import React from "react";

export default function ConnectFeature() {
  return (
    <section className="bg-white py-10 md:py-20 lg:py-24 px-4 sm:px-8 flex flex-col items-center justify-center text-center">
      {/* Top Badge */}
      <div className="inline-block bg-[#ffece8] text-[#0d1c44] text-[14px] md:text-[14px] px-4 py-2 mb-6 md:mb-6 font-medium rounded-sm">
        Serves wide range of niches
      </div>

      {/* Main Heading */}
      <h2
        className="font-semibold text-[28px] sm:text-[42px] md:text-[52px] lg:text-[57px] leading-[1.2] md:leading-[1.1] tracking-[-0.5px] sm:tracking-[-2px] md:tracking-[-3px] text-[#00063D] mb-4 md:mb-6 max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto"
        style={{ fontFamily: '"Times New Roman", sans-serif' }}
      >
        Connects with your website, <span className="inline">landing page</span>{" "}
        <span className="inline md:block">&amp; database</span>
      </h2>

      {/* Subheading */}
      <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#1a2b5e] mb-8 md:mb-10 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-[1.5] md:leading-relaxed font-sans">
        Answers product queries, sends product photos and detects incoming
        screenshots that your customers send.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
        className="inline-block bg-[#ff4e33] text-white px-6 sm:px-8 py-3.5 sm:py-3.5 text-[16px] sm:text-[16px] font-medium hover:bg-[#e63e26] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 border-none cursor-pointer rounded w-full sm:w-auto max-w-xs sm:max-w-none"
      >
        Connect with Presswayy
      </button>
    </section>
  );
}
