"use client";

import React, { Suspense } from "react";
import { XCircle, ArrowLeft, Home, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// 1. Fail Details Component
function FailUI() {
  const searchParams = useSearchParams();
  const tranId = searchParams.get("tran_id");

  return (
    <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(255,0,0,0.05)] border border-red-100/50 text-center relative z-10 animate-in fade-in zoom-in-95 duration-500">
      {/* Error Icon with Pulse Effect */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-red-50 p-4 rounded-full border border-red-100">
            <XCircle className="w-16 h-16 text-red-500" />
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <h1 className="text-3xl font-bold text-[#0a1435] mb-3 tracking-tight">
        Payment Failed!
      </h1>
      <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
        Unfortunately, your transaction could not be completed. This might be
        due to a network issue, insufficient funds, or a cancelled request.
      </p>

      {/* Transaction Details Card (Optional) */}
      {tranId && (
        <div className="bg-red-50/50 rounded-2xl p-4 mb-6 border border-red-100/50 text-left flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
          <div>
            <span className="text-xs text-red-400 font-bold uppercase tracking-wider block mb-1">
              Attempted Transaction ID
            </span>
            <div className="text-red-900 font-mono font-medium text-[14px] break-all">
              {tranId}
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 w-full bg-[#0a1435] hover:bg-[#112052] text-white font-medium py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          <ArrowLeft className="w-4 h-4" /> Try Again from Dashboard
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-50 text-gray-600 hover:text-[#0a1435] font-medium py-3.5 rounded-xl border border-gray-200 transition-all duration-300 active:scale-[0.98]"
        >
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}

// 2. Main Page Component
export default function PaymentFailPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 md:p-6 relative font-sans overflow-hidden">
      {/* Background Decoration (Modern Blurred Blobs - Red Theme) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] opacity-60"></div>
      </div>

      {/* 3. Suspense Boundary */}
      <Suspense
        fallback={
          <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center relative z-10">
            <div className="w-16 h-16 border-4 border-gray-100 border-t-red-500 rounded-full animate-spin mx-auto mb-6"></div>
            <h2 className="text-xl font-bold text-[#0a1435] mb-2">
              Loading Details
            </h2>
            <p className="text-gray-500 text-sm animate-pulse">
              Please wait a moment...
            </p>
          </div>
        }
      >
        <FailUI />
      </Suspense>
    </div>
  );
}
