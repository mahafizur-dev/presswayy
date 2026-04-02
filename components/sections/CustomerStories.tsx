"use client";

import React from "react";
import Image from "next/image";

export default function CustomerStories() {
  return (
    <section className="bg-white py-12 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center mb-12 md:mb-20">
        {/* Yellow Badge */}
        <div className="inline-block bg-[#fff9ce] text-[#0d1c44] text-[11px] md:text-[12px] px-3 py-1.5 md:py-1 mb-6 md:mb-8 font-medium rounded-sm uppercase tracking-wider">
          Customer Stories
        </div>

        <h2 className="font-['Times_New_Roman',_sans-serif] text-[32px] md:text-[72px] font-semibold leading-[1.2] md:leading-[71px] tracking-[-1px] md:tracking-[-3px] text-[#00063D] mb-8 md:mb-12 max-w-5xl mx-auto">
          Our clients don&apos;t just use it, <br className="hidden md:block" />
          they <span className="italic">rely</span> on it.
        </h2>

        {/* CTA Button Updated */}
        <div className="relative z-10 mb-12 md:mb-20">
          <button
            onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
            className="inline-block bg-[#ff4e33] text-white px-6 md:px-10 py-3.5 md:py-4 text-[16px] md:text-[17px] font-semibold hover:bg-[#e63e26] transition-all duration-300 rounded-sm shadow-md hover:shadow-xl hover:-translate-y-1 border-none cursor-pointer"
          >
            Connect With Presswayy
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
        {/* Grid 1: Lever n Gear */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#ecfce5] p-6 md:p-8 flex flex-col min-h-[320px]">
            {/* Card Heading */}
            <h3 className="font-['Times_New_Roman',_sans-serif] text-[24px] md:text-[32px] font-semibold text-[#103A00] mb-3 md:mb-4">
              10,000+
            </h3>
            <div className="w-full h-[1px] bg-[#0d1c44]/10 mb-5 md:mb-6"></div>
            <p className="text-[15px] md:text-[15px] text-[#0d1c44] leading-[1.5] md:leading-relaxed font-sans font-medium">
              <span className="font-bold">Hours manually save</span> <br />
              Customer queries don not wait and neither does this bot. It
              responds, qualifies leads, and keeps our inbox clean. Seamless,
              smart, and worth every penny.
            </p>
          </div>
          <div className="bg-[#e5f3ff] p-6 md:p-8 flex flex-col min-h-[320px]">
            {/* Card Heading */}
            <h3 className="font-['Times_New_Roman',_sans-serif] text-[24px] md:text-[32px] font-semibold text-[#103A00] mb-3 md:mb-4 leading-none">
              Compliant,
            </h3>
            <div className="w-full h-[1px] bg-[#0d1c44]/10 mb-5 md:mb-6"></div>
            <p className="text-[15px] md:text-[15px] text-[#0d1c44] leading-[1.5] md:leading-relaxed font-sans font-medium">
              Scalable, high-quality localized marketing content Presswayy
              ensures every piece of marketing content is brand-aligned,
              quality-checked, and tailored for local audiences consistently and
              at scale.
            </p>
          </div>
          <div className="relative min-h-[320px] rounded-sm overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/drchxbdit/image/upload/v1774698780/admin_q8rq9m.jpg"
              alt="Urmee Helal"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c44]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 text-white text-left">
              <p className="text-[16px] md:text-[16px] font-bold">
                Urmee Helal
              </p>
              <p className="text-[12px] opacity-80 uppercase tracking-wide">
                General Manager, LEVERnGEAR Ltd.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 flex flex-col justify-between min-h-[320px] border border-gray-100 shadow-sm">
            <p className="text-[15px] md:text-[15px] text-[#0d1c44] leading-[1.5] md:leading-relaxed font-sans font-medium">
              Customer queries don not wait and neither does this smart AI. It
              responds, qualifies leads, and keeps our inbox clean. Seamless,
              smart, and worth every penny.
            </p>
            <div className="mt-8 relative h-8 w-full">
              <Image
                src="https://res.cloudinary.com/drchxbdit/image/upload/v1774606337/lng_vtgxm5.jpg"
                alt="Lever n Gear"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Grid 2: BizStori Canada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative min-h-[320px] rounded-sm overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/drchxbdit/image/upload/v1774698780/safin_cptsor.jpg"
              alt="Ibrahim K. Shafin"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c44]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 text-white text-left">
              <p className="text-[16px] md:text-[16px] font-bold">
                Ibrahim K. Shafin
              </p>
              <p className="text-[12px] opacity-80 uppercase tracking-wide">
                CEO, BizStori Canada
              </p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 flex flex-col justify-between min-h-[320px] border border-gray-100 shadow-sm">
            <p className="text-[15px] md:text-[15px] text-[#0d1c44] leading-[1.5] md:leading-relaxed font-sans font-medium">
              Presswayy AI replies instantly to customer messages, answers
              product questions, and collects orders. Since using it, our
              response time improved and sales increased by over 35%.
            </p>
            <div className="mt-8 relative h-10 w-full">
              <Image
                src="https://res.cloudinary.com/drchxbdit/image/upload/v1774608210/biztori_u3tppv.png"
                alt="BizStori Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
          <div className="bg-[#fceef5] p-6 md:p-8 flex flex-col min-h-[320px]">
            {/* Card Heading */}
            <h3 className="font-['Times_New_Roman',_sans-serif] text-[24px] md:text-[32px] font-semibold text-[#103A00] mb-3 md:mb-4">
              Lead Recovery
            </h3>
            <div className="w-full h-[1px] bg-[#5c112e]/10 mb-5 md:mb-6"></div>
            <p className="text-[15px] md:text-[15px] text-[#5c112e] leading-[1.5] md:leading-relaxed font-sans font-medium">
              They no longer lose potential customers because their system
              responds instantly to every message even during weekends,
              holidays, or after working hours. This ensures every interested
              customer feels heard and engaged, increasing trust and sales.
            </p>
          </div>
          <div className="bg-[#fff9ce] p-6 md:p-8 flex flex-col min-h-[320px]">
            {/* Card Heading */}
            <h3 className="font-['Times_New_Roman',_sans-serif] text-[24px] md:text-[32px] font-semibold text-[#103A00] mb-3 md:mb-4">
              Boost Teamwork
            </h3>
            <div className="w-full h-[1px] bg-[#0d1c44]/10 mb-5 md:mb-6"></div>
            <p className="text-[15px] md:text-[15px] text-[#0d1c44] leading-[1.5] md:leading-relaxed font-sans font-medium">
              Their sales team can now fully concentrate on converting leads
              into paying customers because the chatbot automatically takes care
              of all the repetitive, time-consuming inquiries like FAQs, price
              questions, and availability checks.
            </p>
          </div>
        </div>

        {/* Grid 3: The Marvel- Be You */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#ecfce5] p-6 md:p-8 flex flex-col min-h-[320px]">
            {/* Card Heading */}
            <h3 className="font-['Times_New_Roman',_sans-serif] text-[24px] md:text-[32px] font-semibold text-[#103A00] mb-3 md:mb-4">
              Time-to-market
            </h3>
            <div className="w-full h-[1px] bg-[#14532d]/10 mb-5 md:mb-6"></div>
            <p className="text-[15px] md:text-[15px] text-[#14532d] leading-[1.5] md:leading-relaxed font-sans font-medium">
              Faster end-to-end campaigns From idea to execution, Presswayy
              speeds up the full campaign cycle reducing delays and launching
              marketing faster than ever.
            </p>
          </div>
          <div className="bg-[#e5f3ff] p-6 md:p-8 flex flex-col min-h-[320px]">
            {/* Card Heading */}
            <h3 className="font-['Times_New_Roman',_sans-serif] text-[24px] md:text-[32px] font-semibold text-[#103A00] mb-3 md:mb-4">
              3x
            </h3>
            <div className="w-full h-[1px] bg-[#1e3a8a]/10 mb-5 md:mb-6"></div>
            <p className="text-[15px] md:text-[15px] text-[#1e3a8a] leading-[1.5] md:leading-relaxed font-sans font-medium">
              With AI-generated content and automation, teams are producing 3x
              more output faster, error-free, and fully on-brand.
            </p>
          </div>
          <div className="relative min-h-[320px] rounded-sm overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/drchxbdit/image/upload/v1774698780/mejabin_llb7lu.jpg"
              alt="Mahzabin Ferdous"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c44]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 text-white text-left">
              <p className="text-[16px] md:text-[16px] font-bold">
                Mahzabin Ferdous
              </p>
              <p className="text-[12px] opacity-80 uppercase tracking-wide">
                Co-Founder, The Marvel- Be You
              </p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 flex flex-col justify-between min-h-[320px] border border-gray-100 shadow-sm">
            <p className="text-[15px] md:text-[15px] text-[#0d1c44] leading-[1.5] md:leading-relaxed font-sans font-medium">
              Presswayy AI instantly handles queries, saves hours, and keeps our
              influencer pages active 24/7 a true game-changer!
            </p>
            <div className="mt-8 relative h-8 w-full">
              <Image
                src="https://res.cloudinary.com/drchxbdit/image/upload/v1774606337/marvel_ydxsid.jpg"
                alt="The Marvel Logo"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Grid 4: Goodybro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative min-h-[320px] rounded-sm overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/drchxbdit/image/upload/v1774698780/habnf_hw8sdg.jpg"
              alt="Ahnaf T. Rahman"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c44]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 text-white text-left">
              <p className="text-[16px] md:text-[16px] font-bold">
                Ahnaf T. Rahman
              </p>
              <p className="text-[12px] opacity-80 uppercase tracking-wide">
                CEO, Goodybro
              </p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 flex flex-col justify-between min-h-[320px] border border-gray-100 shadow-sm">
            <p className="text-[15px] md:text-[15px] text-[#0d1c44] leading-[1.5] md:leading-relaxed font-sans font-medium">
              Presswayy AI helped us reduce missed messages and boosted orders
              by 35%. It responds instantly to queries on size, price, and
              delivery. Now, our team can focus on fulfillment while the bot
              works 24/7.
            </p>
            <div className="mt-8 relative h-8 w-full">
              <Image
                src="https://res.cloudinary.com/drchxbdit/image/upload/v1774606337/goody_vxedtv.jpg"
                alt="Goodybro Logo"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
          <div className="bg-[#fceef5] p-6 md:p-8 flex flex-col min-h-[320px]">
            {/* Card Heading */}
            <h3 className="font-['Times_New_Roman',_sans-serif] text-[24px] md:text-[32px] font-semibold text-[#103A00] mb-3 md:mb-4">
              60%
            </h3>
            <div className="w-full h-[1px] bg-[#5c112e]/10 mb-5 md:mb-6"></div>
            <p className="text-[15px] md:text-[15px] text-[#5c112e] leading-[1.5] md:leading-relaxed font-sans font-medium">
              Of SEO now automated with Presswayy from blog outlines to meta
              descriptions, Presswayy now handles 60% of the brand SEO tasks
              cutting manual effort & boosting content velocity.
            </p>
          </div>
          <div className="bg-[#fff9ce] p-6 md:p-8 flex flex-col min-h-[320px]">
            {/* Card Heading */}
            <h3 className="font-['Times_New_Roman',_sans-serif] text-[24px] md:text-[32px] font-semibold text-[#103A00] mb-3 md:mb-4">
              7,500
            </h3>
            <div className="w-full h-[1px] bg-[#0d1c44]/10 mb-5 md:mb-6"></div>
            <p className="text-[15px] md:text-[15px] text-[#0d1c44] leading-[1.5] md:leading-relaxed font-sans font-medium">
              Product descriptions written by presswayy in 24 hours With
              AI-powered bulk generation, Presswayy delivered 7,500 optimized
              product descriptions in a single day faster than any human team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
