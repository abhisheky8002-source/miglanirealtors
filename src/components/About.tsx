import React from "react";
import { CheckCircle2, Bookmark, Award, Shield, UserCheck, Eye } from "lucide-react";

const AMIT_PORTRAIT = "/src/assets/images/amit_lather_representative_1780224153939.png";

export default function About() {
  const trustIndicators = [
    {
      title: "Gurgaon Specialist",
      desc: "In-depth legislative, physical & market mastery of Gurugram's key elite hubs.",
    },
    {
      title: "Portfolio Management",
      desc: "Guiding family offices, HNIs, and corporate leaders to scale property assets.",
    },
    {
      title: "Luxury Homes Expert",
      desc: "Specializing strictly in modern villas, bespoke duplexes, and multi-story floors.",
    },
    {
      title: "Client-Focused Advisory",
      desc: "Unbiased, legal-first consultation protecting buyer privacy and capital security.",
    }
  ];

  return (
    <section id="about" className="py-24 bg-luxe-dark border-t border-white/5 relative overflow-hidden">
      
      {/* Background visual detail */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Elegant Double-Framed Presentation */}
        <div className="lg:col-span-5 relative">
          
          <div className="relative">
            {/* Top-lying visual accent border */}
            <div className="absolute inset-0 border border-gold-400/25 -translate-x-4 -translate-y-4 z-0 pointer-events-none" />
            
            {/* Main high-end framed image */}
            <div className="relative z-10 bg-luxe-charcoal border border-white/10 p-4">
              <img
                src={AMIT_PORTRAIT}
                alt="Amit Lather Gurgaon Portfolio Advisor"
                className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with stats */}
              <div className="absolute top-8 right-8 bg-[#0a0a0add]/90 backdrop-blur-md px-5 py-4 border border-white/10 text-center font-sans">
                <span className="block text-3xl font-serif text-gold-400 font-bold">12+</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-300 font-semibold">Years of Trust</span>
              </div>
            </div>

            {/* Behind-layer card displaying key credential */}
            <div className="absolute -bottom-6 -right-6 md:-right-8 bg-gradient-to-br from-gold-900 to-luxe-charcoal border border-gold-400/30 p-5 shadow-2xl z-20 max-w-[240px] font-sans">
              <span className="flex items-center gap-1.5 text-gold-300 text-[10px] uppercase tracking-widest font-bold mb-1">
                <Shield className="w-3.5 h-3.5 text-gold-400" /> Gurugram Certified
              </span>
              <p className="text-white text-xs leading-relaxed font-light">
                Serving elite families in Malibu Town, South City, Shushant Lok, and Nirvana Country.
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Narrative Copy & Signature */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          
          {/* Section Marker */}
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-gold-400" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-bold">THE CONSULTANT</span>
          </div>

          {/* Section Title */}
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Meet Amit Lather
          </h2>

          {/* Core Biography Narrative */}
          <div className="space-y-5 text-gray-300 font-sans text-sm md:text-base leading-relaxed font-light">
            <p>
              Amit Lather is a premier luxury real estate consultant and portfolio manager specializing in the high-end residential markets of Gurugram. As the driving force behind <strong className="text-white font-medium">Miglani Realtors</strong>, his operations are defined by deep-rooted market data, absolute transparency, and a client-first advisory model.
            </p>
            <p>
              With specialized physical expertise across <span className="text-gold-300 font-medium">South City</span>, <span className="text-gold-300 font-medium">Malibu Town</span>, <span className="text-gold-300 font-medium">Sushant Lok</span>, and <span className="text-gold-300 font-medium">Nirvana Country</span>, Amit works actively to filter the noise out of Gurgaon's crowded development landscape. He helps elite homebuyers and family offices discover architectural statement properties and secure legal title protection.
            </p>
          </div>

          {/* Cursive Signature & Monogram Block */}
          <div className="flex items-center space-x-6 py-4 border-y border-white/5 font-sans">
            <div className="w-12 h-12 rounded-none bg-gold-400/5 border border-gold-400/20 flex items-center justify-center font-serif text-gold-400 font-bold text-lg">
              AL
            </div>
            <div>
              {/* Styled mock handwritten signature */}
              <span className="block font-serif italic text-2xl text-gold-300 tracking-wide font-normal">
                Amit Lather
              </span>
              <span className="text-[10px] uppercase text-gray-400 tracking-widest block mt-0.5">
                Principal Real Estate Strategic Advisor
              </span>
            </div>
          </div>

          {/* Trust Indicators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex gap-4.5 group font-sans">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-base tracking-wide font-medium group-hover:text-gold-300 transition-colors">
                    {indicator.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light mt-1">
                    {indicator.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
