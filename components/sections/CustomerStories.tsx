"use client";

import React from "react";
import Image from "next/image";
// Make sure this path correctly points to your types file
import {
  CardData,
  ProfileCardProps,
  TestimonialCardProps,
  StatCardProps,
} from "@/types";

// ==========================================
// DATA: Flattened for a single, continuous grid
// ==========================================
const allCards: CardData[] = [
  // Block 1
  {
    type: "profile",
    name: "Urmee Helal",
    title: "General Manager, LEVERnGEAR Ltd.",
    image:
      "https://res.cloudinary.com/drchxbdit/image/upload/v1774698780/admin_q8rq9m.jpg",
  },
  {
    type: "testimonial",
    text: "Customer queries don't wait and neither does this smart AI. It responds, qualifies leads, and keeps our inbox clean. Seamless, smart, and worth every penny.",
    logo: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606337/lng_vtgxm5.jpg",
    logoStyle: "h-7 md:h-9",
  },
  // Block 2
  {
    type: "profile",
    name: "Ibrahim K. Shafin",
    title: "CEO, BizStori Canada",
    image:
      "https://res.cloudinary.com/drchxbdit/image/upload/v1774698780/safin_cptsor.jpg",
  },
  {
    type: "testimonial",
    text: "Presswayy AI replies instantly to customer messages, answers product questions, and collects orders. Since using it, our response time improved and sales increased by over 35%.",
    logo: "https://res.cloudinary.com/drchxbdit/image/upload/v1774608210/biztori_u3tppv.png",
    logoStyle: "h-10 md:h-12",
  },
  {
    type: "stat",
    title: "Compliant,",
    text: "Scalable, high-quality localized marketing content Presswayy ensures every piece of marketing content is brand-aligned, quality-checked, and tailored for local audiences consistently and at scale.",
    bgColor: "bg-[#e5f3ff]",
    dividerColor: "bg-[#0d1c44]/10",
    textColor: "text-[#0d1c44]",
  },
  {
    type: "stat",
    title: "Lead Recovery",
    text: "They no longer lose potential customers because their system responds instantly to every message even during weekends, holidays, or after working hours. This ensures every interested customer feels heard and engaged, increasing trust and sales.",
    bgColor: "bg-[#fceef5]",
    dividerColor: "bg-[#5c112e]/10",
    textColor: "text-[#5c112e]",
  },
  {
    type: "stat",
    title: "Boost Teamwork",
    text: "Their sales team can now fully concentrate on converting leads into paying customers because the chatbot automatically takes care of all the repetitive, time-consuming inquiries like FAQs, price questions, and availability checks.",
    bgColor: "bg-[#fff9ce]",
    dividerColor: "bg-[#0d1c44]/10",
    textColor: "text-[#0d1c44]",
  },
  // Block 3
  {
    type: "stat",
    title: "Time-to-market",
    text: "Faster end-to-end campaigns From idea to execution, Presswayy speeds up the full campaign cycle reducing delays and launching marketing faster than ever.",
    bgColor: "bg-[#ecfce5]",
    dividerColor: "bg-[#14532d]/10",
    textColor: "text-[#14532d]",
  },
  {
    type: "profile",
    name: "Mahzabin Ferdous",
    title: "Co-Founder, The Marvel- Be You",
    image:
      "https://res.cloudinary.com/drchxbdit/image/upload/v1774698780/mejabin_llb7lu.jpg",
  },
  {
    type: "testimonial",
    text: "Presswayy AI instantly handles queries, saves hours, and keeps our influencer pages active 24/7 a true game-changer!",
    logo: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606337/marvel_ydxsid.jpg",
    logoStyle: "h-14 md:h-[60px]",
  },
  // Block 4
  {
    type: "profile",
    name: "Ahnaf T. Rahman",
    title: "CEO, Goodybro",
    image:
      "https://res.cloudinary.com/drchxbdit/image/upload/v1774698780/habnf_hw8sdg.jpg",
  },
  {
    type: "testimonial",
    text: "Presswayy AI helped us reduce missed messages and boosted orders by 24%. It responds instantly to queries on size, price, and delivery. Now, our team can focus on fulfillment while the bot works 24/7.",
    logo: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606337/goody_vxedtv.jpg",
    logoStyle: "h-16 md:h-[72px]",
  },
];

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, image }) => (
  <div className="relative min-h-[320px] rounded-sm overflow-hidden group">
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c44]/90 via-transparent to-transparent"></div>
    <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 text-white text-left">
      <p className="text-[16px] md:text-[16px] font-bold">{name}</p>
      <p className="text-[12px] opacity-80 uppercase tracking-wide">{title}</p>
    </div>
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  logo,
  logoStyle,
}) => (
  <div className="bg-white p-6 md:p-8 flex flex-col justify-center md:justify-between min-h-[320px] border border-gray-100 shadow-sm">
    <p className="text-[15px] md:text-[15px] text-[#0d1c44] leading-[1.5] md:leading-relaxed font-sans font-medium">
      {text}
    </p>
    <div className="mt-6 md:mt-0">
      <Image
        src={logo}
        alt="Company Logo"
        width={200}
        height={80}
        className={`w-auto object-contain object-left ${logoStyle}`}
      />
    </div>
  </div>
);

const StatCard: React.FC<StatCardProps> = ({
  title,
  text,
  bgColor,
  dividerColor,
  textColor,
}) => (
  <div className={`${bgColor} p-6 md:p-8 flex flex-col min-h-[320px]`}>
    <h3 className="font-['Times_New_Roman',_sans-serif] text-[24px] md:text-[32px] font-semibold text-[#103A00] mb-3 md:mb-4">
      {title}
    </h3>
    <div className={`w-full h-[1px] ${dividerColor} mb-5 md:mb-6`}></div>
    <p
      className={`text-[15px] md:text-[15px] ${textColor} leading-[1.5] md:leading-relaxed font-sans font-medium`}
    >
      {text}
    </p>
  </div>
);

export default function CustomerStories() {
  const handleOpenAuth = (): void => {
    window.dispatchEvent(new Event("openAuthModal"));
  };

  return (
    <section className="bg-white py-12 md:py-24 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center mb-12 md:mb-20">
        <div className="inline-block bg-[#fff9ce] text-[#0d1c44] text-[11px] md:text-[12px] px-3 py-1.5 md:py-1 mb-6 md:mb-8 font-medium rounded-sm uppercase tracking-wider">
          Customer Stories
        </div>

        <h2 className="font-['Times_New_Roman',_sans-serif] text-[32px] md:text-[72px] font-semibold leading-[1.2] md:leading-[71px] tracking-[-1px] md:tracking-[-3px] text-[#00063D] mb-8 md:mb-12 max-w-5xl mx-auto">
          Our clients don&apos;t just use it, <br className="hidden md:block" />
          they <span className="italic">rely</span> on it.
        </h2>

        <div className="relative z-10 mb-12 md:mb-20">
          <button
            onClick={handleOpenAuth}
            className="inline-block bg-[#ff4e33] text-white px-6 md:px-10 py-3.5 md:py-4 text-[16px] md:text-[17px] font-semibold hover:bg-[#e63e26] transition-all duration-300 rounded-sm shadow-md hover:shadow-xl hover:-translate-y-1 border-none cursor-pointer"
          >
            Connect With Presswayy
          </button>
        </div>
      </div>

      {/* Grid Iteration: Now a single grid container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allCards.map((card, index) => {
          if (card.type === "profile") {
            return (
              <ProfileCard
                key={index}
                name={card.name}
                title={card.title}
                image={card.image}
              />
            );
          }
          if (card.type === "testimonial") {
            return (
              <TestimonialCard
                key={index}
                text={card.text}
                logo={card.logo}
                logoStyle={card.logoStyle}
              />
            );
          }
          if (card.type === "stat") {
            return (
              <StatCard
                key={index}
                title={card.title}
                text={card.text}
                bgColor={card.bgColor}
                dividerColor={card.dividerColor}
                textColor={card.textColor}
              />
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}
