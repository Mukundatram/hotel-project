"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Gallery", href: "#gallery" },
  { name: "Amenities", href: "#features" },
  { name: "Book Now", href: "#booking" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg border-b border-gold-light/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">S</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold font-[family-name:var(--font-heading)] text-brown-dark leading-tight">
                Hotel Shivalay
              </h1>
              <p className="text-xs text-warm-gray-light tracking-wider uppercase">
                Guest House
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  link.name === "Book Now"
                    ? "bg-gradient-to-r from-gold to-gold-dark text-white shadow-md hover:shadow-lg hover:scale-105"
                    : "text-brown-light hover:text-brown-dark hover:bg-cream-dark/50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Phone + Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+919876543210"
              className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark hover:bg-gold/20 transition-colors"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-cream-dark/50 flex items-center justify-center text-brown-dark hover:bg-cream-dark transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-gold-light/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                link.name === "Book Now"
                  ? "bg-gradient-to-r from-gold to-gold-dark text-white text-center shadow-md mt-2"
                  : "text-brown-light hover:text-brown-dark hover:bg-cream-dark/30"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
