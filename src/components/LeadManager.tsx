import React, { useState, useEffect } from "react";
import { FolderHeart, Trash2, X, RefreshCw, Layers, ShieldCheck, Mail, Phone, Calendar } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  requirement: string;
  message: string;
  ticketRef: string;
  submittedAt: string;
}

export default function LeadManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);

  const loadLeads = () => {
    try {
      const stored = localStorage.getItem("miglani_leads");
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        setLeads([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  // Periodic polling when open
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen) {
      interval = setInterval(loadLeads, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen]);

  const handleDeleteAll = () => {
    if (window.confirm("Clear all recorded HNI lead data for this test session?")) {
      localStorage.removeItem("miglani_leads");
      setLeads([]);
    }
  };

  const handleCreateMockLead = () => {
    const mockLead: Lead = {
      id: Date.now().toString(),
      name: "Sanjay Singhania (HNI Mock Client)",
      phone: "+91 98110 54321",
      email: "sanjay@singhania-industries.com",
      requirement: "The Nirvana Estate Manor - ₹12.50 Cr",
      message: "Looking for an immediate stilt + 4 floor inspection. Need solar array verification and parking slots details.",
      ticketRef: `MLG-${Math.floor(100000 + Math.random() * 900000)}`,
      submittedAt: new Date().toISOString()
    };

    const currentLeads = [mockLead, ...leads];
    localStorage.setItem("miglani_leads", JSON.stringify(currentLeads));
    setLeads(currentLeads);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 left-6 z-40 font-sans">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 bg-black border border-gold-400/40 text-gold-400 hover:text-white px-4 py-2.5 shadow-2xl transition-all duration-300 hover:bg-gold-500 hover:border-gold-500 rounded-none group cursor-pointer"
        >
          <FolderHeart className="w-4 h-4 text-gold-400 group-hover:text-white animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest">Agent lead Desk</span>
          {leads.length > 0 && (
            <span className="bg-gold-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center font-mono">
              {leads.length}
            </span>
          )}
        </button>
      </div>

      {/* Slide-out Sidebar Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex justify-end font-sans">
          <div className="w-full max-w-lg bg-[#0e0e0e] border-l border-white/10 h-full p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
            
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 bg-gold-400/5 text-gold-400 border border-gold-400/20">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-serif font-bold tracking-wide">Miglani Agent Console</h5>
                    <p className="text-[9px] text-gold-400 uppercase tracking-widest font-semibold">Lead-Generation Database (Local)</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close leads console"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Explainer / Admin utilities */}
              <div className="bg-[#070707] border border-white/5 p-4 mb-6 space-y-2.5">
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  This console tracks leads captured by your contact inquiry form. All records are cached inside client-side <strong>localStorage</strong> to guarantee privacy.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    onClick={handleCreateMockLead}
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[10px] uppercase tracking-wider px-3 py-1.5 font-medium transition-all"
                  >
                    + Generate Test Lead
                  </button>
                  {leads.length > 0 && (
                    <button
                      onClick={handleDeleteAll}
                      className="bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/20 hover:border-red-500 text-[10px] uppercase tracking-wider px-3 py-1.5 font-medium transition-all inline-flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Clear Inbox
                    </button>
                  )}
                  <button
                    onClick={loadLeads}
                    className="bg-white/5 hover:bg-white/10 text-gray-300 text-[10px] uppercase tracking-wider px-3 py-1.5 font-medium transition-all inline-flex items-center gap-1 ml-auto"
                  >
                    <RefreshCw className="w-3 h-3" /> Sync
                  </button>
                </div>
              </div>

              {/* Leads Feed List section */}
              <div className="space-y-4">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">
                  Inbound Client Records ({leads.length})
                </span>

                {leads.length === 0 ? (
                  <div className="border border-white/5 p-12 text-center text-gray-500 text-xs font-light">
                    <p>No client inquiries captured yet.</p>
                    <p className="text-[10px] text-gold-400/60 mt-1">Submit the contact form in Section 9 to populate listings.</p>
                  </div>
                ) : (
                  <div className="space-y-4 overflow-y-auto max-h-[55vh] pr-1">
                    {leads.map((lead) => (
                      <div
                        key={lead.id}
                        className="bg-black/60 border border-white/5 hover:border-gold-500/15 p-4 space-y-3 relative rounded-none"
                      >
                        {/* Reference tag */}
                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                          <span className="text-[11px] font-bold text-white font-serif">{lead.name}</span>
                          <span className="font-mono text-[9px] text-gold-400 font-bold uppercase bg-gold-400/5 border border-gold-400/10 px-1.5 py-0.5">
                            {lead.ticketRef}
                          </span>
                        </div>

                        {/* Customer Detail Params */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-300 font-light">
                          <a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 hover:text-gold-300">
                            <Phone className="w-3.5 h-3.5 text-gold-400" />
                            <span>{lead.phone}</span>
                          </a>
                          <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 hover:text-gold-300 truncate">
                            <Mail className="w-3.5 h-3.5 text-gold-400" />
                            <span className="truncate">{lead.email}</span>
                          </a>
                        </div>

                        {/* Requirement Field */}
                        <div className="bg-white/5 p-2 border border-white/5 text-[11px] text-gray-400 flex items-start gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gold-300">Scope:</span>{" "}
                            {lead.requirement}
                          </div>
                        </div>

                        {/* Message field */}
                        {lead.message && (
                          <div className="text-[11px] text-gray-400 leading-relaxed italic border-l border-white/10 pl-2">
                            "{lead.message}"
                          </div>
                        )}

                        <div className="text-[9px] text-gray-500 font-mono text-right">
                          Submitted: {new Date(lead.submittedAt).toLocaleTimeString()} {new Date(lead.submittedAt).toLocaleDateString()}
                        </div>

                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Footer Console bar */}
            <div className="border-t border-white/5 pt-4 text-[10px] text-gray-500 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Sandboxed Lead-Gen Model
              </span>
              <span>Miglani Realtors</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
