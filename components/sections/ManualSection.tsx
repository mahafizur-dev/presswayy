"use client";
import React, { useState } from "react";

const ManualSection = () => {
  const [facebookPageId, setFacebookPageId] = useState("");
  // amount কে string হিসেবে রাখা হলো, যাতে ইউজার ইনপুট খালি করলে NaN এরর না আসে
  const [amount, setAmount] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({ text: "", type: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pageId = facebookPageId.trim();
    const amountNum = Number(amount);

    if (!pageId || !amountNum) {
      setMessage({
        text: "Please fill in all fields with valid data.",
        type: "error",
      });
      return;
    }

    setIsLoading(true);
    setMessage({ text: "", type: "" });

    try {
      // .env ভেরিয়েবল ব্যবহার করা হচ্ছে
      const baseUrl =
        process.env.NEXT_PUBLIC_API_URL
      const targetUrl = `${baseUrl}/manual_balance`;

      const payload = {
        facebook_page_id: pageId,
        amount: amountNum,
      };

      // Debugging এর জন্য কনসোলে ডেটা প্রিন্ট করা হচ্ছে (F12 চেপে Console এ চেক করুন)
      console.log("Request URL:", targetUrl);
      console.log("Sending Payload:", payload);

      const response = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage({
          text: "✅ Balance updated successfully!",
          type: "success",
        });
        // ফর্ম ক্লিয়ার করা হলো
        setFacebookPageId("");
        setAmount("");
      } else {
        // সার্ভার থেকে কোনো এরর আসলে সেটা ধরে ফেলা
        const errorText = await response.text();
        throw new Error(
          `Server Error ${response.status}: ${errorText || "Unknown Error"}`,
        );
      }
    } catch (error: any) {
      console.error("Fetch error details:", error);
      // স্ক্রিনে অরিজিনাল এরর মেসেজ দেখানো হচ্ছে
      setMessage({
        text: `❌ Failed: ${error.message || "Network or CORS issue."}`,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // এখানে pt-28 এবং lg:pt-36 যুক্ত করে উপরের স্পেসিং বাড়ানো হয়েছে
    <div className="min-h-screen bg-slate-50 pt-28 pb-12 lg:pt-36 lg:pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Manual Balance Update
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Add balance to a specific Facebook Page
          </p>
        </div>

        {/* Message Alert */}
        {message.text && (
          <div
            className={`mb-6 p-4 rounded-xl text-[15px] font-medium animate-in fade-in slide-in-from-top-2 ${
              message.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="fb_page_id"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Facebook Page ID <span className="text-red-500">*</span>
            </label>
            <input
              id="fb_page_id"
              type="text"
              required
              placeholder="e.g. 104567968833857"
              value={facebookPageId}
              onChange={(e) => setFacebookPageId(e.target.value)}
              className="w-full border border-slate-200 bg-slate-50 focus:bg-white rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#5a4cc2]/30 focus:border-[#5a4cc2] transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Amount (BDT) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="text-slate-500 font-medium">৳</span>
              </div>
              <input
                id="amount"
                type="number"
                required
                min="1"
                placeholder="500"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-9 pr-4 border border-slate-200 bg-slate-50 focus:bg-white rounded-xl py-3.5 outline-none focus:ring-2 focus:ring-[#5a4cc2]/30 focus:border-[#5a4cc2] transition-colors"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#5a4cc2] hover:bg-[#4f43a8] text-white font-bold py-4 px-6 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#5a4cc2]/30"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
                "Submit Balance"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManualSection;
