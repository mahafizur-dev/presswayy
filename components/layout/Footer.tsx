"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white font-sans">
      {/* ── MAIN FOOTER ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-12 items-start">
          {/* ── COL 1: Brand ── */}
          <div className="flex flex-col gap-2">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/drchxbdit/image/upload/v1774702469/presswayy-white_tu4s72.png"
                alt="Presswayy"
                className="h-18 w-auto object-contain"
              />
            </div>

            <p className="text-[12px] font-medium text-gray-400">
              Powered by CLAREx Tech.
            </p>

            {/* BASIS badge */}
            <div className="inline-flex w-fit mt-1">
              <div className="bg-white rounded-sm px-2.5 py-1.5 inline-flex items-center gap-2">
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wide">
                  MEMBER
                </span>
                <div className="w-px h-5 bg-gray-300" />
                <div className="text-[10px] font-bold text-[#0a3d8f] leading-tight">
                  <div>BASIS</div>
                  <div className="text-[8px] font-normal text-gray-400">
                    Bangladesh Assoc. of Software
                  </div>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-[#ff5a36]"
                  fill="currentColor"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5">
              {[
                {
                  href: "https://www.facebook.com/presswayy",
                  svg: (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  ),
                },
                {
                  href: "https://www.youtube.com/@Presswayy/videos",
                  svg: (
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  ),
                },
                {
                  href: "https://www.instagram.com/presswayy/",
                  svg: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" fill="#0a0a0a" />
                      <circle cx="17.5" cy="6.5" r="1" fill="#0a0a0a" />
                    </>
                  ),
                },
              ].map(({ href, svg }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#ff5a36] hover:bg-[#e84d2b] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                    {svg}
                  </svg>
                </a>
              ))}
            </div>

            <p className="text-[11px] text-gray-500">
              Copyright © 2026 Presswayy | Powered by CLAREx Tech
            </p>
          </div>

          {/* ── COL 2: Company ── */}
          <div className="pt-[24px]">
            <h3 className="text-[#ff5a36] text-[12px] font-bold uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Pricing", href: "#pricing" },
                { name: "Platform", href: "#platform" },
                { name: "Solutions", href: "#solutions" },
                { name: "Resources", href: "#resources" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-medium text-white hover:text-[#ff5a36] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: Contact ── */}
          <div className="pt-[24px]">
            <h3 className="text-[#ff5a36] text-[12px] font-bold uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                {
                  icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                  text: "House 336, Lane 5, Baridhara DOHS, Dhaka",
                  filled: true,
                },
                {
                  icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
                  text: "hello@presswayy.com",
                  filled: false,
                },
                {
                  icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                  text: "01886168979",
                  filled: false,
                },
                {
                  icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01",
                  text: "TRAD/DNCC/029884/2022",
                  filled: false,
                },
              ].map(({ icon, text, filled }, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-[#ff5a36] flex-shrink-0 mt-0.5"
                    fill={filled ? "currentColor" : "none"}
                    stroke={filled ? "none" : "currentColor"}
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon} />
                  </svg>
                  <span className="text-[13px] text-white leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── DIVIDER + LEGAL ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-wrap gap-x-6 gap-y-2">
          {[
            { name: "About Us", href: "/about-us" },
            { name: "Contact Us", href: "/contact" },
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms & Conditions", href: "/terms-conditions" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[12px] sm:text-[13px] font-semibold text-white hover:text-[#ff5a36] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* ── PAYMENT BANNER ── */}
      <div className="border-t border-white/10">
        <div className="w-full py-3">
          <Image
            src={
              "https://res.cloudinary.com/drchxbdit/image/upload/v1774606338/Payment-Banner_fuzpkv.png"
            }
            alt="Accepted Payment Methods"
            width={1920}
            height={120}
            className="w-full h-auto"
            sizes="100vw"
          />
        </div>
      </div>
    </footer>
  );
}
