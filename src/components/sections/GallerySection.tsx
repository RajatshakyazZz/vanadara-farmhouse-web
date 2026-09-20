"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { Lightbox, GalleryItem } from "@/components/ui/Lightbox";

const galleryData: GalleryItem[] = [
  {
    id: "1",
    src: "/images/hero.jpg",
    title: "Signature L-Shaped Farmhouse & Verandah",
    category: "THE FARMHOUSE",
    description: "The distinctive architectural layout overlooking rolling mountain ridges and lush lawn.",
    aspect: "col-span-1 md:col-span-2 aspect-[16/10]",
  },
  {
    id: "2",
    src: "/images/verandah.jpg",
    title: "Morning Tea on the Verandah",
    category: "VERANDAH",
    description: "Steaming earthen chai and teakwood seating overlooking mist rising in the valley.",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: "3",
    src: "/images/morning.jpg",
    title: "Quiet Dawn Contemplation",
    category: "MOMENTS",
    description: "Slowing down with birdsong and early morning rays over the mountain foothills.",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: "4",
    src: "/images/campfire.jpg",
    title: "Campfire Evenings Beneath the Stars",
    category: "MOMENTS",
    description: "Acoustic music, warm conversations, and flickering firelight against the night hills.",
    aspect: "col-span-1 md:col-span-2 aspect-[16/10]",
  },
  {
    id: "5",
    src: "/images/food.jpg",
    title: "Authentic Desi Feasts & Farm Salads",
    category: "FOOD",
    description: "Home-cooked delicacies prepared with fresh local ingredients on the rustic wooden table.",
    aspect: "col-span-1 md:col-span-2 aspect-[16/10]",
  },
  {
    id: "6",
    src: "/images/stay.jpg",
    title: "Airy Bedroom Suite & Stone Bath",
    category: "THE FARMHOUSE",
    description: "High timber ceilings, terracotta roof insulation, and ensuite modern luxury bath.",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: "7",
    src: "/images/yoga.jpg",
    title: "Mindful Yoga at Dawn",
    category: "VERANDAH",
    description: "Starting the day with deep breaths, open mountain horizon, and mindful stillness.",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: "8",
    src: "/images/nature.jpg",
    title: "Wildflower Trail & Misty Hills",
    category: "NATURE",
    description: "Scenic countryside pathways winding through pristine green hills and village edges.",
    aspect: "col-span-1 md:col-span-2 aspect-[16/10]",
  },
  {
    id: "9",
    src: "/images/sunset.jpg",
    title: "Golden Hour Valley Glow",
    category: "NATURE",
    description: "The sun setting over rolling hills, turning the sky into warm shades of amber and rose.",
    aspect: "col-span-1 aspect-[4/3]",
  },
];

type CategoryTab = "ALL" | "THE FARMHOUSE" | "VERANDAH" | "NATURE" | "FOOD" | "MOMENTS";

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryTab>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: CategoryTab[] = [
    "ALL",
    "THE FARMHOUSE",
    "VERANDAH",
    "NATURE",
    "FOOD",
    "MOMENTS",
  ];

  const filteredItems =
    activeTab === "ALL"
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FCFAF7] relative scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#BD5B3E] block">
            VISUAL CHRONICLES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#121E17] tracking-tight">
            A Glimpse into Countryside Calm
          </h2>
          <p className="text-sm sm:text-base text-[#4D3C32] font-light">
            Every corner of Varanadah is designed to celebrate landscape, light, and slow living.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((tab) => {
            const isActive = activeTab === tab;
            const count =
              tab === "ALL"
                ? galleryData.length
                : galleryData.filter((i) => i.category === tab).length;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#121E17] text-[#FCFAF7] shadow-md scale-105"
                    : "bg-white text-[#4D3C32] hover:bg-[#F7F3EC] border border-[#E2D7C5]"
                }`}
              >
                {tab} <span className="opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Responsive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#E2D7C5] bg-white cursor-pointer aspect-[4/3] flex flex-col justify-end"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover img-zoom"
              />

              {/* Hover Dark Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#D8BA74] font-medium block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-white font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        currentIndex={lightboxIndex ?? 0}
        items={filteredItems}
        onClose={closeLightbox}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
