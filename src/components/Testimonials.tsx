import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote, Shield } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Auto scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-luxe-charcoal relative border-t border-white/5 overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-900/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-gold-400" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-bold">CLIENT EXPERIENCES</span>
            <span className="w-8 h-[1px] bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
            Client Experiences
          </h2>
          <p className="font-sans text-gray-400 text-sm max-w-xl font-light leading-relaxed">
            The deepest test of a property advisor's integrity is the voice of their long-term clients. Here is what leading professionals and residents of Gurugram say about working with Amit Lather.
          </p>
        </div>

        {/* Testimonial Active Card Presentation */}
        <div className="relative bg-[#0d0d0d] border border-white/10 p-8 md:p-14 shadow-2xl rounded-none">
          
          {/* Top Elegant Deco Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 to-gold-400" />
          
          {/* Large Quote Mark */}
          <Quote className="absolute right-8 bottom-8 w-24 h-24 text-white/[0.02] transform pointer-events-none" />

          {/* Slider Content Wrapper */}
          <div className="relative min-h-[220px] flex flex-col justify-between space-y-8 font-sans">
            
            {/* Rating Stars & Verified tag */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-1">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/5 border border-emerald-500/20 px-3 py-1 text-[9px] text-emerald-400 uppercase tracking-widest font-semibold ml-auto sm:ml-0">
                <Shield className="w-3 h-3 text-emerald-500" /> VERIFIED PROPERTY OWNER
              </span>
            </div>

            {/* Testimonial Core Feedback */}
            <blockquote className="font-serif text-lg md:text-xl text-white italic leading-relaxed text-left font-light">
              "{TESTIMONIALS[activeIndex].feedback}"
            </blockquote>

            {/* Client Bio Footer */}
            <div className="flex items-center space-x-4 pt-6 border-t border-white/5">
              <img
                src={TESTIMONIALS[activeIndex].image}
                alt={TESTIMONIALS[activeIndex].name}
                className="w-14 h-14 rounded-full border border-gold-400/20 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <h4 className="text-white text-base font-serif tracking-wide font-medium">
                  {TESTIMONIALS[activeIndex].name}
                </h4>
                <p className="text-xs text-gold-400 uppercase tracking-wider font-semibold">
                  {TESTIMONIALS[activeIndex].role}
                </p>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-light mt-0.5">
                  Investment Sector: {TESTIMONIALS[activeIndex].location}
                </span>
              </div>
            </div>

          </div>

          {/* Navigation Arrows inside the Card */}
          <div className="absolute bottom-6 right-8 flex space-x-2.5 z-25 mt-4 min:[375px]:absolute">
            <button
              onClick={handlePrev}
              className="p-2 border border-white/10 hover:border-gold-400 text-white hover:text-gold-400 bg-white/5 hover:bg-gold-500/5 transition-all text-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-white/10 hover:border-gold-400 text-white hover:text-gold-400 bg-white/5 hover:bg-gold-500/5 transition-all text-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Pagination indicators under the slider */}
        <div className="flex justify-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-none ${
                activeIndex === idx ? "w-8 bg-gold-400" : "w-2.5 bg-white/10 hover:bg-white/20"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
