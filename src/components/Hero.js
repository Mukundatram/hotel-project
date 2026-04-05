"use client";

import { useEffect, useRef } from "react";
import { Phone, Calendar } from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.classList.add("visible");
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/70 via-brown-dark/50 to-brown-dark/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gold/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8 animate-[fade-in_0.6s_ease-out_forwards]">
          <span className="w-2 h-2 rounded-full bg-gold animate-[pulse-soft_2s_ease-in-out_infinite]" />
          Welcome to Shegaon&apos;s Finest Stay
        </div>

        {/* Hotel Name */}
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-[slide-up_0.6s_ease-out_0.2s_forwards] opacity-0 leading-tight">
          Hotel Nandan
          <span className="block text-gold-light mt-2 text-3xl sm:text-4xl md:text-5xl font-medium">
            Guest House
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 animate-[slide-up_0.6s_ease-out_0.4s_forwards] opacity-0 font-light">
          Comfortable & Affordable Stay in Shegaon
        </p>

        {/* Location */}
        <p className="text-sm sm:text-base text-gold-light/80 mb-10 animate-[slide-up_0.6s_ease-out_0.5s_forwards] opacity-0">
          📍 Near Gajanan Maharaj Temple, Khamgaon Road, Shegaon
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slide-up_0.6s_ease-out_0.6s_forwards] opacity-0">
          <a
            href="#booking"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <Calendar size={20} />
            Book Now
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
          <a
            href="tel:+919876543210"
            className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-lg"
          >
            <Phone size={20} />
            Call Now
          </a>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto animate-[slide-up_0.6s_ease-out_0.8s_forwards] opacity-0">
          {[
            { value: "50+", label: "Happy Guests" },
            { value: "4.5", label: "Rating" },
            { value: "24/7", label: "Service" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold-light font-[family-name:var(--font-heading)]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[float_3s_ease-in-out_infinite]">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-[slide-up_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
