import React from "react";
import {
  ArrowLeft,
  Info,
  Target,
  Eye,
  BookOpen,
  Zap,
  Tag,
  User,
  Briefcase,
  FileCheck,
  Mail,
  CheckCircle2,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 pt-24 pb-16">

      {/* --- Hero Section --- */}
      <div className="bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl">
            Empowering your digital journey with practical knowledge, strategy,
            and easy-to-read guides.
          </p>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-slate max-w-none">
          {/* Introduction */}
          <div className="text-lg leading-relaxed text-slate-700 mb-12 bg-orange-50/50 p-6 md:p-8 rounded-3xl border border-orange-100/50 shadow-sm">
            <strong>Presswayy</strong> is a digital platform created to simplify
            learning and business strategy through easy-to-read ebooks. Whether
            you're starting an online business or improving your brand identity,
            our guides help you take the right step forward.
          </div>

          <div className="grid gap-12">
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
                    <Target size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">
                    Mission
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Our mission is to empower individuals by providing practical,
                  easy-to-follow, and result-driven content that helps them make
                  informed decisions, avoid costly mistakes, and grow with
                  confidence. Whether you're launching a small e-commerce store
                  or trying to build your brand from scratch, our goal is to be
                  your digital companion offering clarity, strategy, and support
                  every step of the way.
                </p>
              </section>

              {/* Vision */}
              <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:scale-110 transition-transform">
                    <Eye size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">
                    Vision
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  At Presswayy, we envision a world where aspiring entrepreneurs
                  no longer feel lost or overwhelmed at the beginning of their
                  journey. We believe that with the right tools, knowledge, and
                  guidance, anyone can turn their passion into a profitable
                  business — without needing a business degree or technical
                  expertise.
                </p>
              </section>
            </div>

            {/* What We Offer */}
            <section className="bg-slate-50 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                What We Offer
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-3 shadow-sm">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-full">
                    <BookOpen size={20} />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    Ebooks on branding, business, marketing, & productivity
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-3 shadow-sm">
                  <div className="p-2 bg-yellow-50 text-yellow-600 rounded-full">
                    <Zap size={20} />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    Instant access upon purchase
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-3 shadow-sm">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-full">
                    <Tag size={20} />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    Affordable, high-quality digital downloads
                  </p>
                </div>
              </div>
            </section>

            {/* Company Information */}
            <section className="bg-[#0a1435] text-white p-8 md:p-10 rounded-3xl shadow-xl mt-4">
              <h2 className="text-2xl font-bold m-0 text-white mb-8 border-b border-white/10 pb-4">
                Company Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 text-[#ff4e33] rounded-xl shrink-0">
                    <User size={22} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">
                      Founder
                    </p>
                    <p className="text-white font-semibold text-lg">
                      M Jahangir Alam, FCMA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 text-[#ff4e33] rounded-xl shrink-0">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">
                      Business Type
                    </p>
                    <p className="text-white font-semibold text-lg">
                      Ecommerce
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 text-[#ff4e33] rounded-xl shrink-0">
                    <FileCheck size={22} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">
                      Trade License No
                    </p>
                    <p className="text-white font-semibold text-lg">
                      TRAD/DNCC/029884/2022
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 text-[#ff4e33] rounded-xl shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:support@presswayy.com"
                      className="text-white font-semibold text-sm md:text-base hover:text-[#ff4e33] transition-colors break-all"
                    >
                      support@presswayy.com
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
