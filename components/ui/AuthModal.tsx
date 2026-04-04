"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import toast from "react-hot-toast";
import {
  X,
  Loader2,
  Phone,
  ArrowRight,
  ShieldCheck,
  User,
  Clock,
  Mail,
  AlertCircle,
  Briefcase,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ElementType;
  showPasswordToggle?: boolean;
  isPasswordVisible?: boolean;
  onTogglePassword?: () => void;
}

const CustomInput = ({
  icon: Icon,
  showPasswordToggle,
  isPasswordVisible,
  onTogglePassword,
  ...props
}: CustomInputProps) => (
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <Icon className="h-5 w-5 text-slate-400 group-focus-within:text-[#ff4e33] transition-colors" />
    </div>
    <input
      {...props}
      className={`w-full pl-12 ${showPasswordToggle ? "pr-12" : "pr-4"} py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#ff4e33]/20 focus:border-[#ff4e33] outline-none transition-all font-medium`}
    />
    {showPasswordToggle && (
      <button
        type="button"
        onClick={onTogglePassword}
        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-[#ff4e33] transition-colors"
      >
        {isPasswordVisible ? (
          <EyeOff className="h-5 w-5" />
        ) : (
          <Eye className="h-5 w-5" />
        )}
      </button>
    )}
  </div>
);

// --- Main Modal Component ---

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ViewState = "phone" | "password" | "otp" | "signup" | "reset_password";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [view, setView] = useState<ViewState>("phone");
  const [otpPurpose, setOtpPurpose] = useState<"signup" | "forgot_password">(
    "signup",
  );

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    name: "",
    email: "",
    businessName: "",
    address: "",
  });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const resetForm = useCallback(() => {
    setView("phone");
    setFormData({
      phone: "",
      password: "",
      name: "",
      email: "",
      businessName: "",
      address: "",
    });
    setOtp(["", "", "", ""]);
    setTimeLeft(0);
    setErrorMessage("");
    setShowPassword(false);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    let timerId: NodeJS.Timeout;
    if (timeLeft > 0 && view === "otp") {
      timerId = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [timeLeft, view, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isLoading) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      const timeoutId = setTimeout(resetForm, 300);
      return () => clearTimeout(timeoutId);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, isLoading, resetForm, isMounted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // --- API Handlers ---

  const handlePhoneSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.phone.length < 11)
      return setErrorMessage("Please enter a valid 11-digit number.");
    setIsLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch(`${API_BASE}/check-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone.trim() }),
      });
      const data = await res.json();

      if (data.exists) {
        setView("password");
      } else {
        setOtpPurpose("signup"); 
        await triggerSendOtp();
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Network error. Please check your connection.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const triggerSendOtp = async (isResend = false) => {
    const res = await fetch(`${API_BASE}/otp-send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: formData.phone.trim(),
        action: "send_otp",
      }),
    });
    if (!res.ok) throw new Error("Failed to send OTP.");
    toast.success(isResend ? "OTP Resent!" : "OTP Sent!");
    setView("otp");
    setTimeLeft(120);
    setTimeout(() => otpRefs.current[0]?.focus(), 100);
  };

  const handleForgotPassword = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      setOtpPurpose("forgot_password");
      await triggerSendOtp();
    } catch (err) {
      setErrorMessage("Failed to send reset code. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: formData.phone.trim(),
          password: formData.password.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        completeLogin(
          data.userName,
          data.businessName,
          data.paymentStatus,
          data.meetingStatus,
          data.meetingDesc,
          "/dashboard",
        );
      } else {
        throw new Error(data.message || "Incorrect password.");
      }
    } catch (err) {
      let errorMsg = err instanceof Error ? err.message : "Login failed.";
      if (
        errorMsg.includes("Error in workflow") ||
        errorMsg.includes("workflow")
      ) {
        errorMsg = "Incorrect password. Please try again.";
      }
      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length < 4) return;
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/otp-verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone.trim(), otp: fullOtp }),
      });
      const data = await res.json();
      if (data.status === "verified" || data.success) {
        if (otpPurpose === "forgot_password") {
          setView("reset_password");
          setFormData((prev) => ({ ...prev, password: "" })); 
        } else {
          setView("signup");
        }
      } else {
        throw new Error(data.message || "Invalid OTP.");
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Verification failed.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPasswordSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (formData.password.length < 6)
      return setErrorMessage("Password must be at least 6 characters.");

    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: formData.phone.trim(),
          newPassword: formData.password.trim(),
        }),
      });

      if (!res.ok) throw new Error("Failed to reset password.");

      toast.success("Password reset successful! Please log in.");
      setView("password");
      setFormData((prev) => ({ ...prev, password: "" }));
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Could not reset password.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password.length < 6)
      return setErrorMessage("Password must be 6+ characters.");
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/user-register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone.trim(),
          password: formData.password.trim(),
        }),
      });
      if (!res.ok) throw new Error("Signup failed.");

      completeLogin(
        formData.name,
        formData.businessName,
        "Unpaid",
        "Pending",
        "",
        "/welcome",
      );
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Signup failed. Try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const completeLogin = (
    userName: string,
    bizName: string,
    paymentStatus: string = "Unpaid",
    meetingStatus: string = "Pending",
    meetingDesc: string = "",
    redirectUrl: string = "/dashboard",
  ) => {
    Cookies.set("is_logged_in", "true", { expires: 7 });
    Cookies.set("user_name", userName, { expires: 7 });
    Cookies.set("user_phone", formData.phone, { expires: 7 });
    if (bizName) Cookies.set("business_name", bizName, { expires: 7 });
    if (paymentStatus === "Paid") {
      Cookies.set("payment_status", "Paid", { expires: 30 });
    }
    Cookies.set("meeting_status", meetingStatus, { expires: 30 });
    if (
      (meetingStatus === "Scheduled" || meetingStatus === "Approved") &&
      meetingDesc
    ) {
      Cookies.set("meeting_desc", meetingDesc, { expires: 30 });
    }
    toast.success(`Welcome, ${userName}!`);
    onClose();
    setTimeout(() => {
      router.push(redirectUrl);
    }, 500);
  };

  const handleOtpChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 3) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);
    if (pasted) {
      const newOtp = [...otp];
      pasted.split("").forEach((char, i) => {
        newOtp[i] = char;
      });
      setOtp(newOtp);
      otpRefs.current[Math.min(pasted.length, 3)]?.focus();
    }
  };

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
      <div
        className="absolute inset-0 bg-[#0a1128]/60 backdrop-blur-sm transition-opacity"
        onClick={() => !isLoading && onClose()}
      />
      <div className="relative w-full max-w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#ff4e33] hover:bg-orange-50 rounded-full transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="px-8 pt-10 pb-8 overflow-y-auto custom-scrollbar">
          <div className="text-center mb-6 shrink-0">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-5 rotate-3 transition-transform">
              {view === "phone" && (
                <Phone className="text-[#FF5733] -rotate-3" size={28} />
              )}
              {view === "password" && (
                <Lock className="text-[#FF5733] -rotate-3" size={28} />
              )}
              {view === "reset_password" && (
                <Lock className="text-[#FF5733] -rotate-3" size={28} />
              )}
              {view === "otp" && (
                <ShieldCheck className="text-[#FF5733] -rotate-3" size={28} />
              )}
              {view === "signup" && (
                <User className="text-[#FF5733] -rotate-3" size={28} />
              )}
            </div>
            <h2 className="text-2xl font-bold text-[#0a1435]">
              {view === "phone"
                ? "Presswayy Login"
                : view === "password"
                  ? "Welcome Back!"
                  : view === "reset_password"
                    ? "Reset Password"
                    : view === "otp"
                      ? "Verify Code"
                      : "Business Details"}
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              {view === "phone"
                ? "Enter mobile to continue"
                : view === "password"
                  ? `Enter password for ${formData.phone}`
                  : view === "reset_password"
                    ? "Create a new secure password"
                    : view === "otp"
                      ? `Code sent to ${formData.phone}`
                      : "Setup your workspace"}
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-3.5 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium flex items-start gap-2 animate-in slide-in-from-top-2 shrink-0">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <p className="leading-snug">{errorMessage}</p>
            </div>
          )}

          {view === "phone" && (
            <form
              onSubmit={handlePhoneSubmit}
              className="space-y-6 animate-in slide-in-from-left-4 fade-in"
            >
              <CustomInput
                icon={Phone}
                type="tel"
                name="phone"
                placeholder="01XXXXXXXXX"
                required
                autoFocus
                maxLength={11}
                value={formData.phone}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                disabled={isLoading || formData.phone.length < 11}
                className="w-full bg-[#ff4e33] hover:bg-[#e63e26] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 disabled:opacity-60 active:scale-[0.98]"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Continue <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}

          {view === "password" && (
            <form
              onSubmit={handlePasswordLogin}
              className="space-y-4 animate-in slide-in-from-right-4 fade-in"
            >
              <CustomInput
                icon={Lock}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                autoFocus
                value={formData.password}
                onChange={handleInputChange}
                showPasswordToggle
                onTogglePassword={() => setShowPassword(!showPassword)}
                isPasswordVisible={showPassword}
              />
              <div className="flex justify-between items-center px-1">
                <button
                  type="button"
                  onClick={() => setView("phone")}
                  className="text-sm text-slate-500 hover:text-[#ff4e33] font-medium flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                {/* 💡 FIX 6: Forgot Password বাটনে ক্লিক ইভেন্ট অ্যাড করা হলো */}
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={isLoading}
                  className="text-sm text-[#ff4e33] font-semibold hover:underline disabled:opacity-50"
                >
                  Forgot?
                </button>
              </div>
              <button
                type="submit"
                disabled={isLoading || !formData.password}
                className="w-full bg-[#0a1435] hover:bg-[#112052] text-white font-bold py-4 rounded-xl shadow-xl active:scale-[0.98] transition-all disabled:opacity-60"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          )}

          {/* 💡 FIX 7: নতুন Reset Password ফর্ম */}
          {view === "reset_password" && (
            <form
              onSubmit={handleResetPasswordSubmit}
              className="space-y-4 animate-in slide-in-from-right-4 fade-in"
            >
              <CustomInput
                icon={Lock}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="New Password"
                required
                autoFocus
                value={formData.password}
                onChange={handleInputChange}
                showPasswordToggle
                onTogglePassword={() => setShowPassword(!showPassword)}
                isPasswordVisible={showPassword}
              />
              <button
                type="submit"
                disabled={isLoading || formData.password.length < 6}
                className="w-full bg-[#ff4e33] text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all disabled:opacity-60"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Update Password"
                )}
              </button>
            </form>
          )}

          {view === "otp" && (
            <form
              onSubmit={handleVerifyOtp}
              className="space-y-6 animate-in slide-in-from-right-4 fade-in"
            >
              <div className="flex justify-between gap-3 px-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => {
                      otpRefs.current[idx] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onPaste={handleOtpPaste}
                    onChange={(e) => handleOtpChange(e.target.value, idx)}
                    onKeyDown={(e) =>
                      e.key === "Backspace" &&
                      !otp[idx] &&
                      idx > 0 &&
                      otpRefs.current[idx - 1]?.focus()
                    }
                    className="w-14 h-16 text-center text-2xl font-black text-[#0a1435] bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#ff4e33]/20 focus:border-[#ff4e33] outline-none transition-all shadow-sm"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">No code?</span>
                {timeLeft === 0 ? (
                  <button
                    type="button"
                    onClick={() => triggerSendOtp(true)}
                    className="text-[#ff4e33] font-bold hover:underline"
                  >
                    Resend
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 font-bold text-slate-400">
                    <Clock size={14} /> {formatTime(timeLeft)}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading || otp.join("").length < 4}
                className="w-full bg-[#0a1435] text-white font-bold py-4 rounded-xl active:scale-[0.98] transition-all disabled:opacity-60"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Verify Code"
                )}
              </button>
            </form>
          )}

          {view === "signup" && (
            <form
              onSubmit={handleCompleteSignup}
              className="space-y-4 animate-in slide-in-from-right-4 fade-in"
            >
              <CustomInput
                icon={User}
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              <CustomInput
                icon={Briefcase}
                name="businessName"
                placeholder="Business Name"
                required
                value={formData.businessName}
                onChange={handleInputChange}
              />
              <CustomInput
                icon={MapPin}
                name="address"
                placeholder="Office Address"
                required
                value={formData.address}
                onChange={handleInputChange}
              />
              <CustomInput
                icon={Mail}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
              <CustomInput
                icon={Lock}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create Password"
                required
                value={formData.password}
                onChange={handleInputChange}
                showPasswordToggle
                onTogglePassword={() => setShowPassword(!showPassword)}
                isPasswordVisible={showPassword}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#ff4e33] text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all disabled:opacity-60"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Complete Account"
                )}
              </button>
            </form>
          )}
        </div>

        <div className="p-5 bg-slate-50 text-center border-t border-slate-100 shrink-0 text-[11px] text-slate-400 font-medium">
          By continuing, you agree to Presswayy&apos;s{" "}
          <span className="text-slate-600 underline">Terms</span> and{" "}
          <span className="text-slate-600 underline">Privacy Policy</span>.
        </div>
      </div>
    </div>
  );
}
