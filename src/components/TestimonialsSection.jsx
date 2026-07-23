import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Quote, MapPin, Building2, Star } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      
      {/* Soft Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0284C7]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionTitle 
          badge="Voices of the Ummah"
          title="Endorsed by Global Humanitarian Leaders"
          subtitle="Discover how directors, CSR executives, and medical coordinators rely on United Mercy for transparent global collaboration."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-[#0284C7] transition-all flex flex-col justify-between relative group shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-[#0284C7]/15 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#D97706]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 font-sans-clean leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0284C7]/30" 
                />
                <div>
                  <h4 className="font-serif-luxury font-bold text-[#151E32] text-base group-hover:text-[#0284C7] transition-colors">
                    {t.author}
                  </h4>
                  <div className="text-xs text-[#0284C7] font-semibold">
                    {t.role}, {t.organization}
                  </div>
                  <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{t.location}</span>
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
