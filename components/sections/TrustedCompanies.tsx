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
    {
      id: 10,
      name: "Arno Fashion",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497992/Arno_Fashion_Gallery_rdmmkv.jpg",
    },
    {
      id: 11,
      name: "ABC Shop",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497991/ABC_Shop_blc9kh.jpg",
    },
    {
      id: 12,
      name: "Arveda",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497991/Arveda_tntvkm.jpg",
    },
    {
      id: 13,
      name: "Deshi Event Abgen",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497991/Deshi_Event_Abgen_yrtgho.jpg",
    },
    {
      id: 14,
      name: "Clever mart bd",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497991/Clever_mart_bd_lmvng5.jpg",
    },
    {
      id: 15,
      name: "JolGhuddi",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497990/JolGhuddi_-_%E0%A6%9C%E0%A6%B2%E0%A6%98%E0%A7%81%E0%A6%A1%E0%A7%8D%E0%A6%A1%E0%A6%BF_adisfz.jpg",
    },
    {
      id: 16,
      name: "ES Trading BD",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497990/ES_Trading_BD__ci8mz0.jpg",
    },
    {
      id: 18,
      name: "Hairence",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497990/Hairence_dcrdkf.jpg",
    },
    {
      id: 19,
      name: "MHN SHOPS",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497990/MHN_SHOPS_hm9whv.jpg",
    },
    {
      id: 20,
      name: "Milkberry",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497989/Milkberry-%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%95%E0%A6%AC%E0%A7%87%E0%A6%B0%E0%A7%80_-%D9%85%D9%8A%D9%84%D9%83%D8%A8%D9%8A%D8%B1%D9%8A_pqwtr7.jpg",
    },
    {
      id: 21,
      name: "Safar Hub",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497989/Safar_Hub_jfcxmy.jpg",
    },
    {
      id: 22,
      name: "Muslimshopbd",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497989/Muslimshopbd.com__nojbk4.jpg",
    },
    {
      id: 23,
      name: "Optimart",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497989/Optimart_fgx01e.jpg",
    },
    {
      id: 24,
      name: "ZAVA",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497988/ZAVA_n26jii.jpg",
    },
    {
      id: 25,
      name: "Islami Book Store",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497987/%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AC%E0%A6%87_%E0%A6%98%E0%A6%B0_xoh87p.jpg",
    },
    {
      id: 26,
      name: "Sajo Bangladesh",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497988/Sajo_Bangladesh_%E0%A6%B8%E0%A6%BE%E0%A6%9C%E0%A7%8B_%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_zponjq.jpg",
    },
    {
      id: 27,
      name: "Yameni Khalta",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497987/Yameni_Khalta_-_%E0%A6%87%E0%A7%9F%E0%A6%BE%E0%A6%AE%E0%A7%87%E0%A6%A8%E0%A6%BF_%E0%A6%96%E0%A6%BE%E0%A6%B2%E0%A6%A4%E0%A6%BE_we4i1w.jpg",
    },
    {
      id: 28,
      name: "Travel Bilash Tourism",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497988/Travel_Bilash_Tourism_lc3vmm.jpg",
    },
    {
      id: 29,
      name: "Milki Mom",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497988/%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%95%E0%A6%BF%E0%A6%AE%E0%A6%AE_iz6ncq.jpg",
    },
    {
      id: 30,
      name: "PriyoStore",
      src: "https://res.cloudinary.com/drchxbdit/image/upload/v1781497989/PriyoStore.xyz_ctuiwv.jpg",
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
