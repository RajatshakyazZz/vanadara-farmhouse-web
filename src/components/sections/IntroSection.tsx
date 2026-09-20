import React from "react";
import Image from "next/image";
import { Wind, Compass, Sparkles, HeartHandshake } from "lucide-react";

export const IntroSection: React.FC = () => {
  const pillars = [
    { word: "PAUSE", desc: "Step off the relentless wheel of urban rush", icon: Wind },
    { word: "BREATHE", desc: "Crisp, sweet mountain air in every lungful", icon: Compass },
    { word: "CONNECT", desc: "Warm conversations with loved ones & nature", icon: HeartHandshake },
    { word: "REJOICE", desc: "Savouring the quiet wonder of living simply", icon: Sparkles },
  ];

  return (
    <section id="introduction" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl group border border-[#EFE8DC]">
              <Image
                src="/images/nature.jpg"
                alt="Scenic mountain landscape and path leading to Varanadah Farmstay"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-white/95 backdrop-blur-md rounded-xl border border-[#E2D7C5] shadow-lg">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#BD5B3E] font-semibold block mb-1">
                  Architectural Sanctuary
                </span>
                <p className="font-serif text-base sm:text-lg text-[#121E17] leading-snug">
                  Traditional Mangalore-tiled roofs, stone masonry, and panoramic valley breezes.
                </p>
              </div>
            </div>

            {/* Subtle decorative background motif */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D8BA74]/15 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#BD5B3E]/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Editorial Text & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#BD5B3E] block">
                THE VARANADAH EXPERIENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-light text-[#121E17] leading-[1.15] tracking-tight">
                More Than a Farmhouse. <br />
                <span className="italic font-normal text-[#362922]">A Way of Life.</span>
              </h2>
            </div>

            <div className="space-y-5 text-[#4D3C32] text-base sm:text-lg leading-relaxed font-light">
              <p>
                Welcome to Varanadah, a peaceful retreat where the rustic beauty of the countryside meets the comfort of modern living.
              </p>
              <p>
                Nestled near a charming village and surrounded by mountain views, Varanadah invites you to slow down, breathe deeply and reconnect with the moments that matter.
              </p>
            </div>

            {/* The 4 Core Pillars Strip */}
            <div className="pt-4 border-t border-[#E2D7C5]/70">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#717E61] font-semibold block mb-4">
                THE SLOW LIVING PHILOSOPHY
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {pillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.word}
                      className="p-3.5 rounded-xl bg-white border border-[#ECE4D8] text-center hover:border-[#BD5B3E]/50 transition-colors group"
                    >
                      <Icon size={16} className="mx-auto text-[#BD5B3E] mb-1.5 group-hover:scale-110 transition-transform" />
                      <span className="font-serif text-sm tracking-wider font-semibold text-[#121E17] block">
                        {item.word}
                      </span>
                      <span className="text-[10px] text-[#717E61] leading-tight mt-1 block">
                        {item.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
