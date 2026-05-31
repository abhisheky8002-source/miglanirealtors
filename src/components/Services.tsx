import React, { useState } from "react";
import { SERVICES } from "../data";
import { Service } from "../types";
import { 
  Home, 
  Key, 
  Briefcase, 
  Layers, 
  TrendingUp, 
  MapPin, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  MessageSquare,
  PhoneCall
} from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon names to Lucide icon components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <Home className="w-6 h-6" />;
      case "Key":
        return <Key className="w-6 h-6" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6" />;
      case "Layers":
        return <Layers className="w-6 h-6" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6" />;
      case "MapPin":
        return <MapPin className="w-6 h-6" />;
      default:
        return <Home className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-luxe-charcoal relative">
      {/* Decorative luxury gradient ambient glow */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold-900/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-gold-400" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-bold">EXPERT DIVISIONS</span>
            <span className="w-8 h-[1px] bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
            Premium Real Estate Services
          </h2>
          <p className="font-sans text-gray-400 text-sm max-w-xl font-light leading-relaxed">
            Uncomplicating the Gurgaon luxury landscape through custom consultation divisions tailored to capital preservation, status, and smart yielding wealth creation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-[#0d0d0d] border border-white/5 hover:border-gold-500/30 p-8 flex flex-col justify-between items-start transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer rounded-none shadow-xl"
            >
              {/* Gold Top Border Hover Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-600 to-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="space-y-6 w-full">
                {/* Icon Container */}
                <div className="w-12 h-12 bg-white/5 group-hover:bg-gold-500/10 text-gold-400 group-hover:text-gold-300 border border-white/10 group-hover:border-gold-400/20 flex items-center justify-center transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-white group-hover:text-gold-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* View More Trigger Row */}
              <div className="mt-8 pt-4 border-t border-white/5 w-full flex items-center justify-between text-xs font-sans font-semibold tracking-wider text-gold-400 uppercase group-hover:text-gold-300 transition-colors">
                <span>Explore Methodology</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-luxe-charcoal border border-white/10 p-6 md:p-10 shadow-2xl focus:outline-none">
            
            {/* Elegant Header Decos */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 to-gold-400" />
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="space-y-6 font-sans">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gold-400/10 text-gold-400 border border-gold-400/20">
                  {renderIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-[10px] text-gold-400 uppercase tracking-[0.25em] font-bold">MIGLANI REALTORS SERVICES</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mt-0.5">{selectedService.title}</h3>
                </div>
              </div>

              <div className="border-y border-white/5 py-6 space-y-4">
                <h4 className="text-sm font-semibold tracking-wide text-gold-300 uppercase">Consulting Methodology:</h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                  {selectedService.longDesc}
                </p>
                <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% legal pre-check</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Private client confidentiality</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Transparent commissions</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct access to developers</span>
                </div>
              </div>

              {/* Call to Actions inside Modal */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`#contact`}
                  onClick={() => {
                    setSelectedService(null);
                    // Standard way to set custom query in message if possible
                    const requirementInput = document.getElementById("contact-requirement") as HTMLSelectElement;
                    if (requirementInput) {
                      requirementInput.value = selectedService.title;
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white py-3.5 font-semibold text-xs tracking-widest uppercase transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire About This Service</span>
                </a>
                <a
                  href="tel:9990221794"
                  className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-3.5 font-semibold text-xs tracking-widest uppercase transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-gold-400" />
                  <span>+91 99902 21794</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
