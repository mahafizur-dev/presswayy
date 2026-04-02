"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface PaymentPanelProps {
  userName: string;
  userPhone: string;
  isPaid: boolean;
}

export default function PaymentPanel({
  userName,
  userPhone,
  isPaid,
}: PaymentPanelProps) {
  const [sslPlan, setSslPlan] = useState<"monthly" | "yearly">("monthly");
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = async (e: React.MouseEvent) => {
    e.stopPropagation();

    // 💡 ডাবল ক্লিক প্রোটেকশন
    if (isPaying) return;
    setIsPaying(true);

    try {
      const res = await fetch("/api/payment/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: sslPlan,
          name: userName,
          phone: userPhone,
        }),
      });

      // 💡 FIX 1: API ক্র্যাশ করলে বা 404 আসলে আগেই এরর থ্রো করবে (HTML পার্স করবে না)
      if (!res.ok) {
        throw new Error(`Server returned status: ${res.status}`);
      }

      const data = await res.json();

      // 💡 FIX 2: আমাদের নতুন API স্ট্রাকচার অনুযায়ী success এবং url চেক করা হচ্ছে
      if (data.success && data.url) {
        window.location.href = data.url;
      } else {
        console.error("Payment API Error Data:", data);
        toast.error(
          data.error || "Failed to initialize payment. Please try again.",
        );
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error("Network Error! Failed to connect to payment server.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    // 💡 FIX 3: মূল কন্টেইনারে stopPropagation দেওয়া হলো, যাতে ক্লিক করলে অ্যাকর্ডিয়ন বন্ধ না হয়ে যায়
    <div className="ssl-panel" onClick={(e) => e.stopPropagation()}>
      <div className="ssl-head">
        <div className="ssl-head-title">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path
              d="M7 0L0 2.8V7.5C0 11.55 3.01 15.22 7 16C10.99 15.22 14 11.55 14 7.5V2.8L7 0ZM7 4.1C8.05 4.1 8.9 4.95 8.9 6C8.9 6.8 8.4 7.5 7.7 7.8V10H6.3V7.8C5.6 7.5 5.1 6.8 5.1 6C5.1 4.95 5.95 4.1 7 4.1Z"
              fill="#F36525"
            />
          </svg>
          Complete Payment
        </div>
        <div className="ssl-secure-badge">🔒 SSL Secured</div>
      </div>

      <div className="ssl-body">
        {isPaid ? (
          <div className="bg-[#e4ffdb] border border-green-200 text-green-800 p-6 rounded-xl text-center animate-in zoom-in-95 duration-300">
            <span className="text-3xl block mb-2">🎉</span>
            <p className="font-bold text-lg">Payment Completed Successfully!</p>
            <p className="text-sm mt-1 opacity-80">
              Your subscription is now active.
            </p>
          </div>
        ) : (
          <>
            <div className="ssl-plan-row">
              <div
                className={`ssl-plan-opt ${sslPlan === "monthly" ? "ssl-selected" : ""}`}
                onClick={() => setSslPlan("monthly")}
              >
                <div className="ssl-plan-name">Monthly</div>
                <div className="ssl-plan-price">৳3,000</div>
                <div
                  style={{ fontSize: "11px", color: "var(--text-secondary)" }}
                >
                  per month
                </div>
              </div>
              <div
                className={`ssl-plan-opt ${sslPlan === "yearly" ? "ssl-selected" : ""}`}
                onClick={() => setSslPlan("yearly")}
              >
                <div className="ssl-plan-save">SAVE 18%</div>
                <div className="ssl-plan-name">Yearly</div>
                <div className="ssl-plan-price">৳29,500</div>
                <div
                  style={{ fontSize: "11px", color: "var(--text-secondary)" }}
                >
                  per year
                </div>
              </div>
            </div>

            <div className="ssl-summary">
              <div className="ssl-summary-lbl">Total amount</div>
              <div className="ssl-summary-amt">
                {sslPlan === "monthly" ? "৳3,000" : "৳29,500"}
              </div>
            </div>

            <button
              className={`ssl-pay-btn ${isPaying ? "opacity-70 cursor-not-allowed" : ""}`}
              disabled={isPaying}
              onClick={handlePayment}
            >
              {isPaying ? "Connecting securely..." : "Pay with SSLCommerz"}
            </button>

            <div className="ssl-logo-row">
              <span className="ssl-logo-pill">bKash</span>
              <span className="ssl-logo-pill">Nagad</span>
              <span className="ssl-logo-pill">Rocket</span>
              <span className="ssl-logo-pill">Card</span>
              <span className="ssl-logo-pill">Bank</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
