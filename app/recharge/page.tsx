"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type PlanKey = "U500" | "U1000" | "U3000" | "PAYG";

interface Plan {
  key: PlanKey;
  badge: string;
  badgeAlt: boolean;
  title: string;
  price: string;
  priceSuffix: string;
  features: string[];
  amount?: number; // fixed amount for package plans (with VAT)
}

interface RechargePayload {
  client_id: string;
  amount: string;
  plan_choice: PlanKey;
}

interface RechargeResponse {
  redirect?: string;
  error?: string;
}

const PLANS: Plan[] = [
  {
    key: "U500",
    badge: "Package",
    badgeAlt: false,
    title: "Up to 500 users",
    price: "৳3,999",
    priceSuffix: "/ 30 days",
    features: ["Fixed 30-day cycle", "No per-reply fee"],
    amount: 4199,
  },
  {
    key: "U1000",
    badge: "Package",
    badgeAlt: false,
    title: "Up to 1,000 users",
    price: "৳7,499",
    priceSuffix: "/ 30 days",
    features: ["Fixed 30-day cycle", "No per-reply fee"],
    amount: 7874,
  },
  {
    key: "U3000",
    badge: "Package",
    badgeAlt: false,
    title: "Up to 2,500 users",
    price: "৳17,999",
    priceSuffix: "/ 30 days",
    features: ["Fixed 30-day cycle", "No per-reply fee"],
    amount: 18899,
  },
  {
    key: "PAYG",
    badge: "PAYG",
    badgeAlt: true,
    title: "Pay as you go",
    price: "৳0.75",
    priceSuffix: "/ AI reply",
    features: ["Recharge any amount (min ৳500)", "Charges apply per AI reply"],
  },
];


function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}


export default function RechargePage() {
  const searchParams = useSearchParams();

  const [clientId, setClientId] = useState("");
  const [clientLocked, setClientLocked] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanKey | null>(null);
  const [paygAmount, setPaygAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* Pre-fill client from ?client=... */
  useEffect(() => {
    const fromUrl = searchParams.get("client");
    if (fromUrl) {
      setClientId(fromUrl);
      setClientLocked(true);
    }
  }, [searchParams]);

  /* ── Submit ── */
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!selectedPlan) {
      setError("Please select a plan.");
      return;
    }
    if (!clientId.trim()) {
      setError("Client ID is required.");
      return;
    }

    let amount = "";

    if (selectedPlan === "PAYG") {
      const val = Number(paygAmount);
      if (!val || val < 500) {
        setError("Please enter at least ৳500 for PAYG.");
        return;
      }
      amount = paygAmount;
    } else {
      const plan = PLANS.find((p) => p.key === selectedPlan);
      amount = String(plan?.amount ?? "");
    }

    const payload: RechargePayload = {
      client_id: clientId.trim(),
      amount,
      plan_choice: selectedPlan,
    };

    try {
      setLoading(true);
      const res = await fetch("/recharge-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: RechargeResponse = await res.json();
      if (data.redirect) {
        window.location.href = data.redirect;
      } else {
        setError(data.error ?? "Payment link could not be generated.");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to submit.");
    } finally {
      setLoading(false);
    }
  }

  /* ── Render ── */
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .rc *{box-sizing:border-box;margin:0;padding:0}
        .rc{font-family:'DM Sans',sans-serif;background:#fff;min-height:100vh;color:#111827}

        /* NAV */
        .rc-nav{display:flex;align-items:center;justify-content:space-between;padding:0 2rem;height:54px;background:#fff;border-bottom:1px solid #E8E7E2;position:sticky;top:0;z-index:50}
        .rc-logo{font-family:'Sora',sans-serif;font-size:17px;font-weight:700;color:#111110;text-decoration:none;letter-spacing:-0.3px}
        .rc-logo span{color:#F36525}
        .rc-back{font-size:12px;padding:6px 14px;border:1px solid #D4D3CE;border-radius:8px;background:#fff;color:#3D3D3A;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:5px;transition:all 0.15s}
        .rc-back:hover{border-color:#F36525;color:#F36525;background:#FEF0E8}

        /* HERO */
        .rc-hero{background:#0E0E0C;padding:3rem 2rem 2.5rem}
        .rc-hero-inner{max-width:920px;margin:0 auto}
        .rc-eyebrow{display:inline-flex;align-items:center;gap:6px;background:rgba(243,101,37,0.15);border:1px solid rgba(243,101,37,0.3);border-radius:20px;padding:4px 12px;font-size:11px;font-weight:600;color:#F36525;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:1rem}
        .rc-hero h1{font-family:'Sora',sans-serif;font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:800;color:#fff;letter-spacing:-0.6px;line-height:1.15;margin-bottom:0.6rem}
        .rc-hero h1 span{color:#F36525}
        .rc-hero p{font-size:14px;color:rgba(255,255,255,0.5);line-height:1.65;max-width:480px}

        /* BODY */
        .rc-body{max-width:920px;margin:0 auto;padding:2.5rem 2rem 5rem}

        /* CLIENT FIELD */
        .rc-field{display:flex;flex-direction:column;gap:6px;margin-bottom:1.5rem}
        .rc-field label{font-size:13px;font-weight:600;color:#374151}
        .rc-field label .req{color:#F36525}
        .rc-input{width:100%;max-width:440px;padding:11px 14px;border:1px solid #E5E7EB;border-radius:10px;font-size:14px;font-family:'DM Sans',sans-serif;color:#111827;outline:none;transition:border-color 0.15s,box-shadow 0.15s;background:#fff}
        .rc-input:focus{border-color:#F36525;box-shadow:0 0 0 3px rgba(243,101,37,0.12)}
        .rc-input[readonly]{background:#FAFAF8;color:#6B7280;cursor:default}

        /* PLANS GRID */
        .rc-plans{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:1.5rem}
        @media(max-width:900px){.rc-plans{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:520px){.rc-plans{grid-template-columns:1fr}}

        /* PLAN CARD */
        .rc-plan{cursor:pointer;display:block}
        .rc-plan-card{height:100%;display:flex;flex-direction:column;gap:10px;border:1px solid #E5E7EB;border-radius:16px;padding:16px;background:#fff;box-shadow:0 2px 8px rgba(17,24,39,0.05);transition:transform 0.15s,box-shadow 0.15s,border-color 0.15s}
        .rc-plan:hover .rc-plan-card{transform:translateY(-2px);box-shadow:0 6px 18px rgba(17,24,39,0.09)}
        .rc-plan.selected .rc-plan-card{border-color:#F36525;box-shadow:0 0 0 3px rgba(243,101,37,0.15)}

        .rc-badge{display:inline-block;border-radius:999px;font-size:11px;font-weight:700;padding:3px 10px}
        .rc-badge-pkg{background:#FEF0E8;color:#C24E18}
        .rc-badge-payg{background:#FEE2E2;color:#B91C1C}

        .rc-plan-title{font-family:'Sora',sans-serif;font-size:15px;font-weight:700;color:#111827;margin:6px 0 3px}
        .rc-plan-price{font-size:15px;font-weight:700;color:#111827}
        .rc-plan-price span{font-weight:500;color:#6B7280;font-size:13px}
        .rc-plan-features{list-style:none;display:flex;flex-direction:column;gap:4px}
        .rc-plan-features li{font-size:13px;color:#4B5563;padding-left:14px;position:relative}
        .rc-plan-features li::before{content:'';position:absolute;left:0;top:7px;width:5px;height:5px;border-radius:50%;background:#F36525;opacity:0.55}

        /* PAYG AMOUNT */
        .rc-payg-field{display:flex;flex-direction:column;gap:6px;margin-bottom:1.5rem}
        .rc-payg-field label{font-size:13px;font-weight:600;color:#374151}
        .rc-payg-field label .req{color:#F36525}
        .rc-input-group{display:flex;align-items:center;border:1px solid #E5E7EB;border-radius:10px;overflow:hidden;max-width:280px;transition:border-color 0.15s,box-shadow 0.15s}
        .rc-input-group:focus-within{border-color:#F36525;box-shadow:0 0 0 3px rgba(243,101,37,0.12)}
        .rc-addon{background:#F3F4F6;padding:10px 12px;border-right:1px solid #E5E7EB;color:#374151;font-size:14px;font-weight:600;user-select:none}
        .rc-input-group input{border:none;flex:1;padding:10px 12px;font-size:14px;font-family:'DM Sans',sans-serif;color:#111827;outline:none;background:#fff}
        .rc-hint{font-size:12px;color:#9CA3AF}

        /* ERROR */
        .rc-error{background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:10px 14px;font-size:13px;color:#B91C1C;margin-bottom:1rem}

        /* ACTIONS */
        .rc-actions{display:flex;flex-direction:column;gap:8px;align-items:flex-start}
        .rc-btn{display:inline-flex;align-items:center;gap:10px;background:#F36525;color:#fff;border:none;border-radius:10px;padding:13px 22px;font-family:'Sora',sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:background 0.15s,opacity 0.15s}
        .rc-btn:hover:not(:disabled){background:#C24E18}
        .rc-btn:disabled{opacity:0.65;cursor:not-allowed}
        .rc-vat-note{font-size:12px;color:#9CA3AF}

        /* FOOTER */
        .rc-footer{background:#0E0E0C;border-top:1px solid rgba(255,255,255,0.06);padding:2rem;text-align:center}
        .rc-footer-logo{font-family:'Sora',sans-serif;font-size:15px;font-weight:700;color:#fff;margin-bottom:4px}
        .rc-footer-logo span{color:#F36525}
        .rc-footer-sub{font-size:11px;color:rgba(255,255,255,0.3)}
      `}</style>

      <div className="rc">
        {/* Nav */}
        <nav className="rc-nav">
          <Link href="/" className="rc-logo">
            Press<span>wayy</span>
          </Link>
          <Link href="/" className="rc-back">
            ← Back to Home
          </Link>
        </nav>

        {/* Hero */}
        <section className="rc-hero">
          <div className="rc-hero-inner">
            <div className="rc-eyebrow">Billing</div>
            <h1>
              Recharge your <span>Presswayy</span> plan
            </h1>
            <p>
              Choose a package or pay-as-you-go. Trial users won&apos;t be
              charged until the trial ends.
            </p>
          </div>
        </section>

        {/* Body */}
        <div className="rc-body">
          <form onSubmit={handleSubmit}>
            {/* Client ID */}
            {!clientLocked && (
              <div className="rc-field">
                <label htmlFor="client_id">
                  Client ID <span className="req">*</span>
                </label>
                <input
                  id="client_id"
                  type="text"
                  className="rc-input"
                  required
                  placeholder="e.g. 7c6d1a7e-..."
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                />
              </div>
            )}

            {/* Plan Cards */}
            <div className="rc-plans">
              {PLANS.map((plan) => (
                <label
                  key={plan.key}
                  className={`rc-plan${selectedPlan === plan.key ? " selected" : ""}`}
                  onClick={() => setSelectedPlan(plan.key)}
                >
                  <input
                    type="radio"
                    name="plan_choice"
                    value={plan.key}
                    checked={selectedPlan === plan.key}
                    onChange={() => setSelectedPlan(plan.key)}
                    style={{ display: "none" }}
                  />
                  <div className="rc-plan-card">
                    <span
                      className={`rc-badge ${plan.badgeAlt ? "rc-badge-payg" : "rc-badge-pkg"}`}
                    >
                      {plan.badge}
                    </span>
                    <div className="rc-plan-title">{plan.title}</div>
                    <div className="rc-plan-price">
                      {plan.price} <span>{plan.priceSuffix}</span>
                    </div>
                    <ul className="rc-plan-features">
                      {plan.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </label>
              ))}
            </div>

            {/* PAYG Amount */}
            {selectedPlan === "PAYG" && (
              <div className="rc-payg-field">
                <label htmlFor="payg_amount">
                  Enter amount <span className="req">*</span>
                </label>
                <div className="rc-input-group">
                  <span className="rc-addon">৳</span>
                  <input
                    id="payg_amount"
                    type="number"
                    min={500}
                    step={1}
                    inputMode="numeric"
                    placeholder="500 or more"
                    value={paygAmount}
                    onChange={(e) => setPaygAmount(e.target.value)}
                    autoFocus
                  />
                </div>
                <span className="rc-hint">
                  Minimum ৳500. Example: 1000, 2000, …
                </span>
              </div>
            )}

            {/* Error */}
            {error && <div className="rc-error">{error}</div>}

            {/* Submit */}
            <div className="rc-actions">
              <button type="submit" className="rc-btn" disabled={loading}>
                <span>{loading ? "Redirecting…" : "Proceed to pay"}</span>
                {!loading && <ArrowIcon />}
              </button>
              <span className="rc-vat-note">
                5% VAT will be included during checkout.
              </span>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="rc-footer">
          <div className="rc-footer-logo">
            Press<span>wayy</span>
          </div>
          <div className="rc-footer-sub">Powered by CLAREx Tech Ltd.</div>
        </footer>
      </div>
    </>
  );
}
