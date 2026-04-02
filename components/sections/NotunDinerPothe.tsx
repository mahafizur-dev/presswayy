"use client";

import React from "react";

export default function NotunDinerPothe() {
  const videoId = "6VWH5GaXVm8";

  return (
    <section className="relative bg-white py-24 md:py-32 px-4 sm:px-6 border-t border-slate-50 overflow-hidden">
      {" "}
      {/* 💡 Mobile py-10 -> py-24 */}
      {/* Background Decorative Element (Optional) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-10 md:mb-16">
          <span className="inline-block text-[#FF5733] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Presswayy Presents
          </span>

          <h2 className="text-[32px] md:text-[56px] font-['Times_New_Roman',_sans-serif] font-bold text-[#00063D] leading-[1.1] md:leading-tight mb-6 tracking-tight">
            Bangladesh’s First <br className="hidden sm:block" /> Entrepreneur
            Anthem
          </h2>

          {/* Subheading */}
          <p className="text-[17px] md:text-[22px] text-slate-600 max-w-3xl mx-auto font-sans font-medium leading-relaxed opacity-90 px-2">
            Empowering Visionary Entrepreneurs to Lead, Innovate, and Shape the
            Future of Business in Bangladesh.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-5xl mx-auto relative group px-2 sm:px-0">
          {/* 💡 Ambient Glow Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#FF5733]/10 via-indigo-500/10 to-[#FF5733]/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div className="relative w-full aspect-video overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 md:border-[14px] border-white ring-1 ring-slate-100 bg-slate-50">
            {/* YouTube Embed Iframe */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Bangladesh's First Entrepreneur Anthem"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full object-cover"
            ></iframe>
          </div>

          {/* 💡 Decorative Text below Video */}
          <div className="mt-10 flex flex-col items-center justify-center space-y-2">
            <div className="w-12 h-0.5 bg-slate-200"></div>
            <p className="text-slate-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Notun Diner Pothe • নতুন দিনের পথে
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
