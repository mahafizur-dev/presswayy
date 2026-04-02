"use client";

import React from "react";

export default function FeaturesGrid() {
  const features = [
    {
      id: 1,
      title: "Trained on Your Business",
      desc: "Accurate answers based on your products and services.",
      bgClass: "bg-[#ecfce5]",
      gridClass: "bg-grid-green",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute left-8 top-4 w-20 h-20 bg-[#4ade80] rounded-full opacity-60 mix-blend-multiply"></div>
          <svg
            className="w-24 h-24 relative z-10 drop-shadow-sm"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="20"
              y="30"
              width="50"
              height="40"
              rx="2"
              fill="white"
              stroke="#0d1c44"
              strokeWidth="2"
            />
            <path d="M20 40H70" stroke="#0d1c44" strokeWidth="2" />
            <circle cx="26" cy="35" r="1.5" fill="#0d1c44" />
            <circle cx="32" cy="35" r="1.5" fill="#0d1c44" />
            <path
              d="M26 48H50"
              stroke="#0d1c44"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M26 56H40"
              stroke="#0d1c44"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="65"
              cy="65"
              r="20"
              fill="#bef264"
              stroke="#0d1c44"
              strokeWidth="2"
            />
            <rect
              x="55"
              y="55"
              width="20"
              height="20"
              rx="2"
              fill="white"
              stroke="#0d1c44"
              strokeWidth="2"
            />
            <path
              d="M52 60H55M52 65H55M52 70H55"
              stroke="#0d1c44"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M75 60H78M75 65H78M75 70H78"
              stroke="#0d1c44"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M60 52V55M65 52V55M70 52V55"
              stroke="#0d1c44"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M60 75V78M65 75V78M70 75V78"
              stroke="#0d1c44"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <text
              x="65"
              y="68"
              fontSize="10"
              fill="#0d1c44"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              AI
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      title: "Easy Setup",
      desc: "Presswayy handles it all—no code & no tech skills needed.",
      bgClass: "bg-[#ffece6]",
      gridClass: "bg-grid-pink",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg
            className="w-32 h-32"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="75" r="12" fill="#ef4444" opacity="0.8" />
            <rect
              x="115"
              y="45"
              width="18"
              height="18"
              fill="#ef4444"
              opacity="0.8"
            />
            <polygon
              points="75,40 110,100 40,100"
              fill="url(#grad1)"
              opacity="0.9"
            />
            <polygon
              points="55,60 85,115 25,115"
              fill="#fb923c"
              opacity="0.7"
            />
            <polygon
              points="95,60 125,115 65,115"
              fill="#f87171"
              opacity="0.7"
            />
            <defs>
              <linearGradient
                id="grad1"
                x1="75"
                y1="40"
                x2="75"
                y2="100"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9f1239" />
                <stop offset="1" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      title: "Instant Replies, 24/7",
      desc: "Never miss a customer—reply instantly, even while you sleep.",
      bgClass: "bg-[#e5f3ff]",
      gridClass: "bg-grid-blue",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg
            className="w-28 h-28"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 75H130"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M30 60H120"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M40 90H110"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="8 4"
            />
            <polygon
              points="120,40 135,40 127.5,55"
              fill="#3b82f6"
              opacity="0.8"
            />
            <circle
              cx="75"
              cy="75"
              r="35"
              stroke="#0ea5e9"
              strokeWidth="4"
              fill="#bae6fd"
              opacity="0.4"
            />
            <path
              d="M75 35C97.0914 35 115 52.9086 115 75C115 97.0914 97.0914 115 75 115C52.9086 115 35 97.0914 35 75"
              stroke="#0d1c44"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M115 75L105 65M115 75L125 65"
              stroke="#0d1c44"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="75"
              y="85"
              fontSize="28"
              fill="#0d1c44"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              24/7
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 4,
      title: "Human-Like Chat",
      desc: "Conversations should feel natural & human-like, not robotic.",
      bgClass: "bg-[#fff9ce]",
      gridClass: "bg-grid-yellow",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute right-10 top-6 w-16 h-16 bg-[#eab308] rounded-full opacity-40 mix-blend-multiply"></div>
          <svg
            className="w-28 h-28 relative z-10"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="90"
              y="30"
              width="30"
              height="25"
              fill="#eab308"
              opacity="0.8"
            />
            <polygon points="90,45 80,50 90,55" fill="#eab308" opacity="0.8" />
            <circle cx="75" cy="75" r="40" fill="#fef08a" opacity="0.6" />
            <circle
              cx="75"
              cy="60"
              r="14"
              fill="none"
              stroke="#0d1c44"
              strokeWidth="2.5"
            />
            <circle cx="70" cy="58" r="1.5" fill="#0d1c44" />
            <circle cx="80" cy="58" r="1.5" fill="#0d1c44" />
            <path
              d="M71 64 Q75 67 79 64"
              stroke="#0d1c44"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M60 85 C60 75 90 75 90 85 V95 H60 V85 Z"
              fill="none"
              stroke="#0d1c44"
              strokeWidth="2.5"
            />
            <circle cx="45" cy="85" r="4" fill="#0d1c44" />
            <circle cx="105" cy="85" r="4" fill="#0d1c44" />
            <path
              d="M60 85 H45 M90 85 H105"
              stroke="#0d1c44"
              strokeWidth="2.5"
            />
            <circle cx="55" cy="105" r="4" fill="#0d1c44" />
            <circle cx="95" cy="105" r="4" fill="#0d1c44" />
            <path
              d="M65 95 L55 105 M85 95 L95 105"
              stroke="#0d1c44"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8">
      <style>{`
        .bg-grid-green {
          background-image:
            linear-gradient(to right, rgba(74,222,128,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(74,222,128,0.3) 1px, transparent 1px);
          background-size: 16px 16px;
        }
        .bg-grid-pink {
          background-image:
            linear-gradient(to right, rgba(251,113,133,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(251,113,133,0.25) 1px, transparent 1px);
          background-size: 16px 16px;
        }
        .bg-grid-blue {
          background-image:
            linear-gradient(to right, rgba(96,165,250,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(96,165,250,0.25) 1px, transparent 1px);
          background-size: 16px 16px;
        }
        .bg-grid-yellow {
          background-image:
            linear-gradient(to right, rgba(234,179,8,0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(234,179,8,0.25) 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${feature.bgClass}`}
              style={{ height: "clamp(260px, 38vw, 360px)" }}
            >
              {/* Title */}
              <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-1">
                <h3 className="text-[15px] sm:text-[17px] md:text-[20px] font-serif font-bold text-[#0d1c44] leading-tight tracking-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Illustration */}
              <div
                className={`flex-grow relative w-full overflow-hidden ${feature.gridClass}`}
              >
                {feature.illustration}
              </div>

              {/* Description + Arrow */}
              <div className="px-4 sm:px-5 pt-3 pb-4 sm:pb-5 flex justify-between items-end gap-2">
                <p className="text-[11.5px] sm:text-[12.5px] md:text-[13.5px] font-sans font-medium text-[#0d1c44] leading-snug opacity-90">
                  {feature.desc}
                </p>
                <div className="shrink-0 text-[#0d1c44]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
