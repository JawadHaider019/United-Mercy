import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { BookOpen, AlertTriangle, Sparkles, ShieldCheck } from 'lucide-react';
import Icon from '../../assets/icon.png';

const STAKEHOLDERS = [
  {
    id: 'orgs',
    title: 'Islamic Organizations',
    subtitle: 'Mosques, charities & institutions',
    color: '#059669', // Emerald Green
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-500',
    textLight: 'text-emerald-700',
    glowColor: 'rgba(5, 150, 105, 0.4)',
    role: 'Mobilizing institutional resources, zakat distribution, and grassroots community programs.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3" />
        <path d="M12 6c-2.5 0-4 2.5-4 5h8c0-2.5-1.5-5-4-5z" />
        <path d="M4 21V11" />
        <path d="M20 21V11" />
        <path d="M3 21h18" />
        <path d="M8 21v-7a4 4 0 0 1 8 0v7" />
        <path d="M4 11c0-1.5 1-2.5 2-2.5s2 1 2 2.5" />
        <path d="M16 11c0-1.5 1-2.5 2-2.5s2 1 2 2.5" />
      </svg>
    )
  },
  {
    id: 'donors',
    title: 'Donors',
    subtitle: 'Philanthropists & contributors',
    color: '#D97706', // Amber Gold
    bgLight: 'bg-amber-50',
    borderLight: 'border-amber-500',
    textLight: 'text-amber-700',
    glowColor: 'rgba(217, 119, 6, 0.4)',
    role: 'Providing direct financial sustenance for verified relief, education, and development causes.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="16" cy="8" r="1.5" />
        <path d="M4 14c2-1 4-1.5 6-1.5 2 0 3.5.5 5 1.5l3.5-1.5" />
        <path d="M3 18c2.5-1.5 5.5-2 9-2s6.5.5 9 2" />
      </svg>
    )
  },
  {
    id: 'business',
    title: 'Business Owners',
    subtitle: 'Ethical merchants & enterprise',
    color: '#EA580C', // Orange
    bgLight: 'bg-orange-50',
    borderLight: 'border-orange-500',
    textLight: 'text-orange-700',
    glowColor: 'rgba(234, 88, 12, 0.4)',
    role: 'Pledging corporate social responsibility, halal commerce profit-shares, and trade networks.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l2-5h14l2 5" />
        <path d="M3 9a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2" />
        <path d="M4 11v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
        <circle cx="9" cy="16" r="1" />
        <circle cx="15" cy="16" r="1" />
      </svg>
    )
  },
  {
    id: 'volunteers',
    title: 'Volunteers',
    subtitle: 'Active boots on the ground',
    color: '#65A30D', // Lime Green
    bgLight: 'bg-lime-50',
    borderLight: 'border-lime-500',
    textLight: 'text-lime-700',
    glowColor: 'rgba(101, 163, 13, 0.4)',
    role: 'Contributing skilled labor, field aid coordination, and human compassion on the frontlines.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 10V4" />
        <path d="M12 4c-3 0-5 2-5 5s5 5 5 5" />
        <path d="M12 4c3 0 5 2 5 5s-5 5-5 5" />
        <path d="M4 18c2-1 4-1.5 6-1.5s4 .5 6 1.5" />
        <path d="M7 21c2-1 3.5-1.5 5-1.5s3 .5 5 1.5" />
      </svg>
    )
  },
  {
    id: 'public',
    title: 'General Public',
    subtitle: 'The broader Muslim community',
    color: '#DC2626', // Red
    bgLight: 'bg-red-50',
    borderLight: 'border-red-500',
    textLight: 'text-red-700',
    glowColor: 'rgba(220, 38, 38, 0.4)',
    role: 'Amplifying campaigns, offering du’a, advocating for justice, and driving mass engagement.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
        <circle cx="14" cy="18" r="2" />
        <path d="M10 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
        <circle cx="7" cy="19" r="1.5" />
      </svg>
    )
  }
];

export const FaithValues = () => {
  const [activeStakeholder, setActiveStakeholder] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const activeData = activeStakeholder !== null ? STAKEHOLDERS[activeStakeholder] : null;

  // Center Coordinates for 700x700 SVG
  const cx = 350;
  const cy = 350;
  const radius = 210; // Equal 70px gap spacing between circles (140, 210, 280)

  return (
    <section className="py-16 relative overflow-hidden bg-sky-100 border-y border-[#0284C7]/15">

      {/* Subtle Islamic Geometric Mesh Background */}
      <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />

      {/* Light Radial Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38BDF8]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-16">

        {/* Section Header */}
        <SectionTitle
          badge="Faith-Guided Principles"
          title="Our Faith-Guided Values"
          subtitle="Anchored in Quranic guidance and prophetic tradition to align our collective efforts for maximum impact."
          lightText={false}
        />

        {/* Guidance & Warning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

          {/* Card 1: Guidance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 transition-all group space-y-6 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="p-3.5 rounded-2xl bg-[#0284C7]/10 text-[#0284C7]">
                <BookOpen className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200">
                Guidance
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-sky-100 space-y-2">
                <p className="font-serif-luxury text-sm sm:text-base text-slate-800 italic leading-relaxed">
                  “The believers are but brothers, so make settlement between your brothers. And fear Allah that you may receive mercy.”
                </p>
                <div className="text-xs font-mono font-semibold text-[#0284C7]">
                  (Qur'an 49 : 10)
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-sky-100 space-y-2">
                <p className="font-serif-luxury text-sm sm:text-base text-slate-800 italic leading-relaxed">
                  “The example of the believers in their affection, mercy, and compassion for each other is that of a body: when any limb aches, the whole body reacts with sleeplessness and fever.”
                </p>
                <div className="text-xs font-mono font-semibold text-[#0284C7]">
                  (Ṣaḥīḥ al-Bukhārī 6011, Ṣaḥīḥ Muslim 2586)
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-sans-clean leading-relaxed pt-2 border-t border-slate-100">
                This guidance set the standard: sincere brotherhood, active reconciliation, shared compassion.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Warning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-[#1D273E]/50 hover:border-[#1D273E] transition-all group space-y-6 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="p-3.5 rounded-2xl bg-[#1D273E]/20 text-[#1D273E]">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-[#1D273E] uppercase tracking-wider bg-[#1D273E]/20 px-3.5 py-1 rounded-full border border-[#1D273E]">
                Warning
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl  bg-[#1D273E]/20 border border-[#1D273E]/50 space-y-2">
                <p className="font-serif-luxury text-sm sm:text-base text-[#1D273E] italic leading-relaxed">
                  “And those who disbelieved are allies of one another. If you (Muslims) do not do so [i.e., ally and support one another], there will be fitnah on earth and great corruption.”
                </p>
                <div className="text-xs font-mono font-semibold text-[#1D273E]">
                  (Qur'an 8 : 73)
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-sans-clean leading-relaxed pt-2 border-t border-slate-100">
                This verse reminds us of the consequence of neglecting that standard, fitnah and great corruption.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* REVOLVING ORBITAL DIAGRAM ("Unified Ummah in Center")                    */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto relative overflow-hidden space-y-4 sm:space-y-6 flex flex-col items-center justify-center text-center w-full"
        >

          {/* Top Badge Overlay */}
          <div className="text-center mb-4 sm:mb-8 z-10">
            <span className="text-[10px] sm:text-xs font-extrabold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#0284C7] bg-white px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-sky-200 shadow-md inline-block">
              UNITED MERCY ECOSYSTEM
            </span>
          </div>

          {/* SVG Diagram Stage */}
          <div className="w-full max-w-[650px] mx-auto select-none">
            <svg
              viewBox="60 60 580 580"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto block overflow-visible"
            >
              <defs>
                {/* Glow Filters */}
                <filter id="orbital-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <filter id="core-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Core Light Gradient */}
                <radialGradient id="ummahCoreGradLight" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#F0F9FF" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background Concentric Orbital Track Lines */}
              <circle cx={cx} cy={cy} r="280" fill="none" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="4 8" strokeOpacity="0.2" />
              <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#0284C7" strokeWidth="2" strokeDasharray="6 8" strokeOpacity="0.4" />
              <circle cx={cx} cy={cy} r="140" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 6" strokeOpacity="0.3" />

              {/* Central Radial Aura Glow */}
              <circle cx={cx} cy={cy} r="130" fill="url(#ummahCoreGradLight)" />

              {/* REVOLVING ORBITAL GROUP (Rotates 360 deg continuously) */}
              <motion.g
                animate={{ rotate: isPaused ? [0] : 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 38,
                  ease: "linear"
                }}
                style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
              >
                {/* Energy Pulses Inward along Orbit */}
                {STAKEHOLDERS.map((s, idx) => {
                  const angleRad = ((idx * 72 - 90) * Math.PI) / 180;
                  const nx = cx + radius * Math.cos(angleRad);
                  const ny = cy + radius * Math.sin(angleRad);
                  const isSelected = activeStakeholder === idx;
                  const titleWords = s.title.split(' ');

                  return (
                    <g key={`orb-node-${s.id}`}>
                      {/* Long Continuous Dotted Line from Center to Node */}
                      <line
                        x1={nx}
                        y1={ny}
                        x2={cx}
                        y2={cy}
                        stroke={s.color}
                        strokeWidth="2.5"
                        strokeDasharray="4 6"
                        strokeOpacity={isSelected ? 0.95 : 0.6}
                        className="transition-all duration-300"
                      />

                      {/* Node Position Group */}
                      <g transform={`translate(${nx}, ${ny})`}>
                        {/* Counter-Rotating Group to keep text/icon level */}
                        <motion.g
                          animate={{ rotate: isPaused ? [0] : -360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 38,
                            ease: "linear"
                          }}
                        >
                          {/* Outer Badge Circle */}
                          <circle
                            cx="0"
                            cy="0"
                            r="48"
                            fill={isSelected ? '#FFFFFF' : '#FFFFFF'}
                            stroke={isSelected ? s.color : '#CBD5E1'}
                            strokeWidth={isSelected ? 3 : 1.5}
                            filter="url(#orbital-glow)"
                            className="cursor-pointer transition-all duration-300"
                            onMouseEnter={() => setActiveStakeholder(idx)}
                            onClick={() => setActiveStakeholder(idx)}
                          />

                          {/* Outer Badge Surface */}
                          <circle
                            cx="0"
                            cy="0"
                            r="48"
                            fill={isSelected ? (s.id === 'donors' ? '#F3E8FF' : s.id === 'orgs' ? '#DCFCE7' : s.id === 'business' ? '#FEF9C3' : s.id === 'volunteers' ? '#DBEAFE' : '#FFE4E6') : '#FFFFFF'}
                            stroke={isSelected ? s.color : '#E2E8F0'}
                            strokeWidth={isSelected ? 2.5 : 1.5}
                            className="cursor-pointer transition-all duration-300"
                            onMouseEnter={() => setActiveStakeholder(idx)}
                            onClick={() => setActiveStakeholder(idx)}
                          />

                          {/* Icon Circle Container */}
                          <circle
                            cx="0"
                            cy="-14"
                            r="14"
                            fill={`${s.color}20`}
                            className="pointer-events-none"
                          />

                          {/* Lucide Icon Container */}
                          <g
                            transform="translate(-8, -22)"
                            style={{ color: s.color }}
                            className="pointer-events-none"
                          >
                            <s.icon width="16" height="16" />
                          </g>

                          {/* Stakeholder Title Label */}
                          {titleWords.length > 1 ? (
                            <text
                              x="0"
                              y="11"
                              textAnchor="middle"
                              dominantBaseline="central"
                              fill="#1E293B"
                              fontSize="9.5"
                              fontWeight="800"
                              className="font-sans-clean pointer-events-none"
                            >
                              <tspan x="0" dy="-4">{titleWords[0]}</tspan>
                              <tspan x="0" dy="10.5">{titleWords[1]}</tspan>
                            </text>
                          ) : (
                            <text
                              x="0"
                              y="13"
                              textAnchor="middle"
                              dominantBaseline="central"
                              fill="#1E293B"
                              fontSize="10"
                              fontWeight="800"
                              className="font-sans-clean pointer-events-none"
                            >
                              {s.title}
                            </text>
                          )}
                        </motion.g>
                      </g>
                    </g>
                  );
                })}
              </motion.g>

              {/* =================================================================== */}
              {/* CENTRAL CORE ("Unified Ummah")                                      */}
              {/* =================================================================== */}
              <g className="cursor-pointer select-none">
                {/* Glowing Core Orbit Rings */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r="85"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
                />

                {/* Core ForeignObject Card */}
                <foreignObject x={cx - 95} y={cy - 95} width="190" height="190">
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{ width: '100%', height: '100%' }}
                    onMouseEnter={() => setActiveStakeholder(null)}
                    className="w-full h-full rounded-full bg-white border-2 border-[#38BDF8] flex flex-col items-center justify-center p-3 sm:p-4 text-center space-y-1  transition-transform duration-300 "
                  >
                    <div className="relative flex items-center justify-center">
                      <img src={Icon} alt="United Mercy" className="sm:w-18 sm:h-18 w-16 h-16 object-contain" />
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-base md:text-lg font-extrabold text-[#1D273E] tracking-wide font-serif-luxury">
                        Unified Ummah
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-[#38BDF8] font-semibold font-sans-clean">
                        One Body in Mercy
                      </p>
                    </div>
                  </div>
                </foreignObject>
              </g>

            </svg>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
