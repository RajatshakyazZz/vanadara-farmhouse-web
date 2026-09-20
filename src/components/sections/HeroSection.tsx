"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const scrollToExplore = () => {
    const el = document.getElementById("introduction");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Cinematic Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Varanadah Farmstay L-shaped architecture and verandah overlooking mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 transition-transform duration-[20s] ease-out hover:scale-105"
        />
        {/* Subtle Dark & Earthy Gradient Overlay for Optimal Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[#0E1A14]/30 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white flex flex-col items-center mt-12 sm:mt-8">
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8">
          <Sparkles size={13} className="text-[#D8BA74]" />
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#F7F3EC] font-medium">
            {siteConfig.brand.tagline}
          </span>
        </div>

        {/* Brand Name */}
        <div className="space-y-1 sm:space-y-2 mb-6">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.22em] font-light uppercase text-white drop-shadow-md">
            VARANADAH
          </h1>
          <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.45em] uppercase text-[#EFE8DC]/90 font-light">
            THE FARMSTAY
          </p>
        </div>

        {/* Hero Quote */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#D8BA74] max-w-2xl mx-auto font-light leading-snug drop-shadow-sm mb-5">
          &ldquo;{siteConfig.brand.heroHeading}&rdquo;
        </p>

        {/* Small Supporting Text */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#FCFAF7]/90 max-w-2xl mx-auto font-light leading-relaxed tracking-wide mb-10 px-2">
          {siteConfig.brand.heroSubtext}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-[#BA563B] hover:bg-[#A1452D] text-white text-xs font-semibold uppercase tracking-[0.25em] rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            BOOK YOUR STAY
          </button>

          <button
            onClick={scrollToExplore}
            className="w-full sm:w-auto px-8 py-4 bg-white/15 hover:bg-white/25 text-white hover:text-white text-xs font-medium uppercase tracking-[0.22em] rounded-sm backdrop-blur-md border border-white/30 transition-all duration-300 cursor-pointer"
          >
            EXPLORE VARANADAH
          </button>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={scrollToExplore}
        className="absolute bottom-8 sm:bottom-10 inset-x-0 mx-auto w-fit z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group cursor-pointer"
        aria-label="Scroll to explore"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium group-hover:tracking-[0.35em] transition-all">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border border-white/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#D8BA74] rounded-full animate-pulse mt-0.5" />
        </div>
      </button>
    </section>
  );
};
