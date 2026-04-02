"use client";

import React from "react";
// Swiper React components & CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // 💡 Autoplay মডিউল যোগ করা হয়েছে
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      id: "Mp-BLqapneQ",
      title: "Client Testimonial 1",
    },
    {
      id: "rhpAwRLvegQ",
      title: "Client Testimonial 2",
    },
    {
      id: "75qukJQbkHs",
      title: "Client Testimonial 3",
    },
    {
      id: "vb1KiuZuFnQ",
      title: "Client Testimonial 4",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28 px-4 md:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-['Times_New_Roman',_sans-serif] text-3xl md:text-[40px] font-bold text-[#00063D] mb-4">
            What Our Clients Say About Presswayy
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Hear directly from our partners about how our AI solutions have
            accelerated their growth and transformed their workflow.
          </p>
        </div>

        {/* Videos Slider Container */}
        <div className="max-w-[1200px] mx-auto relative px-2 md:px-4">
          <Swiper
            modules={[Pagination, Autoplay]} // 💡 Autoplay মডিউল এখানে অ্যাড করা হয়েছে
            spaceBetween={20}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            // 🚀 Autoplay Configuration
            autoplay={{
              delay: 3500, // ৩.৫ সেকেন্ড পর পর স্লাইড চেঞ্জ হবে
              disableOnInteraction: false, // ইউজার টাচ করার পরও অটো-প্লে বন্ধ হবে না
              pauseOnMouseEnter: true, // মাউস উপরে রাখলে পজ হয়ে থাকবে (ইউজার ভিডিও দেখার সুবিধার জন্য)
            }}
            loop={true} // অটো-স্লাইড নিরবচ্ছিন্ন রাখতে লুপ অন করা হয়েছে
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                centeredSlides: true,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2.2,
                centeredSlides: false,
                spaceBetween: 20,
              },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full pb-14 testimonials-swiper"
          >
            {testimonials.map((video, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center pb-4 pt-2"
              >
                <div
                  className="w-full max-w-[280px] mx-auto rounded-xl overflow-hidden bg-gray-200 relative group transition-all duration-300 shadow-md hover:shadow-xl border border-gray-300"
                  style={{ aspectRatio: "9/16" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse -z-10 flex items-center justify-center">
                    <span className="text-gray-500 text-sm font-medium">
                      Loading...
                    </span>
                  </div>

                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&controls=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .testimonials-swiper {
          padding-bottom: 60px !important; 
          padding-top: 10px !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #cbd5e1;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background-color: #ff4e33 !important;
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}
