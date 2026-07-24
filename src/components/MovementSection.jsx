import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Building2,
  HeartHandshake,
  Users,
  Briefcase,
  Globe2,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

export const MovementSection = ({ onOpenJoinModal }) => {
  // Mobile Bottom Org Nodes Setup
  const mobOrgs = [
    { id: 'mobA', label: 'Org A', color: '#0284C7', gradId: 'url(#grad-orgA-mob)', xPos: 36, pathD: 'M 36,392 C 36,310 140,265 180,225', icon: Building2 },
    { id: 'mobB', label: 'Org B', color: '#E11D48', gradId: 'url(#grad-orgB-mob)', xPos: 108, pathD: 'M 108,392 C 108,310 155,265 180,225', icon: HeartHandshake },
    { id: 'mobC', label: 'Org C', color: '#059669', gradId: 'url(#grad-orgC-mob)', xPos: 180, pathD: 'M 180,392 C 180,310 180,265 180,225', icon: Users },
    { id: 'mobD', label: 'Org D', color: '#6366F1', gradId: 'url(#grad-orgD-mob)', xPos: 252, pathD: 'M 252,392 C 252,310 205,265 180,225', icon: Briefcase },
    { id: 'mobE', label: 'Org E', color: '#D4AF37', gradId: 'url(#grad-orgE-mob)', xPos: 324, pathD: 'M 324,392 C 324,310 220,265 180,225', icon: Globe2 }
  ];

  // Desktop Left-to-Right Org Nodes Setup
  const orgs = [
    { id: 'orgA', label: 'Org A', color: '#0284C7', gradId: 'url(#grad-orgA)', xPos: 100, yPos: 40, pathD: 'M 155,40 C 260,40 340,160 450,200', icon: Building2 },
    { id: 'orgB', label: 'Org B', color: '#E11D48', gradId: 'url(#grad-orgB)', xPos: 100, yPos: 120, pathD: 'M 155,120 C 260,120 340,180 450,200', icon: HeartHandshake },
    { id: 'orgC', label: 'Org C', color: '#059669', gradId: 'url(#grad-orgC)', xPos: 100, yPos: 200, pathD: 'M 155,200 C 260,200 340,200 450,200', icon: Users },
    { id: 'orgD', label: 'Org D', color: '#6366F1', gradId: 'url(#grad-orgD)', xPos: 100, yPos: 280, pathD: 'M 155,280 C 260,280 340,220 450,200', icon: Briefcase },
    { id: 'orgE', label: 'Org E', color: '#D4AF37', gradId: 'url(#grad-orgE)', xPos: 100, yPos: 360, pathD: 'M 155,360 C 260,360 340,240 450,200', icon: Globe2 }
  ];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-white text-slate-900">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] bg-[#0284C7]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Text (Headline, Copy & Join Now CTA) */}
          <div className="lg:col-span-5 text-left space-y-4 sm:space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151E32] tracking-tight leading-snug lg:leading-tight"
            >
              United Mercy is more than just a platform;{' '}
              <span className="bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#0284C7] bg-clip-text text-transparent">
                it’s a movement to channelise collective, coordinated efforts toward a shared goal for maximum impact.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-600 font-sans-clean leading-relaxed font-normal"
            >
              When we align efforts through one coordinated system, we unlock unprecedented impact for the Ummah.
              Our platform connects organizations, donors, businesses, volunteers, and the Muslim public to maximize collective influence on meaningful Islamic projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2 flex justify-start"
            >
              <button
                id="movement-header-join-now-btn"
                onClick={() => onOpenJoinModal && onOpenJoinModal('Movement')}
                className="px-8 py-3.5 rounded-full bg-[#151E32] text-white font-sans-clean font-bold text-sm sm:text-base shadow-xl hover:bg-[#5EC4F1] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform text-[#ffff]" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Arc Diagram */}
          <div className="lg:col-span-7 w-full">

            {/* MOBILE VIEW (<640px) */}
            <div className="block sm:hidden relative w-full select-none">
              <div className="relative w-full aspect-[360/450]">

                <svg
                  viewBox="0 0 360 450"
                  preserveAspectRatio="xMidYMid meet"
                  className="absolute inset-0 w-full h-full overflow-visible"
                >
                  <defs>
                    <linearGradient id="grad-orgA-mob" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#0284C7" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                    <linearGradient id="grad-orgB-mob" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#E11D48" />
                      <stop offset="100%" stopColor="#FB7185" />
                    </linearGradient>
                    <linearGradient id="grad-orgC-mob" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#34D399" />
                    </linearGradient>
                    <linearGradient id="grad-orgD-mob" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#818CF8" />
                    </linearGradient>
                    <linearGradient id="grad-orgE-mob" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#FBBF24" />
                    </linearGradient>

                    <linearGradient id="grad-unified-mob" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#0284C7" />
                      <stop offset="25%" stopColor="#E11D48" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="75%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>

                    <filter id="glow-mob" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* UNIFIED UPWARD STREAM */}
                  <g>
                    <path
                      d="M 180,225 C 175,170 185,115 180,62"
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="12"
                      strokeOpacity="0.2"
                      filter="url(#glow-mob)"
                    />
                    <path
                      d="M 180,225 C 175,170 185,115 180,62"
                      fill="none"
                      stroke="url(#grad-unified-mob)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <motion.path
                      d="M 180,225 C 175,170 185,115 180,62"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                      strokeDasharray="18 90"
                      strokeLinecap="round"
                      animate={{ strokeDashoffset: [108, -108] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                    />
                  </g>

                  {/* STAGE 3 TOP APEX BADGE */}
                  <g transform="translate(180, 36)">
                    <rect
                      x="-145"
                      y="-22"
                      width="290"
                      height="44"
                      rx="22"
                      fill="#5EC4F1"
                      opacity="0.25"
                      filter="url(#glow-mob)"
                    />
                    <rect
                      x="-145"
                      y="-22"
                      width="290"
                      height="44"
                      rx="22"
                      fill="#5EC4F1"
                      className="shadow-lg"
                    />
                    <text
                      x="0"
                      y="5"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontWeight="bold"
                      letterSpacing="1.2"
                      className="font-sans-clean uppercase pointer-events-none drop-shadow-md"
                    >
                      MAXIMUM IMPACT FOR THE UMMAH
                    </text>
                  </g>

                  {/* 5 UPWARD BEZIER PIPELINES */}
                  {mobOrgs.map((org) => (
                    <g key={org.id}>
                      <path
                        d={org.pathD}
                        fill="none"
                        stroke={org.color}
                        strokeWidth="8"
                        strokeOpacity="0.12"
                        filter="url(#glow-mob)"
                      />
                      <path
                        d={org.pathD}
                        fill="none"
                        stroke={org.gradId}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <motion.path
                        d={org.pathD}
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        strokeDasharray="15 90"
                        strokeLinecap="round"
                        animate={{ strokeDashoffset: [105, -105] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                      />
                    </g>
                  ))}

                  {/* STAGE 1 BOTTOM ORG BADGES */}
                  {mobOrgs.map((org) => (
                    <g key={`mob-badge-${org.id}`} transform={`translate(${org.xPos}, 408)`}>
                      <rect
                        x="-28"
                        y="-16"
                        width="56"
                        height="32"
                        rx="10"
                        fill="#FFFFFF"
                        stroke="#CBD5E1"
                        strokeWidth="1.5"
                        className="shadow-sm"
                      />
                      <circle cx="-16" cy="0" r="3.5" fill={org.color} />
                      <text
                        x="5"
                        y="3.5"
                        textAnchor="middle"
                        fill="#1E293B"
                        fontSize="9.5"
                        fontWeight="bold"
                        className="font-sans-clean pointer-events-none"
                      >
                        {org.label}
                      </text>
                    </g>
                  ))}

                  {/* STAGE 2 CENTER ENGINE HUB */}
                  <g transform="translate(180, 225)">
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="28"
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                    />
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="23"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.2, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r="18"
                      fill="#FFFFFF"
                      stroke="#0284C7"
                      strokeWidth="3"
                      className="shadow-md"
                    />
                  </g>

                </svg>

                {/* STAGE 2 ENGINE CENTER LABEL */}
                <div className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-slate-300 shadow-sm font-mono text-[9px] font-bold text-slate-800 uppercase tracking-wider whitespace-nowrap">
                    Channelized Engine
                  </span>
                </div>

              </div>
            </div>

            {/* DESKTOP / TABLET VIEW (>=640px) */}
            <div className="hidden sm:block relative w-full select-none">
              <div className="relative w-full aspect-[900/400]">

                <svg
                  viewBox="0 0 900 400"
                  preserveAspectRatio="xMidYMid meet"
                  className="absolute inset-0 w-full h-full overflow-visible"
                >
                  <defs>
                    <linearGradient id="grad-orgA" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0284C7" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                    <linearGradient id="grad-orgB" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E11D48" />
                      <stop offset="100%" stopColor="#FB7185" />
                    </linearGradient>
                    <linearGradient id="grad-orgC" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#34D399" />
                    </linearGradient>
                    <linearGradient id="grad-orgD" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#818CF8" />
                    </linearGradient>
                    <linearGradient id="grad-orgE" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#FBBF24" />
                    </linearGradient>

                    <linearGradient id="grad-unified-lr" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0284C7" />
                      <stop offset="25%" stopColor="#E11D48" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="75%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>

                    <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* 5 LEFT-TO-RIGHT BEZIER PIPELINES */}
                  {orgs.map((org) => (
                    <g key={org.id}>
                      <path
                        d={org.pathD}
                        fill="none"
                        stroke={org.color}
                        strokeWidth="12"
                        strokeOpacity="0.15"
                        filter="url(#glow-filter)"
                      />
                      <path
                        d={org.pathD}
                        fill="none"
                        stroke={org.gradId}
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <motion.path
                        d={org.pathD}
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="3.5"
                        strokeDasharray="20 110"
                        strokeLinecap="round"
                        animate={{ strokeDashoffset: [130, -130] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      />
                    </g>
                  ))}

                  {/* UNIFIED RIGHTWARD STREAM */}
                  <g>
                    <path
                      d="M 450,200 C 495,195 550,205 595,200"
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="16"
                      strokeOpacity="0.22"
                      filter="url(#glow-filter)"
                    />
                    <path
                      d="M 450,200 C 495,195 550,205 595,200"
                      fill="none"
                      stroke="url(#grad-unified-lr)"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <motion.path
                      d="M 450,200 C 495,195 550,205 595,200"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      strokeDasharray="22 100"
                      strokeLinecap="round"
                      animate={{ strokeDashoffset: [122, -122] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                    />
                  </g>

                  {/* STAGE 1 LEFT ORG BADGES */}
                  {orgs.map((org) => (
                    <g key={`badge-${org.id}`} transform={`translate(${org.xPos}, ${org.yPos})`}>
                      <rect
                        x="-55"
                        y="-18"
                        width="110"
                        height="36"
                        rx="14"
                        fill="#FFFFFF"
                        stroke="#CBD5E1"
                        strokeWidth="1.8"
                        className="shadow-md"
                      />
                      <circle cx="-30" cy="0" r="6" fill={org.color} />
                      <text
                        x="8"
                        y="5"
                        textAnchor="middle"
                        fill="#1E293B"
                        fontSize="13"
                        fontWeight="bold"
                        className="font-sans-clean pointer-events-none"
                      >
                        {org.label}
                      </text>
                    </g>
                  ))}

                  {/* STAGE 2 CENTER HUB */}
                  <g transform="translate(450, 200)">
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="38"
                      fill="none"
                      stroke="#0284C7"
                      strokeWidth="1.8"
                      strokeDasharray="6 6"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                    />
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="31"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="1.8"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.2, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r="24"
                      fill="#FFFFFF"
                      stroke="#0284C7"
                      strokeWidth="3.5"
                      className="shadow-xl"
                    />
                    <circle cx="0" cy="0" r="10" fill="#0284C7" />
                  </g>

                  {/* STAGE 3 RIGHT APEX: MAXIMUM IMPACT BADGE */}
                  <g transform="translate(750, 200)">
                    <rect
                      x="-155"
                      y="-26"
                      width="310"
                      height="52"
                      rx="26"
                      fill="#5EC4F1"
                      opacity="0.25"
                      filter="url(#glow-filter)"
                    />
                    <rect
                      x="-155"
                      y="-26"
                      width="310"
                      height="52"
                      rx="26"
                      fill="#5EC4F1"
                      className="shadow-xl"
                    />
                    <text
                      x="0"
                      y="6"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="13"
                      fontWeight="bold"
                      letterSpacing="1.5"
                      className="font-sans-clean uppercase pointer-events-none drop-shadow-md"
                    >
                      MAXIMUM IMPACT FOR THE UMMAH
                    </text>
                  </g>

                </svg>

                {/* STAGE 2 ENGINE CENTER LABEL */}
                <div className="absolute top-[64%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
                  <span className="px-3.5 py-1 rounded-full bg-white/95 border border-slate-300 shadow-md font-mono text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider whitespace-nowrap">
                    Channelized Engine
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
