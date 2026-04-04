"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import AuthModal from "@/components/ui/AuthModal";
import Cookies from "js-cookie";

export default function Navbar() {
  const pathname = usePathname();

  // UI States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Auth States
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ১. Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ২. Auth Check Handler
  useEffect(() => {
    const checkAuth = () => {
      const storedName = Cookies.get("user_name");
      if (storedName) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsMounted(true);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    const handleOpenAuth = () => setIsAuthModalOpen(true);
    window.addEventListener("openAuthModal", handleOpenAuth);
    return () => window.removeEventListener("openAuthModal", handleOpenAuth);
  }, []);

  // Logout Handler
  const handleLogout = () => {
    Cookies.remove("is_logged_in");
    Cookies.remove("user_name");
    Cookies.remove("user_phone");
    Cookies.remove("payment_status");
    Cookies.remove("meeting_scheduled");
    Cookies.remove("meeting_desc");

    setIsLoggedIn(false);
    setIsMobileMenuOpen(false);
    window.location.href = "/";
  };

  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-[15px] border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[80px] flex items-center justify-between">
          {/* 1. Logo Section */}
          <div className="flex-1 flex justify-start items-center">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/PRESSWAYY-.png"
                alt="Presswayy Logo"
                width={150}
                height={50}
                className="w-32 h-auto"
                priority
              />
            </Link>
          </div>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#0a1435] text-[16px] font-medium hover:text-[#ff4e33] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 3. Right Section (Auth) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:flex items-center gap-4 min-w-[120px] justify-end">
              {!isMounted ? (
                <div className="w-[100px] h-[40px] bg-gray-50 animate-pulse rounded-sm"></div>
              ) : isLoggedIn ? (
                <div className="flex items-center gap-6">
                  {/* Dashboard Link */}
                  <Link
                    href="/dashboard"
                    className="text-[#0a1435] font-medium hover:text-[#ff4e33] flex items-center gap-2 transition-colors"
                  >
                    <LayoutDashboard size={18} /> Dashboard
                  </Link>

                  {/* 💡 প্রোফাইল সেকশন রিমুভ করা হয়েছে, শুধু লগআউট বাটন রাখা হয়েছে */}
                  <button
                    onClick={handleLogout}
                    className="text-gray-500 font-medium hover:text-red-500 flex items-center gap-1.5 transition-colors text-sm border-l pl-5 border-gray-200"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-[#ff4e33] text-white px-8 py-2.5 text-[15px] font-medium hover:bg-[#e63e26] transition-all duration-200 shadow-sm rounded-sm"
                >
                  Login
                </button>
              )}
            </div>

            <button
              className="md:hidden text-[#0a1435] p-2 hover:text-[#ff4e33] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 4. Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-[80px] left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 origin-top ${
            isMobileMenuOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-6 py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#0a1435] font-medium text-lg hover:text-[#ff4e33] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {isMounted &&
              (isLoggedIn ? (
                <div className="mt-2 border-t border-gray-100 pt-4 flex flex-col gap-3">
                  <Link
                    href="/dashboard"
                    className="flex items-center justify-center gap-2 bg-[#0a1435] text-white px-6 py-3 rounded-sm font-medium hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LayoutDashboard size={18} /> Go to Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 border border-red-100 text-red-500 px-6 py-3 rounded-sm font-medium hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              ) : (
                <button
                  className="bg-[#ff4e33] text-white text-center px-6 py-3 mt-4 font-medium hover:bg-[#e63e26] transition-colors rounded-sm"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAuthModalOpen(true);
                  }}
                >
                  Login
                </button>
              ))}
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
