import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Mail, MapPin } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Properties", href: "#properties" },
    { name: "Localities", href: "#areas" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          isScrolled
            ? "bg-[#0a0a0add]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand/Logo */}
          <a href="#home" className="flex flex-col group">
            <span className="font-serif text-xl md:text-2xl tracking-widest text-white group-hover:text-gold-400 transition-colors duration-300 font-light">
              MIGLANI <span className="text-gold-400">REALTORS</span>
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-gray-450 text-gold-300/80 -mt-1 font-semibold">
              LUXURY REAL ESTATE ADVISORY
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm tracking-wider text-gray-300 hover:text-gold-400 transition-colors duration-300 font-light"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:amit@miglanirealtors.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              title="Email Us"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:9990221794"
              className="group flex items-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-450 text-white font-sans text-xs tracking-widest uppercase font-semibold px-5 py-2.5 rounded-none border border-gold-400/20 shadow-[0_0_15px_rgba(184,134,11,0.25)] hover:shadow-[0_0_25px_rgba(184,134,11,0.4)] transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>+91 99902 21794</span>
            </a>
          </div>

          {/* Mobile Menu Trigger & Call Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a
              href="tel:9990221794"
              className="p-2.5 bg-gold-600/10 border border-gold-500/20 rounded-full text-gold-400 hover:bg-gold-600/20 transition-all"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-gold-400 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-wider text-white hover:text-gold-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 flex flex-col items-center space-y-4">
            <a
              href="tel:9990221794"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-sans text-sm tracking-wider uppercase font-semibold px-8 py-3 rounded-none shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>+91 99902 21794</span>
            </a>
            <div className="flex flex-col items-center space-y-1 text-xs text-gray-400 pt-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400" /> Malibu Town, Gurugram
              </span>
              <span>amit@miglanirealtors.com</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
