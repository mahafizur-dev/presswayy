"use client";

import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";


const ConnectFeature = dynamic(
  () => import("@/components/sections/ConnectFeature"),
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
);
const VideoExplanation = dynamic(
  () => import("@/components/sections/VideoExplanation"),
);
const FeaturesSection = dynamic(
  () => import("@/components/sections/FeaturesGrid"),
);
const SolutionsSection = dynamic(
  () => import("@/components/sections/SolutionsSection"),
);
const LiveDemo = dynamic(() => import("@/components/sections/LiveDemo"));
const PricingSection = dynamic(
  () => import("@/components/sections/PricingSection"),
);
const CustomerStories = dynamic(
  () => import("@/components/sections/CustomerStories"),
);
const Platform = dynamic(() => import("@/components/sections/Platform"));
const ResourcesSection = dynamic(
  () => import("@/components/sections/ResourcesSection"),
);
const FAQ = dynamic(() => import("@/components/sections/FAQ"));

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* 💡 FIX: onOpenForm প্রপসগুলো রিমুভ করা হয়েছে */}

      {/* Hero Section & Initial Logos */}
      <Hero />
      <TrustedCompanies />

      {/* Lazy Loaded Sections */}
      <ConnectFeature />
      <Testimonials />
      <FeaturesSection />
      <VideoExplanation />
      <SolutionsSection />
      <LiveDemo />
      <PricingSection />
      <CustomerStories />
      <Platform />
      <ResourcesSection />
      <FAQ />
    </main>
  );
}
