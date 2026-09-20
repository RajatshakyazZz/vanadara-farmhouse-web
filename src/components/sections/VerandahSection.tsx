import React from "react";
import Image from "next/image";
import { Coffee, SunMedium, MessageSquareQuote, Flower2 } from "lucide-react";

export const VerandahSection: React.FC = () => {
  const verandahMoments = [
    {
      title: "MORNING TEA",
      subtitle: "Steaming earthen chai amidst mountain mist",
      icon: Coffee,
    },
    {
      title: "YOGA",
      subtitle: "Mindful postures under endless open skies",
      icon: Flower2,
    },
    {
      title: "SUNRISE",
      subtitle: "Golden dawn breaking above quiet hilltops",
      icon: SunMedium,
    },
    {
      title: "CONVERSATIONS",
      subtitle: "Unhurried chats that linger well past dusk",
      icon: MessageSquareQuote,
    },
  ];

  return (
    <section id="verandah" className="py-24 sm:py-32 bg-[#121E17] text-[#FCFAF7] relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#335340]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BD5B3E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8BA74]" />
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#D8BA74] font-medium">
              The Soul of the Property
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] text-white">
            Life Happens on the <br />
            <span className="italic text-[#D8BA74]">Verandah.</span>
          </h2>

          <p className="font-sans text-base sm:text-xl text-[#EFE8DC]/85 font-light leading-relaxed pt-2">
            The wide-open verandah is where mornings begin slowly and evenings stay a little longer.
            Sip your morning tea, practice yoga under the open sky, watch the sunrise over the hills, gather with friends or simply sit back and let time slow down.
          </p>
        </div>

        {/* Feature Visual: The Grand Verandah Image */}
        <div className="relative w-full aspect-[16/9] max-h-[640px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mb-14">
          <Image
            src="/images/verandah.jpg"
            alt="The spacious open-air verandah at Varanadah Farmstay with morning tea setup overlooking mountains"
            fill
            sizes="100vw"
            className="object-cover img-zoom"
            priority
          />
          {/* Subtle Vignette & Lighting gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B130E]/80 via-transparent to-black/20" />

          {/* Floating Architectural Note */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 max-w-lg p-5 sm:p-6 bg-[#0B130E]/85 backdrop-blur-md rounded-xl border border-white/15 text-white shadow-xl">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#D8BA74] font-medium block mb-1">
              Architectural Centerpiece
            </span>
            <p className="font-serif text-lg sm:text-xl text-[#FCFAF7] font-light italic leading-snug">
              &ldquo;An expansive wrap-around porch crafted from aged wood and natural stone, framing uninterrupted views of the rolling valley.&rdquo;
            </p>
          </div>
        </div>

        {/* The 4 Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {verandahMoments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D8BA74]/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D8BA74]/15 flex items-center justify-center text-[#D8BA74] mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wider text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#EFE8DC]/70 font-light leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
