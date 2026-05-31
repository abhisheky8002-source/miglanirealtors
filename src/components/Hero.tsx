import { ArrowRight, Phone, MessageSquare, Award, Star, ShieldCheck } from "lucide-react";

// Use the generated image paths
const HERO_BG = "/src/assets/images/luxury_villas_gurgaon_hero_1780224135706.png";
const AMIT_PORTRAIT = "https://res.cloudinary.com/dr5obadvt/image/upload/v1780226835/710537170_18001013054948029_780387646443186867_n_gytvbu.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24 md:pt-28"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Luxury Gurgaon Villa"
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-black/20" />
      </div>

      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-900/15 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Pitch (7cols) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
          
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-none font-sans text-xs uppercase tracking-[0.2em] text-gold-300">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>MIGLANI REALTORS  •  GURUGRAM</span>
          </div>

          {/* Primary Majestic Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight md:leading-[1.1]">
            Luxury Homes & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
              Smart Property Investments
            </span> <br />
            in Gurgaon
          </h1>

          {/* Subheadline description */}
          <p className="font-sans text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
            Trusted Real Estate Portfolio Management and Consultancy for discerning buyers, premium villas, and high-yielding developer plots in Gurgaon's most prestigious avenues.
          </p>

          {/* Quick Stats Banner inside Hero for immediate Authority */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 border-y border-white/10 py-6 w-full max-w-xl font-sans">
            <div>
              <span className="block text-2xl md:text-3xl font-serif text-gold-400">12+ Yrs</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-light">Gurugram Expertise</span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-serif text-gold-400">500+ Cr</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-light">Portfolio Managed</span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-serif text-gold-400">100%</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-light">Legal Clean Title</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#properties"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white font-sans text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-none transition-all duration-300 shadow-[0_4px_20px_rgba(184,134,11,0.2)]"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-sans text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-none border border-white/15 hover:border-gold-400/30 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-gold-400" />
              <span>Book Consultation</span>
            </a>
          </div>
        </div>

        {/* Right Portrait & Floating Trust Card (5cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          
          {/* Framed Advisory Portrait card */}
          <div className="relative group max-w-xs sm:max-w-sm w-full bg-luxe-charcoal/90 border border-white/10 p-5 shadow-2xl rounded-none">
            
            {/* Elegant Corner Deco */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-gold-400" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-gold-400" />

            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
              <img
                src={AMIT_PORTRAIT}
                alt="Amit Lather - Luxury Real Estate Consultant"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Dynamic Status Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2.5 flex items-center justify-between font-sans">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-semibold text-white uppercase tracking-wider">Amit Lather</span>
                </div>
                <span className="text-[9px] text-gold-400 uppercase tracking-widest font-semibold bg-gold-400/10 px-2 py-0.5 border border-gold-400/10">
                  Principal Consultant
                </span>
              </div>
            </div>

            {/* Quick credentials / direct contact */}
            <div className="mt-5 space-y-3.5 font-sans">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-white font-serif text-lg tracking-wide font-medium">Amit Lather</h4>
                  <p className="text-xs text-gold-400 uppercase tracking-wider font-medium">Founder, Miglani Realtors</p>
                </div>
                <div className="flex items-center gap-0.5 text-gold-400 bg-gold-400/5 border border-gold-400/10 px-2 py-1">
                  <Star className="w-3.5 h-3.5 fill-gold-400" />
                  <span className="text-xs font-bold font-mono">5.0</span>
                </div>
              </div>

              <div className="text-xs text-gray-400 leading-relaxed italic border-l border-gold-500/30 pl-3">
                "We don't sell buildings. We protect capital and discover spaces where status meets substance in Gurugram."
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Contact Directly</span>
                <a
                  href="tel:9990221794"
                  className="text-xs text-white hover:text-gold-400 transition-colors font-medium flex items-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span className="font-mono text-[13px] font-semibold">+91 99902 21794</span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative floating badge */}
          <div className="absolute -bottom-6 -left-6 md:-left-8 bg-black border border-gold-400/30 px-5 py-4 flex items-center space-x-3 shadow-xl max-w-[210px] hidden sm:flex">
            <div className="p-2.5 bg-gold-400/10 text-gold-400 border border-gold-400/10 rounded-none">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase text-gold-400 tracking-widest font-bold">RERA Approved</p>
              <h5 className="text-white text-xs font-semibold leading-snug">Verified Legal Compliance</h5>
            </div>
          </div>

        </div>
      </div>

      {/* Styled inline keyframes for sub-zoom in index.css */}
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
