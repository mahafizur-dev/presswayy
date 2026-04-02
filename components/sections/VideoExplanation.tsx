"use client";

import React from "react";

export default function VideoExplanation() {
  const videoId = "btGLCgZlwCA";

  return (
    <section className="bg-white py-20 md:py-28 px-4 sm:px-6">
      {" "}
      {/* 💡 Mobile py-10 -> py-20 */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-[30px] md:text-[48px] font-['Times_New_Roman',_sans-serif] font-bold text-[#00063D] leading-[1.2] md:leading-tight mb-4 tracking-tight">
            Presswayy Explained Simply
          </h2>

          {/* Subheading */}
          <p className="text-[17px] md:text-[20px] text-slate-600 mb-0 font-sans font-medium leading-[1.5] md:leading-normal">
            We built Presswayy keeping{" "}
            <span className="font-bold text-[#FF5733]">you</span> in mind.
          </p>
        </div>

        {/* Video Container Area */}
        <div className="max-w-5xl mx-auto px-2 sm:px-0">
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border-[4px] md:border-[12px] border-white ring-1 ring-slate-100 bg-slate-50">
            {/* 💡 Video Player with subtle overlay to match branding */}
            <div className="absolute inset-0 bg-slate-900/5 pointer-events-none z-10"></div>

            {/* YouTube Embed Iframe */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
              title="Presswayy AI - How does it work"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full z-0"
            ></iframe>
          </div>

          {/* 💡 Optional: Mobile-only caption for extra spacing/context */}
          <div className="mt-8 md:hidden">
            <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
              How Presswayy Works
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
