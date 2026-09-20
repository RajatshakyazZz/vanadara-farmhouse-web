"use client";

import React, { useState } from "react";
import { X, Calendar, Users, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello Varanadah Team,
I'd like to enquire about a stay:
- Name: ${formData.name || "[Guest]"}
- Phone: ${formData.phone || "[Contact]"}
- Check-in: ${formData.checkIn || "Flexible"}
- Check-out: ${formData.checkOut || "Flexible"}
- Guests: ${formData.guests}
- Notes: ${formData.notes || "None"}

Looking forward to hearing from you!`;

    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all duration-300">
      <div
        className="relative w-full max-w-xl bg-[#FCFAF7] border border-[#E2D7C5] shadow-2xl rounded-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#121E17] text-[#FCFAF7] px-6 py-5 flex items-center justify-between border-b border-[#253C2E]">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D8BA74] font-medium block">
              Reservation Inquiry
            </span>
            <h3 className="font-serif text-2xl font-light tracking-wide text-white mt-0.5">
              Plan Your Stay at Varanadah
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#121E17]/5 rounded-full flex items-center justify-center mx-auto text-[#BD5B3E]">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="font-serif text-2xl text-[#121E17]">
                Thank You for Reaching Out
              </h4>
              <p className="text-sm text-[#4D3C32] max-w-md mx-auto leading-relaxed">
                We have received your stay enquiry for Varanadah. To ensure immediate confirmation, you can also send this inquiry directly to our host on WhatsApp.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:bg-[#20ba59] transition-all shadow-md"
                >
                  <MessageCircle size={18} />
                  Connect Instantly on WhatsApp
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 border border-[#CBB99F] text-[#241B16] rounded-lg text-sm font-medium hover:bg-[#F7F3EC] transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#5C674E] leading-relaxed">
                Connect with our hosts for direct bookings, curated meals, and private group escapes. No instant automated charges—every stay is personally prepared.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D3C32] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2D7C5] rounded-lg text-sm text-[#241B16] focus:outline-none focus:ring-1 focus:ring-[#BD5B3E] focus:border-[#BD5B3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D3C32] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2D7C5] rounded-lg text-sm text-[#241B16] focus:outline-none focus:ring-1 focus:ring-[#BD5B3E] focus:border-[#BD5B3E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D3C32] mb-1.5">
                    <Calendar size={13} className="inline mr-1 text-[#BD5B3E]" />
                    Estimated Check-in
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2D7C5] rounded-lg text-sm text-[#241B16] focus:outline-none focus:ring-1 focus:ring-[#BD5B3E] focus:border-[#BD5B3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D3C32] mb-1.5">
                    <Users size={13} className="inline mr-1 text-[#BD5B3E]" />
                    Group Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2D7C5] rounded-lg text-sm text-[#241B16] focus:outline-none focus:ring-1 focus:ring-[#BD5B3E] focus:border-[#BD5B3E]"
                  >
                    <option>Couple / 2 Guests</option>
                    <option>Small Family (3–4 Guests)</option>
                    <option>Large Family (5–8 Guests)</option>
                    <option>Friends Gathering (8+ Guests)</option>
                    <option>Private Full Farmhouse Booking</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D3C32] mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2D7C5] rounded-lg text-sm text-[#241B16] focus:outline-none focus:ring-1 focus:ring-[#BD5B3E] focus:border-[#BD5B3E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4D3C32] mb-1.5">
                  Special Requests / Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Dietary preferences, campfire setup, yoga request..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-[#E2D7C5] rounded-lg text-sm text-[#241B16] focus:outline-none focus:ring-1 focus:ring-[#BD5B3E] focus:border-[#BD5B3E] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 bg-[#121E17] text-white rounded-lg text-sm font-medium hover:bg-[#1B2D23] transition-all flex items-center justify-center gap-2 tracking-wide uppercase shadow-sm"
                >
                  <Send size={15} />
                  Submit Inquiry
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-5 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp Host
                </button>
              </div>

              <p className="text-[11px] text-center text-[#717E61] pt-1">
                Prompt response within 2 hours • Direct host coordination
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
