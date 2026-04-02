"use client";

import React from "react";

export default function LiveDemo() {
 
  const videoId = "uzvVlbFOCmc"; 

  return (
    <section className="bg-white py-4 md:py-8 px-6 border-t border-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-[36px] font-['Times_New_Roman',_sans-serif] font-semibold text-[#00063D] leading-tight mb-4 tracking-tight">
          See Our Live Demo
        </h2>

        {/* Subheading */}
        <p className="text-[16px] md:text-[18px] text-[#324578] mb-12 font-sans font-medium opacity-90">
          See how easily your business can run smarter
        </p>

        {/* Video Player Container */}
        <div className="max-w-5xl mx-auto relative group">
          {/* Decorative background element */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative w-full aspect-video overflow-hidden  border-[6px] md:border-[10px] border-white ring-1 ring-gray-200">
            {/* YouTube Embed Iframe */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Presswayy Live Demo"
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
