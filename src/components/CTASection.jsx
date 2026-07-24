import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../assets/hero.webp';

export const CTASection = ({ onOpenJoinModal }) => {
  return (
    <section className="py-8 relative overflow-hidden bg-[#151E32]">

      {/* Full-Bleed Background Image (Same as Hero) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">

        {/* Callout Heading */}
        <div className="space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-snug"
          >
            "The Ummah is not powerless. <br className="hidden sm:inline" />
            <span className="text-sky-gradient italic font-normal">It’s just disconnected."</span>
          </motion.h2>

        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-sans-clean font-normal leading-relaxed"
        >
          Whether you're an individual looking to volunteer, a business wanting to give back, or an organization seeking to collaborate, United Mercy is here to help you make a difference. Together, we can achieve more.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex justify-center pt-2"
        >
          <button
            id="cta-join-now-main-btn"
            onClick={() => onOpenJoinModal && onOpenJoinModal()}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5EC4F1] to-[#3DAADA] text-[#1D273E] font-bold text-base shadow-xl shadow-[#5EC4F1]/25 hover:shadow-[#5EC4F1]/45 hover:scale-105 transition-all flex items-center gap-2.5 group cursor-pointer"
          >
            <span>Join Us Today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
