import React from "react";
import Image from "next/image";
import { Sparkles, Leaf, Utensils, HeartHandshake } from "lucide-react";

export const FoodSection: React.FC = () => {
  const foodTags = [
    { label: "LOCAL FLAVOURS", icon: Leaf, desc: "Regional recipes crafted with heritage spices" },
    { label: "FRESH INGREDIENTS", icon: Sparkles, desc: "Farm-picked vegetables & pure countryside produce" },
    { label: "HOME-COOKED", icon: Utensils, desc: "Slow-simmered meals prepared with homestyle warmth" },
    { label: "SHARED MOMENTS", icon: HeartHandshake, desc: "Long, unhurried meals around the communal wooden table" },
  ];

  return (
    <section id="food" className="py-24 sm:py-32 bg-[#FCFAF7] relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content and Food Badges */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#BD5B3E] block">
                CULINARY JOURNEY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#121E17] tracking-tight leading-[1.15]">
                Good Food. <br />
                <span className="italic font-normal text-[#BD5B3E]">Shared Slowly.</span>
              </h2>
            </div>

            <div className="space-y-4 text-[#4D3C32] text-base sm:text-lg font-light leading-relaxed">
              <p>
                At Varanadah, food is part of the experience.
              </p>
              <p>
                Enjoy authentic desi delicacies alongside city-style favourites, prepared with care using fresh and locally sourced ingredients.
              </p>
            </div>

            {/* 4 Required Labels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {foodTags.map((tag) => {
                const Icon = tag.icon;
                return (
                  <div
                    key={tag.label}
                    className="p-4 rounded-xl bg-[#F7F3EC] border border-[#E2D7C5] space-y-1.5 hover:border-[#BD5B3E]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={14} className="text-[#BD5B3E]" />
                      <span className="text-[11px] font-semibold tracking-wider text-[#121E17] uppercase">
                        {tag.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#717E61] font-light leading-snug">
                      {tag.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Premium Food Photography Area */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#EFE8DC] group">
              <Image
                src="/images/food.jpg"
                alt="Artisanal farm-to-table feast with home-cooked desi delicacies and city-style cuisine at Varanadah"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

              {/* Floating Culinary Note */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-white/95 backdrop-blur-md rounded-xl border border-[#E2D7C5] shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#BD5B3E] font-semibold block">
                    Farm-to-Verandah Dining
                  </span>
                  <p className="font-serif text-sm sm:text-base text-[#121E17] italic">
                    Freshly baked breads, earthen-pot dal, seasonal salads & artisanal teas.
                  </p>
                </div>
                <div className="hidden sm:block text-right pl-4 shrink-0">
                  <span className="text-[10px] uppercase tracking-widest text-[#717E61] block">
                    Prepared Daily
                  </span>
                  <span className="text-xs font-serif text-[#121E17]">With Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
