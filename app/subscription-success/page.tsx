"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SubscriptionSuccess() {
  const searchParams = useSearchParams();

  const tranId = searchParams.get("tran_id") || "";
  const clientId = searchParams.get("client_id") || "";
  const amount = searchParams.get("amount") || "";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-9 w-9 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-green-50 text-green-600 mb-4 uppercase">
          Payment Successful
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Subscription Active
        </h1>

        <p className="text-sm text-slate-500 mb-6">
          Your monthly subscription is now active. Thank you for staying with
          Presswayy!
        </p>

        {/* Receipt Details */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-left space-y-3 mb-6">
          {amount && (
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-slate-500">Amount Paid</span>
              <span className="text-sm font-bold text-slate-900">
                ৳{Number(amount).toLocaleString()}
              </span>
            </div>
          )}

          {tranId && (
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-slate-500">Transaction ID</span>
              <span className="text-xs font-medium text-slate-700 break-all text-right ml-4">
                {tranId}
              </span>
            </div>
          )}

          {clientId && (
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-slate-500">Client ID</span>
              <span className="text-xs font-medium text-slate-700 break-all text-right ml-4">
                {clientId}
              </span>
            </div>
          )}
        </div>

        {/* Back Button */}
        <a
          href="/"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-[16px] font-bold text-white bg-[#5a4cc2] rounded-xl hover:bg-[#4a3da8] focus:outline-none focus:ring-4 focus:ring-[#5a4cc2]/20 transition-all shadow-md hover:shadow-lg"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default function SubscriptionSuccessPage() {
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
      <SubscriptionSuccess />
    </Suspense>
  );
}
