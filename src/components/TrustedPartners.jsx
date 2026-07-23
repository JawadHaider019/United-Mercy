import React from 'react';
import { PARTNERS_DATA } from '../data/mockData';
import { ShieldCheck, Award } from 'lucide-react';

export const TrustedPartners = () => {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#151E32] flex items-center justify-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#0284C7]" />
          <span>Our Trusted Partners</span>
        </h2>
      </div>

      {/* Ticker / Scrolling Container */}
      <div className="flex w-full overflow-hidden mask-gradient-x">
        <div className="flex shrink-0 animate-[scroll_35s_linear_infinite] items-center gap-6 sm:gap-10">
          {PARTNERS_DATA.concat(PARTNERS_DATA).map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex flex-col items-start px-5 py-3 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0284C7] transition-all duration-300 group hover:scale-105 cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0284C7] group-hover:text-[#151E32] transition-colors" />
                <span className="font-serif-luxury font-bold text-sm text-slate-800 group-hover:text-[#151E32] transition-colors tracking-wider">
                  {partner.logoText}
                </span>
              </div>
              <div className="text-[10px] text-slate-500 group-hover:text-[#0284C7] transition-colors mt-0.5">
                {partner.category} • {partner.location}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
