"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#ff4e33]/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-lg w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 text-center relative z-10 animate-in zoom-in-95 fade-in duration-700">

       

        {/* Welcome Text */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Welcome to Presswayy!
        </h1>
        <p className="text-slate-500 text-base md:text-lg mb-10 leading-relaxed">
          We are thrilled to have you onboard. Let's get your business set up
          and ready to scale. Your journey to success starts here!
        </p>

    
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 w-full bg-[#ff4e33] hover:bg-[#e63e26] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          Proceed to Dashboard <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
