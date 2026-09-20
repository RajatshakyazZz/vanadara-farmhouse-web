import React from "react";
import { MapPin, Navigation, Compass } from "lucide-react";
import { siteConfig } from "@/config/site";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Location Narrative & Transit Times */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#BD5B3E] block">
                PEACEFUL RETREAT
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#121E17] tracking-tight leading-[1.15]">
                Close to Nature. <br />
                <span className="italic font-normal text-[#BD5B3E]">Away From the Noise.</span>
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#4D3C32] font-light leading-relaxed">
              Located near a peaceful village and surrounded by mountain landscapes, Varanadah offers a chance to step away from the everyday and reconnect with nature.
            </p>

            {/* Travel Connections */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#717E61] font-semibold block mb-2">
                REACHING THE RETREAT
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siteConfig.location.distances.map((dist) => (
                  <div
                    key={dist.label}
                    className="p-3.5 rounded-xl bg-white border border-[#E2D7C5] shadow-xs"
                  >
                    <span className="text-xs font-semibold text-[#121E17] block">
                      {dist.label}
                    </span>
                    <span className="text-xs text-[#5C674E] font-light mt-0.5 block">
                      {dist.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button: Get Directions */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={siteConfig.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#121E17] hover:bg-[#BD5B3E] text-white text-xs font-semibold uppercase tracking-[0.22em] rounded-sm transition-all duration-300 shadow-md cursor-pointer"
              >
                <Navigation size={14} className="text-[#D8BA74]" />
                GET DIRECTIONS
              </a>

              <span className="text-xs text-[#717E61] italic">
                *Exact private route map shared upon booking confirmation
              </span>
            </div>
          </div>

          {/* Right: Stylish Custom Map Placeholder */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#121E17] border border-[#253C2E] shadow-2xl p-6 sm:p-8 text-white min-h-[420px] flex flex-col justify-between">
              {/* Topographic Line Artwork Background */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-cover"
                >
                  <defs>
                    <pattern id="topo" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path
                        d="M0 40 Q 20 20, 40 40 T 80 40"
                        fill="none"
                        stroke="#D8BA74"
                        strokeWidth="1"
                      />
                      <path
                        d="M0 20 Q 20 0, 40 20 T 80 20"
                        fill="none"
                        stroke="#FCFAF7"
                        strokeWidth="0.75"
                      />
                      <path
                        d="M0 60 Q 20 40, 40 60 T 80 60"
                        fill="none"
                        stroke="#BD5B3E"
                        strokeWidth="0.75"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#topo)" />
                </svg>
              </div>

              {/* Top Bar of Map Card */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Compass size={18} className="text-[#D8BA74]" />
                  <span className="text-xs font-mono tracking-widest uppercase text-white/80">
                    {siteConfig.location.regionName}
                  </span>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded bg-white/10 text-[#D8BA74] font-mono">
                  Countryside Haven
                </span>
              </div>

              {/* Stylized Center Map Pin Graphic */}
              <div className="relative z-10 my-auto py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#BD5B3E]/20 border border-[#BD5B3E] flex items-center justify-center mx-auto shadow-lg animate-pulse">
                  <MapPin size={30} className="text-[#BD5B3E]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-white font-light tracking-wide">
                    {siteConfig.brand.name}
                  </h3>
                  <p className="text-xs text-[#D8BA74] tracking-widest uppercase">
                    {siteConfig.location.nearestVillage}
                  </p>
                </div>
                <p className="text-xs text-white/60 font-mono max-w-sm mx-auto">
                  {siteConfig.location.addressPlaceholder}
                </p>
              </div>

              {/* Bottom Configurable Note */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
                <span>Scenic private approach</span>
                <span className="text-[#D8BA74]">Pure Valley Silence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
