import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Play,
  Building2,
  HeartHandshake,
  Users,
  Briefcase,
  Globe2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import logoImg from '../../assets/unitedmercy.png';
import heroImg from '../../assets/hero.webp';

export const Hero = ({ onOpenJoinModal, onOpenDonateModal }) => {
  const nodes = [
    { label: 'Verified Organizations', icon: Building2, color: '#5EC4F1' },
    { label: 'Donors & Zakat', icon: HeartHandshake, color: '#D4AF37' },
    { label: 'Volunteers & Talent', icon: Users, color: '#6EE7B7' },
    { label: 'Ethical Businesses', icon: Briefcase, color: '#FCD34D' },
    { label: 'Global Muslim Public', icon: Globe2, color: '#C084FC' },
  ];

  return (

    <section className="mt-17 relative min-h-[80vh] md:min-h-[85vh] py-8 overflow-hidden flex items-center justify-center bg-[#151E32] rounded-[30px] sm:rounded-[40px]">
      {/* Full-Bleed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 mix-blend-luminosity  pointer-events-none"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full">

        {/* Left Content Column (Matching Image 1 Composition) */}
        <div className="lg:col-span-7 text-left flex flex-col justify-between space-y-10 max-w-xl">

          {/* Upper Section: Arabic Calligraphy & Intro Paragraph */}
          <div className="space-y-4 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans-clean text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15] max-w-2xl"
            >
              The Global Online Collaboration Platform for the Muslim World
            </motion.h1>

          </div>

          {/* Lower Section: Massive Headline & Pill CTA Button */}
          <div className="space-y-6 ">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-gray-300 font-sans-clean leading-relaxed font-normal opacity-90"
            >
              United Mercy is a global platform connecting five essential forces of the Ummah to align efforts, coordinate resources, and maximize impact for Islamic projects around the world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <button
                id="hero-join-now-btn"
                onClick={() => onOpenJoinModal()}
                className="px-7 py-3.5 rounded-full bg-white text-[#151E32] font-bold text-sm sm:text-base shadow-xl hover:bg-gray-100 hover:scale-[1.03] transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Join United Mercy</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>


      </div>

    </section>

  );
};
