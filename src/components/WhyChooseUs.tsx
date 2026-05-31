import React from "react";
import { 
  Building2, 
  UserCheck, 
  TrendingUp, 
  Network, 
  Scale, 
  HeartHandshake, 
  ShieldCheck,
  Star
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Gurgaon Luxury Market Expertise",
      description: "Over a decade of deep physical evaluation, regulatory mastery, and localized track records in Gurugram's premium residential sectors."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Personalized Consultation",
      description: "No hard selling. We understand your family goals first, tailoring searches specifically to lifestyle fit and wealth structure."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trusted Investment Advice",
      description: "Data-driven forecasting based on masterplans, infrastructural expansions, SPR bypasses, and historical price matrices."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Strong Local Network",
      description: "Direct relationships with top-tier community boards, verified builders, legal attorneys, and exclusive unlisted off-market sellers."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Transparent Process",
      description: "100% upfront clarification on title legality, stilt-parking rules, commission layouts, and transfer charges with zero hidden clauses."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Dedicated Client Service",
      description: "Bespoke support extending far beyond the deal, helping with registration paperwork, designer handovers, and leasing setups."
    }
  ];

  return (
    <section className="py-24 bg-luxe-charcoal relative overflow-hidden">
      
      {/* Decorative ambient background line and glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,134,11,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gold-900/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-gold-400" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-bold">CLIENT ASSURANCES</span>
            <span className="w-8 h-[1px] bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
            Why Clients Choose Miglani Realtors
          </h2>
          <p className="font-sans text-gray-400 text-sm max-w-xl font-light leading-relaxed">
            Real estate consulting in Gurgaon requires extreme professional integrity. Amit Lather operates as a trusted wealth advisor, protected by a six-point guarantee of excellence.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-[#0b0b0b] border border-white/5 p-8 relative group transition-all duration-300 hover:border-gold-500/20 rounded-none overflow-hidden"
            >
              {/* Subtle corner golden angle design */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold-400/40" />
              </div>

              {/* Icon Container with gold gradient glow on hover */}
              <div className="w-12 h-12 bg-white/5 border border-white/10 group-hover:border-gold-400/20 text-gold-400 group-hover:bg-gold-500/10 group-hover:text-gold-300 flex items-center justify-center transition-all duration-300 mb-6 rounded-none">
                {pillar.icon}
              </div>

              {/* Details */}
              <h3 className="font-serif text-lg text-white group-hover:text-gold-300 transition-colors duration-300 mb-3">
                {pillar.title}
              </h3>
              
              <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                {pillar.description}
              </p>
              
            </div>
          ))}
        </div>

        {/* Additional Trust Banner */}
        <div className="mt-16 bg-[#0a0a0a] border border-gold-500/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative rounded-none">
          <div className="absolute top-0 left-0 w-2 h-full bg-gold-500" />
          <div className="flex items-center space-x-4 font-sans">
            <div className="p-3 bg-gold-400/5 text-gold-400 border border-gold-400/10 hidden sm:block">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white font-serif text-lg font-medium">Have a hard real estate question?</h4>
              <p className="text-xs text-gray-400 font-light mt-0.5">Whether it is related to joint ownership, mutation registry, or builder delivery liability – book a free 15-minute briefing.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white/5 hover:bg-gold-500 hover:text-white border border-white/15 hover:border-gold-500 text-white font-sans text-xs tracking-widest font-semibold uppercase px-6 py-3.5 transition-all duration-300 rounded-none w-full md:w-auto text-center"
          >
            Ask Advice Now
          </a>
        </div>

      </div>
    </section>
  );
}
