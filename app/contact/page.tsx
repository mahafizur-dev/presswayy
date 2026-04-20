"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Clock,
} from "lucide-react";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // ফর্মের ডাটাগুলো কালেক্ট করা হচ্ছে
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Webhook URL এ ডাটা পাঠানো হচ্ছে
      const response = await fetch(
        "https://server.presswayy.com/webhook/contact-web",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset(); // ফর্মের লেখাগুলো ক্লিয়ার করে দেওয়া

        // ৩ সেকেন্ড পর সাকসেস মেসেজ সরিয়ে আবার ফর্ম দেখানো
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 pt-24 pb-16">     

      {/* --- Hero Section --- */}
      <div className="bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Have a question, need support, or want to explore how we can help
            your business grow? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side: Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 h-[400px]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-2">
                  <Send size={32} />
                </div>
                <h3 className="text-xl font-bold">
                  Message Sent Successfully!
                </h3>
                <p>
                  Thank you for reaching out. Our team will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name" // Webhook এ ডাটা যাওয়ার জন্য name যুক্ত করা হয়েছে
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff4e33]/20 focus:border-[#ff4e33] outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email" // Webhook এ ডাটা যাওয়ার জন্য name যুক্ত করা হয়েছে
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff4e33]/20 focus:border-[#ff4e33] outline-none transition-all"
                      placeholder="youremail@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject" // Webhook এ ডাটা যাওয়ার জন্য name যুক্ত করা হয়েছে
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff4e33]/20 focus:border-[#ff4e33] outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message" // Webhook এ ডাটা যাওয়ার জন্য name যুক্ত করা হয়েছে
                    required
                    rows={5} // TypeScript error fix (String থেকে Number করা হয়েছে)
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff4e33]/20 focus:border-[#ff4e33] outline-none transition-all resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ff4e33] hover:bg-[#e63e26] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0a1435] text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 text-[#ff4e33] rounded-xl shrink-0 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">
                      Our Office
                    </p>
                    <p className="text-white font-medium leading-relaxed">
                      House 336, Road 5,
                      <br />
                      Baridhara DOHS,
                      <br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 text-[#ff4e33] rounded-xl shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:hello@presswayy.com"
                      className="text-white font-medium hover:text-[#ff4e33] transition-colors break-all"
                    >
                      hello@presswayy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 text-[#ff4e33] rounded-xl shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">
                      Call Us
                    </p>
                    <a
                      href="tel:+8801886168979"
                      className="text-white font-medium hover:text-[#ff4e33] transition-colors"
                    >
                      +8801886168979
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-orange-50 border border-orange-100 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#ff4e33]/10 text-[#ff4e33] rounded-lg">
                  <Clock size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 m-0">
                  Business Hours
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li className="flex justify-between">
                  <span>Saturday - Thursday:</span>
                  <span className="text-slate-900">10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday:</span>
                  <span className="text-[#ff4e33] font-bold">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
