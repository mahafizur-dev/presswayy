"use client";

import {
  Briefcase,
  Building2,
  UtensilsCrossed,
  Plane,
  PartyPopper,
  ShoppingBag,
} from "lucide-react";

export default function SolutionsSection() {
  const chips = [
    { label: "Service Providers", icon: Briefcase },
    { label: "Hotels & Resorts", icon: Building2 },
    { label: "Restaurants", icon: UtensilsCrossed },
    { label: "Travel Agencies", icon: Plane },
    { label: "Event Management", icon: PartyPopper },
    { label: "E‑Commerce", icon: ShoppingBag },
  ];

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="bg-[#F2F1ED] py-16 md:py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden rounded-[28px] border border-black/5 bg-white p-8 md:p-14 shadow-[0_10px_40px_-15px_rgba(0,6,61,0.15)]">
          {/* Left */}
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#FF4D2E]/10 px-3 py-1 text-sm font-medium text-[#FF4D2E] mb-5">
              <span className="h-2 w-2 rounded-full bg-[#FF4D2E]" />
              Solutions
            </p>

            <h1
              id="solutions-heading"
              className="font-googlesans font-bold text-[32px] md:text-[48px] lg:text-[56px] text-[#00063D] leading-[1.15] tracking-tight mb-5"
            >
              Built for the businesses that never stop getting messages.
            </h1>

            <p className="font-googlesans text-[16px] md:text-[18px] text-slate-600 leading-relaxed mb-8 max-w-md">
              From a single Instagram shop to a multi‑branch service business,
              Presswayy adapts to your catalogue and workflow.
            </p>

            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
              className="inline-flex items-center gap-2 rounded-lg bg-[#FF4D2E] px-7 py-3.5 text-sm md:text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-[#e63e26] hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D2E] focus-visible:ring-offset-2"
            >
              Connect with Presswayy
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>

          {/* Right — solutions grid */}
          <div className="relative z-10 grid grid-cols-2 gap-4">
            {chips.map(({ label, icon: Icon }, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF4D2E] hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF4D2E]/10 text-[#FF4D2E] transition-colors duration-300 group-hover:bg-[#FF4D2E] group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="font-googlesans text-sm md:text-base font-semibold text-[#0a1435] leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
