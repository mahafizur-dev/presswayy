"use client";

import Image from "next/image";

export default function TrustedCompanies() {
  const companyLogos = [
    {
      id: 1,
      name: "Lever n Gear",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606337/lng_vtgxm5.jpg",
    },
    {
      id: 2,
      name: "FLEX",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774607824/flex_xw91so.png",
    },
    {
      id: 3,
      name: "Union Pharmaceuticals",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606338/uni_qqm2tb.jpg",
    },
    {
      id: 4,
      name: "THE MARVEL BE YOU",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606337/marvel_ydxsid.jpg",
    },
    {
      id: 5,
      name: "goodybro",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606337/goody_vxedtv.jpg",
    },
    {
      id: 6,
      name: "cbic",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606336/cbic_bdkmus.jpg",
    },
    {
      id: 7,
      name: "Clarex Tech",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606336/clrextech_nrb0c4.jpg",
    },
    {
      id: 8,
      name: "Bizstori",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774608210/biztori_u3tppv.png",
    },
    {
      id: 9,
      name: "Clarex Accounting",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774608210/CLAREx-accounting_bdaqtc.png",
    },
  ];

  return (
    <section className="pt-8 pb-10 md:pt-8 md:pb-12 bg-white overflow-hidden">
      <style>{`
        @keyframes logoScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-track {
          animation: logoScroll 35s linear infinite;
          display: flex;
          width: max-content;
          align-items: center;
        }
        .logo-track:hover {
          animation-play-state: paused;
        }
        .logo-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        
        /* Default (Mobile/Small Screen) sizes increased */
        .logo-item {
          width: 180px;  /* Increased from 140px */
          height: 80px;  /* Increased from 60px */
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .logo-item:hover {
          transform: scale(1.05);
          opacity: 0.75;
        }

        /* Desktop and Tablet sizes */
        @media (min-width: 768px) {
          .logo-item {
            width: 220px; /* Increased to maintain proportion */
            height: 100px; /* Increased to maintain proportion */
            padding: 8px 24px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6 md:mb-8 text-center">
        <h2
          className="text-[24px] md:text-[30px] font-semibold text-[#00063D] tracking-tight leading-[1.2] md:leading-normal relative inline-block"
          style={{ fontFamily: '"Times New Roman", Sans-serif' }}
        >
          <span className="relative z-10 bg-white px-4">
            Companies that trust us
          </span>
          {/* Optional: adding the lines on the side to match your screenshot */}
          
        </h2>
      </div>

      {/* Marquee */}
      <div className="w-full relative logo-mask">
        <div className="logo-track">
          {[...companyLogos, ...companyLogos].map((logo, index) => {
            const isDuplicate = index >= companyLogos.length;

            return (
              <div
                key={index}
                className="logo-item"
                aria-hidden={isDuplicate ? "true" : "false"}
              >
                <Image
                  src={logo.src}
                  alt={isDuplicate ? "" : logo.name}
                  width={220} // Adjusting the internal Image width to match max container
                  height={100} // Adjusting the internal Image height to match max container
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
