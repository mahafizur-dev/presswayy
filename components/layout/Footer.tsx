import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";
import { COMPANY_LINKS, LEGAL_LINKS } from "@/constants";

// --- Custom Brand Icons ---
const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon
      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
      fill="#ff4e33"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// --- Configuration Data ---
const SOCIAL_LINKS = [
  { id: "facebook", icon: FacebookIcon, href: "#", label: "Facebook" },
  { id: "youtube", icon: YoutubeIcon, href: "#", label: "YouTube" },
  { id: "instagram", icon: InstagramIcon, href: "#", label: "Instagram" },
];

const CONTACT_INFO = [
  {
    id: "address",
    icon: MapPin,
    content: "House 336, Lane 5, Baridhara DOHS, Dhaka, Bangladesh",
    type: "text",
  },
  {
    id: "email",
    icon: Mail,
    content: "hello@presswayy.com",
    href: "mailto:hello@presswayy.com",
    type: "link",
  },
  { id: "phone", icon: Phone, content: "01886168979", type: "text" },
  {
    id: "license",
    icon: CheckCircle2,
    content: "TRAD/DNCC/029884/2022",
    type: "text",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left Column: Brand & Socials */}
          <div className="space-y-8">
            <div className="space-y-2">
              <Link href="/" className="inline-block">
                <Image
                  src="https://res.cloudinary.com/drchxbdit/image/upload/v1774702469/presswayy-white_tu4s72.png"
                  alt="Presswayy Logo"
                  width={160}
                  height={60}
                  className="w-40 h-auto"
                />
              </Link>
              <p className="text-sm font-medium text-white/90">
                Powered by CLAREx Tech.
              </p>
            </div>

            {/* BASIS Member Badge */}
            <div className="flex items-center bg-[#e5e7eb] overflow-hidden w-fit rounded-sm">
              <div className="bg-[#8c94a3] text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                MEMBER
              </div>
              <div className="bg-white px-3 py-1.5 flex items-center gap-1">
                <Image
                  src="https://res.cloudinary.com/drchxbdit/image/upload/v1774702345/basis_qipxnh.jpg"
                  alt="BASIS Logo"
                  width={20}
                  height={20}
                />
                <div className="flex gap-0.5">
                  <div className="w-1.5 h-1.5 bg-red-500 rotate-45"></div>
                  <div className="w-1.5 h-1.5 bg-green-500 rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ id, icon: Icon, href, label }) => (
                <Link
                  key={id}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#ff4e33] rounded-full flex items-center justify-center hover:bg-[#e63e26] transition-colors"
                >
                  <Icon />
                </Link>
              ))}
            </div>

            <p className="text-[13px] text-white/70">
              Copyright © {currentYear} Presswayy | Powered by CLAREx Tech
            </p>
          </div>

          {/* Middle Column: Company Links */}
          <div className="space-y-6">
            <h3 className="text-[#ff4e33] text-[18px] font-bold uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-4">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[17px] font-bold hover:text-[#ff4e33] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-[#ff4e33] text-[18px] font-bold uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-5">
              {CONTACT_INFO.map(({ id, icon: Icon, content, href, type }) => (
                <li
                  key={id}
                  className={`flex ${id === "address" ? "items-start" : "items-center"} gap-4`}
                >
                  <Icon
                    className={`text-[#ff4e33] shrink-0 ${id === "address" ? "mt-1" : ""}`}
                    size={20}
                  />
                  {type === "link" ? (
                    <Link
                      href={href!}
                      className="text-[15px] hover:text-[#ff4e33] transition-colors"
                    >
                      {content}
                    </Link>
                  ) : (
                    <span
                      className={`text-[15px] ${id === "address" ? "leading-relaxed" : ""}`}
                    >
                      {content}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal Links */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-bold hover:text-[#ff4e33] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Payment Banner */}
        <div className="mt-12 flex justify-center">
          <Image
            src="/Payment-Banner.png"
            alt="Accepted Payment Methods"
            width={1200}
            height={120}
            className="w-full h-auto max-w-[800px]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>
    </footer>
  );
}
