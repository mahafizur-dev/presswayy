"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  from: "user" | "ai";
  text?: string;
  image?: string;
};

const MESSAGES: ChatMessage[] = [
  { from: "user", text: "hi" },
  {
    from: "ai",
    text: "hello, how can I help you",
  },
  { from: "user", image: "/product.jpeg", text: "Eta ki available?" },
  {
    from: "ai",
    text: "Yes! This one is in stock.",
  },
  { from: "user", text: "Great! Cash on delivery ache?" },
  {
    from: "ai",
    text: "Of course! COD available all over Bangladesh😊",
  },
];

const TIMING = {
  typing: 900,
  read: 1300,
  hold: 2500,
  fade: 500,
} as const;

function TypingDots() {
  return (
    <span className="flex items-center gap-1.5 px-1 py-1">
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white [animation-delay:0ms]" />
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white [animation-delay:200ms]" />
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white [animation-delay:400ms]" />
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const totalSteps = MESSAGES.length * 2;
  const [chatStep, setChatStep] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (chatStep >= totalSteps) {
      const pause = setTimeout(() => setFadingOut(true), TIMING.hold);
      return () => clearTimeout(pause);
    }
    const delay = chatStep % 2 === 0 ? TIMING.typing : TIMING.read;
    const t = setTimeout(() => setChatStep((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [chatStep, totalSteps, inView]);

  useEffect(() => {
    if (!fadingOut) return;
    const t = setTimeout(() => {
      setChatStep(0);
      setFadingOut(false);
    }, TIMING.fade);
    return () => clearTimeout(t);
  }, [fadingOut]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-dvh flex-col overflow-hidden bg-black"
    >
      {/* Background Images — viewport-anchored (h-dvh) so content growth never restretches/shifts it */}
      <div className="absolute inset-x-0 top-0 z-0 h-dvh">
        <Image
          src="/hero-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90 lg:hidden"
        />

        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-[80%_center] opacity-90 lg:block"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"
            style={{
              background:
                "radial-gradient(circle at 75% 50%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 60%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-12 pt-28 sm:px-6 md:px-12 md:pt-32">
        <div className="flex w-full max-w-[950px] flex-col lg:flex-row lg:items-center lg:gap-10 xl:gap-16">
          <div className="w-full max-w-[540px] shrink-0">
            <h1 className="font-['Times_New_Roman',_sans-serif] mb-6 text-[32px] font-extrabold leading-[1.15] tracking-tight text-white md:mb-8 md:text-[54px] md:leading-[1.1] lg:text-[72px]">
              Your business inbox, empowered <br className="hidden lg:block" />
              &amp; automated with AI
            </h1>

            <p className="mb-8 max-w-xl text-[14px] leading-relaxed text-white/90 md:mb-10 md:text-[18px]">
              Works with Facebook pages, Instagram pages &amp; WhatsApp.
            </p>

            <div>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
                className="w-auto rounded-lg bg-[#ff4e33] px-5 py-2.5 text-sm font-medium text-white shadow-md transition-colors duration-300 hover:bg-[#e63e26] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4e33] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:px-8 md:py-3.5 md:text-base"
              >
                Connect with Presswayy
              </button>
            </div>
          </div>

          {/* Chat Block - fixed height so bubbles never reflow the section */}
          <div className="mt-12 flex w-full max-w-[340px] shrink-0 flex-col justify-end gap-3 transition-opacity duration-500 lg:mt-0">
            <div
              aria-hidden="true"
              className={`flex h-[460px] w-full flex-col justify-end gap-3 overflow-hidden ${
                fadingOut ? "opacity-0" : "opacity-100"
              }`}
            >
              {MESSAGES.map((msg, i) => {
                const typingStep = 2 * i + 1;
                if (chatStep < typingStep) return null;
                const isTyping = chatStep === typingStep;
                const isUser = msg.from === "user";

                return isUser ? (
                  <div
                    key={i}
                    className="bubble-in flex items-end gap-2 self-start"
                  >
                    <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src="/user-avatar.jpg"
                        alt=""
                        width={36}
                        height={36}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="max-w-[260px] overflow-hidden rounded-2xl rounded-bl-sm bg-[#3a3a3c] text-[15px] text-white">
                      {isTyping ? (
                        <span className="block px-4 py-3">
                          <TypingDots />
                        </span>
                      ) : (
                        <>
                          {msg.image && (
                            <Image
                              src={msg.image}
                              alt=""
                              width={260}
                              height={140}
                              className="h-[140px] w-full object-cover"
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
                    className="bubble-in max-w-[280px] self-end rounded-2xl rounded-br-sm bg-[#7c3aed] px-4 py-3 text-[15px] text-white"
                  >
                    {isTyping ? <TypingDots /> : msg.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
