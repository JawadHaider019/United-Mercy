import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { 
  Users, 
  Tag, 
  UserCheck, 
  Radio, 
  Sparkles, 
  Coins,
  ArrowRight
} from 'lucide-react';

export const FeaturesSection = ({ onOpenJoinModal }) => {
  const KEY_FEATURES = [
    {
      id: 'collaboration',
      title: 'Collaboration Between Islamic Organizations',
      description: 'Organizations connect, support each other, and join forces on shared campaigns',
      icon: Users,
      badge: 'Organizations',
      color: '#22C55E',
      bgLight: 'bg-[#22C55E]/10',
      borderHover: 'hover:border-[#22C55E]',
      textClass: 'text-[#22C55E]',
      badgeStyle: 'bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30',
    },
    {
      id: 'businesses',
      title: 'Discounted Products and Services from Businesses',
      description: 'Muslim businesses and service providers can offer free or discounted services directly to campaign needs.',
      icon: Tag,
      badge: 'Businesses',
      color: '#EAB308',
      bgLight: 'bg-[#EAB308]/10',
      borderHover: 'hover:border-[#EAB308]',
      textClass: 'text-[#EAB308]',
      badgeStyle: 'bg-[#EAB308]/15 text-[#D97706] border-[#EAB308]/30',
    },
    {
      id: 'volunteers',
      title: 'Volunteer Matching',
      description: 'Volunteers discovers causes that need their time and skills locally or remotely.',
      icon: UserCheck,
      badge: 'Volunteers',
      color: '#3B82F6',
      bgLight: 'bg-[#3B82F6]/10',
      borderHover: 'hover:border-[#3B82F6]',
      textClass: 'text-[#3B82F6]',
      badgeStyle: 'bg-[#3B82F6]/15 text-[#3B82F6] border-[#3B82F6]/30',
    },
    {
      id: 'feed',
      title: 'Ummah Feed and Community Updates',
      description: 'A live community stream to share updates, raise awareness, and stay connected.',
      icon: Radio,
      badge: 'Community',
      color: '#0284C7',
      bgLight: 'bg-[#0284C7]/10',
      borderHover: 'hover:border-[#0284C7]',
      textClass: 'text-[#0284C7]',
      badgeStyle: 'bg-[#0284C7]/15 text-[#0284C7] border-[#0284C7]/30',
    },
    {
      id: 'campaigns',
      title: 'Create Campaigns',
      description: 'Islamic organizations list transparent, real-world projects and needs, visible to the global Ummah',
      icon: Sparkles,
      badge: 'Campaigns',
      color: '#A855F7',
      bgLight: 'bg-[#A855F7]/10',
      borderHover: 'hover:border-[#A855F7]',
      textClass: 'text-[#A855F7]',
      badgeStyle: 'bg-[#A855F7]/15 text-[#A855F7] border-[#A855F7]/30',
    },
    {
      id: 'donations',
      title: 'Direct Donations',
      description: 'Donors contribute to campaigns and organisations using external links or find banking details',
      icon: Coins,
      badge: 'Donations',
      color: '#EF4444',
      bgLight: 'bg-[#EF4444]/10',
      borderHover: 'hover:border-[#EF4444]',
      textClass: 'text-[#EF4444]',
      badgeStyle: 'bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/30',
    },
  ];

  return (
    <section id="key-features" className="py-20 sm:py-24 relative overflow-hidden bg-slate-50/80 border-t border-b border-slate-200">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#5EC4F1]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <SectionTitle 
          badge="Platform Capabilities"
          title="Key Features of United Mercy"
          subtitle="Connecting organizations, donors, businesses, volunteers, and the global Ummah through unified digital infrastructure."
        />

        {/* 6 Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {KEY_FEATURES.map((feature, index) => {
            const FeatureIcon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => onOpenJoinModal && onOpenJoinModal(feature.title)}
                className={`p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer ${feature.borderHover}`}
              >
                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl ${feature.bgLight} ${feature.textClass} group-hover:scale-110 transition-transform duration-300`}>
                      <FeatureIcon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${feature.badgeStyle}`}>
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#151E32] group-hover:text-[#0284C7] transition-colors mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans-clean leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Action Arrow */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#0284C7] transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
