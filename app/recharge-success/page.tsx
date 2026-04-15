"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();

  const [tranId, setTranId] = useState("");
  const [clientId, setClientId] = useState("");
  const [amount, setAmount] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // URL থেকে ডেটা নেওয়া
    const tranIdFromUrl = searchParams.get("tran_id");
    const clientIdFromUrl = searchParams.get("client_id");
    const amountFromUrl = searchParams.get("amount");

    if (tranIdFromUrl) setTranId(tranIdFromUrl);
    if (clientIdFromUrl) setClientId(clientIdFromUrl);
    if (amountFromUrl) setAmount(amountFromUrl);

    // বর্তমান তারিখ ও সময় সেট করা (রিসিটের জন্য)
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentDate(formattedDate);
  }, [searchParams]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 font-sans bg-slate-50 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        {/* Success Header & Amount */}
        <div className="bg-gradient-to-b from-green-50 to-white px-6 pt-10 pb-6 text-center">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-5 shadow-sm ring-4 ring-white">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-1">
            Payment Successful
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Your wallet has been recharged successfully.
          </p>

          {/* Amount Display */}
          {amount && (
            <div className="inline-block bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
              <span className="text-sm font-semibold text-slate-500 mr-1">
                BDT
              </span>
              <span className="text-4xl font-black text-slate-800 tracking-tight">
                {Number(amount).toLocaleString()}
              </span>
            </div>
          )}
        </div>

        {/* Detailed Receipt Section */}
        <div className="px-8 py-6">
          <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">
            Transaction Details
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">Type</span>
              <span className="text-sm font-bold text-slate-800">
                Wallet Recharge
              </span>
            </div>

            {clientId && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-500">
                  Client ID
                </span>
                <span className="text-sm font-mono text-slate-700 font-medium">
                  {clientId}
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

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">
                Date & Time
              </span>
              <span className="text-sm font-medium text-slate-700">
                {currentDate || "Processing..."}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">
                Gateway
              </span>
              <span className="text-sm font-medium text-slate-700">
                SSLCommerz
              </span>
            </div>

            {/* Dotted Line Divider */}
            <div className="border-t-2 border-dashed border-slate-200 my-4"></div>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">Status</span>
              <span className="text-sm font-bold text-green-600 flex items-center gap-1.5 bg-green-50 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Completed
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 flex justify-center items-center px-4 py-3.5 text-sm font-bold rounded-xl text-white bg-[#ff4d2d] hover:bg-[#e64022] transition-colors focus:outline-none focus:ring-4 focus:ring-red-500/20 shadow-md hover:shadow-lg"
          >
            Done
          </Link>
          <button
            onClick={() => window.print()}
            className="flex-1 flex justify-center items-center gap-2 px-4 py-3.5 border border-slate-200 text-sm font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors focus:outline-none shadow-sm hover:shadow"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Download Receipt
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
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff4d2d]"></div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
