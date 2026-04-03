"use client";

import { useState } from "react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);
  const [customers, setCustomers] = useState<number>(0);
  const [sliderVal, setSliderVal] = useState<number>(0);

  const AI = 0.89;
  const MO = 3000;
  const YR = 29500;
  const YMO = Math.round(YR / 12);

  const sub = isYearly ? YMO : MO;
  const ai = Math.round(customers * AI);
  const total = sub + ai;
  const saved = MO * 12 - YR;

  function fromSlider(v: number) {
    setSliderVal(v);
    setCustomers(v);
  }

  function fromInput(v: string) {
    const n = Math.max(0, parseInt(v) || 0);
    setCustomers(n);
    setSliderVal(Math.min(n, 2000));
  }

  const features = [
    { label: "Instant reply responds in under 1 minute" },
    { label: "24/7 Service never offline, never tired" },
    { label: "Trained on your business data & tone" },
    { label: "Connect your website & database" },
    { label: "100+ simultaneous customers", tag: "Concurrent" },
    { label: "Read images & voice messages" },
    { label: "Manual pause & hand off to human anytime" },
    { label: "Orders saved to Google Sheets", tag: "Auto" },
    { label: "Handle customer queries & FAQs" },
    { label: "Take orders on website & Messenger" },
    { label: "Courier tracking integration", tag: "New" },
    { label: "Transfer to human agent seamlessly" },
  ];

  return (
    <div
      id="pricing"
      className="bg-[#F2F1ED] py-8 md:py-10 px-4 flex items-center justify-center min-h-screen"
    >
      <style>{`
        .pw-eyebrow-dot { animation: pwblink 2s ease-in-out infinite; }
        @keyframes pwblink { 0%,100%{opacity:1} 50%{opacity:.2} }
        .pw-slider { -webkit-appearance:none; height:4px; border-radius:2px;
          background:#E8E7E2; outline:none; cursor:pointer; width:100%; }
        .pw-slider::-webkit-slider-thumb {
          -webkit-appearance:none; width:15px; height:15px; border-radius:50%;
          background:#F36525; border:2.5px solid #fff;
          box-shadow:0 1px 6px rgba(243,101,37,0.4);
        }
      `}</style>

      <div className="w-full max-w-[1080px]">
        {/* Pricing Title */}
        <h1
          className="text-[32px] md:text-[clamp(42px,6vw,74px)] font-semibold text-[#00063D] text-center mb-4 md:mb-6 leading-[1.2] md:leading-tight tracking-tight"
          style={{ fontFamily: '"Times New Roman", sans-serif' }}
        >
          Pricing
        </h1>

        {/* Header */}
        <div className="mb-6 md:mb-4 text-center md:text-left flex flex-col md:block items-center">
          <div className="inline-flex items-center gap-1.5 bg-[#FEF0E8] border border-orange-200 rounded-full px-2.5 py-0.5 text-[11px] md:text-[9.5px] font-semibold text-[#C24E18] uppercase tracking-wider mb-2 md:mb-1.5">
            <span className="pw-eyebrow-dot w-1.5 h-1.5 rounded-full bg-[#F36525] inline-block" />
            Simple, Transparent Pricing
          </div>
          <div className="font-['Sora',sans-serif] text-[22px] md:text-[clamp(18px,2.8vw,24px)] font-bold text-[#111110] tracking-tight text-center md:text-left leading-snug md:leading-normal">
            Pay for what you{" "}
            <span className="text-[#F36525]">actually use</span>
          </div>
          <div className="text-[14px] md:text-[11.5px] text-[#6B6B65] mt-1 md:mt-0.5 text-center md:text-left px-2 md:px-0">
            Flat subscription + Tk.0.89 AI cost per customer.
          </div>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-[18px] overflow-hidden border border-[#E8E7E2] shadow-md">
          {/* ── LEFT ── */}
          <div className="bg-white p-5 md:p-7 flex flex-col">
            {/* Toggle */}
            <div className="flex flex-row items-center justify-between mb-5 md:mb-3.5 gap-2">
              <span className="text-[11px] md:text-[9.5px] font-semibold text-[#6B6B65] uppercase tracking-widest shrink-0">
                Billing Period
              </span>
              <div className="flex bg-[#E8E7E2] rounded-full p-[3px] gap-[2px]">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-4 md:px-4 py-2 md:py-[5px] rounded-full text-[14px] md:text-[12px] font-semibold font-['Sora',sans-serif] transition-all duration-200 ${!isYearly ? "bg-[#F36525] text-white shadow-md" : "text-[#6B6B65] bg-transparent"}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`relative px-4 md:px-4 py-2 md:py-[5px] rounded-full text-[14px] md:text-[10.5px] font-semibold font-['Sora',sans-serif] transition-all duration-200 ${isYearly ? "bg-[#F36525] text-white shadow-md" : "text-[#6B6B65] bg-transparent"}`}
                >
                  Yearly
                  <span className="absolute -top-2.5 -right-2 bg-[#0A6B49] text-white text-[9px] md:text-[7px] font-bold px-1.5 py-[1.5px] rounded-full uppercase tracking-wide">
                    −18%
                  </span>
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="mb-5 md:mb-3">
              <div className="flex items-baseline gap-1 mb-0.5">
                <span className="font-['Sora',sans-serif] text-[14px] md:text-[12px] font-semibold text-[#F36525]">
                  Tk.
                </span>
                <span className="font-['Sora',sans-serif] text-[36px] md:text-[40px] font-bold text-[#111110] leading-none tracking-tight">
                  {isYearly ? "29,500" : "3,000"}
                </span>
                <span className="text-[15px] md:text-[13px] text-[#6B6B65] font-medium">
                  / {isYearly ? "year" : "month"}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[13px] md:text-[12px] text-[#6B6B65]">
                & approx Tk.0.89 per customer (AI cost)
              </div>
              <div
                className={`inline-flex items-center gap-1 mt-2 md:mt-1 px-2.5 py-1 md:px-2 md:py-[2px] rounded-full text-[11px] md:text-[10px] font-semibold text-[#F36525] md:text-green-400 bg-green-900/10 border border-green-800/20 transition-opacity duration-300 ${isYearly ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="md:w-[9px] md:h-[9px]"
                >
                  <path
                    d="M1.5 5l2.3 2.3 4.7-4.7"
                    stroke="#0A6B49"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                You save{" "}
                <strong className="mx-0.5">Tk.{saved.toLocaleString()}</strong>{" "}
                vs monthly
              </div>
            </div>

            <div className="h-px bg-[#E8E7E2] mb-5 md:mb-3" />

            {/* Calculator */}
            <div className="font-['Sora',sans-serif] text-[15px] md:text-[13px] font-semibold text-[#111110] mb-3 md:mb-2.5">
              Calculate Your Monthly Cost
            </div>

            <div className="flex justify-between items-center mb-2 md:mb-1.5">
              <span className="text-[14px] md:text-[12px] text-[#6B6B65]">
                Customers / month
              </span>
              <span className="font-['Sora',sans-serif] text-[15px] md:text-[13px] font-bold text-[#F36525]">
                {customers.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={2000}
              step={10}
              value={sliderVal}
              onChange={(e) => fromSlider(Number(e.target.value))}
              className="pw-slider mb-2 md:mb-1"
            />
            <div className="flex justify-between mb-4 md:mb-2">
              {["0", "500", "1,000", "2,000+"].map((m) => (
                <span
                  key={m}
                  className="text-[10px] md:text-[8.5px] text-[#ADADAA]"
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-3 md:mb-2">
              <div className="flex-1 h-px bg-[#E8E7E2]" />
              <span className="text-[11px] md:text-[9px] text-[#ADADAA]">
                or type exact
              </span>
              <div className="flex-1 h-px bg-[#E8E7E2]" />
            </div>

            <input
              type="number"
              min={0}
              value={customers || ""}
              onChange={(e) => fromInput(e.target.value)}
              placeholder="Enter customers per month"
              className="w-full border border-[#E8E7E2] rounded-lg px-3 py-2.5 md:px-2.5 md:py-[7px] text-[16px] md:text-[12px] font-['DM_Sans',sans-serif] text-[#111110] bg-[#FAFAF7] outline-none mb-5 md:mb-3 focus:border-[#F36525] focus:shadow-[0_0_0_3px_rgba(243,101,37,0.1)] transition-all placeholder:text-[#ADADAA] placeholder:text-[13px] md:placeholder:text-[11px]"
            />

            {/* Breakdown */}
            <div className="bg-[#FAFAF7] border border-[#E8E7E2] rounded-[10px] overflow-hidden mb-5 md:mb-3">
              {[
                { lbl: "Customers", val: customers.toLocaleString() },
                {
                  lbl: "AI Cost (pay as you go)",
                  val: `Tk.${ai.toLocaleString()}`,
                },
                {
                  lbl: isYearly
                    ? "Subscription (Yearly ÷ 12)"
                    : "Subscription (Monthly)",
                  val: `Tk.${sub.toLocaleString()}`,
                },
              ].map(({ lbl, val }) => (
                <div
                  key={lbl}
                  className="flex justify-between items-center px-4 py-2.5 md:px-3 md:py-[6.5px] border-b border-[#E8E7E2] text-[14px] md:text-[12.5px]"
                >
                  <span className="text-[#6B6B65]">{lbl}</span>
                  <span className="font-['Sora',sans-serif] font-semibold text-[14px] md:text-[12.5px] text-[#111110]">
                    {val}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center px-4 py-3 md:px-3 md:py-[7px] bg-white border-t-2 border-[#E8E7E2]">
                <span className="text-[15px] md:text-[13px] font-semibold text-[#111110]">
                  Total Monthly Cost
                </span>
                <span
                  className="font-['Sora',sans-serif] font-bold text-[18px] md:text-[16px]"
                  style={{ color: total > 8000 ? "#C24E18" : "#F36525" }}
                >
                  Tk.{total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
              className="w-full py-3 md:py-[9.5px] bg-[#F36525] hover:bg-[#C24E18] text-white font-['Sora',sans-serif] font-bold text-[16px] md:text-[14px] rounded-[9px] flex items-center justify-center gap-2 md:gap-1.5 transition-all duration-200 active:scale-[.98] hover:shadow-lg border-none cursor-pointer"
            >
              Get Started Now
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="md:w-[13px] md:h-[13px]"
              >
                <path
                  d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                  stroke="#fff"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="text-center text-[12px] md:text-[11px] text-[#6B6B65] mt-3 md:mt-1.5">
              No hidden fees · Cancel anytime · Live in 7 days
            </p>
          </div>

          {/* ── RIGHT ── */}
          <div className="bg-[#FAFAF8] border-t md:border-t-0 md:border-l border-[#E8E7E2] p-5 md:p-7 flex flex-col">
            <div className="mb-4 md:mb-3">
              <div className="text-[12px] md:text-[10px] font-semibold uppercase tracking-widest text-[#6B6B65] mb-1 md:mb-0.5">
                Everything Included
              </div>
              <div className="font-['Sora',sans-serif] text-[18px] md:text-[16px] font-semibold text-[#6B6B65] mb-1 md:mb-0">
                All features, every plan.
              </div>
              <div className="text-[14px] md:text-[12px] text-[#6B6B65] leading-[1.4] md:leading-normal">
                No feature tiers. No upsells. Everything below from day one.
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-1 md:gap-0">
              {features.map(({ label, tag }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 md:gap-2 px-2 py-[8px] md:py-[5.5px] rounded-[7px] hover:bg-black/[0.03] transition-colors"
                >
                  <div className="w-5 h-5 md:w-4 md:h-4 rounded-full bg-[#E2F5EE] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="md:w-[8px] md:h-[8px]"
                    >
                      <path
                        d="M1.5 5l2.3 2.3 4.7-4.7"
                        stroke="#0A6B49"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[15px] md:text-[13px] text-[#111110] leading-[1.4] md:leading-snug">
                    {label}
                    {tag && (
                      <span className="ml-1.5 md:ml-1 inline-block bg-[#FEF0E8] border border-orange-200 text-[#C24E18] text-[9px] md:text-[8px] font-semibold px-2 py-[2px] md:px-1.5 md:py-[1px] rounded-full uppercase tracking-wide align-middle">
                        {tag}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-5 md:mt-3 pt-4 md:pt-3 border-t border-[#E8E7E2] flex items-center gap-2">
              <div className="flex">
                {(
                  [
                    ["R", "#F36525"],
                    ["A", "#0A6B49"],
                    ["S", "#1D4ED8"],
                  ] as [string, string][]
                ).map(([l, c], i) => (
                  <div
                    key={i}
                    className="w-[26px] h-[26px] md:w-[22px] md:h-[22px] rounded-full flex items-center justify-center text-[10px] md:text-[8.5px] font-bold text-white font-['Sora',sans-serif] border-2 border-[#FAFAF8]"
                    style={{
                      background: c,
                      marginRight: i < 2 ? "-7px" : 0,
                      zIndex: 3 - i,
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div className="text-[13px] md:text-[11.5px] text-[#6B6B65] leading-snug ml-3 md:ml-3">
                <strong className="text-[#111110]">112+ businesses</strong>{" "}
                already running
                <br />
                on Presswayy automation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
