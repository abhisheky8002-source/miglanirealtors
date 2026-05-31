import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Properties from "./components/Properties";
import WhyChooseUs from "./components/WhyChooseUs";
import Areas from "./components/Areas";
import Testimonials from "./components/Testimonials";
import ConsultationCTA from "./components/ConsultationCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LeadManager from "./components/LeadManager";

export default function App() {
  
  // High-performance intersection observer for luxury on-scroll fade reveals
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-section");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Optionally unobserve after revealing once for smooth static look
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before entry
      }
    );

    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-luxe-dark text-gray-100 selection:bg-gold-500 selection:text-white font-sans scroll-smooth antialiased">
      
      {/* Sticky transparent header anchor */}
      <Navbar />

      <main className="relative">
        
        {/* Section 1: Hero presentation segment */}
        <Hero />

        {/* Section 2: Personal brand biography wrapper */}
        <div className="reveal-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <About />
        </div>

        {/* Section 3: Premium core consultancy divisions */}
        <div className="reveal-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <Services />
        </div>

        {/* Section 4: Property showcase & listing portal */}
        <div className="reveal-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <Properties />
        </div>

        {/* Section 5: Trust guarantees and bento grid */}
        <div className="reveal-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <WhyChooseUs />
        </div>

        {/* Section 6: Specific sector territory profiling */}
        <div className="reveal-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <Areas />
        </div>

        {/* Section 7: Live auto-scrolling testimonials block */}
        <div className="reveal-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <Testimonials />
        </div>

        {/* Section 8: Immediate call/schedule action parameter */}
        <div className="reveal-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <ConsultationCTA />
        </div>

        {/* Section 9: Discrete lead form & locale blueprint map */}
        <div className="reveal-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <Contact />
        </div>

      </main>

      {/* Section 10: Luxury minimal footer */}
      <Footer />

      {/* Auxiliary: Back-database Auditor lead workspace console */}
      <LeadManager />

    </div>
  );
}
