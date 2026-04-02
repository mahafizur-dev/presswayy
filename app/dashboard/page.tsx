"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

import { usePortalStore } from "@/store/usePortalStore";
import PaymentPanel from "@/components/portal/PaymentPanel";
import CalendarPanel from "@/components/portal/CalendarPanel";

import "./portal.css";

export default function ClientPortalPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const {
    userName,
    userInitial,
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
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Route Guard
    if (!Cookies.get("is_logged_in")) {
      router.push("/");
      return;
    }

    const payStatus = searchParams.get("payment");

    // 💡 Defer state update to avoid cascading render error
    const timeoutId = setTimeout(() => {
      initializeData(payStatus);
    }, 0);

    // 💡 Handle Toasts and URL Cleaning
    if (payStatus === "success") {
      toast.success("Payment Successful! Your account is now active.", {
        id: "pay-success",
      });
      router.replace(pathname);
    } else if (payStatus === "failed") {
      toast.error("Payment Failed. Please try again.", { id: "pay-failed" });
      router.replace(pathname);
    }

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted, searchParams, pathname, initializeData]); // router removed from dependency to avoid extra triggers

  const onLogoutClick = () => {
    logout();
    toast.success("Logged out successfully");
    window.location.href = "/";
  };

  const onMeetingDone = (desc: string) => {
    handleMeetingSuccess(desc);
    toast.success("Meeting request sent to Admin!");
  };

  if (!isMounted) return null;

  const totalSteps = steps.length > 1 ? steps.length - 1 : 1;
  const doneSteps = steps.filter((s) => s.status === "done").length;
  const progressPct = Math.round((doneSteps / totalSteps) * 100);

  return (
    <div className="client-portal animate-in fade-in duration-500 min-h-screen bg-slate-50">
      <Toaster position="top-center" />

      {/* --- Navbar --- */}
      <nav className="navbar bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
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
          <div className="nav-client-pill flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
            <div className="nav-avatar bg-[#ff4e33] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
              {userInitial}
            </div>
            <div className="nav-client-name font-medium text-slate-700 hidden sm:block">
              {userName}
            </div>
          </div>
          <button
            className="btn-logout text-sm font-semibold text-slate-500 hover:text-red-500 transition-colors px-2 py-1"
            onClick={onLogoutClick}
          >
            Sign out
          </button>
        </div>
      </nav>

      {/* --- Main Body --- */}
      <div className="portal-body max-w-3xl mx-auto px-4 py-8">
        {/* Progress Tracker */}
        <div className="progress-section bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
          <div className="progress-header flex justify-between items-end mb-4">
            <div className="progress-title text-lg font-bold text-slate-800">
              Overall Progress
            </div>
            <div className="progress-count text-sm font-medium text-slate-500">
              <span className="text-[#ff4e33] font-bold text-base">
                {doneSteps}
              </span>{" "}
              of {totalSteps} steps completed
            </div>
          </div>
          <div className="prog-track w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="prog-fill h-full bg-[#ff4e33] rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="section-label text-xl font-bold text-slate-800 mb-6">
          Your Onboarding Journey
        </div>

        {/* Timeline */}
        <div className="timeline space-y-4">
          {steps.map((step, i) => {
            const isOpen = openStepIndex === i;
            const isLast = i === steps.length - 1;

            const iconInner =
              step.status === "done" ? (
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#F36525" />
                  <path
                    d="M4.5 8.2l2.3 2.3 4.7-4.7"
                    stroke="#fff"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : step.status === "active" ? (
                <div className="active-pulse w-3 h-3 bg-[#ff4e33] rounded-full animate-pulse" />
              ) : (
                <div className="pending-dot w-3 h-3 bg-slate-300 rounded-full" />
              );

            return (
              <div
                key={step.key}
                className={`tl-item bg-white border border-slate-100 rounded-2xl p-5 shadow-sm transition-all cursor-pointer hover:border-slate-300 ${isOpen ? "ring-2 ring-orange-50" : ""} ${step.status === "active" ? "shadow-md border-orange-100" : ""}`}
                onClick={() => toggleStep(i)}
              >
                <div className="flex gap-4">
                  <div className="tl-icon-col flex flex-col items-center pt-1">
                    <div className="tl-icon z-10 bg-white">{iconInner}</div>
                    {!isLast && (
                      <div
                        className={`tl-vline w-[2px] h-full mt-2 ${step.status === "done" ? "bg-[#ff4e33]" : "bg-slate-100"}`}
                      />
                    )}
                  </div>

                  <div className="tl-body flex-1">
                    <div className="tl-top flex justify-between items-start mb-1">
                      <div
                        className={`tl-name font-bold text-lg ${step.status === "active" ? "text-slate-900" : "text-slate-700"}`}
                      >
                        {step.label}
                      </div>
                      <div
                        className={`tl-badge text-xs font-bold px-2.5 py-1 rounded-md ${
                          step.status === "done"
                            ? "bg-green-50 text-green-600"
                            : step.customBadge
                              ? "bg-yellow-50 text-yellow-600"
                              : step.status === "active"
                                ? "bg-orange-50 text-[#ff4e33]"
                                : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {step.customBadge ||
                          (step.status === "done"
                            ? "✓ Completed"
                            : step.status === "active"
                              ? "In Progress"
                              : "Pending")}
                      </div>
                    </div>
                    <div className="tl-desc text-slate-500 text-sm mb-1">
                      {step.desc}
                    </div>
                    <div className="tl-time text-xs font-medium text-slate-400">
                      {step.time}
                    </div>

                    {isOpen && (
                      <div
                        className="tl-expand mt-6 pt-4 border-t border-slate-100"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="mb-4 text-slate-600 text-sm leading-relaxed">
                          {step.detail}
                        </div>
                        {step.key === "payment" &&
                          (step.status === "active" ||
                            step.status === "done") && (
                            <PaymentPanel
                              userName={userName}
                              userPhone={userPhone}
                              isPaid={isPaid}
                            />
                          )}
                        {step.key === "meeting" &&
                          (step.status === "active" ||
                            step.status === "done") && (
                            <CalendarPanel
                              userPhone={userPhone}
                              onSuccess={onMeetingDone}
                              isCompleted={
                                meetingStatus === "Scheduled" ||
                                meetingStatus === "Approved"
                              }
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
