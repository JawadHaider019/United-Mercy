import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../assets/hero.webp';

export const CTASection = ({ onOpenJoinModal }) => {
  return (
    <section className="py-16 h-[75vh] relative overflow-hidden bg-[#151E32]">

      {/* Full-Bleed Background Image (Same as Hero) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 "
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10 sm:space-y-12">

        {/* Massive Callout Heading */}
        <div className="space-y-6 pt-4">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]"
          >
            "The Ummah is not powerless. <br />
            <span className="text-sky-gradient italic font-normal">It’s just disconnected."</span>
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl sm:text-2xl font-serif-luxury text-[#5EC4F1] font-semibold"
          >
            Join now and be the connection.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-sans-clean font-normal leading-relaxed"
          >
            Whether you're an individual looking to volunteer, a business wanting to give back, or an organization seeking to collaborate, United Mercy is here to help you make a difference. Together, we can achieve more. Join us today and be part of a community that thrives on unity, compassion, and collective action.
          </motion.p>
        </div>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            id="cta-join-now-main-btn"
            onClick={() => onOpenJoinModal && onOpenJoinModal()}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-[#5EC4F1] to-[#3DAADA] text-[#1D273E] font-bold text-lg shadow-2xl shadow-[#5EC4F1]/30 hover:shadow-[#5EC4F1]/50 hover:scale-105 transition-all flex items-center gap-3 group cursor-pointer"
          >
            <span>Join Us Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
