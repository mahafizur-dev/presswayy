"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const bannerText =
    "Created specifically for the average Bangladeshi business with 100% locally inspired tone and customer psychology in mind. →";

  const carouselImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606338/hero-collage_qygpgd.jpg",
      alt: "Presswayy Dashboard View 1",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606338/hero-collage-four_umftjb.jpg",
      alt: "Presswayy Dashboard View 2",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606336/hero-collage-two_ubprbi.jpg",
      alt: "Presswayy Analytics View",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606336/hero-collage-three_byuhok.jpg",
      alt: "Presswayy Inbox View",
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        textRef.current!.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.2 },
      );

      tl.fromTo(
        carouselRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-[#F2F2F3] pt-28 md:pt-36 lg:pt-40 pb-16 min-h-screen flex flex-col items-center overflow-hidden"
    >
      <div
        ref={textRef}
        className="max-w-4xl mx-auto flex flex-col items-center px-6 md:px-8 text-center"
      >
        {/* Top Text Banner */}
        <div className="inline-block bg-white px-4 py-2 mb-8 text-[12px] md:text-[13px] text-[#0d1c44] font-medium leading-relaxed max-w-[550px] rounded-sm shadow-sm border border-gray-100">
          {bannerText}
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-[60px] text-[#00063D] font-semibold leading-[1.1] tracking-tight mb-6"
          style={{ fontFamily: '"Times New Roman", Times, serif' }} // Fallback fonts added
        >
          Your business inbox, empowered
          <br className="hidden md:block" /> & automated with AI
        </h1>

        {/* Subheading */}
        <p className="text-[17px] md:text-[18px] text-[#0d1c44] mb-10 max-w-2xl font-sans font-medium opacity-80">
          Works with Facebook pages, Instagram pages & soon with WhatsApp.
        </p>

        {/* CTA Button */}
        <div className="mb-16 relative z-10">
          <button
            onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
            className="inline-block bg-[#ff4e33] text-white px-8 py-3.5 text-[16px] font-medium hover:bg-[#e63e26] transition-colors duration-300 rounded shadow-md hover:shadow-lg"
          >
            Connect with Presswayy
          </button>
        </div>
      </div>

      <div ref={carouselRef} className="w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200/50 bg-white">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full aspect-[4/3] md:aspect-[16/9] lg:h-[600px]"
          >
            {carouselImages.map((image) => (
              <SwiperSlide key={image.id} className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="object-cover object-center"
                  priority={image.id === 1} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
