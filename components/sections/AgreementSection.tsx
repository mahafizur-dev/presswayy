"use client";

import React, { useState, useEffect } from "react";

const memberEmails: Record<string, string> = {
  "Ruman Sarder": "sardertakbir69@gmail.com",
  "Raihan Islam": "sraihans169@gmail.com",
  "Zannatul Nuria": "zmohona36@gmail.com",
  "Israt Jasa": "israt.jasa@leverngear.com",
  "Sadia Afroz": "sadiaaphroz15@gmail.com",
  "Bilkis Khatun": "skeikhs385@gmail.com",
  "Jerin Mukta": "jerin.clarex@gmail.com",
  "Sakib Rabbi": "sakibnil000892@gmail.com",
};

export default function AgreementSection() {
  const [formData, setFormData] = useState({
    created_by: "",
    customer_name: "",
    business_name: "",
    client_address: "",
    email: "",
    issued_date: "",
    monthly_subscription: "",
    advance_payment: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, issued_date: today }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const creatorEmail = memberEmails[formData.created_by];

    const payload = {
      "Created By": formData.created_by,
      "Creator Email": creatorEmail,
      "Customer Name": formData.customer_name,
      "Business Name": formData.business_name,
      "Client Address": formData.client_address,
      Email: formData.email,
      "Issued Date": formData.issued_date,
      "Monthly Subscription": formData.monthly_subscription,
      "Advance Payment": formData.advance_payment,
    };

    try {
      // .env ফাইল থেকে NEXT_PUBLIC_API_URL ব্যবহার করে কল করা হচ্ছে
      const baseUrl =
        process.env.NEXT_PUBLIC_API_URL
      const webhookUrl = `${baseUrl}/agreement-form`;

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setMessage(
          "✅ Success! Your agreement is being generated and will be sent to your email shortly.",
        );

        const today = new Date().toISOString().split("T")[0];
        setFormData({
          created_by: "",
          customer_name: "",
          business_name: "",
          client_address: "",
          email: "",
          issued_date: today,
          monthly_subscription: "",
          advance_payment: "",
        });

        // পেজ স্ক্রল করে মেসেজ দেখানোর জন্য
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(
        "❌ Something went wrong. Please try again or contact support.",
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-12 lg:pt-36 lg:pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 sm:p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            🤖 AI Service Agreement Generator
          </h2>
          <p className="text-slate-500 text-[15px]">
            Fill out the form below to generate your service agreement
          </p>
        </div>

        {/* Message Alert */}
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl text-[15px] font-medium animate-in fade-in slide-in-from-top-2">
            {message}
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl text-[15px] font-medium animate-in fade-in slide-in-from-top-2">
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Creator */}
          <div>
            <label
              htmlFor="created_by"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Agreement Creator <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="created_by"
                name="created_by"
                required
                value={formData.created_by}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]/30 focus:border-[#f7931e] transition-colors appearance-none cursor-pointer ${
                  formData.created_by === ""
                    ? "text-slate-400"
                    : "text-slate-900"
                }`}
              >
                <option value="" disabled className="text-slate-400">
                  Select team member
                </option>
                {Object.keys(memberEmails).map((name) => (
                  <option key={name} value={name} className="text-slate-900">
                    {name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Customer Name */}
          <div>
            <label
              htmlFor="customer_name"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="customer_name"
              name="customer_name"
              placeholder="Enter customer name"
              required
              value={formData.customer_name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]/30 focus:border-[#f7931e] transition-colors"
            />
          </div>

          {/* Business Name */}
          <div>
            <label
              htmlFor="business_name"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="business_name"
              name="business_name"
              placeholder="Enter business name"
              required
              value={formData.business_name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]/30 focus:border-[#f7931e] transition-colors"
            />
          </div>

          {/* Client Address */}
          <div>
            <label
              htmlFor="client_address"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Client Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="client_address"
              name="client_address"
              placeholder="House 336, Road 05, Baridhara DOHS, Dhaka"
              required
              value={formData.client_address}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]/30 focus:border-[#f7931e] transition-colors min-h-[100px] resize-y"
            />
          </div>

          {/* Client Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Client Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]/30 focus:border-[#f7931e] transition-colors"
            />
          </div>

          {/* Issued Date */}
          <div>
            <label
              htmlFor="issued_date"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Agreement Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="issued_date"
              name="issued_date"
              required
              value={formData.issued_date}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]/30 focus:border-[#f7931e] transition-colors"
            />
          </div>

          {/* Subscription & Advance Payment Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="monthly_subscription"
                className="block text-sm font-semibold text-slate-800 mb-2"
              >
                Monthly Subscription (BDT){" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-slate-500 font-medium">৳</span>
                </div>
                <input
                  type="number"
                  id="monthly_subscription"
                  name="monthly_subscription"
                  placeholder="35000"
                  required
                  value={formData.monthly_subscription}
                  onChange={handleChange}
                  className="w-full pl-8 pr-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]/30 focus:border-[#f7931e] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="advance_payment"
                className="block text-sm font-semibold text-slate-800 mb-2"
              >
                Advance Payment (BDT) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-slate-500 font-medium">৳</span>
                </div>
                <input
                  type="number"
                  id="advance_payment"
                  name="advance_payment"
                  placeholder="2000"
                  required
                  value={formData.advance_payment}
                  onChange={handleChange}
                  className="w-full pl-8 pr-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]/30 focus:border-[#f7931e] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 text-[16px] font-bold text-white bg-gradient-to-r from-[#f7931e] to-[#ff8c00] rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#f7931e]/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "GENERATE AGREEMENT"
              )}
            </button>
            {status === "loading" && (
              <p className="text-center text-sm text-slate-500 mt-3 animate-pulse">
                Generating your agreement...
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
