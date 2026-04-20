"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Trash2,
  ArrowLeft,
  Mail,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 pt-24">

      {/* --- Hero Section --- */}
      <div className="bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <span className="bg-orange-100 text-[#ff4e33] px-3 py-1 rounded-full">
              Effective Date: July 26, 2025
            </span>
            <span className="text-slate-400">Powered by CLAREx Tech Ltd.</span>
          </div>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed text-slate-600 mb-12">
            Presswayy, powered by <strong>CLAREx Tech Ltd.</strong>, is
            committed to protecting the privacy and data of its users, clients,
            and partners. This Privacy Policy describes how information is
            collected, used, stored, shared, and protected when using Presswayy
            services, including AI-powered automation and messaging solutions.
          </p>

          <div className="grid gap-12">
            {/* 1. Scope */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Eye size={20} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  1. Scope
                </h2>
              </div>
              <p>
                This policy applies to the Presswayy website, services,
                applications, and AI chatbot integrations. By accessing or using
                Presswayy services, you agree to this Privacy Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-50 rounded-lg text-[#ff4e33]">
                  <FileText size={20} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  2. Information We Collect
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Personal Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm font-medium">
                    <li>Name & Email address</li>
                    <li>Phone number</li>
                    <li>Business contact details</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Technical & Usage
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm font-medium">
                    <li>Automation rules & FAQs</li>
                    <li>Interaction metadata</li>
                    <li>Log data & Performance metrics</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Usage & 4. Compliance */}
            <section className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  3. How We Use Information
                </h2>
                <ul className="space-y-2 text-sm">
                  <li>• Delivering and improving services</li>
                  <li>• Providing technical support</li>
                  <li>• Ensuring system security</li>
                  <li>• Meeting legal obligations</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  4. Platform Compliance
                </h2>
                <p className="text-sm">
                  Presswayy processes data originating from third-party
                  platforms (like Meta) strictly in accordance with their
                  applicable policies and permissions.
                </p>
              </div>
            </section>

            {/* 7. Data Security */}
            <section className="bg-[#0a1435] text-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-[#ff4e33]" size={24} />
                <h2 className="text-2xl font-bold m-0 text-white">
                  7. Data Security
                </h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Presswayy applies reasonable administrative, technical, and
                organizational safeguards to protect data, including secure
                access controls and monitoring practices. While we strive to
                protect all data, no system can guarantee absolute security.
              </p>
            </section>


            
          </div>
        </div>
      </div>

    </div>
  );
}
