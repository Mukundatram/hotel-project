"use client";

import { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Hotel Shivalay Guest House", "Khamgaon Road, Near Gajanan Maharaj Vatika", "Shegaon, Maharashtra 444203"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 98765 43210", "+91 98765 43211"],
    isLink: true,
    linkPrefix: "tel:",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@hotelshivalayshegaon.com"],
    isLink: true,
    linkPrefix: "mailto:",
  },
  {
    icon: Clock,
    title: "Reception Hours",
    lines: ["24 Hours, 7 Days a Week", "Check-in: 12:00 PM | Check-out: 11:00 AM"],
  },
];

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="section-padding bg-warm-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3">Contact Us</p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark mb-4">Get in Touch</h2>
          <p className="text-warm-gray max-w-xl mx-auto">Have questions? Reach out anytime — we&apos;re here to help!</p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="animate-on-scroll flex gap-4 p-5 rounded-2xl bg-white border border-cream-dark/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-light/30 to-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-gold-dark" />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-brown-dark mb-1">{item.title}</h4>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-sm text-warm-gray">
                        {item.isLink ? (
                          <a href={`${item.linkPrefix}${line.replace(/\s/g, "")}`} className="hover:text-gold-dark transition-colors">{line}</a>
                        ) : line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="animate-on-scroll">
              <a href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20inquire%20about%20room%20availability." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <MessageCircle size={22} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-cream-dark/20 h-full min-h-[400px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.2!2d76.6951!3d20.7929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQ3JzM0LjQiTiA3NsKwNDEnNDIuNCJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0, minHeight: "400px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hotel Shivalay Location" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
