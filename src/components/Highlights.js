"use client";

import { useEffect, useRef } from "react";
import { Snowflake, Wifi, Heart, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Snowflake,
    title: "AC Rooms",
    description: "Cool, comfortable rooms with modern air conditioning for a restful stay.",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected with complimentary high-speed WiFi throughout the property.",
  },
  {
    icon: Heart,
    title: "Family Friendly",
    description: "Spacious rooms and a welcoming atmosphere perfect for families and groups.",
  },
  {
    icon: MapPin,
    title: "Temple Nearby",
    description: "Just minutes from Shri Gajanan Maharaj Temple – ideal for devotees.",
  },
];

export default function Highlights() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-cream relative -mt-20 z-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="animate-on-scroll group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-cream-dark/30 hover:border-gold-light/50 hover:-translate-y-2 cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-light/30 to-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-gold-dark" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-brown-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
