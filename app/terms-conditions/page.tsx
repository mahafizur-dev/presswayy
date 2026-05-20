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
  Clock,
} from "lucide-react";

export default function App() {
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

            {/* 3. Intellectual Property - Now spans full width */}
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
                    All AI tools, engines, and templates remain the property of
                    Presswayy / CLAREx Tech.
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

            {/* 4. Payment Terms - Now spans full width on its own row */}
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
                    pricing. For each page, the monthly service fee is BDT
                    3,000. If the client wants to implement the same automation
                    setup on another page without requiring any new training,
                    business data update, service details change, price update,
                    or workflow modification, Presswayy may allow the same setup
                    based on feasibility. However, if the new page requires
                    separate training, product/service information, pricing,
                    FAQs, business rules, brand guidelines, or any other
                    customization, it will be treated as a separate page setup
                    and charged separately. Each page requiring setup, training,
                    data, or customization will be charged BDT 3,000 per month.
                    The client’s subscription period will start from the date
                    the AI system goes live on the client’s page. All payments
                    are non-refundable once the service, setup, training, or
                    implementation process has started.
                  </span>
                </li>
              </ul>
            </section>

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
                  but not limited to product/service details, FAQs, pricing,
                  brand guidelines, policies, and required platform access, and
                  Presswayy confirms receipt of complete and accurate data, the
                  implementation timeline will begin.
                </p>
                <p className="leading-relaxed">
                  The{" "}
                  <strong className="text-slate-800">
                    initial AI testing setup and live deployment
                  </strong>{" "}
                  on the client’s business page will be completed within{" "}
                  <strong className="text-slate-800">7 working days</strong>{" "}
                  from the date of receiving all required information.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-6">
                  <h3 className="font-bold text-slate-900 mb-5">
                    After going live, the AI system will go through the
                    following improvement phases:
                  </h3>
                  <div className="space-y-5">
                    {/* Phase 1 */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className="bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1.5 rounded shrink-0 sm:mt-0.5 w-max sm:w-24 text-center">
                        Day 1–7
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">
                          Initial Training & Setup Phase
                        </h4>
                        <p className="text-sm m-0 text-slate-600 leading-relaxed">
                          During this period, the AI system will be monitored,
                          tested, and adjusted based on real customer
                          conversations.
                        </p>
                      </div>
                    </div>
                    {/* Phase 2 */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className="bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1.5 rounded shrink-0 sm:mt-0.5 w-max sm:w-24 text-center">
                        Day 7–14
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">
                          Training & Learning Phase
                        </h4>
                        <p className="text-sm m-0 text-slate-600 leading-relaxed">
                          During this period, the AI will continue learning from
                          customer interactions, client feedback, and
                          business-specific requirements.
                        </p>
                      </div>
                    </div>
                    {/* Phase 3 */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className="bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1.5 rounded shrink-0 sm:mt-0.5 w-max sm:w-24 text-center">
                        Day 14–21
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">
                          Refinement Phase
                        </h4>
                        <p className="text-sm m-0 text-slate-600 leading-relaxed">
                          During this period, Presswayy will refine responses,
                          improve accuracy, and optimize the AI system for
                          better performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expectations Box */}
                <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100 mt-6">
                  <p className="text-sm text-slate-700 m-0 leading-relaxed">
                    <strong className="text-slate-900 font-bold">
                      The client acknowledges and agrees
                    </strong>{" "}
                    that the AI system may not perform perfectly from the first
                    day of deployment. Minor errors, inconsistencies, or
                    unexpected responses may occur initially.
                  </p>
                </div>

                {/* Note Box */}
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 text-sm text-blue-900 mt-4 flex gap-3 items-start">
                  <Lightbulb
                    className="shrink-0 text-blue-500 mt-0.5"
                    size={20}
                  />
                  <p className="m-0 leading-relaxed">
                    <strong className="font-bold text-blue-950">Note:</strong>{" "}
                    AI can never guarantee 100% perfect performance. However,
                    with continuous training, monitoring, and refinement, the
                    system can reach up to approximately{" "}
                    <strong className="font-bold text-blue-950">
                      90% accuracy
                    </strong>{" "}
                    depending on data quality, feedback, and usage.
                  </p>
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

            {/* 8. Suspension & Termination */}
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

            {/* 9. Updates, Corrections & Feedback */}
            <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                  <Clock size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 m-0">
                  9. Updates, Corrections & Feedback
                </h2>
              </div>

              <div className="space-y-5 text-slate-600">
                <p className="leading-relaxed">
                  If the client provides any update, correction, or feedback
                  after implementation, Presswayy will review and address it
                  within{" "}
                  <strong className="text-slate-800">1 business hour</strong>{" "}
                  where possible.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-teal-500" />
                      Minor Corrections
                    </h3>
                    <p className="text-sm m-0 leading-relaxed">
                      Minor corrections, such as response adjustments, spelling
                      fixes, small information updates, or simple instruction
                      changes, will usually be handled within this timeframe.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                      <RefreshCw size={16} className="text-amber-500" />
                      Major Updates
                    </h3>
                    <p className="text-sm m-0 leading-relaxed">
                      For major updates, such as new product/service training,
                      pricing structure changes, workflow changes, policy
                      updates, or large data modifications, additional time may
                      be required depending on the complexity of the update.
                    </p>
                  </div>
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
