import React from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles, Sun, Home, Bath } from "lucide-react";

export const StaySection: React.FC = () => {
  const stayHighlights = [
    {
      title: "Mangalore-Tiled Roof",
      desc: "Traditional sloping terracotta tiles that keep rooms naturally insulated and cool.",
      icon: Home,
    },
    {
      title: "Airy Rooms & Natural Light",
      desc: "Vaulted timber ceilings and expansive French doors ushering in morning sun.",
      icon: Sun,
    },
    {
      title: "Clean Contemporary Bathrooms",
      desc: "Modern luxury fittings, freestanding soaking tub, and stone finishes.",
      icon: Bath,
    },
    {
      title: "Cozy Countryside Atmosphere",
      desc: "Warm wooden flooring, organic linens, and peaceful mountain silence.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="stay" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#BD5B3E] block">
            ARCHITECTURE & SANCTUARY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#121E17] tracking-tight leading-[1.15]">
            Rustic Soul. <br />
            <span className="italic font-normal text-[#BD5B3E]">Modern Comfort.</span>
          </h2>
          <p className="text-sm sm:text-lg text-[#4D3C32] font-light leading-relaxed">
            Thoughtfully crafted to blend authentic countryside vernacular with modern hospitality standards. Wake up to panoramic mountain sunrises without sacrificing creature comforts.
          </p>
        </div>

        {/* Elegant Editorial Image Collage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Architecture & Bedroom Image */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden shadow-2xl border border-[#E2D7C5] min-h-[420px] sm:min-h-[520px] group">
            <Image
              src="/images/stay.jpg"
              alt="Airy luxury bedroom suite with Mangalore-tiled roof and contemporary bathroom view at Varanadah"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

            <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 bg-white/95 backdrop-blur-md rounded-xl border border-[#E2D7C5] shadow-lg max-w-lg">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#BD5B3E] font-semibold block mb-1">
                L-Shaped Architecture
              </span>
              <p className="font-serif text-base sm:text-lg text-[#121E17] leading-snug">
                Every bedroom opens directly onto the wrap-around verandah, greeting you with uninterrupted hill vistas.
              </p>
            </div>
          </div>

          {/* Side Feature Showcase Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {stayHighlights.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-5 rounded-xl bg-white border border-[#E2D7C5] hover:border-[#BD5B3E]/50 transition-all duration-300 shadow-sm group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E2D7C5] flex items-center justify-center text-[#BD5B3E] group-hover:bg-[#BD5B3E] group-hover:text-white transition-colors">
                        <Icon size={16} />
                      </div>
                      <h4 className="font-serif text-lg font-medium text-[#121E17]">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#4D3C32] font-light leading-relaxed pl-11">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quality Reassurance Box */}
            <div className="p-5 rounded-xl bg-[#121E17] text-white border border-[#253C2E] shadow-md flex items-center gap-4">
              <div className="p-2.5 rounded-full bg-[#D8BA74]/20 text-[#D8BA74] shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D8BA74] font-medium block">
                  Pristine Cleanliness
                </span>
                <p className="text-xs text-white/80 font-light mt-0.5">
                  Fresh laundered organic linens, sanitized modern bathrooms & daily housekeeping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
