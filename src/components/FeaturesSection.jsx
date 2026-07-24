import React, { useState, useRef, useEffect } from 'react';
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
      textClass: 'text-[#EF4444]',
      badgeStyle: 'bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/30',
    },
  ];

  // Tripled array so wrapping forward/backward is seamlessly smooth
  const SLIDER_FEATURES = [...KEY_FEATURES, ...KEY_FEATURES, ...KEY_FEATURES];

  const trackRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isDraggingRef = useRef(false);

  // Auto-scroll loop using requestAnimationFrame for ultra-smooth 60fps movement
  useEffect(() => {
    let animationFrameId;
    const speed = 0.8; // px per frame

    const autoScroll = () => {
      if (trackRef.current && !isMouseDown && !isHovered) {
        trackRef.current.scrollLeft += speed;

        const maxScroll = trackRef.current.scrollWidth / 3;
        if (trackRef.current.scrollLeft >= maxScroll * 2) {
          trackRef.current.scrollLeft -= maxScroll;
        } else if (trackRef.current.scrollLeft <= 0) {
          trackRef.current.scrollLeft += maxScroll;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMouseDown, isHovered]);

  // Initial scroll positioning to center set
  useEffect(() => {
    if (trackRef.current) {
      const singleSetWidth = trackRef.current.scrollWidth / 3;
      trackRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    isDraggingRef.current = false;
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 5) {
      isDraggingRef.current = true;
    }
    trackRef.current.scrollLeft = scrollLeftRef.current - walk;

    // Boundary wrapping while dragging
    const singleSetWidth = trackRef.current.scrollWidth / 3;
    if (trackRef.current.scrollLeft >= singleSetWidth * 2) {
      trackRef.current.scrollLeft -= singleSetWidth;
      startXRef.current = x;
      scrollLeftRef.current = trackRef.current.scrollLeft;
    } else if (trackRef.current.scrollLeft <= 0) {
      trackRef.current.scrollLeft += singleSetWidth;
      startXRef.current = x;
      scrollLeftRef.current = trackRef.current.scrollLeft;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const handleCardClick = (featureTitle) => {
    if (isDraggingRef.current) return;
    if (onOpenJoinModal) {
      onOpenJoinModal(featureTitle);
    }
  };

  return (
    <section id="key-features" className="py-16 relative overflow-hidden bg-slate-50/80 border-t border-b border-slate-200">

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

      </div>

      {/* Endless Draggable Loop Slider Container */}
      <div className="relative z-10 mt-4 overflow-hidden w-full ">
        {/* Subtle Fade Overlays at Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-slate-50/90 via-slate-50/50 to-transparent z-20 pointer-events-none" />

        {/* Draggable Track */}
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={() => {
            handleMouseUpOrLeave();
            setIsHovered(false);
          }}
          onMouseEnter={() => setIsHovered(true)}
          className={`flex gap-6 py-4 sm:gap-8 px-4 sm:px-6 overflow-x-auto scrollbar-none select-none ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          style={{ scrollBehavior: 'auto' }}
        >
          {SLIDER_FEATURES.map((feature, index) => {
            const FeatureIcon = feature.icon;

            return (
              <div
                key={`${feature.id}-${index}`}
                onClick={() => handleCardClick(feature.title)}
                className="w-[290px] sm:w-[350px] md:w-[380px] shrink-0 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
