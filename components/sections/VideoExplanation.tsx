"use client";

import React from "react";

export default function VideoExplanation() {
  const videoId = "btGLCgZlwCA";

  return (
    <section className="bg-white py-10 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-[28px] md:text-[36px] font-['Times_New_Roman',_sans-serif] font-semibold text-[#00063D] leading-[1.2] md:leading-tight mb-3 md:mb-4 tracking-tight">
          Presswayy Explained Simply
        </h2>

        {/* Subheading */}
        <p className="text-[16px] md:text-[18px] text-[#324578] mb-8 md:mb-12 font-sans font-medium leading-[1.5] md:leading-normal">
          We built Presswayy keeping{" "}
          <span className="font-bold text-[#0d1c44]">you</span> in mind.
        </p>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-video overflow-hidden rounded-xl md:rounded-none border-[4px] md:border-[10px] border-white ring-1 ring-gray-200 bg-gray-100">
            {/* YouTube Embed Iframe */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
              title="Presswayy AI - How does it work"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
