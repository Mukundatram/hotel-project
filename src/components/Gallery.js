"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const images = [
  { src: "/images/hero.png", alt: "Hotel Nandan Exterior", span: "col-span-2 row-span-2" },
  { src: "/images/room-standard.png", alt: "Standard Room", span: "" },
  { src: "/images/gallery-lobby.png", alt: "Hotel Lobby & Reception", span: "" },
  { src: "/images/room-deluxe.png", alt: "Deluxe Room", span: "col-span-2" },
  { src: "/images/gallery-corridor.png", alt: "Hotel Corridor", span: "" },
  { src: "/images/gallery-bathroom.png", alt: "Clean Bathroom", span: "" },
  { src: "/images/room-family.png", alt: "Family Suite", span: "" },
  { src: "/images/gallery-dining.png", alt: "Dining Area", span: "" },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

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

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <section id="gallery" ref={sectionRef} className="section-padding bg-warm-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 animate-on-scroll">
            <p className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3">
              Gallery
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark mb-4">
              Glimpse of Our Property
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Take a virtual tour of our rooms, facilities, and surroundings.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mt-4" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`animate-on-scroll ${img.span} relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500`}
                onClick={() => setLightbox(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out_forwards]"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white/80 text-center mt-4 text-sm">
              {images[lightbox].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
