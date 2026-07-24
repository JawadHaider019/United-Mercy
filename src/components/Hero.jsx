import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  Globe2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import heroImg from '../../assets/hero.webp';

export const Hero = ({ onOpenJoinModal, onOpenDonateModal }) => {
  return (
    <section className="mt-17 relative min-h-[50vh] sm:min-h-[80vh] py-16 overflow-hidden flex items-center justify-center bg-[#151E32] rounded-t-[30px] sm:rounded-t-[40px]">
      {/* Ambient Radial Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#5EC4F1]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Full-Bleed Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#151E32]/50 via-[#151E32]/20 to-[#151E32]/50 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full text-center flex flex-col items-center justify-center space-y-8">

        {/* Top Feature Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5EC4F1]/10 border border-[#5EC4F1]/30 text-[#5EC4F1] text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg shadow-[#5EC4F1]/5"
        >

          <span>Empowering The Global Ummah</span>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans-clean text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
        >
          The Global Online <br className="hidden sm:inline" />
          <span className="text-sky-gradient">Collaboration Platform</span> <br className="hidden sm:inline" />
          for the Muslim World
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-300 font-sans-clean leading-relaxed font-normal opacity-90 max-w-2xl mx-auto"
        >
          United Mercy connects five essential forces of the Ummah to align efforts, coordinate resources, and maximize impact for Islamic projects around the world.
        </motion.p>

        {/* Action Buttons & Trust Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8 flex flex-col items-center w-full"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              id="hero-join-now-btn"
              onClick={() => onOpenJoinModal && onOpenJoinModal()}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5EC4F1] to-[#3DAADA] text-[#151E32] font-bold text-base shadow-xl shadow-[#5EC4F1]/20 hover:shadow-[#5EC4F1]/40 hover:scale-[1.03] transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Join United Mercy</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#how-it-works"
              className="px-7 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-semibold text-base transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <span>See How It Works</span>
            </a>
          </div>

          {/* Centered Trust Badges Bar */}
          {/* <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-slate-700/50 text-xs sm:text-sm text-gray-400 font-medium w-full max-w-xl">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#5EC4F1]" />
              <span>100% Transparent</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#22C55E]" />
              <span>Verified Islamic Orgs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-[#C084FC]" />
              <span>Global Ummah Network</span>
            </div>
          </div> */}

        </motion.div>

      </div>

    </section>
  );
};
