"use client";

import React, { Suspense } from "react";
import { CheckCircle2, ArrowRight, Home, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// 1. Payment Details Component
function PaymentDetails() {
  const searchParams = useSearchParams();
  const tranId = searchParams.get("tran_id") || "Check Email Receipt";
  const amount = searchParams.get("amount");

  return (
    <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100/50 text-center relative z-10 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-green-50 p-4 rounded-full border border-green-100">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <h1 className="text-3xl font-bold text-[#0a1435] mb-3 tracking-tight">
        Payment Successful!
      </h1>
      <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
        Thank you for choosing Presswayy. Your account setup is currently in
        progress. We've sent a receipt to your email.
      </p>

      {/* Transaction Details Card */}
      <div className="bg-gray-50/80 rounded-2xl p-6 mb-6 border border-gray-100 text-left space-y-4">
        {/* Transaction ID */}
        <div>
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">
            Transaction ID
          </span>
          <div className="text-[#0a1435] font-mono font-bold text-[15px] break-all bg-white px-3 py-2 rounded-lg border border-gray-100">
            {tranId}
          </div>
        </div>

        {/* Amount Paid (If available in URL) */}
        {amount && (
          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">
              Amount Paid
            </span>
            <div className="text-[#0a1435] font-bold text-[15px] bg-white px-3 py-2 rounded-lg border border-gray-100">
              ৳ {amount}
            </div>
          </div>
        )}
      </div>

      {/* SSL Secured Badge */}
      <div className="flex items-center justify-center gap-2 mb-8 bg-green-50/50 py-2.5 rounded-lg border border-green-100/50">
        <ShieldCheck className="w-4 h-4 text-green-600" />
        <span className="text-xs font-bold tracking-wider text-green-700">
          100% SECURED BY SSLCOMMERZ
        </span>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 w-full bg-[#ff4e33] hover:bg-[#e63e26] text-white font-medium py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Back to Dashboard <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-50 text-gray-600 hover:text-[#0a1435] font-medium py-3.5 rounded-xl border border-gray-200 transition-all duration-300"
        >
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}

// 2. Main Page Component
export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 md:p-6 relative font-sans overflow-hidden">
      {/* Background Decoration (Modern Blurred Blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ff4e33]/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] opacity-60"></div>
      </div>

      {/* 3. Suspense Boundary */}
      <Suspense
        fallback={
          <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center relative z-10">
            <div className="w-16 h-16 border-4 border-gray-100 border-t-[#ff4e33] rounded-full animate-spin mx-auto mb-6"></div>
            <h2 className="text-xl font-bold text-[#0a1435] mb-2">
              Verifying Payment
            </h2>
            <p className="text-gray-500 text-sm animate-pulse">
              Please wait while we confirm your transaction...
            </p>
          </div>
        }
      >
        <PaymentDetails />
      </Suspense>
    </div>
  );
}
