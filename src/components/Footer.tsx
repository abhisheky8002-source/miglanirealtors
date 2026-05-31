import React from "react";
import { Phone, Mail, MapPin, Instagram, ShieldAlert, ChevronUp } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Amit", href: "#about" },
    { name: "Consulting Services", href: "#services" },
    { name: "Luxury Properties", href: "#properties" },
    { name: "Serving Sectors", href: "#areas" },
    { name: "Private Booking", href: "#contact" }
  ];

  const serviceLinks = [
    "Luxury Home Buying",
    "Luxury Property Selling",
    "Portfolio Management",
    "Builder Floors & Villas",
    "Investment Advisory",
    "Gurgaon Area Expertise"
  ];

  return (
    <footer className="bg-luxe-dark text-gray-400 font-sans border-t border-white/5 relative z-10 pt-16 pb-8">
      
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Column 1: Brand & Philosophy (5cols) */}
        <div className="lg:col-span-4 space-y-6 flex flex-col items-start text-left">
          <a href="#home" className="flex flex-col group">
            <span className="font-serif text-xl tracking-widest text-white group-hover:text-gold-400 transition-colors duration-300 font-light">
              MIGLANI <span className="text-gold-400">REALTORS</span>
            </span>
            <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-gold-300 -mt-1 font-semibold">
              LUXURY REAL ESTATE ADVISORY
            </span>
          </a>
          <p className="text-xs text-gray-450 leading-relaxed font-light text-gray-400 max-w-sm">
            Providing premium buyers, family offices, and HNIs with transparent, legal-checked property representation. Guided by Principal Consultant Amit Lather inside Malibu Town, Gurgaon.
          </p>
          <div className="space-y-2 text-xs text-gray-400 font-light">
            <span className="text-[10px] uppercase text-gold-400 tracking-wider block font-bold">Base Office:</span>
            <span className="flex items-start gap-1.5 leading-snug">
              <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
              Malibu Town, Sector 47 Gated Block, Sohna Road Corridor, Gurugram, India 122002
            </span>
          </div>
        </div>

        {/* Column 2: Quick Navigation (2cols) */}
        <div className="lg:col-span-2 space-y-5 text-left">
          <h4 className="text-white font-serif text-sm uppercase tracking-widest font-semibold pb-1.5 border-b border-white/5">
            Navigator
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-gold-400 transition-colors py-0.5 block font-light"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Service Divisions (3cols) */}
        <div className="lg:col-span-3 space-y-5 text-left">
          <h4 className="text-white font-serif text-sm uppercase tracking-widest font-semibold pb-1.5 border-b border-white/5">
            Core Competiencies
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            {serviceLinks.map((name, idx) => (
              <li key={idx}>
                <a
                  href="#services"
                  className="hover:text-gold-300 transition-colors py-0.5 block font-light"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Parameters & Social (3cols) */}
        <div className="lg:col-span-3 space-y-5 text-left font-sans">
          <h4 className="text-white font-serif text-sm uppercase tracking-widest font-semibold pb-1.5 border-b border-white/5">
            Social Contacts
          </h4>
          
          <div className="space-y-3 text-xs">
            
            <a
              href="tel:9990221794"
              className="flex items-center space-x-2.5 text-gray-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span className="font-mono">+91 99902 21794</span>
            </a>

            <a
              href="mailto:amit@miglanirealtors.com"
              className="flex items-center space-x-2.5 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-gold-400" />
              <span className="truncate">amit@miglanirealtors.com</span>
            </a>

            <a
              href="https://instagram.com/amit.miglanirealtors"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-gold-400" />
              <span>@amit.miglanirealtors</span>
            </a>

          </div>

          <div className="pt-2">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-1.5">RERA STATEMENT</span>
            <div className="bg-white/5 p-3 border border-white/5 flex gap-2 text-[9px] text-gray-400 leading-snug">
              <ShieldAlert className="w-4 h-4 text-gold-400/80 flex-shrink-0 mt-0.5" />
              <span>We adhere strictly to HRERA regulations. All listing data represents agent-verified developer disclosures.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Copyright bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-gray-500">
        <div className="text-center sm:text-left">
          <span>© {new Date().getFullYear()} Miglani Realtors. All Rights Reserved.</span>
          <span className="mx-2 hidden sm:inline">|</span>
          <span className="block sm:inline mt-1 sm:mt-0 font-light">Gurugram RERA Registered Agent Representative: Amit Lather.</span>
        </div>
        <a
          href="#home"
          className="flex items-center space-x-1.5 text-gray-400 hover:text-white transition-all text-[11px] uppercase tracking-wider font-semibold"
        >
          <span>Return to Top</span>
          <ChevronUp className="w-4 h-4" />
        </a>
      </div>

    </footer>
  );
}
