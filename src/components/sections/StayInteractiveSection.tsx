"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles, Sun, Home, Bath, Wind, Check, Eye } from "lucide-react";

interface Suite {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  highlights: string[];
}

const suites: Suite[] = [
  {
    id: "verandah-suite",
    name: "The Mountain Verandah Suite",
    tagline: "Vaulted Mangalore timber ceilings & uninterrupted valley vistas",
    description:
      "A spacious sanctuary with soaring exposed timber trusses, handcrafted king bed in organic unbleached linen, and double French doors that dissolve the boundary between indoors and the wide open verandah.",
    image: "/images/stay.jpg",
    specs: [
      { label: "Architecture", value: "Mangalore Terracotta Tiled Roof" },
      { label: "Bathroom", value: "Contemporary Travertine & Freestanding Tub" },
      { label: "Ventilation", value: "Continuous Mountain Cross-Breeze" },
      { label: "Verandah", value: "Direct Private Porch Access" },
    ],
    highlights: [
      "Natural stone freestanding soaking tub overlooking green hilltops",
      "Organic unbleached cotton & linen bedding with custom throws",
      "Morning light orientation for gentle natural sunrise wake-ups",
      "Quiet countryside atmosphere with zero urban highway noise",
    ],
  },
  {
    id: "garden-suite",
    name: "The Countryside Orchard Suite",
    tagline: "Nestled alongside quiet flower trails and village orchards",
    description:
      "Positioned on the secluded northern wing of the L-shaped estate, this suite offers absolute stillness. Hand-dressed local granite stone walls, teak accents, and expansive picture windows looking out to wild green canopies.",
    image: "/images/hero.jpg",
    specs: [
      { label: "Architecture", value: "Aged Teakwood Beams & Stone Plinth" },
      { label: "Bathroom", value: "Walk-in Rain Shower & Brass Fixtures" },
      { label: "Setting", value: "Secluded Wing Facing Native Trees" },
      { label: "Floor", value: "Warm Reclaimed Hardwood Planks" },
    ],
    highlights: [
      "High ceilings insulated with clay roof tiles to maintain natural cool temperatures",
      "Bespoke bedside reading lamps and curated artisanal pottery",
      "Direct stone-paved pathway leading to the campfire lawn",
      "Thoughtful interior aesthetics blending modern luxury with rustic honesty",
    ],
  },
];

export const StayInteractiveSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [activeSuite, setActiveSuite] = useState<Suite>(suites[0]);

  return (
    <section id="stay" className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#BA563B] block">
              ARCHITECTURE & SANCTUARY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#0E1A14] tracking-tight leading-[1.15]">
              Rustic Soul. <br />
              <span className="italic font-normal text-[#BA563B]">Modern Comfort.</span>
            </h2>
            <p className="text-sm sm:text-lg text-[#35251C] font-light leading-relaxed">
              Thoughtfully crafted to blend authentic countryside vernacular with contemporary boutique standards. Wake up to panoramic mountain sunrises without sacrificing creature comforts.
            </p>
          </div>

          {/* Suite Selector Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-xl border border-[#E5DDD0] shadow-sm self-start">
            {suites.map((suite) => (
              <button
                key={suite.id}
                onClick={() => setActiveSuite(suite)}
                className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wide uppercase transition-all cursor-pointer ${
                  activeSuite.id === suite.id
                    ? "bg-[#0E1A14] text-white shadow-sm"
                    : "text-[#35251C] hover:bg-[#F4EFE6]"
                }`}
              >
                {suite.name.split(" ")[1]} Suite
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Architectural Suite Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Main Visual Photography & Badge */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-[#E5DDD0] group">
            <Image
              src={activeSuite.image}
              alt={activeSuite.name}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Architectural Callout Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 bg-white/95 backdrop-blur-md rounded-xl border border-[#E5DDD0] shadow-lg">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#BA563B] font-semibold block mb-1">
                L-Shaped Architecture Flow
              </span>
              <p className="font-serif text-base sm:text-lg text-[#0E1A14] leading-snug">
                {activeSuite.tagline}
              </p>
            </div>
          </div>

          {/* Suite Details & Specs Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A856] font-mono block">
                  SUITE SPECIFICATION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0E1A14] font-light">
                  {activeSuite.name}
                </h3>
                <p className="text-sm text-[#4D3C32] font-light leading-relaxed">
                  {activeSuite.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {activeSuite.specs.map((item) => (
                  <div key={item.label} className="p-3 bg-white rounded-xl border border-[#E5DDD0]">
                    <span className="text-[10px] uppercase tracking-wider text-[#717E61] block font-semibold">
                      {item.label}
                    </span>
                    <span className="text-xs font-serif text-[#0E1A14] mt-0.5 block">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Features Checklist */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#BA563B] font-semibold block">
                  Thoughtful Touches
                </span>
                {activeSuite.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#35251C]">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#BA563B]/10 text-[#BA563B] flex items-center justify-center shrink-0">
                      <Check size={11} />
                    </span>
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reassurance & Direct Inquiry CTA */}
            <div className="pt-4 border-t border-[#E5DDD0] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#5C674E]">
                <ShieldCheck size={18} className="text-[#BA563B]" />
                <span>Sanitized modern baths & daily housekeeping</span>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-[#0E1A14] hover:bg-[#BA563B] text-white text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer shrink-0"
              >
                Inquire Suite
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
