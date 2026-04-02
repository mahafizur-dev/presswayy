"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const testimonials = [
    { id: "Mp-BLqapneQ", title: "Client Testimonial 1" },
    { id: "rhpAwRLvegQ", title: "Client Testimonial 2" },
    { id: "75qukJQbkHs", title: "Client Testimonial 3" },
    { id: "vb1KiuZuFnQ", title: "Client Testimonial 4" },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-10 md:py-28 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-0 md:px-4">
        {" "}
        {/* Mobile-এ সাইড প্যাডিং ০ যাতে সোয়াইপ ফিল ভালো আসে */}
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-16 px-4">
          <h2 className="font-serif text-[28px] md:text-4xl lg:text-5xl font-bold text-[#00063D] mb-3 tracking-tight leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Hear directly from our partners about how our AI solutions have
            transformed their workflow.
          </p>
        </div>
        {/* Videos Slider Container */}
        <div className="relative md:px-10">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={false}
            grabCursor={true}
            centeredSlides={true} // Mobile-এ কার্ড মাঝখানে থাকবে
            breakpoints={{
              // Mobile View (Optimized)
              320: {
                slidesPerView: 1.3, // পরের স্লাইডটা একটু বেশি দেখা যাবে
                spaceBetween: 12, // মোবাইলে গ্যাপ একটু কমানো হয়েছে
              },
              // Tablet
              768: {
                slidesPerView: 2.5,
                spaceBetween: 24,
                centeredSlides: false,
              },
              // Desktop
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
                centeredSlides: false,
              },
            }}
            className="testimonials-swiper !pb-14 !px-4 md:!px-0"
          >
            {testimonials.map((video, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div
                  className="w-full rounded-2xl overflow-hidden bg-black relative shadow-lg border border-slate-200 aspect-[9/16] cursor-pointer group transition-all duration-300"
                  onClick={() => setActiveVideo(video.id)}
                >
                  {activeVideo === video.id ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    ></iframe>
                  ) : (
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
                      {/* Dynamic Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Dark Overlay for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Play Button Overlay - Optimized for Touch */}
                      <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl transition-all group-active:scale-95 md:group-hover:scale-110">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ff4e33] rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Client Label */}
                      <div className="absolute bottom-6 left-0 right-0 text-center px-3 z-10">
                        <p className="text-white font-medium text-xs md:text-sm tracking-wide uppercase drop-shadow-lg">
                          {video.title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        /* Hide arrows on mobile */
        @media (max-width: 1023px) {
          .testimonials-swiper .swiper-button-next,
          .testimonials-swiper .swiper-button-prev {
            display: none !important;
          }
        }

        .testimonials-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background-color: #cbd5e1;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          background-color: #ff4e33 !important;
          width: 18px;
          border-radius: 4px;
          opacity: 1;
        }

        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #00063d !important;
          background-color: white;
          width: 44px !important;
          height: 44px !important;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .testimonials-swiper .swiper-button-next:after,
        .testimonials-swiper .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
