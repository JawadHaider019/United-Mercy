import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURES_DATA } from '../data/mockData';
import { 
  Network, 
  ShieldCheck, 
  Users, 
  Building2, 
  Coins, 
  MessageSquareShare, 
  Building, 
  Globe, 
  Sparkles,
  ArrowUpRight,
  Filter
} from 'lucide-react';



export const WhyUnitedMercy = ({ onSelectFeature }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Organizations', 'Donors', 'Volunteers', 'Businesses', 'Community', 'Network'];

  const filteredFeatures = activeFilter === 'All' 
    ? FEATURES_DATA 
    : FEATURES_DATA.filter(f => f.tag.toLowerCase() === activeFilter.toLowerCase());

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Network': return Network;
      case 'ShieldCheck': return ShieldCheck;
      case 'Users': return Users;
      case 'Building2': return Building2;
      case 'Coins': return Coins;
      case 'MessageSquareShare': return MessageSquareShare;
      case 'Building': return Building;
      case 'Globe': return Globe;
      default: return Sparkles;
    }
  };

  return (
    <section id="features" className="py-24 bg-[#1D273E] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#5EC4F1]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151E32] border border-[#5EC4F1]/25">
            <Sparkles className="w-4 h-4 text-[#5EC4F1]" />
            <span className="text-xs font-mono font-semibold text-[#5EC4F1] uppercase tracking-wider">
              Platform Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white max-w-3xl mx-auto">
            Engineered for <span className="text-sky-gradient">Maximum Global Impact</span>.
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto font-sans-clean font-light">
            Every feature is purpose-built to reduce operational friction, verify humanitarian authenticity, and accelerate capital flow across borders.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeFilter === cat
                  ? 'bg-[#5EC4F1] text-[#1D273E] shadow-lg shadow-[#5EC4F1]/25 scale-105'
                  : 'bg-[#151E32] text-gray-300 hover:text-white hover:bg-[#23304B] border border-[#5EC4F1]/15'
              }`}
            >
              {cat === 'All' && <Filter className="w-3.5 h-3.5" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredFeatures.map((feature) => {
              const IconComponent = getIcon(feature.iconName);
              return (
                <motion.div
                  key={feature.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onSelectFeature(feature.title)}
                  className="p-6 rounded-3xl bg-glass-card bg-glass-card-hover group cursor-pointer flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle Card Accent Glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#5EC4F1]/10 rounded-full blur-2xl group-hover:bg-[#5EC4F1]/25 transition-colors" />

                  <div>
                    {/* Top Tag & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#151E32] text-[#5EC4F1] border border-[#5EC4F1]/20">
                        {feature.badge || feature.tag}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#5EC4F1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-[#151E32] border border-[#5EC4F1]/20 flex items-center justify-center text-[#5EC4F1] group-hover:bg-[#5EC4F1] group-hover:text-[#1D273E] group-hover:scale-110 transition-all mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif-luxury font-bold text-white group-hover:text-[#5EC4F1] transition-colors mb-2">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans-clean font-light">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#5EC4F1]/10 text-[11px] text-[#5EC4F1] font-semibold flex items-center gap-1 group-hover:underline">
                    Explore Capability
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
