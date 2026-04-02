"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MONTHS, DAYS, TIMES } from "@/constants/portal";

interface CalendarPanelProps {
  userPhone: string;
  onSuccess: (desc: string) => void;
  isCompleted: boolean;
  meetingDesc: string;
  meetingStatus?: string; // "Pending" | "Scheduled" | "Approved"
}

export default function CalendarPanel({
  userPhone,
  onSuccess,
  isCompleted,
  meetingDesc,
  meetingStatus = "Pending",
}: CalendarPanelProps) {
  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const [calDay, setCalDay] = useState<number | null>(null);
  const [calTime, setCalTime] = useState<string>("");

  // 💡 FIX 1: API Loading State যুক্ত করা হলো (Double Click Prevention)
  const [isLoading, setIsLoading] = useState(false);

  const handleScheduleMeeting = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!calDay || !calTime || isLoading) return;

    setIsLoading(true); // 💡 লোডিং শুরু
    try {
      const selectedDate = `${calDay} ${MONTHS[calMonth]} ${calYear}`;
      const res = await fetch("/api/meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: userPhone,
          date: selectedDate,
          time: calTime,
        }),
      });

      if (res.ok) {
        const desc = `${selectedDate} at ${calTime}`;
        onSuccess(desc);
      } else {
        toast.error("Failed to schedule meeting. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network Error! Please check your connection.");
    } finally {
      setIsLoading(false); // 💡 লোডিং শেষ
    }
  };

  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const today = new Date();

  // --- Meeting Booked / Requested View ---
  if (isCompleted) {
    const isApproved = meetingStatus === "Approved";

    return (
      <div
        className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm mt-4 cursor-default animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-5 text-3xl shadow-inner">
          {isApproved ? "✅" : "📅"}
        </div>

        <h3 className="font-bold text-[#0a1435] text-xl mb-2 text-center">
          {isApproved ? "Meeting Booked!" : "Schedule Requested!"}
        </h3>

        <div
          className={`px-5 py-2.5 rounded-xl font-bold text-base mb-5 text-center leading-relaxed ${
            isApproved
              ? "bg-green-50 text-green-700 border border-green-100"
              : "bg-orange-50 text-[#ff4e33] border border-orange-100"
          }`}
        >
          {/* 💡 Fallback text added in case meetingDesc is empty during transition */}
          {meetingDesc || "Processing your request..."}
        </div>

        <p className="text-sm text-slate-500 text-center max-w-[280px] leading-relaxed">
          {isApproved
            ? "Your onboarding call is confirmed. Our team will send the link shortly."
            : "We've received your request. An admin will confirm the slot as soon as possible."}
        </p>
      </div>
    );
  }

  // --- Calendar Selection View ---
  return (
    <div className="cal-panel" onClick={(e) => e.stopPropagation()}>
      <div className="cal-head">
        <span className="cal-head-title">📅 Schedule Your Meeting</span>
        <div className="cal-nav-wrap">
          <span className="cal-off-badge">Fri: Off</span>
          <div className="cal-nav">
            <button
              className="cal-nav-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (calMonth === 0) {
                  setCalMonth(11);
                  setCalYear(calYear - 1);
                } else setCalMonth(calMonth - 1);
              }}
            >
              ‹
            </button>
            <span className="cal-month-lbl">
              {MONTHS[calMonth]} {calYear}
            </span>
            <button
              className="cal-nav-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (calMonth === 11) {
                  setCalMonth(0);
                  setCalYear(calYear + 1);
                } else setCalMonth(calMonth + 1);
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="cal-grid-wrap">
        <div className="cal-day-names">
          {DAYS.map((d) => (
            <div key={d} className="cal-dn">
              {d}
            </div>
          ))}
        </div>
        <div className="cal-grid">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`blank-${i}`} className="cal-cell cal-blank"></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const d = i + 1;
            const cellDate = new Date(calYear, calMonth, d);
            const isPast =
              cellDate <
              new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const isOff = isPast || cellDate.getDay() === 5;

            return (
              <div
                key={d}
                className={`cal-cell ${isOff ? "cal-past" : ""} ${calDay === d && !isOff ? "cal-sel" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isOff) setCalDay(d);
                }}
              >
                {d}
              </div>
            );
          })}
        </div>
      </div>

      <div className="cal-time-row">
        <span className="cal-time-lbl">Time:</span>
        <select
          className="cal-time-sel"
          value={calTime}
          onChange={(e) => setCalTime(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        >
          <option value="">Select time...</option>
          {TIMES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* 💡 FIX 2: Button state dynamically handles loading & disabled states */}
        <button
          className={`cal-confirm-btn ${calDay && calTime && !isLoading ? "active" : ""}`}
          disabled={!calDay || !calTime || isLoading}
          onClick={handleScheduleMeeting}
        >
          {isLoading ? "Scheduling..." : "Confirm Meeting"}
        </button>
      </div>
    </div>
  );
}
