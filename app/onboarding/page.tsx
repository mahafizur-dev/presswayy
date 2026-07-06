"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";

// ── One-time onboarding fee (must match the backend) ──
const ONBOARDING_FEE = Number(process.env.NEXT_PUBLIC_ONBOARDING_FEE) || 3000;

// ── Validation schema (mirrors the `companies` table) ──
const companySchema = z.object({
  name: z.string().min(2, "Company name is required"),
  contact_person: z.string().min(2, "Contact person is required"),
  contact_person_number: z
    .string()
    .regex(/^01[0-9]{9}$/, "Enter a valid 11-digit number (e.g. 017XXXXXXXX)"),
  business_type: z.string().min(1, "Please select a business type"),
  business_email: z.string().email("Enter a valid email address"),
  page_name: z.string().min(1, "Page name is required"),
});

type CompanyForm = z.infer<typeof companySchema>;

const BUSINESS_TYPES = ["E-commerce", "Restaurant / Food", "Service Provider"];

export default function OnboardingPage() {
  const [clientId, setClientId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Generate a stable, unique client id automatically (no URL needed)
  useEffect(() => {
    const stored = localStorage.getItem("client_id");
    if (stored) {
      setClientId(stored);
      return;
    }
    const generated =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `client_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem("client_id", generated);
    setClientId(generated);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyForm>({
    resolver: zodResolver(companySchema),
  });

  const onSubmit = async (form: CompanyForm) => {
    if (!clientId.trim()) {
      toast.error("Client ID could not be generated. Please refresh.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/onboarding/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client_id: clientId.trim(), ...form }),
      });

      const data = await res.json();

      if (data.redirect) {
        // Redirect to SSLCommerz payment gateway
        window.location.href = data.redirect;
      } else {
        toast.error(data.error || "Payment link could not be generated.");
      }
    } catch (err: any) {
      toast.error("Failed to submit: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5a4cc2]/20 focus:border-[#5a4cc2] transition-colors bg-slate-50 focus:bg-white";
  const labelClass = "block text-sm font-semibold text-slate-800 mb-2";
  const errClass = "mt-1 text-xs text-red-500";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 font-sans flex justify-center">
      <Toaster position="top-center" />

      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-indigo-50 text-indigo-600 mb-4 uppercase">
            Onboarding Fee
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            Set Up Your Business
          </h1>

          <p className="text-sm text-slate-500">
            Fill in your company details to complete your one-time onboarding.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Company Name */}
          <div>
            <label htmlFor="name" className={labelClass}>
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Presswayy"
              className={inputClass}
              {...register("name")}
            />
            {errors.name && <p className={errClass}>{errors.name.message}</p>}
          </div>

          {/* Contact Person */}
          <div>
            <label htmlFor="contact_person" className={labelClass}>
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact_person"
              type="text"
              placeholder="Full name"
              className={inputClass}
              {...register("contact_person")}
            />
            {errors.contact_person && (
              <p className={errClass}>{errors.contact_person.message}</p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contact_person_number" className={labelClass}>
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              id="contact_person_number"
              type="tel"
              inputMode="numeric"
              placeholder="017XXXXXXXX"
              className={inputClass}
              {...register("contact_person_number")}
            />
            {errors.contact_person_number && (
              <p className={errClass}>{errors.contact_person_number.message}</p>
            )}
          </div>

          {/* Business Type */}
          <div>
            <label htmlFor="business_type" className={labelClass}>
              Business Type <span className="text-red-500">*</span>
            </label>
            <select
              id="business_type"
              defaultValue=""
              className={inputClass}
              {...register("business_type")}
            >
              <option value="" disabled>
                Select business type
              </option>
              {BUSINESS_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.business_type && (
              <p className={errClass}>{errors.business_type.message}</p>
            )}
          </div>

          {/* Business Email */}
          <div>
            <label htmlFor="business_email" className={labelClass}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="business_email"
              type="email"
              placeholder="business@example.com"
              className={inputClass}
              {...register("business_email")}
            />
            {errors.business_email && (
              <p className={errClass}>{errors.business_email.message}</p>
            )}
          </div>

          {/* Page Name */}
          <div>
            <label htmlFor="page_name" className={labelClass}>
              Facebook Page Name <span className="text-red-500">*</span>
            </label>
            <input
              id="page_name"
              type="text"
              placeholder="Your Facebook/Instagram page name"
              className={inputClass}
              {...register("page_name")}
            />
            {errors.page_name && (
              <p className={errClass}>{errors.page_name.message}</p>
            )}
          </div>

          {/* Submit / Pay Now */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-[16px] font-bold text-white bg-[#ff4d2d] rounded-xl hover:bg-[#e64022] focus:outline-none focus:ring-4 focus:ring-red-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {isLoading
                ? "Processing..."
                : `Pay ৳${ONBOARDING_FEE.toLocaleString()}`}
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
