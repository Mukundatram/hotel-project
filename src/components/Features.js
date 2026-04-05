"use client";

import { useEffect, useRef } from "react";
import { Wifi, Snowflake, ConciergeBell, ShieldCheck, Car, Clock, CreditCard, Utensils } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed WiFi available in all rooms and common areas at no extra charge.",
  },
  {
    icon: Snowflake,
    title: "AC Rooms",
    description: "All rooms equipped with individually controlled air conditioning for your comfort.",
  },
  {
    icon: ConciergeBell,
    title: "Room Service",
    description: "In-room dining available with a curated menu of local and continental dishes.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Hygienic",
    description: "Rigorous cleaning protocols ensuring a safe, sanitized, and hygienic stay.",
  },
  {
    icon: Car,
    title: "Parking Space",
    description: "Complimentary secure parking available for all guests with 24-hour surveillance.",
  },
  {
    icon: Clock,
    title: "24/7 Front Desk",
    description: "Round-the-clock reception service to assist with check-in, queries, and more.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "We accept cash, UPI, and all major payment modes for a hassle-free experience.",
  },
  {
    icon: Utensils,
    title: "Breakfast Available",
    description: "Start your day with a wholesome breakfast served fresh every morning.",
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section-padding bg-gradient-to-b from-brown-dark to-brown">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-gold-light text-sm font-semibold tracking-widest uppercase mb-3">
            Amenities
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We go the extra mile to ensure your stay is comfortable, convenient,
            and memorable.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mt-4" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="animate-on-scroll group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300">
                  <Icon size={24} className="text-gold-light" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
