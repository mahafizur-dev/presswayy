"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();

  const tranId = searchParams.get("tran_id") || "—";
  const clientId = searchParams.get("client_id") || "—";
  const amount = searchParams.get("amount") || "0";
  const pageName = searchParams.get("page_name") || "—";

  const paid = Number(amount) || 0;
  // total_amount already includes 5% VAT at checkout → work backwards for display
  const base = paid / 1.05;
  const vat = paid - base;

  const money = (n: number) =>
    n.toLocaleString("en-BD", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const dateStr = new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 font-sans flex justify-center">
      <div className="w-full max-w-md">
        {/* Success card */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-lg p-8 text-center">
          {/* Animated check */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-9 w-9 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Payment Successful 🎉
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Welcome aboard! Your onboarding fee has been received and your
            account is being set up.
          </p>

          {/* Invoice */}
          <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden text-left">
            <div className="flex items-center justify-between bg-slate-50 px-5 py-3 border-b border-slate-200">
              <span className="text-sm font-bold text-slate-900">Invoice</span>
              <span className="text-xs text-slate-500">{dateStr}</span>
            </div>

            <div className="px-5 py-4 space-y-3 text-sm">
              <Row label="Transaction ID" value={tranId} mono />
              <Row label="Client ID" value={clientId} mono />
              <Row label="Page Name" value={pageName} />
              <Row label="Status">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                  Paid
                </span>
              </Row>

              <div className="border-t border-dashed border-slate-200 pt-3 space-y-2">
                <Row label="Onboarding Fee" value={`৳${money(base)}`} />
                <Row label="VAT (5%)" value={`৳${money(vat)}`} />
              </div>

              <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">
                  Total Paid
                </span>
                <span className="text-lg font-extrabold text-slate-900">
                  ৳{money(paid)}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 print:hidden">
            <button
              onClick={() => window.print()}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
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
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Download Invoice
            </button>

            <a
              href="/"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-[16px] font-bold text-white bg-[#ff4d2d] rounded-xl hover:bg-[#e64022] transition-all shadow-md hover:shadow-lg"
            >
              Continue
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          A confirmation has been sent to your email. Need help? Contact
          support@presswayy.com
        </p>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  children,
  mono,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-500">{label}</span>
      {children ?? (
        <span
          className={`text-slate-900 font-medium text-right break-all ${
            mono ? "font-mono text-xs" : ""
          }`}
        >
          {value}
        </span>
      )}
    </div>
  );
}

export default function OnboardingSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500 animate-pulse">Loading receipt...</p>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
