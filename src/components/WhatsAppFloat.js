"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20inquire%20about%20room%20availability%20at%20Hotel%20Nandan."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-[pulse-soft_2s_ease-in-out_infinite] opacity-30" />

        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
          <MessageCircle size={26} className="text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 rounded-lg bg-brown-dark text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us!
          <div className="absolute top-full right-5 w-2 h-2 bg-brown-dark rotate-45 -mt-1" />
        </div>
      </div>
    </a>
  );
}
