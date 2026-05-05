import React from "react";
import {
  ShieldCheck,
  ArrowLeft,
  Scale,
  UserCheck,
  Lightbulb,
  CreditCard,
  AlertTriangle,
  Ban,
  Power,
  RefreshCw,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  XCircle,
  Rocket,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 pt-24">
      {/* --- Hero Section --- */}
      <div className="bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Terms & Conditions
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
          <p className="text-lg leading-relaxed text-slate-600 mb-12 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            By accessing or using Presswayy’s services, you agree to comply with
            these Terms & Conditions. Please read them carefully before using
            our platform.
          </p>

          <div className="grid gap-12">
            {/* 1. Use of Services & 2. Client Responsibilities */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* 1. Use of Services */}
              <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <Scale size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 m-0">
                    1. Use of Services
                  </h2>
                </div>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2
                      className="text-emerald-500 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span>
                      Presswayy must only be used for lawful and ethical
                      purposes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2
                      className="text-emerald-500 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span>
                      Misuse, fraudulent activity, or spreading harmful content
                      through our platform is strictly prohibited.
                    </span>
                  </li>
                </ul>
              </section>

              {/* 2. Client Responsibilities */}
              <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                    <UserCheck size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 m-0">
                    2. Client Responsibilities
                  </h2>
                </div>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2
                      className="text-emerald-500 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span>
                      Clients must provide accurate and updated access to their
                      platforms (e.g., Facebook page, website, business data).
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2
                      className="text-emerald-500 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span>
                      Presswayy is not responsible for outdated or incorrect
                      client data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2
                      className="text-emerald-500 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span>
                      Clients are solely responsible for the security of their
                      own systems and platforms.
                    </span>
                  </li>
                </ul>
              </section>
            </div>

            {/* 3. Intellectual Property & 4. Payment Terms */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* 3. Intellectual Property */}
              <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
                    <Lightbulb size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 m-0">
                    3. Intellectual Property
                  </h2>
                </div>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2
                      className="text-emerald-500 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span>
                      All AI tools, engines, and templates remain the property
                      of Presswayy / CLAREx Tech.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2
                      className="text-emerald-500 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span>
                      Any content or data provided by the client remains their
                      sole property.
                    </span>
                  </li>
                </ul>
              </section>

              {/* 4. Payment Terms */}
              <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <CreditCard size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 m-0">
                    4. Payment Terms
                  </h2>
                </div>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2
                      className="text-emerald-500 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span>
                      Clients agree to pay the service fees as per the agreed
                      pricing.
                    </span>
                  </li>
                </ul>
              </section>
            </div>

            {/* 5. Implementation & Performance */}
            <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <Rocket size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  5. Implementation & Performance
                </h2>
              </div>
              <div className="space-y-6 text-slate-600">
                <p className="leading-relaxed">
                  Once the client provides all required information, including
                  but not limited to product details, FAQs, and brand
                  guidelines, and Presswayy confirms receipt of complete and
                  accurate data, the implementation timeline will begin.
                </p>
                <p className="leading-relaxed">
                  An{" "}
                  <strong className="text-slate-800">
                    initial test version
                  </strong>{" "}
                  of the AI system will be delivered within{" "}
                  <strong className="text-slate-800">7 working days</strong>{" "}
                  from the date of receiving all required information.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Testing Phase Box */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-3">
                      After the initial test:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                        <span>
                          If the client confirms that everything is
                          satisfactory, the AI system will be deployed (live) on
                          the client’s business platform.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                        <span>
                          If the client provides feedback or requests changes,
                          Presswayy will continue working on those feedback
                          points and provide updated testing versions
                          accordingly until the system reaches an acceptable
                          standard.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Expectations Box */}
                  <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100">
                    <h3 className="font-bold text-slate-900 mb-3">
                      The client acknowledges and agrees that:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff4e33] mt-2 shrink-0"></div>
                        <span>
                          The AI system may not perform perfectly on the first
                          day of deployment.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff4e33] mt-2 shrink-0"></div>
                        <span>
                          Minor errors, inconsistencies, or unexpected responses
                          may occur initially.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff4e33] mt-2 shrink-0"></div>
                        <span>
                          Continuous improvement and training are required to
                          optimize performance.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-sm text-blue-900 mt-4">
                  Typically, the AI system may take approximately{" "}
                  <strong>1 to 3 months</strong> of ongoing training and
                  refinement to achieve optimal and stable performance,
                  depending on usage, feedback, and data quality.
                </div>
              </div>
            </section>

            {/* 6. Limitation of Liability */}
            <section className="bg-[#0a1435] text-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg text-[#ff4e33]">
                  <AlertTriangle size={24} />
                </div>
                <h2 className="text-2xl font-bold m-0 text-white">
                  6. Limitation of Liability
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff4e33] mt-2.5 shrink-0"></div>
                  <span>
                    Presswayy shall not be liable for indirect, incidental, or
                    consequential damages, including data loss or revenue loss.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff4e33] mt-2.5 shrink-0"></div>
                  <span>
                    Total liability shall not exceed the amount paid by the
                    client within the last three (3) months.
                  </span>
                </li>
              </ul>
            </section>

            {/* 7. Prohibited Activities */}
            <section className="border border-red-100 bg-red-50/30 p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg text-red-600">
                  <Ban size={20} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  7. Prohibited Activities
                </h2>
              </div>
              <p className="text-slate-700 font-medium mb-4">
                Clients must not:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-600">
                  <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                  <span>
                    Reverse-engineer, hack, or tamper with the system.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                  <span>
                    Use the chatbot for spam, hate speech, misinformation, or
                    unethical practices.
                  </span>
                </li>
              </ul>
            </section>

            {/* 8. Suspension & Termination (NEW SECTION) */}
            <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
                  <Power size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  8. Suspension & Termination
                </h2>
              </div>

              <div className="space-y-6 text-slate-600">
                <p className="leading-relaxed">
                  Presswayy reserves the right to suspend or terminate services
                  at any time, without prior notice, if the client engages in
                  misconduct or violates applicable laws or these Terms &
                  Conditions.
                </p>

                <div className="bg-rose-50/40 p-5 rounded-2xl border border-rose-100">
                  <h3 className="font-bold text-slate-900 mb-3">
                    This includes, but is not limited to:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                      <span>
                        Providing false, misleading, or illegal information
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                      <span>
                        Engaging in abusive, unethical, or inappropriate
                        behavior
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                      <span>
                        Using the platform for unlawful activities, fraud, or
                        policy violations
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <ShieldCheck
                    className="text-slate-400 shrink-0 mt-0.5"
                    size={20}
                  />
                  <p className="text-sm font-medium text-slate-700 m-0 leading-relaxed">
                    In such cases, Presswayy may immediately discontinue
                    services and close the agreement without any further
                    obligation.
                  </p>
                </div>
              </div>
            </section>

            {/* Amendments */}
            <section className="bg-slate-50 p-6 md:p-8 rounded-3xl text-center md:text-left md:flex items-center gap-6 border border-slate-100">
              <div className="p-4 bg-white rounded-full inline-flex text-slate-600 mb-4 md:mb-0 shadow-sm shrink-0">
                <RefreshCw size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 m-0">
                  Amendments
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed m-0">
                  Presswayy reserves the right to amend these Terms & Conditions
                  at any time. Updates will be published on our website and
                  effective immediately upon posting.
                </p>
              </div>
            </section>

            {/* Contact Us */}
            <section className="text-center py-12 mt-4 border-t border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Contact Us
              </h2>
              <p className="text-slate-500 mb-10">
                For questions or concerns regarding these Terms & Conditions,
                please contact us:
              </p>

              <div className="max-w-xl mx-auto flex flex-col gap-4 text-left">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-orange-50 text-[#ff4e33] rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Address</p>
                    <p className="text-slate-600 text-sm">
                      House 336, Road 5, Baridhara DOHS, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:hello@presswayy.com"
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-[#ff4e33] transition-colors group"
                >
                  <div className="p-3 bg-orange-50 text-[#ff4e33] rounded-full group-hover:bg-[#ff4e33] group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Email</p>
                    <p className="text-slate-600 text-sm">
                      hello@presswayy.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+8801886168979"
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-[#ff4e33] transition-colors group"
                >
                  <div className="p-3 bg-orange-50 text-[#ff4e33] rounded-full group-hover:bg-[#ff4e33] group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Phone</p>
                    <p className="text-slate-600 text-sm">+8801886168979</p>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
