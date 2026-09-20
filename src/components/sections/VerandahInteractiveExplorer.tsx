"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Coffee, Flower2, SunMedium, Flame, Utensils, DoorOpen, MapPin, Sparkles } from "lucide-react";
import { AmbientAudio } from "@/components/ui/AmbientAudio";

interface Hotspot {
  id: string;
  name: string;
  category: string;
  timeOfDay: string;
  x: number; // percentage from left
  y: number; // percentage from top
  image: string;
  icon: React.ElementType;
  quote: string;
  description: string;
  sensoryDetails: string[];
}

const hotspots: Hotspot[] = [
  {
    id: "lounge",
    name: "The Teakwood Chai Lounge",
    category: "Morning Rituals",
    timeOfDay: "06:30 AM — Dawn",
    x: 75,
    y: 68,
    image: "/images/verandah.jpg",
    icon: Coffee,
    quote: "Steaming earthen cups of ginger-cardamom tea as mist floats across the valley.",
    description:
      "Handcrafted teakwood chairs positioned at the edge of the verandah deck. Here, morning arrives with birdsong and uninterrupted mountain silence.",
    sensoryDetails: ["Hot earthen clay cups", "Crisp mountain breeze", "Birds chirping from valley groves"],
  },
  {
    id: "yoga",
    name: "The Sunrise Yoga Deck",
    category: "Mindful Wellness",
    timeOfDay: "07:15 AM — Golden Hour",
    x: 48,
    y: 42,
    image: "/images/yoga.jpg",
    icon: Flower2,
    quote: "Deep inhales under open skies as the sun crests the eastern mountain peaks.",
    description:
      "The wide-planked wooden flooring provides the perfect tranquil space for sun salutations, meditation, and quiet morning journaling.",
    sensoryDetails: ["Warm sun rays on skin", "Panoramic open horizon", "Sweet mountain pine air"],
  },
  {
    id: "campfire",
    name: "The Starlit Campfire Hearth",
    category: "Night Gathering",
    timeOfDay: "08:00 PM — Starlight",
    x: 28,
    y: 78,
    image: "/images/campfire.jpg",
    icon: Flame,
    quote: "Crackling wood embers beneath a canvas of twinkling mountain constellations.",
    description:
      "A rustic natural stone fire pit adjacent to the verandah lawn where friends and family gather for acoustic music, slow conversations, and warm blankets.",
    sensoryDetails: ["Smoky wood embers", "Fairy lights glowing", "Acoustic laughter & stories"],
  },
  {
    id: "dining",
    name: "The Communal Dining Table",
    category: "Farm-to-Table",
    timeOfDay: "01:00 PM & 08:30 PM",
    x: 88,
    y: 50,
    image: "/images/food.jpg",
    icon: Utensils,
    quote: "Home-cooked desi delicacies and fresh garden harvests served unhurriedly.",
    description:
      "An expansive heavy oak dining table under the shaded verandah rafters, offering intimate shared meals with loved ones.",
    sensoryDetails: ["Earthen pot slow dal", "Fresh farm salad greens", "Slow family conversations"],
  },
  {
    id: "suite",
    name: "Verandah Suite Threshold",
    category: "Architectural Flow",
    timeOfDay: "All Day Sanctuary",
    x: 15,
    y: 35,
    image: "/images/stay.jpg",
    icon: DoorOpen,
    quote: "Step out of crisp linen bedding directly onto the open-air deck.",
    description:
      "Wide folding glass French doors connect the cozy high-ceilinged bedrooms directly with the mountain breezes of the verandah.",
    sensoryDetails: ["Mangalore-tiled vaulted roof", "Natural cross-ventilation", "Travertine stone finishes"],
  },
];

export const VerandahInteractiveExplorer: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(hotspots[0]);
  const [timeMode, setTimeMode] = useState<"dawn" | "dusk">("dawn");

  return (
    <section id="verandah" className="py-24 sm:py-32 bg-[#0E1A14] text-[#FAF7F2] relative overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#253C2E]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#BA563B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Atmosphere Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-white/10 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#D8BA74] animate-ping" />
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#D8BA74] font-medium">
                Signature Architecture
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.15]">
              Life Happens on the <br />
              <span className="italic text-[#D8BA74]">Verandah.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#EFE8DC]/80 font-light leading-relaxed">
              The wide-open verandah is where mornings begin slowly and evenings stay a little longer.
              Explore the architectural zones of our signature wrap-around porch below.
            </p>
          </div>

          {/* Interactive Day/Night Atmosphere & Soundscape Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 shrink-0">
            <div className="flex items-center p-1 bg-black/40 rounded-xl border border-white/10">
              <button
                onClick={() => {
                  setTimeMode("dawn");
                  setSelectedHotspot(hotspots[0]);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  timeMode === "dawn"
                    ? "bg-[#BA563B] text-white shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Dawn Mood
              </button>

              <button
                onClick={() => {
                  setTimeMode("dusk");
                  setSelectedHotspot(hotspots[2]);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  timeMode === "dusk"
                    ? "bg-[#D8BA74] text-[#0E1A14] font-semibold shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Dusk Mood
              </button>
            </div>

            <AmbientAudio mode={timeMode} />
          </div>
        </div>

        {/* Interactive Verandah Hotspot Map & Photography Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Hotspot Explorer Stage */}
          <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 group">
            <Image
              src={timeMode === "dawn" ? "/images/verandah.jpg" : "/images/campfire.jpg"}
              alt="Interactive Verandah Explorer at Varanadah"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-102"
              priority
            />
            {/* Ambient Darkened Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B130E]/85 via-transparent to-black/25" />

            {/* Interactive Hotspot Pins */}
            {hotspots.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              const Icon = spot.icon;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20 cursor-pointer focus:outline-none"
                  aria-label={`Explore ${spot.name}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <span
                      className={`absolute w-8 h-8 rounded-full transition-all duration-500 ${
                        isSelected
                          ? "bg-[#D8BA74]/40 animate-ping"
                          : "bg-white/20 group-hover/pin:scale-150"
                      }`}
                    />
                    {/* Pin button */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 shadow-xl ${
                        isSelected
                          ? "bg-[#D8BA74] text-[#0E1A14] border-white scale-110"
                          : "bg-black/60 text-white border-white/40 hover:bg-[#BA563B] hover:border-white"
                      }`}
                    >
                      <Icon size={16} />
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover/pin:block whitespace-nowrap px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-white font-mono pointer-events-none border border-white/20">
                      {spot.name}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Bottom Floating Legend */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-[#EFE8DC]/80 font-mono">
                Click pins to explore verandah alcoves
              </div>
              <div className="hidden sm:block px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-[#D8BA74] font-mono">
                Active: {selectedHotspot.name}
              </div>
            </div>
          </div>

          {/* Side Focus Card for Selected Hotspot */}
          <div className="lg:col-span-4 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D8BA74] font-mono">
                  {selectedHotspot.category}
                </span>
                <span className="text-[11px] text-white/50 font-mono">
                  {selectedHotspot.timeOfDay}
                </span>
              </div>

              {/* Selected Hotspot Thumbnail */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/15 shadow-md">
                <Image
                  src={selectedHotspot.image}
                  alt={selectedHotspot.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 font-serif italic">
                  &ldquo;{selectedHotspot.quote}&rdquo;
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-white font-light tracking-wide">
                  {selectedHotspot.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#EFE8DC]/75 font-light leading-relaxed">
                  {selectedHotspot.description}
                </p>
              </div>

              {/* Sensory Highlights list */}
              <div className="space-y-2 pt-2">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#D8BA74] font-semibold block">
                  Sensory Notes
                </span>
                <div className="space-y-1.5">
                  {selectedHotspot.sensoryDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BA563B]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Hotspot Selectors */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-5 gap-2">
              {hotspots.map((spot) => {
                const Icon = spot.icon;
                const isCurrent = selectedHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedHotspot(spot)}
                    className={`p-2 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-[#D8BA74] text-[#0E1A14] font-bold shadow-md"
                        : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white"
                    }`}
                    title={spot.name}
                  >
                    <Icon size={16} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
