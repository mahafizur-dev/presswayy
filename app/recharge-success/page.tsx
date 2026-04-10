"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [plan, setPlan] = useState("");
  const [tranId, setTranId] = useState("");

  useEffect(() => {
    // URL থেকে পেমেন্টের তথ্যগুলো নেওয়া
    const planFromUrl = searchParams.get("plan");
    const tranIdFromUrl = searchParams.get("tran_id");

    if (planFromUrl) setPlan(planFromUrl);
    if (tranIdFromUrl) setTranId(tranIdFromUrl);

    // কনফেটি (Confetti) ইফেক্ট বা অন্য কোনো ট্র্যাকিং ইভেন্ট এখানে দিতে পারেন
  }, [searchParams]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        {/* Success Icon & Header */}
        <div className="bg-green-50 px-6 py-8 text-center">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 shadow-sm ring-4 ring-white">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Payment Successful!
          </h2>
          <p className="text-green-700 text-[15px]">
            Thank you for your recharge. Your Presswayy plan has been
            successfully activated.
          </p>
        </div>

        {/* Transaction Details */}
        <div className="px-6 py-6 border-t border-slate-100 bg-slate-50/50">
          <div className="space-y-4">
            {plan && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-500">
                  Selected Plan
                </span>
                <span className="text-sm font-bold text-slate-900 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
                  {plan === "PAYG" ? "Pay As You Go" : plan}
                </span>
              </div>
            )}

            {tranId && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-500">
                  Transaction ID
                </span>
                <span className="text-sm font-mono text-slate-700 truncate max-w-[150px] sm:max-w-[200px]">
                  {tranId}
                </span>
              </div>
            )}

            <div className="flex justify-between items-center pt-4 border-t border-slate-200/60 mt-2">
              <span className="text-sm font-medium text-slate-500">Status</span>
              <span className="text-sm font-bold text-green-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-6 bg-white flex flex-col sm:flex-row gap-3">
          <Link
            href="/dashboard"
            className="flex-1 flex justify-center items-center px-4 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-[#5a4cc2] hover:bg-[#4f43a8] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5a4cc2]"
          >
            Go to Dashboard
          </Link>
          <button
            onClick={() => window.print()}
            className="flex-1 flex justify-center items-center px-4 py-3 border border-slate-200 text-sm font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5a4cc2]"></div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
