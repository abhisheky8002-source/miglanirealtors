import React from "react";
import { Phone, Mail, Award, Clock, ArrowRight } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="py-20 relative bg-luxe-dark border-t border-white/5 overflow-hidden">
      
      {/* Golden accent radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,134,11,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        
        {/* Border Frame Container */}
        <div className="border border-gold-500/15 bg-luxe-charcoal/30 p-8 md:p-16 relative rounded-none">
          
          {/* Framed angles */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold-400/25" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold-400/25" />

          <div className="max-w-2xl mx-auto flex flex-col items-center space-y-6 md:space-y-8 font-sans">
            
            {/* Stamp Badge */}
            <div className="inline-flex items-center gap-1.5 bg-gold-400/5 border border-gold-400/20 px-3.5 py-1.5 text-[10px] text-gold-400 uppercase tracking-[0.2em] font-semibold">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span>CONFIDENTIAL PORTFOLIO MANAGEMENT</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Ready to Find Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
                Luxury Residence?
              </span>
            </h2>

            {/* Explainer */}
            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
              Discover verified luxury homes, off-market builder floors, and premium villas across Gurgaon. Receive strategic asset-class matching and absolute financial safety under Miglani Realtors' expert supervision.
            </p>

            {/* Quick Contact Parameter Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg pt-2 text-left">
              
              <a
                href="tel:9990221794"
                className="bg-black/40 border border-white/5 hover:border-gold-500/20 p-4 flex items-center space-x-3.5 transition-all group rounded-none"
              >
                <div className="p-2.5 bg-gold-400/5 group-hover:bg-gold-500/10 text-gold-400 border border-gold-400/20 rounded-none transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-medium">Direct Telephone</span>
                  <span className="text-white text-[13px] font-mono font-semibold">+91 99902 21794</span>
                </div>
              </a>

              <a
                href="mailto:amit@miglanirealtors.com"
                className="bg-black/40 border border-white/5 hover:border-gold-500/20 p-4 flex items-center space-x-3.5 transition-all group rounded-none"
              >
                <div className="p-2.5 bg-gold-400/5 group-hover:bg-gold-500/10 text-gold-400 border border-gold-400/20 rounded-none transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-medium">Email Professional Inbox</span>
                  <span className="text-white text-xs font-semibold">amit@miglanirealtors.com</span>
                </div>
              </a>

            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a
                href="tel:9990221794"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-450 text-white font-semibold text-xs tracking-widest uppercase px-10 py-4 shadow-lg transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Amit Directly</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-gold-400/30 font-semibold text-xs tracking-widest uppercase px-10 py-4 transition-all"
              >
                <span>Schedule Briefing</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
              </a>
            </div>

            {/* Live operational tagline */}
            <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest pt-2">
              <Clock className="w-3.5 h-3.5 text-[#b8860b]" />
              <span>Operational: 9:00 AM - 8:30 PM   •   Malibu Town Sector 47 Gated Office</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
