"use client";

import React, { useEffect, useState } from "react";

export default function ResourcesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="resources" className="min-h-screen w-full">
      {/* --- Section 1 --- */}
      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden py-20 sm:py-24">
        {" "}
        {/* 💡 Mobile py-12 -> py-20 */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM54 2v54H2V2h52z' fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full">
          {" "}
          {/* 💡 Mobile px-4 -> px-6 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-12 lg:gap-8 items-center">
            {" "}
            {/* 💡 Mobile gap-8 -> gap-12 */}
            {/* Left Column: Video */}
            <div
              className={`w-full flex justify-center lg:justify-start transition-all duration-1000 ease-out mb-10 lg:mb-0 ${
                // 💡 Added mb-10 for mobile
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="relative w-full max-w-md bg-white flex items-center justify-center group shadow-sm rounded-xl overflow-hidden">
                <video
                  className="w-full h-auto block"
                  src="https://res.cloudinary.com/drchxbdit/video/upload/v1774606342/conversation_pdog9x.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div
              className={`flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 sm:space-y-8 transition-all duration-1000 delay-300 ease-out ${
                // 💡 Mobile space-y-6 -> space-y-8
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="font-['Times_New_Roman',_sans-serif] text-[30px] sm:text-5xl lg:text-6xl font-bold text-[#0B1221] tracking-tight leading-[1.2] sm:leading-[1.15]">
                Resources to help you automate faster and grow smarter.
              </h1>

              <p className="text-[17px] sm:text-xl text-slate-600 max-w-2xl leading-[1.6] sm:leading-relaxed">
                Explore our expert guides, video tutorials, templates, and tools
                everything you need to launch, automate, and scale your business
                with AI.
              </p>

              <div className="pt-4 w-full sm:w-auto">
                {" "}
                {/* 💡 pt-2 -> pt-4 */}
                <button
                  onClick={() =>
                    window.dispatchEvent(new Event("openAuthModal"))
                  }
                  className="w-full sm:w-auto px-10 py-4 bg-[#FF5733] hover:bg-[#E84E2D] text-white text-[16px] sm:text-lg font-semibold rounded-md transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2 --- */}
      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden py-20 sm:py-24 border-t border-slate-50">
        {" "}
        {/* 💡 Mobile py-20 */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM54 2v54H2V2h52z' fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-12 lg:gap-8 items-center">
            {/* Left Column: Text */}
            <div
              className={`flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 sm:space-y-8 transition-all duration-1000 ease-out order-last lg:order-first ${
                // 💡 Added space-y-8
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="font-['Times_New_Roman',_sans-serif] text-[30px] sm:text-5xl lg:text-6xl font-bold text-[#0B1221] tracking-tight leading-[1.2] sm:leading-[1.15]">
                Seamless integration with your workflow.
              </h2>

              <p className="text-[17px] sm:text-xl text-slate-600 max-w-2xl leading-[1.6] sm:leading-relaxed">
                Connect effortlessly with the tools you already use. Our
                platform is designed to fit right into your ecosystem.
              </p>

              <div className="pt-4 w-full sm:w-auto">
                <button
                  onClick={() =>
                    window.dispatchEvent(new Event("openAuthModal"))
                  }
                  className="w-full sm:w-auto px-10 py-4 bg-[#FF5733] hover:bg-[#E84E2D] text-white text-[16px] sm:text-lg font-semibold rounded-md transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Right Column: Video */}
            <div
              className={`w-full flex justify-center lg:justify-end order-first lg:order-last transition-all duration-1000 delay-300 ease-out mb-10 lg:mb-0 ${
                // 💡 Added mb-10 for mobile
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative w-full max-w-md bg-white flex items-center justify-center group shadow-sm rounded-xl overflow-hidden">
                <video
                  className="w-full h-auto block"
                  src="https://res.cloudinary.com/drchxbdit/video/upload/v1774606342/conversation_pdog9x.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: CTA --- */}
      <section className="relative bg-white py-24 sm:py-32 overflow-hidden flex items-center justify-center">
        {" "}
        {/* 💡 Mobile py-12 -> py-24 */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM54 2v54H2V2h52z' fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2
            className={`font-['Times_New_Roman',_sans-serif] text-[32px] sm:text-4xl lg:text-5xl font-bold text-[#0B1221] tracking-tight leading-[1.2] mb-6 transition-all duration-1000 ease-out ${
              // 💡 Mobile text-[28px] -> [32px], mb-6
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Speak into their language automatically
          </h2>

          <p
            className={`text-[18px] sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-300 ease-out ${
              // 💡 mb-8 -> mb-12
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Automatically respond in English, Bangla, Banglish or any other
            language.
          </p>

          <div
            className={`w-full sm:w-auto transition-all duration-1000 delay-500 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
              className="w-full sm:w-auto px-10 py-4 bg-[#FF5733] hover:bg-[#E84E2D] text-white text-[16px] sm:text-lg font-semibold rounded-md transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
