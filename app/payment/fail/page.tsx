"use client";

import React, { Suspense } from "react";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function SuccessUI() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId");

  return (
    <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center animate-in fade-in zoom-in duration-500">
      <div className="flex justify-center mb-6">
        <div className="bg-green-50 p-4 rounded-full animate-bounce">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-[#0a1435] mb-3">
        পেমেন্ট সফল হয়েছে!
      </h1>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Presswayy-এর সাথে যুক্ত হওয়ার জন্য ধন্যবাদ। আপনার সার্ভিসটি দ্রুত চালু
        করার প্রক্রিয়া শুরু করা হয়েছে।
      </p>

      {/* ট্রানজাকশন ডিটেইলস কার্ড */}
      <div className="bg-[#f8f9fa] rounded-2xl p-6 mb-8 border border-gray-100 text-left">
        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">
          Transaction ID
        </span>
        <div className="text-[#0a1435] font-mono font-bold text-lg break-all">
          {transactionId || "TXN_PROCESSING"}
        </div>
      </div>

      {/* অ্যাকশন বাটনসমূহ */}
      <div className="space-y-3">
        <Link
          href="/platform"
          className="flex items-center justify-center gap-2 w-full bg-[#ff4e33] hover:bg-[#e63e26] text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-orange-100"
        >
          Go to Platform <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-50 text-[#0a1435] font-semibold py-4 rounded-xl border border-gray-200 transition-all"
        >
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}

/**
 * মেইন পেজ কম্পোনেন্ট
 */
export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-6 relative font-sans overflow-hidden">
      {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড এলিমেন্টস */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <Suspense
        fallback={
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 font-medium">প্রসেসিং হচ্ছে...</p>
          </div>
        }
      >
        <SuccessUI />
      </Suspense>
    </div>
  );
}
