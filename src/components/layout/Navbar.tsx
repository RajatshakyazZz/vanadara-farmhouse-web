"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/config/site";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "The Verandah", href: "#verandah" },
    { label: "Stay", href: "#stay" },
    { label: "Food", href: "#food" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FCFAF7]/95 backdrop-blur-md shadow-sm border-b border-[#E2D7C5]/50 py-3 sm:py-4"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <Link href="/" className="group flex items-center">
            <Logo
              variant={scrolled ? "dark" : "light"}
              size="md"
              showIcon={true}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-[#362922] hover:text-[#BD5B3E] after:bg-[#BD5B3E]"
                    : "text-[#FCFAF7]/90 hover:text-white after:bg-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className={`px-5 py-2.5 rounded-sm text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 transform active:scale-95 shadow-sm ${
                scrolled
                  ? "bg-[#121E17] text-white hover:bg-[#BD5B3E]"
                  : "bg-white/15 hover:bg-white text-white hover:text-[#121E17] backdrop-blur-sm border border-white/40"
              }`}
            >
              BOOK YOUR STAY
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className={`sm:hidden px-3 py-1.5 rounded-sm text-[10px] font-medium uppercase tracking-[0.18em] ${
                scrolled
                  ? "bg-[#121E17] text-white"
                  : "bg-white/20 text-white border border-white/30"
              }`}
            >
              STAY
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#121E17] hover:bg-[#ECE4D8]" : "text-white hover:bg-white/15"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#121E17]/98 backdrop-blur-xl flex flex-col justify-between p-6 transition-all duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Logo variant="light" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white rounded-full bg-white/10"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-wider text-[#FCFAF7] hover:text-[#D8BA74] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[#BD5B3E] hover:bg-[#9E452C] text-white text-xs font-semibold uppercase tracking-[0.22em] rounded-sm transition-colors text-center"
            >
              BOOK YOUR STAY
            </button>

            <div className="flex items-center justify-between text-xs text-white/60 pt-2">
              <span>{siteConfig.brand.tagline}</span>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-1.5 text-[#D8BA74] hover:underline"
              >
                <PhoneCall size={12} />
                Call Desk
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
