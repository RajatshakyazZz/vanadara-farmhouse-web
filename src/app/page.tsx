"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { VerandahInteractiveExplorer } from "@/components/sections/VerandahInteractiveExplorer";
import { DayNightSection } from "@/components/sections/DayNightSection";
import { ExperienceGridSection } from "@/components/sections/ExperienceGridSection";
import { FoodSection } from "@/components/sections/FoodSection";
import { StayInteractiveSection } from "@/components/sections/StayInteractiveSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { BookingCtaSection } from "@/components/sections/BookingCtaSection";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/ui/BookingModal";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAF7F2] text-[#221813] selection:bg-[#BA563B] selection:text-white">
      {/* Top Floating Glassmorphism Navbar */}
      <Navbar onOpenBooking={openBooking} />

      <main className="flex-grow">
        {/* Full-screen Cinematic Hero */}
        <HeroSection onOpenBooking={openBooking} />

        {/* Section 2: Introduction — More Than a Farmhouse */}
        <IntroSection />

        {/* Section 3: The Centerpiece Interactive Verandah & Hotspot Explorer with Day/Night Soundscapes */}
        <VerandahInteractiveExplorer />

        {/* Section 4: Morning & Evening Experience */}
        <DayNightSection />

        {/* Section 5: Experience Grid — Find Your Kind of Escape */}
        <ExperienceGridSection />

        {/* Section 6: Food Experience — Good Food. Shared Slowly */}
        <FoodSection />

        {/* Section 7: Stay in Comfort — Rustic Soul. Modern Comfort & Suite Explorer */}
        <StayInteractiveSection onOpenBooking={openBooking} />

        {/* Section 8: Gallery with Categories & Lightbox */}
        <GallerySection />

        {/* Section 9: Location — Close to Nature. Away From the Noise */}
        <LocationSection />

        {/* Section 10: Book Your Stay — Come Home to the Verandah Life */}
        <BookingCtaSection onOpenBooking={openBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={openBooking} />

      {/* Booking Enquiry Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
