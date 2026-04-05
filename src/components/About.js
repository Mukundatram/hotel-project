"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, Star, Clock } from "lucide-react";

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-warm-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3">
            About Us
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark mb-4">
            Your Home Away From Home
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-temple.png"
                alt="Near Gajanan Maharaj Temple, Shegaon"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-gold-dark" />
                  <span className="text-sm font-medium text-brown-dark">
                    Near Gajanan Maharaj Temple
                  </span>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-gold-light/30 to-gold/20 -z-10" />
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-brown-dark mb-4">
                Budget-Friendly Comfort in the Heart of Shegaon
              </h3>
              <p className="text-warm-gray leading-relaxed mb-4">
                Hotel Shivalay Guest House is a thoughtfully designed
                accommodation for pilgrims, families, and travelers visiting
                Shegaon. Located on Khamgaon Road, just steps away from the
                renowned Shree Gajanan Maharaj Temple, we offer a perfect blend
                of comfort and convenience at prices that won&apos;t stretch your
                budget.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Whether you&apos;re here for a spiritual visit, a family trip, or
                a business stopover, our well-maintained rooms, warm hospitality,
                and prime location make us the preferred choice for visitors to
                Shegaon.
              </p>
            </div>

            {/* Feature List */}
            <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: MapPin, text: "2 min from Temple" },
                { icon: Star, text: "Top Rated in Shegaon" },
                { icon: Clock, text: "24/7 Front Desk" },
                { icon: Star, text: "Trusted by 500+ Guests" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-cream/50 border border-cream-dark/20"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold-light/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-gold-dark" />
                    </div>
                    <span className="text-sm font-medium text-brown-dark">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
