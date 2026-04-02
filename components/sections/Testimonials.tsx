"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  // 💡 State to track which video is currently playing
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    { id: "Mp-BLqapneQ", title: "Client Testimonial 1" },
    { id: "rhpAwRLvegQ", title: "Client Testimonial 2" },
    { id: "75qukJQbkHs", title: "Client Testimonial 3" },
    { id: "vb1KiuZuFnQ", title: "Client Testimonial 4" },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 md:py-28 px-4 md:px-8 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-['Times_New_Roman',_sans-serif] text-3xl md:text-4xl lg:text-5xl font-bold text-[#00063D] mb-5 tracking-tight">
            What Our Clients Say About Presswayy
          </h2>
          <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Hear directly from our partners about how our AI solutions have
            accelerated their growth and transformed their workflow.
          </p>
        </div>

        {/* Videos Slider Container */}
        <div className="relative px-2 md:px-6">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={false} // Click-to-play এর ক্ষেত্রে loop=false রাখা ভালো
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1.15,
                centeredSlides: true,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1.5,
                centeredSlides: true,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                centeredSlides: false,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.5,
                centeredSlides: false,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 32,
              },
            }}
            className="w-full pb-16 pt-4 testimonials-swiper"
          >
            {testimonials.map((video, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center pb-8 pt-2 transition-transform"
              >
                <div className="w-full max-w-[280px] sm:max-w-[300px] mx-auto rounded-2xl overflow-hidden bg-slate-900 relative group transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-slate-200/80 aspect-[9/16] cursor-pointer">
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
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl bg-black"
                    ></iframe>
                  ) : (
                    // 🖼️ The Thumbnail Cover (Fast loading & Swipe friendly)
                    <div
                      className="absolute inset-0 w-full h-full"
                      onClick={() => setActiveVideo(video.id)}
                    >
                      {/* Thumbnail Image */}
                      <img
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                      />

                      {/* Dark Gradient Overlay for better UI */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                      {/* Custom Modern Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                            {/* SVG Play Icon */}
                            <svg
                              className="w-5 h-5 text-white ml-1"
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
          padding-bottom: 70px !important; 
        }
        .testimonials-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #94a3b8;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background-color: #ff4e33 !important;
          opacity: 1;
          transform: scale(1.4);
          box-shadow: 0 4px 10px rgba(255, 78, 51, 0.3);
        }
      `}</style>
    </section>
  );
}
