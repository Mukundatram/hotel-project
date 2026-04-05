"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Snowflake, Tv, Wifi, Sparkles, Users, Bath } from "lucide-react";

const rooms = [
  {
    name: "Standard Room",
    price: "₹800",
    priceNote: "per night",
    image: "/images/room-standard.png",
    description: "A cozy and comfortable room perfect for solo travelers or couples on a budget visit.",
    features: [
      { icon: Snowflake, label: "AC" },
      { icon: Tv, label: "TV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Bath, label: "Attached Bath" },
    ],
    popular: false,
  },
  {
    name: "Deluxe Room",
    price: "₹1,200",
    priceNote: "per night",
    image: "/images/room-deluxe.png",
    description: "Upgrade your stay with extra space, premium bedding, and enhanced amenities.",
    features: [
      { icon: Snowflake, label: "AC" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wifi, label: "WiFi" },
      { icon: Sparkles, label: "Premium" },
    ],
    popular: true,
  },
  {
    name: "Family Suite",
    price: "₹1,500",
    priceNote: "per night",
    image: "/images/room-family.png",
    description: "Spacious suite designed for families with extra beds and a comfortable seating area.",
    features: [
      { icon: Snowflake, label: "AC" },
      { icon: Users, label: "4 Guests" },
      { icon: Wifi, label: "WiFi" },
      { icon: Tv, label: "Smart TV" },
    ],
    popular: false,
  },
];

export default function Rooms() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 200);
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
    <section id="rooms" ref={sectionRef} className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3">
            Our Rooms
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark mb-4">
            Choose Your Perfect Stay
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto">
            From budget-friendly standard rooms to spacious family suites, we have
            the perfect accommodation for every traveler.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mt-4" />
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`animate-on-scroll group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                room.popular
                  ? "border-gold ring-2 ring-gold/20 scale-[1.02]"
                  : "border-cream-dark/30 hover:border-gold-light/50"
              } hover:-translate-y-2`}
            >
              {/* Popular Badge */}
              {room.popular && (
                <div className="bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-semibold text-center py-2 tracking-wider uppercase">
                  ⭐ Most Popular
                </div>
              )}

              {/* Room Image */}
              <div className="relative overflow-hidden h-56">
                <Image
                  src={room.image}
                  alt={room.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-xl font-bold text-brown-dark font-[family-name:var(--font-heading)]">
                    {room.price}
                  </span>
                  <span className="text-xs text-warm-gray-light block">
                    {room.priceNote}
                  </span>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-brown-dark mb-2">
                  {room.name}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-5">
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feat, i) => {
                    const Icon = feat.icon;
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream text-xs font-medium text-brown-light border border-cream-dark/20"
                      >
                        <Icon size={14} className="text-gold-dark" />
                        {feat.label}
                      </span>
                    );
                  })}
                </div>

                {/* Book Button */}
                <a
                  href="#booking"
                  className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
