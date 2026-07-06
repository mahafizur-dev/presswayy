"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// ── Monthly subscription plan (single plan) ──
const MONTHLY_PLAN = {
  id: "monthly",
  name: "Monthly Subscription",
  price: 3000,
  desc: "Unlimited AI replies, billed monthly",
};

function TabNav({
  active,
  clientId,
}: {
  active: "payg" | "monthly";
  clientId: string;
}) {
  const router = useRouter();

  const go = (path: string) => {
    const qs = clientId.trim()
      ? `?client=${encodeURIComponent(clientId.trim())}`
      : "";
    router.push(path + qs);
  };

  return (
    <div className="mb-6 grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl">
      <button
        type="button"
        onClick={() => go("/recharge")}
        className={`py-2.5 text-sm font-semibold rounded-lg transition-all ${
          active === "payg"
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        AI Recharge
      </button>

      <button
        type="button"
        onClick={() => go("/subscription")}
        className={`py-2.5 text-sm font-semibold rounded-lg transition-all ${
          active === "monthly"
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-500 hover:text-slate-700"
        }`}
      >
        Monthly Subscription Fee
      </button>
    </div>
  );
}

function SubscriptionForm() {
  const searchParams = useSearchParams();

  const [clientId, setClientId] = useState("");
  const [isClientReadonly, setIsClientReadonly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const clientFromUrl = searchParams.get("client");
    if (clientFromUrl) {
      setClientId(clientFromUrl);
      setIsClientReadonly(true);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientId.trim()) {
      alert("Client ID is required.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/subscription/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId.trim(),
          plan: MONTHLY_PLAN.id,
        }),
      });

      const data = await res.json();

      if (data.redirect) {
        window.location.href = data.redirect;
      } else {
        alert(
          "Error: " + (data.error || "Payment link could not be generated."),
        );
      }
    } catch (err: any) {
      alert("Failed to submit: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-lg p-8">
        {/* Header Section */}
        <div className="mb-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-indigo-50 text-indigo-600 mb-4 uppercase">
            Monthly Subscription
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            Subscribe Monthly
          </h1>

          <p className="text-sm text-slate-500">
            Pay your monthly subscription fee of ৳3000 to keep your service
            active.
          </p>
        </div>

        {/* Tabs (change the URL) */}
        <TabNav active="monthly" clientId={clientId} />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Client ID */}
          {!isClientReadonly && (
            <div>
              <label
                htmlFor="client_id"
                className="block text-sm font-semibold text-slate-800 mb-2"
              >
                Client ID <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                id="client_id"
                required
                placeholder="e.g. 7c6d1a7e-..."
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5a4cc2]/20 focus:border-[#5a4cc2] transition-colors bg-slate-50 focus:bg-white"
              />
            </div>
          )}

          {/* Fixed Plan Card */}
          <div className="flex items-center justify-between px-4 py-4 rounded-xl border-2 border-[#5a4cc2] bg-indigo-50/50">
            <div>
              <p className="text-sm font-bold text-slate-900">
                {MONTHLY_PLAN.name}
              </p>
              <p className="text-xs text-slate-500">{MONTHLY_PLAN.desc}</p>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-slate-900">
                ৳{MONTHLY_PLAN.price.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500">/month</p>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <ul className="space-y-2">
              {["One fixed fee, no surprises", "Auto-renews every month"].map(
                (feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-[13px] text-slate-600"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span>{feature}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-[16px] font-bold text-white bg-[#ff4d2d] rounded-xl hover:bg-[#e64022] focus:outline-none focus:ring-4 focus:ring-red-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {isLoading ? "Processing..." : "Subscribe Now"}

              {!isLoading && (
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
              )}
            </button>

            <p className="mt-4 text-xs text-center text-slate-500">
              <span className="font-medium text-slate-700">Note:</span> 5% VAT
              will be included during checkout.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function SubscriptionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-8 bg-[#5a4cc2] rounded-full mb-4"></div>
            <p className="text-slate-500">Loading checkout...</p>
          </div>
        </div>
      }
    >
      <SubscriptionForm />
    </Suspense>
  );
}
