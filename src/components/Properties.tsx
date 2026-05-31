import React, { useState } from "react";
import { PROPERTIES } from "../data";
import { Property } from "../types";
import { 
  BedDouble, 
  ShowerHead, 
  Maximize, 
  MapPin, 
  ChevronRight, 
  Calendar, 
  X, 
  Check, 
  MessageSquare,
  PhoneCall,
  Coins
} from "lucide-react";

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filterTabs = ["All", "Malibu Town", "South City", "Nirvana Country", "Sushant Lok"];

  const filteredProperties = activeFilter === "All"
    ? PROPERTIES
    : PROPERTIES.filter(p => p.locality === activeFilter);

  return (
    <section id="properties" className="py-24 bg-luxe-dark relative border-t border-white/5">
      
      {/* Glow Detail */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-gold-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-gold-400" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-bold">VIP CATALOG</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
              Featured Luxury Listings
            </h2>
            <p className="font-sans text-gray-450 text-gray-400 text-sm max-w-lg font-light leading-relaxed">
              Discover a handpicked selection of top-tier residential villas, modern builder floors, and premium duplexes certified by Amit Lather.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2.5 bg-luxe-charcoal/40 p-1.5 border border-white/5 font-sans">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none ${
                  activeFilter === tab
                    ? "bg-gold-500 text-white shadow-[0_2px_12px_rgba(184,134,11,0.25)]"
                    : "text-gray-450 text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-luxe-charcoal/75 border border-white/5 hover:border-gold-500/20 group relative flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden rounded-none"
            >
              
              {/* Card Image Block */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 border-b border-white/5">
                <img
                  src={property.mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Label Tag Group */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  <span className="bg-gold-600 border border-gold-400/20 text-white text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 shadow-md">
                    {property.highlightTag}
                  </span>
                  <span className="bg-black/85 backdrop-blur-sm border border-white/10 text-gold-400 text-[8px] uppercase tracking-[0.15em] px-2.5 py-0.5">
                    {property.propertyType}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md border border-white/10 px-3 py-1 font-mono text-xs text-gold-300 font-bold">
                  {property.price}
                </div>
              </div>

              {/* Card Content Block */}
              <div className="p-6 font-sans flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs text-gold-400/80 font-medium tracking-wide">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{property.locality}, Gurgaon</span>
                  </div>
                  <h3 className="font-serif text-xl text-white group-hover:text-gold-300 transition-colors duration-300">
                    {property.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light line-clamp-2">
                    {property.description}
                  </p>
                </div>

                {/* Specs Section */}
                <div className="grid grid-cols-3 gap-2 border-y border-white/5 py-3 text-xs text-gray-300 font-medium">
                  <div className="flex items-center space-x-2">
                    <BedDouble className="w-4 h-4 text-gold-400/80" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShowerHead className="w-4 h-4 text-gold-400/80" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Maximize className="w-4 h-4 text-gold-400/80" />
                    <span>{property.sizeSqFt} SqFt</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    onClick={() => setSelectedProperty(property)}
                    className="w-full inline-flex items-center justify-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider py-2.5 transition-all"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      // Autoprefill contact selector
                      const requestSelect = document.getElementById("contact-requirement") as HTMLSelectElement;
                      if (requestSelect) {
                        requestSelect.value = `${property.title} - ${property.price}`;
                      }
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white text-xs font-semibold uppercase tracking-wider py-2.5 transition-all shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Schedule Visit</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Property Detail Investigator Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-luxe-charcoal border border-white/10 p-5 md:p-8 shadow-2xl my-8">
            
            {/* Ribbon Accent */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400" />
            
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Split Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 font-sans">
              
              {/* Left Column: Image, Specifications, Amenities (7cols) */}
              <div className="md:col-span-7 space-y-6">
                
                {/* Big Image Representation */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-white/10">
                  <img
                    src={selectedProperty.mainImage}
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-gold-600 text-white px-3 py-1 font-bold text-xs uppercase tracking-widest">
                    {selectedProperty.highlightTag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/90 border border-white/10 px-4 py-1.5 font-mono text-sm text-gold-300 font-bold">
                    Value: {selectedProperty.price}
                  </div>
                </div>

                {/* Local Area specifications table */}
                <div className="bg-luxe-dark p-4 border border-white/5 space-y-3">
                  <h4 className="text-sm font-semibold tracking-wide text-gold-400 uppercase flex items-center gap-2">
                    <Coins className="w-4 h-4 text-gold-400" /> Property Fact-Sheet
                  </h4>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-light text-gray-300">
                    <div className="flex justify-between border-b border-white/5 py-1.5">
                      <span className="text-gray-400">Locality:</span>
                      <span className="font-semibold">{selectedProperty.location}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 py-1.5">
                      <span className="text-gray-400">Class Type:</span>
                      <span className="font-semibold">{selectedProperty.propertyType}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 py-1.5">
                      <span className="text-gray-400">Configuration:</span>
                      <span className="font-semibold">{selectedProperty.beds} Bedrooms, {selectedProperty.baths} Bathrooms</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 py-1.5">
                      <span className="text-gray-400">Built-up Size:</span>
                      <span className="font-semibold">{selectedProperty.sizeSqFt} Sq.Ft.</span>
                    </div>
                  </div>
                </div>

                {/* Amenities List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold tracking-widest text-white uppercase">Premium Inclusions & Amenities:</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {selectedProperty.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center space-x-2 bg-white/5 p-2 border border-white/5 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Descriptions, Direct Contact Forms (5cols) */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">PRESTIGE OPPORTUNITY</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">{selectedProperty.title}</h3>
                  <div className="flex items-center space-x-1 text-gold-500 font-medium text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedProperty.location}</span>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light pt-2">
                    {selectedProperty.description}
                  </p>
                  <div className="p-4 bg-gold-400/5 border border-gold-400/20 text-xs text-gray-300 font-light leading-relaxed">
                    <strong>Amit Lather's Private Note:</strong> "The appreciation potential is robust here, with recent developmental guidelines restricting further vertical density nearby. Perfect target for capital safety."
                  </div>
                </div>

                {/* Fast Action Board */}
                <div className="bg-luxe-dark p-5 border border-white/5 space-y-4">
                  <div className="text-center">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Immediate Advisory Response</p>
                    <p className="text-[9px] text-gold-400 block tracking-widest uppercase">Verified Partner Listing</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="#contact"
                      onClick={() => {
                        setSelectedProperty(null);
                        const requestSelect = document.getElementById("contact-requirement") as HTMLSelectElement;
                        if (requestSelect) {
                          requestSelect.value = `${selectedProperty.title} - ${selectedProperty.price}`;
                        }
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white font-bold text-xs tracking-widest uppercase py-3 shadow-[0_4px_15px_rgba(184,134,11,0.2)] transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Request Physical Tour</span>
                    </a>

                    <a
                      href="tel:9990221794"
                      className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold tracking-widest uppercase py-3 transition-all"
                    >
                      <PhoneCall className="w-4 h-4 text-gold-400" />
                      <span>Call Advisor: +91 99902 21794</span>
                    </a>
                  </div>

                  <div className="text-center pt-2">
                    <span className="text-[9px] text-gray-500 block uppercase tracking-widest">Consultant office located at Malibu Town, Gurugram</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
