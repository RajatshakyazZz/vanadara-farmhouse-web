import React from "react";
import Image from "next/image";
import { Sunrise, Sunset, Sparkles, Flame } from "lucide-react";

export const DayNightSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FCFAF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#BD5B3E] block">
            RHYTHM OF THE MOUNTAINS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#121E17] tracking-tight">
            Two Worlds. <span className="italic font-normal text-[#BD5B3E]">One Sanctuary.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4D3C32] font-light">
            Every hour carries its own quiet poetry—from dawn mist rising over the hills to starlit fireside nights.
          </p>
        </div>

        {/* Two-Column Side-by-Side Immersive Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: Mornings at Varanadah */}
          <div className="group rounded-2xl overflow-hidden bg-gradient-to-b from-[#F7F3EC] to-[#EFE8DC] border border-[#E2D7C5] shadow-lg flex flex-col justify-between transition-all duration-500 hover:shadow-2xl">
            <div className="p-8 sm:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BD5B3E]/10 text-[#BD5B3E] text-[11px] font-semibold tracking-widest uppercase">
                <Sunrise size={15} />
                DAWN AMBIANCE
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl text-[#121E17] font-light">
                Mornings at Varanadah
              </h3>

              <p className="text-sm sm:text-base text-[#4D3C32] font-light leading-relaxed">
                Wake up to birdsong and soft sunlight. Step onto the verandah with a warm cup of tea and watch the hills slowly come alive.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Birdsong & Cool Breeze", "Verandah Chai", "Misty Valley Panoramas"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1 bg-white/70 rounded-full text-[#5C674E] font-medium border border-[#E2D7C5]"
                  >
                    • {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Morning Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/morning.jpg"
                alt="Mornings at Varanadah - woman sipping hot tea on verandah overlooking misty mountains"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
            </div>
          </div>

          {/* RIGHT: Evenings at Varanadah */}
          <div className="group rounded-2xl overflow-hidden bg-[#121E17] text-[#FCFAF7] border border-[#253C2E] shadow-lg flex flex-col justify-between transition-all duration-500 hover:shadow-2xl">
            <div className="p-8 sm:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8BA74]/15 text-[#D8BA74] text-[11px] font-semibold tracking-widest uppercase">
                <Flame size={15} />
                DUSK & NIGHT AMBIANCE
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl text-white font-light">
                Evenings at Varanadah
              </h3>

              <p className="text-sm sm:text-base text-[#EFE8DC]/80 font-light leading-relaxed">
                As the sun sets, gather around a campfire, play music, share stories and watch the sky turn into a canvas of stars.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Campfire Embers", "Stargazing Skies", "Acoustic Music & Stories"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1 bg-white/[0.08] rounded-full text-[#D8BA74] font-medium border border-white/10"
                  >
                    • {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Evening Campfire Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/campfire.jpg"
                alt="Evenings at Varanadah - outdoor campfire gathering under stars and fairy lights"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B130E]/70 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
