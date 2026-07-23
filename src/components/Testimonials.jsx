import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Quote, Star, ShieldCheck } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#151E32] relative overflow-hidden border-t border-[#5EC4F1]/15">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#5EC4F1]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D273E] border border-[#5EC4F1]/25">
            <ShieldCheck className="w-4 h-4 text-[#5EC4F1]" />
            <span className="text-xs font-mono font-semibold text-[#5EC4F1] uppercase tracking-wider">
              Institutional Endorsements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white max-w-3xl mx-auto">
            Trusted by <span className="text-sky-gradient">Global Leadership</span>.
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto font-sans-clean font-light">
            Hear from General Directors, Chief Medical Officers, and CSR Trustees leading major humanitarian initiatives across the world.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#1D273E] border border-[#5EC4F1]/25 hover:border-[#5EC4F1]/50 transition-all shadow-xl flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-[#5EC4F1]/20 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#5EC4F1]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#5EC4F1] text-[#5EC4F1]" />
                  ))}
                </div>

                <p className="text-sm text-gray-200 leading-relaxed font-sans-clean font-light italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-[#5EC4F1]/15 flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#5EC4F1]"
                />
                <div>
                  <div className="font-serif-luxury font-bold text-sm text-white group-hover:text-[#5EC4F1] transition-colors">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#5EC4F1] font-mono">
                    {t.role} • {t.organization}
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono">
                    {t.location}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
