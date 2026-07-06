"use client";

import React, { useEffect, useRef, useState } from "react";

type ChatMessage = {
  from: "user" | "ai";
  text?: string;
  image?: string; // customer-er pathano product screenshot
};

const MESSAGES: ChatMessage[] = [
  {
    from: "user",
    image: "/product.jpeg", // public folder-e apnar product image din
    text: "Eta ki available?",
  },
  {
    from: "ai",
    text: "Yes! This one is in stock ✅ Price is ৳1,250 with free delivery inside Dhaka.",
  },
  { from: "user", text: "Great! Cash on delivery ache?" },
  {
    from: "ai",
    text: "Of course! COD available all over Bangladesh. Just share your address to confirm the order 😊",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Each message = 2 steps: typing → message shown
  // step 0 = empty, step 2*i+1 = typing for msg i, step 2*i+2 = msg i shown
  const totalSteps = MESSAGES.length * 2;
  const [chatStep, setChatStep] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (chatStep >= totalSteps) {
      // pause → fade out → restart, so the loop feels continuous
      const pause = setTimeout(() => setFadingOut(true), 2500);
      return () => clearTimeout(pause);
    }
    // odd step = typing duration, even step = read delay before next typing
    const delay = chatStep % 2 === 0 ? 900 : 1300;
    const t = setTimeout(() => setChatStep((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [chatStep, totalSteps]);

  useEffect(() => {
    if (!fadingOut) return;
    const t = setTimeout(() => {
      setChatStep(0);
      setFadingOut(false);
    }, 500);
    return () => clearTimeout(t);
  }, [fadingOut]);

  const TypingDots = () => (
    <span className="flex gap-1.5 items-center px-1 py-1">
      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-white [animation-delay:0ms]" />
      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-white [animation-delay:200ms]" />
      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-white [animation-delay:400ms]" />
    </span>
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-black min-h-screen flex flex-col overflow-hidden"
    >
      {/* Bubble + typing animations */}
      <style>{`
        @keyframes bubbleIn {
          0% { opacity: 0; transform: translateY(14px) scale(0.85); }
          55% { opacity: 1; transform: translateY(-3px) scale(1.03); }
          75% { transform: translateY(1px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .bubble-in {
          animation: bubbleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes typingPulse {
          0%, 60%, 100% { opacity: 0.35; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-3px); }
        }
        .typing-dot {
          animation: typingPulse 1.2s ease-in-out infinite;
        }
      `}</style>

      {/* Background image + dark overlay (Manychat style) */}
      <div className="absolute inset-0 z-0">
        {/* Apnar nijer hero image ekhane boshan */}
        <img
          src="/hero.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 pt-28 md:pt-32 pb-20"
      >
        <div className="max-w-2xl">
          {/* Main Heading — big, extra-bold, left aligned */}
          <h1 className="text-white font-extrabold tracking-tight text-[36px] leading-[1.1] md:text-[60px] lg:text-[70px] mb-6 md:mb-8">
            Your business inbox, empowered
            <br className="hidden md:block" /> &amp; automated with AI
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-[17px] md:text-[20px] leading-relaxed max-w-xl mb-8 md:mb-10 font-medium">
            Works with Facebook pages, Instagram pages &amp; WhatsApp.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
            className="inline-block w-full sm:w-auto bg-[#ff4e33] hover:bg-[#e63e26] text-white text-[16px] font-medium px-8 py-3.5 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Connect with Presswayy
          </button>
        </div>
      </div>

      {/* Floating chat bubbles — animated conversation */}
      <div
        className={`hidden md:flex flex-col gap-3 absolute right-[8%] bottom-[12%] z-10 min-h-[380px] w-[340px] justify-end transition-opacity duration-500 ${
          fadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {MESSAGES.map((msg, i) => {
          const typingStep = 2 * i + 1;
          if (chatStep < typingStep) return null;
          const isTyping = chatStep === typingStep;
          const isUser = msg.from === "user";

          return isUser ? (
            <div key={i} className="flex items-end gap-2 bubble-in self-start">
              <div className="w-9 h-9 rounded-full bg-gray-500 shrink-0 overflow-hidden flex items-end justify-center">
                {/* User avatar icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="#e5e7eb"
                  className="w-7 h-7"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8.5" r="4" />
                  <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7v1H4v-1z" />
                </svg>
              </div>
              <div className="bg-[#3a3a3c] text-white text-[15px] rounded-2xl rounded-bl-sm max-w-[260px] overflow-hidden">
                {isTyping ? (
                  <span className="block px-4 py-3">
                    <TypingDots />
                  </span>
                ) : (
                  <>
                    {/* Customer-er pathano product screenshot */}
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="Product screenshot"
                        className="w-full h-[140px] object-cover"
                      />
                    )}
                    {msg.text && (
                      <span className="block px-4 py-3">{msg.text}</span>
                    )}
                  </>
                )}
              </div>
            </div>
          ) : (
            <div
              key={i}
              className="self-end bg-[#7c3aed] text-white text-[15px] px-4 py-3 rounded-2xl rounded-br-sm max-w-[280px] bubble-in"
            >
              {isTyping ? <TypingDots /> : msg.text}
            </div>
          );
        })}
      </div>
    </section>
  );
}
