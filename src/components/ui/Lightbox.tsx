"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "THE FARMHOUSE" | "VERANDAH" | "NATURE" | "FOOD" | "MOMENTS";
  description: string;
  aspect?: string;
}

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300 select-none"
      onClick={onClose}
    >
      {/* Top Controls */}
      <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between text-white/80 z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D8BA74] font-medium block">
            {currentItem.category}
          </span>
          <p className="font-serif text-lg tracking-wider text-white">
            {currentItem.title}
          </p>
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <span className="text-xs text-white/50 tracking-widest font-mono">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close fullscreen view"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="relative w-full max-w-6xl max-h-[80vh] h-[75vh] mx-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentItem.src}
          alt={currentItem.title}
          fill
          className="object-contain"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-110 z-20"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-110 z-20"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>

      {/* Bottom Caption */}
      <div
        className="absolute bottom-6 inset-x-0 text-center px-6 z-20 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs sm:text-sm text-[#EFE8DC]/80 font-sans max-w-xl mx-auto tracking-wide leading-relaxed">
          {currentItem.description}
        </p>
      </div>
    </div>
  );
};
