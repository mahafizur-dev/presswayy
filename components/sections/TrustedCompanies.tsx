"use client";

import Image from "next/image";

export default function TrustedCompanies() {
  const companyLogos = [
    // {
    //   id: 1,
    //   name: "Lever n Gear",
    //   src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774606337/lng_vtgxm5.jpg",
    // },
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
    // {
    //   id: 8,
    //   name: "Bizstori",
    //   src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774608210/biztori_u3tppv.png",
    // },
    // {
    //   id: 9,
    //   name: "Clarex Accounting",
    //   src: "https://res.cloudinary.com/drchxbdit/image/upload/v1774608210/CLAREx-accounting_bdaqtc.png",
    // },
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

  const row1 = companyLogos.slice(0, Math.ceil(companyLogos.length / 2));
  const row2 = companyLogos.slice(Math.ceil(companyLogos.length / 2));

  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <section className="pt-12 pb-16 bg-white overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="block w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <span className="text-xs font-medium tracking-[0.125em] uppercase text-gray-500">
            Trusted by leading brands
          </span>
          <span className="block w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
          Companies that trust us
        </h2>
      </div>

      {/* Two Row Circular Marquee - Reduced Size */}
      <div className="space-y-12 md:space-y-14">
        {/* Row 1 */}
        <div className="relative">
          <div className="logo-mask">
            <div className="logo-track track1">
              {duplicatedRow1.map((logo, index) => (
                <div key={`${logo.id}-r1-${index}`} className="logo-item">
                  <div className="circle-wrapper">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={140}
                      height={140}
                      className="logo-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative">
          <div className="logo-mask">
            <div className="logo-track track2">
              {duplicatedRow2.map((logo, index) => (
                <div key={`${logo.id}-r2-${index}`} className="logo-item">
                  <div className="circle-wrapper">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={140}
                      height={140}
                      className="logo-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .logo-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }

        .logo-track {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 48px; /* Reduced Gap */
        }

        .track1 {
          animation: scrollLeft 52s linear infinite;
        }
        .track2 {
          animation: scrollRight 45s linear infinite;
        }

        .logo-track:hover {
          animation-play-state: paused;
        }

        /* Reduced Circular Size */
        .logo-item {
          flex-shrink: 0;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle-wrapper {
          width: 105px;
          height: 105px;
          border-radius: 9999px;
          overflow: hidden;
          border: 3px solid #f3f3f3;
          box-shadow: 0 5px 14px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: white;
        }

        .logo-item:hover .circle-wrapper {
          transform: scale(1.14);
          border-color: #e5e5e5;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          padding: 12px;
          filter: grayscale(85%) opacity(78%);
          transition: all 0.4s ease;
        }

        .logo-item:hover .logo-image {
          filter: grayscale(0%) opacity(100%);
        }

        /* Responsive */
        @media (min-width: 768px) {
          .logo-item {
            width: 138px;
            height: 138px;
          }
          .circle-wrapper {
            width: 122px;
            height: 122px;
          }
          .logo-track {
            gap: 64px; /* Reduced desktop gap */
          }
        }
      `}</style>
    </section>
  );
}