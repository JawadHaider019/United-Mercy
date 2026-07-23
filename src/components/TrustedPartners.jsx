import React from 'react';
import { PARTNERS_DATA } from '../data/mockData';
import { ShieldCheck, Award } from 'lucide-react';

export const TrustedPartners = () => {
  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Heading Section - 30% Width */}
          <div className="w-full md:w-[30%] shrink-0 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Ecosystem</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury font-bold text-[#151E32]">
              Our Trusted Partners
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Collaborating with global organizations to drive verified humanitarian impact worldwide.
            </p>
          </div>

          {/* Right Slider Section - 70% Width */}
          <div className="w-full md:w-[70%] overflow-hidden relative py-2">
            {/* Fade Gradients at Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Ticker / Scrolling Container */}
            <div className="flex w-full overflow-hidden">
              <div className="flex shrink-0 animate-[scroll_35s_linear_infinite] items-center gap-4 sm:gap-6">
                {PARTNERS_DATA.concat(PARTNERS_DATA, PARTNERS_DATA).map((partner, index) => (
                  <div
                    key={`${partner.id}-${index}`}
                    className="flex flex-col items-start px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 hover:border-[#0284C7] transition-all duration-300 group hover:scale-105 cursor-pointer shadow-sm hover:shadow-md shrink-0 min-w-[170px]"
                  >
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#0284C7] group-hover:text-[#151E32] transition-colors shrink-0" />
                      <span className="font-serif-luxury font-bold text-xs sm:text-sm text-slate-800 group-hover:text-[#151E32] transition-colors tracking-wider whitespace-nowrap">
                        {partner.logoText}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 group-hover:text-[#0284C7] transition-colors mt-0.5 whitespace-nowrap">
                      {partner.category} • {partner.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

