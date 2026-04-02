"use client";

import React from "react";

export default function LiveDemo() {
  const videoId = "uzvVlbFOCmc";

  return (
    <section className="bg-slate-50 py-20 md:py-28 px-4 sm:px-6 border-t border-gray-100">
      {" "}
      {/* 💡 Mobile py-8 -> py-20 and background changed to slate-50 */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-[30px] md:text-[48px] font-['Times_New_Roman',_sans-serif] font-bold text-[#00063D] leading-[1.2] md:leading-tight mb-4 tracking-tight">
            See Our Live Demo
          </h2>
          <div className="w-20 h-1 bg-[#FF5733] mx-auto mb-6 rounded-full"></div>{" "}
          {/* 💡 Added a small decorative line */}
          {/* Subheading */}
          <p className="text-[17px] md:text-[20px] text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed opacity-90">
            Discover how our AI-driven workflow can scale your business
            operations effortlessly.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-5xl mx-auto relative group px-2 sm:px-0">
          {/* 💡 Improved Glowing Shadow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5733]/20 to-indigo-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>

          {/* 💡 Video Frame with Floating Look */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl border-4 md:border-[12px] border-white ring-1 ring-slate-200 bg-black">
            {/* YouTube Embed Iframe */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`}
              title="Presswayy Live Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full object-cover"
            ></iframe>
          </div>

          {/* 💡 Optional: Simple Caption under video for mobile */}
          <p className="mt-6 text-slate-400 text-sm font-medium uppercase tracking-widest md:hidden">
            Tap to Play
          </p>
        </div>
      </div>
    </section>
  );
}
