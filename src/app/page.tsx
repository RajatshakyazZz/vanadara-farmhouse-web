"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { VerandahSection } from "@/components/sections/VerandahSection";
import { DayNightSection } from "@/components/sections/DayNightSection";
import { ExperienceGridSection } from "@/components/sections/ExperienceGridSection";
import { FoodSection } from "@/components/sections/FoodSection";
import { StaySection } from "@/components/sections/StaySection";
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
    <div className="relative min-h-screen flex flex-col bg-[#FAF8F5] text-[#241B16] selection:bg-[#BD5B3E] selection:text-white">
      {/* Top Floating Glassmorphism Navbar */}
      <Navbar onOpenBooking={openBooking} />

      <main className="flex-grow">
        {/* Full-screen Cinematic Hero */}
        <HeroSection onOpenBooking={openBooking} />

        {/* Section 2: Introduction — More Than a Farmhouse */}
        <IntroSection />

        {/* Section 3: The Verandah — Life Happens on the Verandah */}
        <VerandahSection />

        {/* Section 4: Morning & Evening Experience */}
        <DayNightSection />

        {/* Section 5: Experience Grid — Find Your Kind of Escape */}
        <ExperienceGridSection />

        {/* Section 6: Food Experience — Good Food. Shared Slowly */}
        <FoodSection />

        {/* Section 7: Stay in Comfort — Rustic Soul. Modern Comfort */}
        <StaySection />

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
