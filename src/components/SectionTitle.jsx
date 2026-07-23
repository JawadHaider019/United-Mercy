import React from 'react';
import { motion } from 'framer-motion';



export const SectionTitle = ({
  badge,
  title,
  subtitle,
  centered = true,
  lightText = false,
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} mb-14 sm:mb-16`}>
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border shadow-sm ${
          lightText 
            ? 'bg-[#5EC4F1]/15 border-[#5EC4F1]/30 text-[#5EC4F1]' 
            : 'bg-[#0284C7]/10 border-[#0284C7]/20 text-[#0284C7]'
        }`}
      >
        <span className={`w-1.5 h-1.5 rounded-full animate-ping ${lightText ? 'bg-[#5EC4F1]' : 'bg-[#0284C7]'}`} />
        {badge}
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] ${
          lightText ? 'text-white' : 'text-[#151E32]'
        }`}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg font-sans-clean leading-relaxed font-normal ${
            lightText ? 'text-gray-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

