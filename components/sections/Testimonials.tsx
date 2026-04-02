"use client";

import React, { useState } from "react";
// 💡 Added Navigation module here
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";


import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation"; // 💡 Added Navigation CSS

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const testimonials = [
    { id: "Mp-BLqapneQ", title: "Client Testimonial 1" },
    { id: "rhpAwRLvegQ", title: "Client Testimonial 2" },
    { id: "75qukJQbkHs", title: "Client Testimonial 3" },
    { id: "vb1KiuZuFnQ", title: "Client Testimonial 4" },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-12 md:py-28 px-4 md:px-8 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-['Times_New_Roman',_sans-serif] text-[28px] md:text-4xl lg:text-5xl font-bold text-[#00063D] mb-4 md:mb-5 tracking-tight leading-[1.2] md:leading-tight">
            What Our Clients Say About Presswayy
          </h2>
          <p className="text-slate-500 text-[16px] md:text-base lg:text-lg max-w-2xl mx-auto leading-[1.5] md:leading-relaxed px-2 md:px-0">
            Hear directly from our partners about how our AI solutions have
            accelerated their growth and transformed their workflow.
          </p>
        </div>

        {/* Videos Slider Container */}
        <div className="relative px-4 md:px-10">
          {" "}
          {/* 💡 Added horizontal padding for arrows */}
          <Swiper
            modules={[Pagination, Navigation]} // 💡 Added Navigation here
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true} // 💡 Enabled Arrows
            loop={false}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 2, // 💡 Mobile: 2 Columns
                spaceBetween: 12,
                centeredSlides: false,
              },
              480: {
                slidesPerView: 2, // 💡 Mobile landscape: 2 Columns
                spaceBetween: 16,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
                centeredSlides: false,
              },
            }}
            className="w-full pb-16 pt-4 testimonials-swiper"
          >
            {testimonials.map((video, index) => (
              <SwiperSlide key={index} className="flex justify-center pb-6">
                {/* 💡 Removed hover animations for a simple & clean UI */}
                <div className="w-full max-w-[280px] sm:max-w-[300px] mx-auto rounded-xl overflow-hidden bg-slate-900 relative shadow-md border border-slate-200 aspect-[9/16] cursor-pointer">
                  {activeVideo === video.id ? (
                    // 🎥 The actual iframe (Loads ONLY when clicked)
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full object-cover bg-black"
                    ></iframe>
                  ) : (
                    // 🖼️ The Thumbnail Cover
                    <div
                      className="absolute inset-0 w-full h-full"
                      onClick={() => setActiveVideo(video.id)}
                    >
                      {/* Thumbnail Image */}
                      <Image
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        fill 
                        className="object-cover opacity-90"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-black/20"></div>

                      {/* Clean Play Button (No animations) */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-sm">
                          <div className="w-8 h-8 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md">
                            <svg
                              className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5 md:ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .testimonials-swiper {
          padding-bottom: 50px !important; 
        }
        
        /* Pagination Styling */
        .testimonials-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #94a3b8;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background-color: #ff4e33 !important;
          opacity: 1;
          transform: scale(1.3);
        }

        /* 💡 Custom Clean Navigation Arrows */
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #00063D !important;
          background-color: white;
          width: 36px !important;
          height: 36px !important;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          top: 45% !important;
        }
        
        .testimonials-swiper .swiper-button-next:after,
        .testimonials-swiper .swiper-button-prev:after {
          font-size: 14px !important;
          font-weight: 800 !important;
        }

        /* Hide arrows on very small screens if they block too much, or keep them small */
        @media (max-width: 480px) {
          .testimonials-swiper .swiper-button-next,
          .testimonials-swiper .swiper-button-prev {
            width: 30px !important;
            height: 30px !important;
          }
          .testimonials-swiper .swiper-button-next:after,
          .testimonials-swiper .swiper-button-prev:after {
            font-size: 12px !important;
          }
          .testimonials-swiper .swiper-button-prev {
            left: -5px !important;
          }
          .testimonials-swiper .swiper-button-next {
            right: -5px !important;
          }
        }
      `}</style>
    </section>
  );
}
