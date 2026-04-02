"use client";

import React, { useState, useEffect } from "react";

const animatedWords = [
  "Customer Support",
  "Product Suggestions",
  "Order Collection",
  "Courier Tracking",
];

export default function Platform() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % animatedWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="platform"
      className="sm:min-h-screen bg-[#f5f6f8] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 font-sans overflow-hidden py-8 sm:py-20"
    >
      <style>{`
        @keyframes slideFade {
          0%   { opacity: 0; transform: translateY(30px) rotateX(-20deg); }
          10%, 90% { opacity: 1; transform: translateY(0) rotateX(0deg); }
          100% { opacity: 0; transform: translateY(-30px) rotateX(20deg); }
        }
        .animate-word {
          display: inline-block;
          animation: slideFade 2.8s ease-in-out forwards;
        }
        .font-serif-custom {
          font-family: "Times New Roman", sans-serif;
        }
      `}</style>

      <div className="w-full max-w-[1300px] mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-6 sm:mb-8 px-4 py-1.5 bg-white text-[#0a1128] text-[13px] sm:text-sm md:text-base font-medium rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 tracking-wide">
          Presswayy Platform
        </div>

        {/* Headline */}
        <h1
          className="font-serif-custom text-center font-semibold text-[#0a1128] tracking-tight leading-[1.3] w-full px-2
          text-[28px] sm:text-[38px] md:text-[50px] lg:text-[60px]"
        >
          {/* Desktop: 3 explicit lines */}
          <span className="hidden md:block">
            Presswayy is the AI platform that helps you
          </span>
          <span className="hidden md:flex md:items-center md:justify-center md:gap-3">
            <span>automate</span>
            <span
              className="relative inline-flex justify-center text-[#ff5a36] items-center"
              style={{ height: "1.25em", minWidth: "max-content" }}
            >
              <span key={index} className="animate-word">
                {animatedWords[index]}
              </span>
            </span>
            <span>and more,</span>
          </span>
          <span className="hidden md:block">all without hiring.</span>

          {/* Mobile: single flow */}
          <span className="md:hidden">
            Presswayy is the AI platform that helps you automate{" "}
            <span
              className="inline-flex relative justify-center text-[#ff5a36] mx-1 items-center align-middle"
              style={{ height: "1.25em" }}
            >
              <span
                key={`m-${index}`}
                className="animate-word absolute whitespace-nowrap"
              >
                {animatedWords[index]}
              </span>
              <span className="invisible pointer-events-none whitespace-nowrap">
                Product Suggestions
              </span>
            </span>{" "}
            and more, all without hiring.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 sm:mt-8 text-[14px] sm:text-base md:text-lg lg:text-xl text-[#1e293b] max-w-xs sm:max-w-xl md:max-w-2xl font-medium leading-relaxed px-2">
          Scale faster, support smarter, and automate everything from first
          message to final sale with Presswayy all-in-one AI platform.
        </p>

        <button
          onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
          className="mt-8 sm:mt-10 px-7 sm:px-8 py-3 sm:py-3.5 bg-[#ff5a36] hover:bg-[#e84d2b] text-white text-[14px] sm:text-base md:text-lg font-semibold rounded-[2px] shadow-lg shadow-[#ff5a36]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#ff5a36]/40 focus:outline-none focus:ring-2 focus:ring-[#ff5a36] focus:ring-offset-2 focus:ring-offset-[#f5f6f8] border-none cursor-pointer w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          Connect with Presswayy
        </button>
      </div>
    </div>
  );
}
