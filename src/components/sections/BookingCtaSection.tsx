"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

interface BookingCtaSectionProps {
  onOpenBooking: () => void;
}

export const BookingCtaSection: React.FC<BookingCtaSectionProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(siteConfig.contact.whatsappDefaultMessage);
    const targetUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="book" className="relative py-28 sm:py-36 bg-[#121E17] text-[#FCFAF7] overflow-hidden scroll-mt-20 lg:scroll-mt-24">
      {/* Cinematic Background Image with dark earthy overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/images/hero.jpg"
          alt="Varanadah Farmstay countryside estate at dusk"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B130E] via-[#121E17]/90 to-[#0B130E]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        {/* Subtle Decorative Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <Sparkles size={14} className="text-[#D8BA74]" />
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#F7F3EC] font-medium">
            YOUR COUNTRYSIDE HAVEN
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
          Come Home to the <br />
          <span className="italic text-[#D8BA74]">Verandah Life.</span>
        </h2>

        {/* Content */}
        <p className="font-sans text-base sm:text-xl text-[#EFE8DC]/85 font-light leading-relaxed max-w-2xl mx-auto">
          Whether you&apos;re looking for a quiet escape, a family getaway or memorable time with friends, Varanadah welcomes you to pause, breathe and reconnect.
        </p>

        {/* Buttons: BOOK YOUR STAY, CONTACT US, CHAT ON WHATSAPP */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-xl mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-[#BD5B3E] hover:bg-[#A84F35] text-white text-xs font-semibold uppercase tracking-[0.25em] rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
          >
            BOOK YOUR STAY
          </button>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-4 bg-white/15 hover:bg-white/25 text-white text-xs font-medium uppercase tracking-[0.2em] rounded-sm backdrop-blur-md border border-white/30 transition-all duration-300 cursor-pointer"
          >
            CONTACT US
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-7 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xl cursor-pointer"
          >
            <MessageCircle size={17} />
            CHAT ON WHATSAPP
          </button>
        </div>

        {/* Host Reassurance Line */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#EFE8DC]/60 font-light">
          <span>• Direct host reservations</span>
          <span>• Tailored meal planning</span>
          <span>• Exclusive full-property options</span>
        </div>
      </div>
    </section>
  );
};
