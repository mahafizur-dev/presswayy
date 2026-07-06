"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SubscriptionFail() {
  const searchParams = useSearchParams();

  const tranId = searchParams.get("tran_id") || "";
  const clientId = searchParams.get("client_id") || "";

  const retryHref = clientId
    ? `/subscription?client=${encodeURIComponent(clientId)}`
    : "/subscription";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-lg p-8 text-center">
        {/* Fail Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-9 w-9 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-red-50 text-red-600 mb-4 uppercase">
          Payment Failed
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Subscription Not Completed
        </h1>

        <p className="text-sm text-slate-500 mb-6">
          Your payment could not be processed and no charge was made. Please try
          again.
        </p>

        {/* Transaction ref */}
        {tranId && (
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-left mb-6">
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-slate-500">Transaction ID</span>
              <span className="text-xs font-medium text-slate-700 break-all text-right ml-4">
                {tranId}
              </span>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          <a
            href={retryHref}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-[16px] font-bold text-white bg-[#ff4d2d] rounded-xl hover:bg-[#e64022] focus:outline-none focus:ring-4 focus:ring-red-500/20 transition-all shadow-md hover:shadow-lg"
          >
            Try Again
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

export default function SubscriptionFailPage() {
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
      <SubscriptionFail />
    </Suspense>
  );
}
