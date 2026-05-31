import React, { useState } from "react";
import { AREAS } from "../data";
import { AreaSpecialization } from "../types";
import { MapPin, Compass, Check, ArrowRight } from "lucide-react";

export default function Areas() {
  const [selectedArea, setSelectedArea] = useState<AreaSpecialization>(AREAS[0]);

  return (
    <section id="areas" className="py-24 bg-luxe-dark relative border-t border-white/5">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-gold-400" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-bold">TERRITORY FOCUS</span>
            <span className="w-8 h-[1px] bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
            Luxury Markets We Serve
          </h2>
          <p className="font-sans text-gray-400 text-sm max-w-xl font-light leading-relaxed">
            Gurgaon real estate values differ drastically block by block. We maintain specialized community intelligence and historical trade logs inside Gurugram’s most distinguished townships.
          </p>
        </div>

        {/* Split Grid: Cards (7cols) vs Interactive Schematic Map (5cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Locality Cards (8cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {AREAS.map((area) => (
              <div
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`group bg-luxe-charcoal border text-left p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[360px] rounded-none ${
                  selectedArea.id === area.id
                    ? "border-gold-500/80 shadow-[0_0_20px_rgba(184,134,11,0.15)]"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                {/* Image top block */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-white/5">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Highlight ribbon */}
                  <div className="absolute bottom-2 left-2 bg-black/90 border border-white/10 px-2 py-1 text-[9px] uppercase tracking-widest text-gold-300 font-bold">
                    {area.highlight}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mt-4 font-sans">
                  <h3 className="font-serif text-xl text-white group-hover:text-gold-300 transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light line-clamp-2">
                    {area.description}
                  </p>
                </div>

                {/* Tags bottom block */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mt-auto">
                  {area.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="bg-white/5 text-[9px] uppercase tracking-wide px-2 py-0.5 text-gray-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Right: Interactive Region Analytics Block (4cols) */}
          <div className="lg:col-span-4 bg-[#0c0c0c] border border-white/10 p-6 md:p-8 font-sans space-y-6 rounded-none relative">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-500" />
            
            {/* Schematic Header */}
            <div className="space-y-1.5">
              <span className="text-[10px] text-gold-400 uppercase tracking-widest block font-bold">LOCAL MARKET INTELLIGENCE</span>
              <h3 className="font-serif text-2xl text-white">{selectedArea.name} Profile</h3>
              <p className="text-xs text-gray-400 font-light mt-1">Amit Lather’s strategic analysis of this Gurgaon micro-market:</p>
            </div>

            {/* Analysis Data Points */}
            <div className="space-y-4 border-y border-white/5 py-6">
              
              <div className="space-y-2">
                <span className="text-[10px] text-gold-400 uppercase tracking-widest block font-semibold">Specialist Overview:</span>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {selectedArea.description}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] text-gold-400 uppercase tracking-widest block font-semibold">Key Highlights:</span>
                <div className="grid grid-cols-1 gap-2">
                  {selectedArea.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Simulated interactive Location Hotspot locator Map block */}
            <div className="space-y-3">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Gurugram Micro-Coordinates</span>
              <div className="h-28 bg-[#070707] border border-white/5 p-3 flex flex-col justify-between relative overflow-hidden">
                
                {/* Simulated Grid Matrix background */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px]" />
                
                {/* Floating coordinate marks */}
                <div className="absolute top-4 left-6 text-[8px] font-mono text-gold-400/40">28.4595° N, 77.0266° E</div>
                <div className="absolute bottom-4 right-6 text-[8px] font-mono text-gold-400/40">Sohna Road Corridor</div>

                <div className="relative z-10 flex items-center justify-between font-sans">
                  <div className="flex items-center space-x-2">
                    <Compass className="w-5 h-5 text-gold-400 animate-spin" style={{ animationDuration: "12s" }} />
                    <span className="text-white text-xs uppercase tracking-widest font-bold">Malibu HQ Sector Base</span>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 text-[8px] font-mono px-1.5 py-0.5 border border-emerald-500/20">
                    LIVE DATA
                  </span>
                </div>

                <p className="text-[11px] text-gray-400 font-light z-10 leading-snug">
                  Amit maintains a physical office inside <strong>Malibu Town</strong>, making rapid physical validation and document retrievals highly efficient.
                </p>
              </div>
            </div>

            {/* Fast Sector Consultation Button */}
            <a
              href="#contact"
              onClick={() => {
                const reqSelect = document.getElementById("contact-requirement") as HTMLSelectElement;
                if (reqSelect) {
                  reqSelect.value = `${selectedArea.name} Properties`;
                }
              }}
              className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white text-xs font-semibold uppercase tracking-widest py-3.5 transition-all shadow-md"
            >
              <span>Explore {selectedArea.name} Listings</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
