"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function FailContent() {
  const searchParams = useSearchParams();
  const [tranId, setTranId] = useState("");

  useEffect(() => {
    // URL থেকে ফেইল হওয়া ট্রানজেকশন আইডি নেওয়া
    const tranIdFromUrl = searchParams.get("tran_id");
    if (tranIdFromUrl) setTranId(tranIdFromUrl);
  }, [searchParams]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        {/* Fail Icon & Header */}
        <div className="bg-red-50 px-6 py-8 text-center">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 mb-6 shadow-sm ring-4 ring-white">
            <svg
              className="h-10 w-10 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Payment Failed!
          </h2>
          <p className="text-red-700 text-[15px]">
            We couldn't process your payment. No money was deducted from your
            account.
          </p>
        </div>

        {/* Transaction Details */}
        <div className="px-6 py-6 border-t border-slate-100 bg-slate-50/50">
          <div className="space-y-4">
            <p className="text-sm text-slate-600 text-center mb-4">
              This usually happens due to incorrect card details, insufficient
              balance, or a temporary bank issue.
            </p>

            {tranId && (
              <div className="flex justify-between items-center py-3 border-t border-b border-slate-200/60">
                <span className="text-sm font-medium text-slate-500">
                  Transaction ID
                </span>
                <span className="text-sm font-mono text-slate-700 truncate max-w-[150px] sm:max-w-[200px]">
                  {tranId}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-6 bg-white flex flex-col gap-3">
          <Link
            href="/recharge"
            className="w-full flex justify-center items-center px-4 py-3.5 border border-transparent text-[15px] font-bold rounded-xl text-white bg-[#ff4d2d] hover:bg-[#e64022] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff4d2d] shadow-sm"
          >
            Try Again
          </Link>
          <Link
            href="/dashboard"
            className="w-full flex justify-center items-center px-4 py-3.5 border border-slate-200 text-[15px] font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PaymentFailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff4d2d]"></div>
        </div>
      }
    >
      <FailContent />
    </Suspense>
  );
}
