"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  MessageSquare,
  Users,
  Calendar,
  Settings,
  Menu,
  Bell,
  Search,
  X,
  LogOut,
  Loader2,
} from "lucide-react";

// Sidebar Menu Items
const sidebarLinks = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Agents", href: "/dashboard/agents", icon: Bot },
  { name: "Conversations", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Leads", href: "/dashboard/leads", icon: Users },
  { name: "Meetings", href: "/dashboard/meetings", icon: Calendar },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // User Profile & Auth States
  const [userFullName, setUserFullName] = useState<string>("");
  const [userInitial, setUserInitial] = useState<string>("");
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);

  // 1. Check Auth & Fetch User Data (Custom Auth)
  useEffect(() => {
    const checkAuthAndFetchProfile = () => {
      
      const storedName = localStorage.getItem("user_name");

      if (!storedName) {
        window.location.href = "/";
        return;
      }

      setUserFullName(storedName);
      setUserInitial(storedName.charAt(0).toUpperCase());
      setIsAuthLoading(false); 
    };

    const timer = setTimeout(() => {
      checkAuthAndFetchProfile();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // 2. Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("user_name"); 
    window.location.href = "/"; 
  };

 
  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white">
        <Loader2 className="w-10 h-10 animate-spin text-[#2EC866] mb-4" />
        <p className="text-gray-400 font-medium tracking-widest uppercase text-sm">
          Securing Connection...
        </p>
      </div>
    );
  }

 
  return (
    <div className="min-h-screen bg-[#050505] text-white flex animate-in fade-in duration-500">
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50 w-64 h-full bg-[#0A0A0A] border-r border-white/5 
          transform transition-transform duration-300 ease-in-out flex flex-col
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo Section */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
          <Link
            href="/dashboard"
            className="text-xl font-bold tracking-wider text-white flex items-center gap-2"
          >
            <span className="w-8 h-8 bg-[#2EC866] rounded-lg flex items-center justify-center text-black">
              P
            </span>
            PRESSWAYY
          </Link>
          <button
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
          <p className="px-3 text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
            Main Menu
          </p>
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group
                  ${
                    isActive
                      ? "bg-[#2EC866]/10 text-[#2EC866]"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon
                  size={20}
                  className={`transition-colors ${
                    isActive
                      ? "text-[#2EC866]"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />
                <span className="font-medium text-sm">{link.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-3 text-gray-400 hover:bg-white/5 hover:text-red-400 rounded-xl transition-all group"
          >
            <LogOut
              size={20}
              className="group-hover:text-red-400 transition-colors"
            />
            <span className="font-medium text-sm">Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          {/* Mobile Menu Toggle & Search */}
          <div className="flex items-center gap-4 flex-1">
            <button
              className="lg:hidden text-gray-400 hover:text-white p-2 transition-colors"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-full max-w-md focus-within:border-[#2EC866]/50 focus-within:ring-1 focus-within:ring-[#2EC866]/50 transition-all">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search leads, agents, or settings..."
                className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-gray-500"
              />
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ff4e33] rounded-full"></span>
            </button>
            <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>

            {/* Profile Avatar */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="hidden md:block text-right">
                <p className="text-sm font-bold text-white leading-tight group-hover:text-[#2EC866] transition-colors">
                  {userFullName}
                </p>
                <p className="text-xs text-[#2EC866]">Pro Plan</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2EC866] to-[#0a1435] border-2 border-white/10 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {userInitial}
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content (children) */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#2EC866]/5 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
