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
      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden py-16 sm:py-24">
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM54 2v54H2V2h52z' fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column: Video Content Area */}
            <div
              className={`w-full flex justify-center lg:justify-start transition-all duration-1000 ease-out ${
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="relative w-full max-w-md bg-white flex items-center justify-center group">
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
              className={`flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 transition-all duration-1000 delay-300 ease-out ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="font-['Times_New_Roman',_sans-serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1221] tracking-tight leading-[1.15]">
                Resources to help you automate faster and grow smarter.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Explore our expert guides, video tutorials, templates, and tools
                everything you need to launch, automate, and scale your business
                with AI.
              </p>

              <div className="pt-2">
                {/* 💡 FIX: Button 1 Updated */}
                <button
                  onClick={() =>
                    window.dispatchEvent(new Event("openAuthModal"))
                  }
                  className="px-8 py-3.5 bg-[#FF5733] hover:bg-[#E84E2D] text-white text-lg font-semibold rounded-md transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden py-16 sm:py-24">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM54 2v54H2V2h52z' fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text Content Area */}
            <div
              className={`flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 transition-all duration-1000 ease-out ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="font-['Times_New_Roman',_sans-serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1221] tracking-tight leading-[1.15]">
                Seamless integration with your existing workflow.
              </h2>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Connect effortlessly with the tools you already use. Our
                platform is designed to fit right into your ecosystem, ensuring
                smooth data flow and uninterrupted productivity without any
                complex setups.
              </p>

              <div className="pt-2">
             
                <button
                  onClick={() =>
                    window.dispatchEvent(new Event("openAuthModal"))
                  }
                  className="px-8 py-3.5 bg-[#FF5733] hover:bg-[#E84E2D] text-white text-lg font-semibold rounded-md transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
                >
                  Get Started
                </button>
              </div>
            </div>

        
            <div
              className={`w-full flex justify-center lg:justify-end order-first lg:order-last transition-all duration-1000 delay-300 ease-out ${
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative w-full max-w-md bg-white flex items-center justify-center group">
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

      <section className="relative bg-white py-12 sm:py-24 overflow-hidden flex items-center justify-center">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM54 2v54H2V2h52z' fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2
            className={`font-['Times_New_Roman',_sans-serif] text-3xl sm:text-3xl lg:text-5xl font-serif font-bold text-[#0B1221] tracking-tight leading-[1.1] mb-4 transition-all duration-1000 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Speak into their language automatically
          </h2>

          <p
            className={`text-lg sm:text-xl lg:text-2xl text-[#0B1221] max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-300 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Automatically respond in English, Bangla, Banglish or any other
            language
          </p>

          <div
            className={`transition-all duration-1000 delay-500 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* 💡 FIX: Button 3 Updated */}
            <button
              onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
              className="px-8 py-3.5 bg-[#FF5733] hover:bg-[#E84E2D] text-white text-lg font-semibold rounded-md transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
