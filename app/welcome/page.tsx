"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import { usePortalStore } from "@/store/usePortalStore";
import PaymentPanel from "@/components/portal/PaymentPanel";
import CalendarPanel from "@/components/portal/CalendarPanel";

import "../dashboard/portal.css";

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const {
    userName, // ✅ নাম ফিরিয়ে আনা হলো
    userInitial, // ✅ অবতার ফিরিয়ে আনা হলো
    userPhone,
    isPaid,
    meetingStatus,
    meetingDesc,
    steps,
    openStepIndex,
    initializeData,
    toggleStep,
    handleMeetingSuccess,
    logout,
  } = usePortalStore();

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (!Cookies.get("is_logged_in")) {
      router.push("/");
      return;
    }

    const payStatus = searchParams.get("payment");

    const timeoutId = setTimeout(() => {
      initializeData(payStatus);
      const activeStepIndex = steps.findIndex(
        (step) => step.status === "active",
      );
      if (activeStepIndex !== -1) {
        usePortalStore.setState({ openStepIndex: activeStepIndex });
      }
    }, 0);

    if (payStatus === "success") {
      toast.success("Payment Successful!");
      router.replace(pathname);
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, searchParams, pathname, initializeData]);

  const onLogoutClick = () => {
    logout();
    window.location.href = "/";
  };

  const onMeetingDone = (desc: string) => {
    handleMeetingSuccess(desc);
    toast.success("Meeting request sent!");
  };

  if (!isMounted) return null;

  const totalSteps = steps.length > 1 ? steps.length - 1 : 1;
  const doneSteps = steps.filter((s) => s.status === "done").length;
  const progressPct = Math.round((doneSteps / totalSteps) * 100);

  return (
    <div className="client-portal animate-in fade-in duration-500 min-h-screen bg-white">
      {/* --- Navbar --- */}
      <nav className="navbar border-b border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50 bg-[#0a0a0a]">
        <div className="nav-logo">
          <Image
            src="https://res.cloudinary.com/drchxbdit/image/upload/v1774702469/presswayy-white_tu4s72.png"
            alt="Presswayy Logo"
            width={160}
            height={60}
            className="w-32 sm:w-40 h-auto"
            priority
          />
        </div>

        <div className="nav-right flex items-center gap-4">
          {/* ✅ নাম এবং অবতার সেকশন আবার যুক্ত করা হলো */}
          <div className="flex items-center gap-3 bg-[#1a1a1a] border border-slate-800 px-3 py-1.5 rounded-full">
            <div className="w-8 h-8 rounded-full bg-[#ff4e33] flex items-center justify-center text-white font-bold text-sm shadow-inner">
              {userInitial}
            </div>
            <div className="text-slate-200 font-medium text-sm hidden sm:block pr-1">
              {userName}
            </div>
          </div>

          <button
            className="btn-logout text-xs font-semibold text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600 transition-all px-3 py-2 rounded-lg bg-transparent"
            onClick={onLogoutClick}
          >
            Sign out
          </button>
        </div>
      </nav>

      {/* --- Main Body --- */}
      <div className="portal-body max-w-3xl mx-auto px-4 py-8 bg-white">
        {/* Progress Tracker */}
        <div className="progress-section bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
          <div className="progress-header flex justify-between items-end mb-4">
            <div className="progress-title text-lg font-bold text-slate-800 tracking-tight">
              Overall Progress
            </div>
            <div className="progress-count text-sm font-medium text-slate-500">
              <span className="text-[#ff4e33] font-bold text-base">
                {doneSteps}
              </span>{" "}
              of {totalSteps} steps completed
            </div>
          </div>
          <div className="prog-track w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="prog-fill h-full bg-[#ff4e33] rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="section-label text-xl font-bold text-slate-800 mb-6">
          Your Onboarding Journey <br />
          <span className="text-sm text-slate-400 font-normal">
            For any queries: +880 1886-168979
          </span>
        </div>

        {/* Timeline */}
        <div className="timeline space-y-4">
          {steps.map((step, i) => {
            const isOpen = openStepIndex === i;
            const isLast = i === steps.length - 1;

            return (
              <div
                key={step.key}
                className={`tl-item bg-white border border-slate-100 rounded-2xl p-5 shadow-sm transition-all cursor-pointer hover:border-slate-200 ${isOpen ? "ring-2 ring-orange-50/50" : ""}`}
                onClick={() => toggleStep(i)}
              >
                <div className="flex gap-4">
                  <div className="tl-icon-col flex flex-col items-center pt-1">
                    <div className="tl-icon z-10 bg-white">
                      {step.status === "done" ? (
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <circle cx="8" cy="8" r="8" fill="#F36525" />
                          <path
                            d="M4.5 8.2l2.3 2.3 4.7-4.7"
                            stroke="#fff"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <div
                          className={`w-3 h-3 rounded-full ${step.status === "active" ? "bg-[#ff4e33] animate-pulse" : "bg-slate-200"}`}
                        />
                      )}
                    </div>
                    {!isLast && (
                      <div
                        className={`tl-vline w-[1.5px] h-full mt-2 ${step.status === "done" ? "bg-[#ff4e33]" : "bg-slate-100"}`}
                      />
                    )}
                  </div>
                  <div className="tl-body flex-1">
                    <div className="tl-top flex justify-between items-start mb-1">
                      <div className="font-bold text-lg text-slate-800 tracking-tight">
                        {step.label}
                      </div>
                      <div
                        className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded ${step.status === "done" ? "bg-green-50 text-green-600" : "bg-orange-50 text-[#ff4e33]"}`}
                      >
                        {step.status === "done" ? "Completed" : "In Progress"}
                      </div>
                    </div>
                    <div className="text-slate-500 text-sm leading-relaxed">
                      {step.desc}
                    </div>
                    {isOpen && (
                      <div
                        className="mt-6 pt-6 border-t border-slate-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {step.key === "payment" && (
                          <PaymentPanel
                            userName={userName}
                            userPhone={userPhone}
                            isPaid={isPaid}
                          />
                        )}
                        {step.key === "meeting" && (
                          <CalendarPanel
                            userPhone={userPhone}
                            onSuccess={onMeetingDone}
                            isCompleted={meetingStatus === "Scheduled"}
                            meetingDesc={meetingDesc}
                            meetingStatus={meetingStatus}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function WelcomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <DashboardContent />
    </Suspense>
  );
}
