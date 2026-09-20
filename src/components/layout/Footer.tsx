import React from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/config/site";

interface FooterProps {
  onOpenBooking: () => void;
}

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "The Farmhouse", href: "#stay" },
    { label: "Experience", href: "#experience" },
    { label: "Food", href: "#food" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#book" },
  ];

  return (
    <footer className="bg-[#0B130E] text-[#FCFAF7] border-t border-[#253C2E] relative pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="font-serif italic text-lg text-[#D8BA74] font-light">
              &ldquo;{siteConfig.brand.tagline}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-[#EFE8DC]/70 font-light leading-relaxed max-w-sm">
              A luxury countryside farmhouse retreat where the rustic beauty of the hills meets modern boutique comfort. Surrounded by mountain views and centered around the verandah life.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Varanadah on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#BD5B3E] text-white flex items-center justify-center transition-colors duration-300"
              >
                <InstagramIcon size={17} />
              </a>

              <a
                href={siteConfig.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Varanadah on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#BD5B3E] text-white flex items-center justify-center transition-colors duration-300"
              >
                <FacebookIcon size={17} />
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Varanadah on WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D8BA74] font-semibold block">
              NAVIGATION
            </span>
            <ul className="grid grid-cols-2 gap-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-[#EFE8DC]/80 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Inquiries & Hours */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D8BA74] font-semibold block">
              STAY INQUIRIES
            </span>
            <div className="space-y-2 text-xs text-[#EFE8DC]/80 font-light">
              <p>Direct Host Coordination</p>
              <p className="text-[#D8BA74]">{siteConfig.contact.email}</p>
              <p>Check-in: {siteConfig.stayDetails.checkInTime} | Check-out: {siteConfig.stayDetails.checkOutTime}</p>
            </div>
            <button
              onClick={onOpenBooking}
              className="mt-2 inline-block px-5 py-2.5 bg-[#BD5B3E] hover:bg-[#A84F35] text-white text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              INQUIRE NOW
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EFE8DC]/50 gap-4">
          <p>© 2026 Varanadah. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] tracking-wider text-white/40">
              Breath. Unwind. Rejoice.
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
