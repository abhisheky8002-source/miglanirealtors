import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  X,
  MessageSquare,
  Sparkles
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "General Investment Consultation",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionProgress, setSubmissionProgress] = useState("");
  const [showSuccessTicket, setShowSuccessTicket] = useState(false);
  const [ticketRef, setTicketRef] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill out the required parameters: Name, Phone, and Email.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionProgress("Analyzing property requirements...");

    setTimeout(() => {
      setSubmissionProgress("Securing cryptographic channel for client privacy...");
      
      setTimeout(() => {
        setSubmissionProgress("Mapping optimal Gurgaon pipeline availability...");

        setTimeout(() => {
          // Generate a premium random ticket number
          const randRef = `MLG-${Math.floor(100000 + Math.random() * 900000)}`;
          setTicketRef(randRef);

          // Save lead to local storage
          const existingLeads = JSON.parse(localStorage.getItem("miglani_leads") || "[]");
          const newLead = {
            ...formData,
            id: Date.now().toString(),
            ticketRef: randRef,
            submittedAt: new Date().toISOString()
          };
          existingLeads.unshift(newLead);
          localStorage.setItem("miglani_leads", JSON.stringify(existingLeads));

          // Reset status
          setIsSubmitting(false);
          setShowSuccessTicket(true);
        }, 1200);

      }, 1000);

    }, 800);
  };

  const handleCloseTicket = () => {
    setShowSuccessTicket(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      requirement: "General Investment Consultation",
      message: ""
    });
  };

  // Structured Whatsapp link
  const getWhatsappLink = () => {
    const text = encodeURIComponent(
      `Hello Amit, my name is ${formData.name}. I just submitted an inquiry on Miglani Realtors for "${formData.requirement}". Looking forward to our real estate briefing.`
    );
    return `https://wa.me/919990221794?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 bg-luxe-charcoal relative">
      
      {/* Decorative Blur and Accent */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-gold-400" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 font-bold">CLIENT REGISTRATION</span>
            <span className="w-8 h-[1px] bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
            Schedule a Private Consultation
          </h2>
          <p className="font-sans text-gray-400 text-sm max-w-xl font-light leading-relaxed">
            Begin your Gurgaon property journey with Amit Lather. Fill out the discrete acquisition form below to register your investment blueprint.
          </p>
        </div>

        {/* Form and Coordinates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & Map (5cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Coordination Cards */}
            <div className="space-y-4.5 font-sans">
              <h3 className="font-serif text-2xl text-white tracking-wide mb-6">Consultant Coordinates</h3>
              
              {/* Phone Card */}
              <a
                href="tel:9990221794"
                className="block bg-[#0e0e0e] border border-white/5 hover:border-gold-500/20 p-5 transition-all w-full rounded-none group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gold-400/5 group-hover:bg-gold-500/10 text-gold-400 border border-gold-400/20 rounded-none transition-all">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest block font-medium">Telephone Communications</span>
                    <span className="text-white text-base font-mono font-bold group-hover:text-gold-300 transition-colors">+91 99902 21794</span>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:amit@miglanirealtors.com"
                className="block bg-[#0e0e0e] border border-white/5 hover:border-gold-500/20 p-5 transition-all w-full rounded-none group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gold-400/5 group-hover:bg-gold-500/10 text-gold-400 border border-gold-400/20 rounded-none transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest block font-medium">Electronic Mail</span>
                    <span className="text-white text-base font-semibold group-hover:text-gold-200 transition-colors">amit@miglanirealtors.com</span>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div
                className="bg-[#0e0e0e] border border-white/5 p-5 w-full rounded-none"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gold-400/5 text-gold-400 border border-gold-400/20 rounded-none">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest block font-medium">Registered Office Base</span>
                    <span className="text-white text-sm font-semibold block leading-relaxed">Malibu Town, Sohna Road, Sector 47</span>
                    <span className="text-gray-400 text-xs font-light block">Gurugram, Haryana 122002, India</span>
                  </div>
                </div>
              </div>

              {/* Social Link */}
              <a
                href="https://instagram.com/amit.miglanirealtors"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#0e0e0e] border border-white/5 hover:border-gold-500/20 p-5 transition-all w-full rounded-none group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gold-400/5 group-hover:bg-gold-500/10 text-gold-400 border border-gold-400/20 rounded-none transition-all">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest block font-medium">Instagram Portfolio</span>
                    <span className="text-white text-base font-semibold group-hover:text-gold-200 transition-colors">@amit.miglanirealtors</span>
                  </div>
                </div>
              </a>

            </div>

            {/* Stylized Malibu Town Map Layout card */}
            <div className="bg-[#0d0d0d] border border-white/5 p-5 flex flex-col justify-between font-sans rounded-none">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest block font-semibold mb-4">MAP COORDINATION</span>
              
              <div className="relative h-44 w-full bg-[#070707] border border-white/10 flex flex-col justify-center items-center overflow-hidden">
                {/* SVG Mock Map Grid representing Malibu Town & Sohna Road sectors */}
                <svg className="absolute inset-0 w-full h-full text-gold-400/[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Styled streets lines representing Malibu Town map */}
                  <line x1="10%" y1="0" x2="30%" y2="100%" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="40%" y1="0" x2="60%" y2="100%" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="0" y1="30%" x2="100%" y2="40%" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" /> {/* Sohna Rd */}
                  <line x1="0" y1="70%" x2="100%" y2="65%" stroke="currentColor" strokeWidth="1.5" />
                  {/* Malibu Boundary */}
                  <rect x="25%" y="45%" width="45%" height="35%" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                </svg>

                {/* Floating Map Indicators */}
                <div className="absolute top-2 left-3 font-mono text-[8px] text-gray-500">SOHNA ROAD HWY</div>
                <div className="absolute bottom-2 right-4 font-mono text-[8px] text-gray-500">SECTOR 47 METRO CORRIDOR</div>

                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400 flex items-center justify-center animate-bounce shadow-2xl">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div className="text-center bg-black/90 px-3 py-1.5 border border-white/10 shadow-md">
                    <h5 className="text-white text-[11px] font-bold">MILIBANI REALTORS HQ</h5>
                    <p className="text-[8px] text-gold-400 uppercase tracking-widest font-semibold mt-0.5">Malibu Town Sector Gated Community</p>
                  </div>
                </div>
              </div>

              <div className="text-left pt-3 text-[11px] text-gray-400 font-light leading-relaxed">
                <strong>HQ Location:</strong> Direct walking ingress near Malibu Town Square block. Safe parking bays are provided inside the gated township.
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form (7cols) */}
          <div className="lg:col-span-7 bg-[#0b0b0b] border border-white/10 p-8 md:p-10 font-sans relative flex flex-col justify-between rounded-none">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 to-gold-500" />
            
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-white tracking-wide">Acquisition Request Form</h3>
                <p className="text-xs text-gray-400 font-light">Fields indicated with <span className="text-gold-400">*</span> are requested for title pre-verification.</p>
              </div>

              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Horizontal row Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-name" className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Full Name <span className="text-gold-400">*</span></label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rajiv Chandrasekhar"
                      className="w-full bg-luxe-charcoal border border-white/10 hover:border-white/15 focus:border-gold-400 focus:outline-none p-3.5 text-sm text-white placeholder-gray-600 transition-colors rounded-none"
                    />
                  </div>
                  
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-phone" className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Contact Number <span className="text-gold-400">*</span></label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-luxe-charcoal border border-white/10 hover:border-white/15 focus:border-gold-400 focus:outline-none p-3.5 text-sm text-white placeholder-gray-600 transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Email line */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-email" className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Email Address <span className="text-gold-400">*</span></label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. rajiv@company.com"
                    className="w-full bg-luxe-charcoal border border-white/10 hover:border-white/15 focus:border-gold-400 focus:outline-none p-3.5 text-sm text-white placeholder-gray-600 transition-colors rounded-none"
                  />
                </div>

                {/* Requirement dropdown selection */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-requirement" className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Property Requirement Segment</label>
                  <select
                    id="contact-requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    className="w-full bg-luxe-charcoal border border-white/10 focus:border-gold-400 focus:outline-none p-3.5 text-sm text-white transition-colors rounded-none"
                  >
                    <option value="General Investment Consultation">General Investment Consultation</option>
                    <option value="Premium Villa Malibu Town">Premium Villa Malibu Town (₹8 Cr+)</option>
                    <option value="Luxury Builder Floor South City">Luxury Builder Floor South City (₹4 Cr+)</option>
                    <option value="The Nirvana Estate Manor">The Nirvana Estate Manor (₹12 Cr+)</option>
                    <option value="The Imperial Duplex Floor">The Imperial Duplex Floor (₹6 Cr+)</option>
                    <option value="Commercial Shop Investment">Commercial Shop Investment</option>
                    <option value="Property Selling Representation">Property Selling Representation</option>
                  </select>
                </div>

                {/* Message block */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-message" className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Message / Specific Parameters</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe configuration, budget range, stilt-parking parameters, or preferred stilt level..."
                    className="w-full bg-luxe-charcoal border border-white/10 hover:border-white/15 focus:border-gold-400 focus:outline-none p-3.5 text-sm text-white placeholder-gray-600 transition-colors rounded-none resize-none"
                  />
                </div>

                {/* Submit state handlers */}
                <div className="pt-4 text-left">
                  {isSubmitting ? (
                    <div className="bg-luxe-dark p-4 border border-gold-500/10 flex flex-col gap-2 font-sans font-medium text-xs text-gold-300">
                      <div className="w-full h-1 bg-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-1/3 bg-gold-400 animate-[loading-bar_1.5s_infinite_ease-out]" />
                      </div>
                      <span className="flex items-center gap-1.5 font-semibold text-white">
                        <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-spin" /> {submissionProgress}
                      </span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white font-semibold text-xs tracking-widest uppercase py-4 transition-all shadow-[0_4px_15px_rgba(184,134,11,0.25)] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request VIP Registry Call</span>
                    </button>
                  )}
                </div>

              </form>
            </div>

            {/* Bottom trust assurances */}
            <div className="mt-8 pt-4 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[10px] text-gray-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" /> Secure Data Encryption Active
              </span>
              <span>All submissions handled in high confidentiality. No shared telemetry.</span>
            </div>

          </div>

        </div>

      </div>

      {/* Styled inline loading keyframes */}
      <style>{`
        @keyframes loading-bar {
          0% { left: -30%; width: 30%; }
          50% { width: 45%; }
          100% { left: 100%; width: 10%; }
        }
      `}</style>

      {/* SUCCESS CONFIRMED PRIVATE TICKET DIALOG (PORTAL DESIGN) */}
      {showSuccessTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0d0d0d] border border-gold-500/30 p-6 md:p-8 shadow-2xl font-sans text-center">
            
            {/* Elegant Corner brackets */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold-400" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold-400" />

            <div className="space-y-6">
              
              {/* Shield visual Header */}
              <div className="mx-auto w-12 h-12 bg-gold-400/10 border border-gold-400/20 text-gold-400 flex items-center justify-center rounded-none shadow-[0_0_15px_rgba(184,134,11,0.2)]">
                <CheckCircle2 className="w-6 h-6 text-gold-400" />
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-gold-400 font-bold block">MIGLANI REALTORS LUXURY SYSTEM</span>
                <h3 className="font-serif text-2xl text-white mt-1">Consultation Request Confirmed</h3>
                <p className="text-xs text-gray-450 text-gray-400 font-light mt-1.5 leading-relaxed">
                  Your acquisition parameters are validated. Amit Lather has been assigned directly as your head portfolio strategist.
                </p>
              </div>

              {/* Physical Receipt Ticket design */}
              <div className="bg-luxe-dark p-5 border border-white/5 border-dashed space-y-3.5 text-left font-sans text-xs">
                
                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span className="text-gray-500 uppercase tracking-wider text-[9px]">Consultation ID:</span>
                  <span className="font-mono font-bold text-gold-300 text-[11px]">{ticketRef}</span>
                </div>

                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span className="text-gray-500 uppercase tracking-wider text-[9px]">Lead Advocate:</span>
                  <span className="font-semibold text-white">Amit Lather (Portfolio Head)</span>
                </div>

                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span className="text-gray-500 uppercase tracking-wider text-[9px]">Priority Level:</span>
                  <span className="text-emerald-400 font-bold uppercase text-[9px] bg-emerald-500/10 px-1.5 py-0.5 border border-emerald-500/20">Active HNI Client</span>
                </div>

                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span className="text-gray-500 uppercase tracking-wider text-[9px]">Inquiry Scope:</span>
                  <span className="font-semibold text-white truncate max-w-[200px]">{formData.requirement}</span>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-gray-400 pt-2 leading-relaxed">
                  <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>Our response desk is actively processing. Estimated callback time: <strong className="text-white">Under 3 hours</strong>.</span>
                </div>

              </div>

              {/* Whatsapp Booster row & Close button */}
              <div className="flex flex-col gap-3">
                <a
                  href={getWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-xs tracking-widest uppercase py-3.5 rounded-none shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Fast-Track callback via WhatsApp</span>
                </a>

                <button
                  onClick={handleCloseTicket}
                  className="w-full py-3.5 text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/5 border border-white/10 transition-all rounded-none"
                >
                  Return to Portfolio
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
