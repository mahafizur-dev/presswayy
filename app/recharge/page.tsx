"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const plans = [
  {
    id: 'U500',
    title: 'Up to 500 users',
    price: '৳3999',
    cycle: '/ 30 days',
    amount: 3999,
    badge: 'PACKAGE',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-600',
    features: ['Fixed 30-day cycle', 'No per-reply fee'],
  },
  {
    id: 'U1000',
    title: 'Up to 1000 users',
    price: '৳7499',
    cycle: '/ 30 days',
    amount: 7499,
    badge: 'PACKAGE',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-600',
    features: ['Fixed 30-day cycle', 'No per-reply fee'],
  },
  {
    id: 'U3000',
    title: 'Up to 2500 users',
    price: '৳17999',
    cycle: '/ 30 days',
    amount: 17999,
    badge: 'PACKAGE',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-600',
    features: ['Fixed 30-day cycle', 'No per-reply fee'],
  },
  {
    id: 'PAYG',
    title: 'Pay as you go',
    price: '৳0.75',
    cycle: '/ AI reply',
    amount: null,
    badge: 'PAYG',
    badgeBg: 'bg-red-50',
    badgeText: 'text-red-500',
    features: ['Recharge any amount (min ৳500)', 'Charges apply per AI reply'],
  },
];

function RechargeForm() {
  const searchParams = useSearchParams();
  const [clientId, setClientId] = useState('');
  const [isClientReadonly, setIsClientReadonly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [paygAmount, setPaygAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const clientFromUrl = searchParams.get('client');
    if (clientFromUrl) {
      setClientId(clientFromUrl);
      setIsClientReadonly(true);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) {
      alert('Please select a plan.');
      return;
    }
    if (!clientId.trim()) {
      alert('Client ID is required.');
      return;
    }

    let finalAmount = plans.find((p) => p.id === selectedPlan)?.amount?.toString() || '';

    if (selectedPlan === 'PAYG') {
      const val = Number(paygAmount.trim());
      if (!val || val < 500) {
        alert('Please enter at least ৳500 for PAYG.');
        return;
      }
      finalAmount = paygAmount.trim();
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/recharge/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId.trim(),
          amount: finalAmount,
          plan_choice: selectedPlan,
        }),
      });

      const data = await res.json();
      if (data.redirect) {
        window.location.href = data.redirect;
      } else {
        alert('Error: ' + (data.error || 'Payment link could not be generated.'));
      }
    } catch (err: any) {
      alert('Failed to submit: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16 font-sans">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
          Recharge your Presswayy plan
        </h1>
        <p className="text-[15px] text-slate-500">
          Choose a package or pay-as-you-go. Trial users won’t be charged until the trial ends.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Client ID */}
        {!isClientReadonly && (
          <div className="max-w-full">
            <label htmlFor="client_id" className="block text-sm font-semibold text-slate-800 mb-2">
              Client ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="client_id"
              required
              placeholder="e.g. 7c6d1a7e-..."
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5a4cc2]/20 focus:border-[#5a4cc2] transition-colors shadow-sm"
            />
          </div>
        )}

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <label key={plan.id} className="cursor-pointer relative block h-full">
                <input
                  type="radio"
                  name="plan_choice"
                  value={plan.id}
                  checked={isSelected}
                  onChange={() => setSelectedPlan(plan.id)}
                  className="hidden"
                />
                <div
                  className={`h-full bg-white rounded-2xl p-6 transition-all duration-200 flex flex-col
                    ${
                      isSelected
                        ? 'border-2 border-[#5a4cc2] shadow-md bg-slate-50/30'
                        : 'border border-slate-200 hover:border-slate-300 hover:shadow-sm'
                    }`}
                >
                  <div className="mb-5">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-widest ${plan.badgeBg} ${plan.badgeText}`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-medium text-slate-900 mb-3">{plan.title}</h3>
                  <div className="mb-6 flex items-baseline">
                    <span className="text-[26px] font-bold text-slate-900">{plan.price}</span>
                    <span className="ml-1.5 text-[14px] text-slate-500">{plan.cycle}</span>
                  </div>
                  <ul className="space-y-3 mt-auto">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[14px] text-slate-500">
                        <span className="mr-3 h-[5px] w-[5px] rounded-full bg-slate-300 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </label>
            );
          })}
        </div>

        {/* PAYG Input */}
        {selectedPlan === 'PAYG' && (
          <div className="max-w-md animate-in fade-in slide-in-from-top-4 duration-300 pt-2">
            <label htmlFor="amount" className="block text-sm font-semibold text-slate-800 mb-2">
              Enter amount <span className="text-red-500">*</span>
            </label>
            <div className="relative rounded-xl shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="text-slate-500 font-medium">৳</span>
              </div>
              <input
                type="number"
                id="amount"
                min="500"
                step="1"
                inputMode="numeric"
                placeholder="500 or more"
                value={paygAmount}
                onChange={(e) => setPaygAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5a4cc2]/20 focus:border-[#5a4cc2] transition-colors"
              />
            </div>
            <p className="mt-2 text-[13px] text-slate-500">Minimum ৳500. Example: 1000, 2000, …</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-6 border-t border-transparent">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-white bg-[#ff4d2d] rounded-xl hover:bg-[#e64022] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff4d2d] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
          >
            {isLoading ? 'Processing...' : 'Proceed to pay'}
            {!isLoading && (
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </button>
          <p className="mt-4 text-[13px] text-slate-500">5% VAT will be included during checkout.</p>
        </div>
      </form>
    </div>
  );
}

export default function RechargePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading checkout...</div>}>
      <RechargeForm />
    </Suspense>
  );
}