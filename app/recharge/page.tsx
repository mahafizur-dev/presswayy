"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// ── Option picker: customer chooses Recharge or Subscription ──
function OptionSelector({
  selected,
  clientId,
  onSelect,
}: {
  selected: "payg" | "monthly" | null;
  clientId: string;
  onSelect: (key: "payg" | "monthly") => void;
}) {
  const router = useRouter();

  const go = (path: string) => {
    const qs = clientId.trim()
      ? `?client=${encodeURIComponent(clientId.trim())}`
      : "";
    router.push(path + qs);
  };

  const options = [
    {
      key: "payg" as const,
      path: "/recharge",
      title: "AI Recharge",
      desc: "Pay as you go, per reply",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      key: "monthly" as const,
      path: "/subscription",
      title: "Monthly Subscription",
      desc: "Fixed ৳3000 every month",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
    },
  ];

  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-slate-500 mb-3 text-center uppercase tracking-wider">
        Choose an option
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => {
          const isActive = selected === opt.key;
          const handleClick = () => {
            if (opt.key === "monthly") {
              go(opt.path); // subscription is a separate page
            } else {
              onSelect(opt.key); // reveal recharge form in place
            }
          };
          return (
            <button
              key={opt.key}
              type="button"
              onClick={handleClick}
              className={`relative flex flex-col items-start text-left p-4 rounded-2xl border-2 transition-all ${
                isActive
                  ? "border-[#5a4cc2] bg-indigo-50/50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {/* Radio indicator */}
              <span
                className={`absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  isActive ? "border-[#5a4cc2]" : "border-slate-300"
                }`}
              >
                {isActive && (
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5a4cc2]" />
                )}
              </span>

              <span
                className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg ${
                  isActive
                    ? "bg-[#5a4cc2] text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {opt.icon}
                </svg>
              </span>

              <span className="text-sm font-bold text-slate-900">
                {opt.title}
              </span>
              <span className="text-xs text-slate-500">{opt.desc}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RechargeForm() {
  const searchParams = useSearchParams();

  const [clientId, setClientId] = useState("");
  const [isClientReadonly, setIsClientReadonly] = useState(false);
  const [paygAmount, setPaygAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<"payg" | "monthly" | null>(null);

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

    const val = Number(paygAmount.trim());
    if (!val || val < 500) {
      alert("Please enter at least ৳500 for recharge.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/recharge/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId.trim(),
          amount: paygAmount.trim(),
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
            {selected === "payg" ? "Pay As You Go" : "Choose Payment"}
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            {selected === "payg"
              ? "Recharge Balance"
              : "How would you like to pay?"}
          </h1>

          <p className="text-sm text-slate-500">
            {selected === "payg"
              ? "Recharge any amount. Charges apply per AI reply. Minimum recharge ৳500."
              : "Select a payment option below to continue."}
          </p>
        </div>

        {/* Option Selector (customer chooses) */}
        <OptionSelector
          selected={selected}
          clientId={clientId}
          onSelect={setSelected}
        />

        {selected === "payg" && (
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

            {/* Amount Input */}
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-semibold text-slate-800 mb-2"
              >
                Recharge Amount <span className="text-red-500">*</span>
              </label>

              <div className="relative rounded-xl shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-slate-500 font-medium text-lg">৳</span>
                </div>

                <input
                  type="number"
                  id="amount"
                  min="500"
                  step="1"
                  required
                  inputMode="numeric"
                  placeholder="500, 1000, 2000"
                  value={paygAmount}
                  onChange={(e) => setPaygAmount(e.target.value)}
                  className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5a4cc2]/20 focus:border-[#5a4cc2] transition-colors text-lg font-medium bg-slate-50 focus:bg-white"
                />
              </div>

              <p className="mt-2 text-xs text-slate-500 text-right">
                Min: ৳500
              </p>
            </div>

            {/* Features List */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <ul className="space-y-2">
                {["Only pay for what you use", "Balance never expires"].map(
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
                {isLoading ? "Processing..." : "Proceed to Payment"}

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
        )}
      </div>
    </div>
  );
}

export default function RechargePage() {
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
      <RechargeForm />
    </Suspense>
  );
}
