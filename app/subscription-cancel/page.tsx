"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SubscriptionCancel() {
  const searchParams = useSearchParams();

  const clientId = searchParams.get("client_id") || "";

  const backHref = clientId
    ? `/subscription?client=${encodeURIComponent(clientId)}`
    : "/subscription";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-lg p-8 text-center">
        {/* Cancel Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
          <svg
            className="h-9 w-9 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-amber-50 text-amber-600 mb-4 uppercase">
          Payment Cancelled
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Subscription Cancelled
        </h1>

        <p className="text-sm text-slate-500 mb-6">
          You cancelled the payment and no charge was made. You can subscribe
          anytime.
        </p>

        {/* Actions */}
        <div className="space-y-3">
          <a
            href={backHref}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-[16px] font-bold text-white bg-[#5a4cc2] rounded-xl hover:bg-[#4a3da8] focus:outline-none focus:ring-4 focus:ring-[#5a4cc2]/20 transition-all shadow-md hover:shadow-lg"
          >
            Back to Subscription
          </a>

          <a
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-[15px] font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SubscriptionCancelPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-8 bg-[#5a4cc2] rounded-full mb-4"></div>
            <p className="text-slate-500">Loading...</p>
          </div>
        </div>
      }
    >
      <SubscriptionCancel />
    </Suspense>
  );
}
