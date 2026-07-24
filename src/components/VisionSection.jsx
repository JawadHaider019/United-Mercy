import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Layers, Users, Activity } from 'lucide-react';

export const VisionSection = ({ onOpenJoinModal }) => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const UNITY_NODES = [
    {
      id: 'star',
      title: 'Shared Vision',
      color: '#F59E0B',
      desc: 'Aligning different organizations toward one overarching mission for the Ummah.',
      shape: (
        <polygon points="18 3 22.6 12.4 33 13.9 25.5 21.2 27.3 31.5 18 26.6 8.7 31.5 10.5 21.2 3 13.9 13.4 12.4 18 3" fill="#F59E0B" />
      ),
      x: 45,
      y: 45
    },
    {
      id: 'triangle',
      title: 'Diverse Strengths',
      color: '#10B981',
      desc: 'Combining unique institutional capabilities (Zakat, Tech, Field Relief, Trade).',
      shape: (
        <polygon points="18 4 33 32 3 32" fill="#10B981" />
      ),
      x: 160,
      y: 115
    },
    {
      id: 'circle',
      title: 'Common Goals',
      color: '#38BDF8',
      desc: 'Focusing collective resources on verified high-impact community outcomes.',
      shape: (
        <circle cx="18" cy="18" r="15" fill="#38BDF8" />
      ),
      x: 95,
      y: 185
    },
    {
      id: 'hexagon',
      title: 'Coordinated Action',
      color: '#0D9488',
      desc: 'Synchronizing boots-on-the-ground execution without central friction.',
      shape: (
        <polygon points="18 3 31.5 10.5 31.5 25.5 18 33 4.5 25.5 4.5 10.5 18 3" fill="#0D9488" />
      ),
      x: 230,
      y: 255
    }
  ];

  const UNIFORMITY_NODES = [
    { y: 45, label: 'Same Methods' },
    { y: 115, label: 'Identical' },
    { y: 185, label: 'No Diversity' },
    { y: 255, label: 'Rigid Structure' }
  ];

  return (
    <section id="vision" className="py-16 relative overflow-hidden bg-white">

      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#0284C7]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <SectionTitle
          badge="Unity vs. Uniformity"
          title="Our Vision"
          subtitle="A united Ummah where coordinated collaboration turns every Islamic project into lasting community benefit. United Mercy connects organizations, donors, businesses, volunteers, and the wider Muslim public channeling collective, coordinated efforts toward a shared goal for maximum impact."
        />

        {/* Main Side-by-Side Paradigm Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* ========================================================================= */}
          {/* CARD 1: UNITY (Diverse & Dynamic - Light Blue Theme)                       */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-sky-100 border-2 border-[#5EC4F1] p-4 sm:p-6 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-6 text-slate-800"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-serif-luxury font-extrabold text-[#151E32] tracking-tight">
                  UNITY
                </span>
                <span className="text-xs font-mono font-bold uppercase text-[#059669] bg-[#10B981]/15 px-3 py-1 rounded-full border border-[#10B981]/30">
                  Diverse & Dynamic
                </span>
              </div>
              <span className="text-xs font-semibold text-[#0284C7] bg-[#0284C7]/10 px-3 py-1 rounded-full border border-[#0284C7]/30 hidden sm:inline-block">
                The United Mercy Model
              </span>
            </div>

            {/* Interactive Unity Diagram Stage */}
            <div className="relative w-full rounded-2xl bg-white border border-[#0284C7]/20 p-4 sm:p-6 overflow-hidden shadow-inner">

              {/* Sub-label */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-mono">
                <span>Unique Shapes & Strengths (1 Per Row)</span>
                <span className="text-[#059669] font-bold">Parallel Forward Trajectory →</span>
              </div>

              {/* SVG Canvas (Taller aspect ratio for 4 distinct rows) */}
              <div className="relative w-full aspect-[500/295] select-none">
                <svg viewBox="0 0 500 295" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="arrowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#5EC4F1" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#34D399" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>

                  {/* 4 Distinct Horizontal Row Grid Lines */}
                  <line x1="10" y1="45" x2="490" y2="45" stroke="#E2E8F0" strokeDasharray="4 4" />
                  <line x1="10" y1="115" x2="490" y2="115" stroke="#E2E8F0" strokeDasharray="4 4" />
                  <line x1="10" y1="185" x2="490" y2="185" stroke="#E2E8F0" strokeDasharray="4 4" />
                  <line x1="10" y1="255" x2="490" y2="255" stroke="#E2E8F0" strokeDasharray="4 4" />

                  {/* Render 4 Large Rows */}
                  {UNITY_NODES.map((node, idx) => {
                    const isHovered = hoveredNode === node.id;
                    const arrowStartX = node.x + 30;
                    const arrowEndX = Math.min(node.x + 130, 475);

                    return (
                      <g
                        key={node.id}
                        className="cursor-pointer group"
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        {/* Animated Trajectory Vector Arrow */}
                        <line
                          x1={arrowStartX}
                          y1={node.y}
                          x2={arrowEndX}
                          y2={node.y}
                          stroke={node.color}
                          strokeWidth={isHovered ? 4 : 2.5}
                          strokeDasharray="6 4"
                          strokeOpacity={isHovered ? 1 : 0.75}
                        />

                        {/* Animated Pulse head on vector */}
                        <motion.circle
                          cx={arrowStartX}
                          cy={node.y}
                          r="4"
                          fill={node.color}
                          animate={{ cx: [arrowStartX, arrowEndX] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.8 + idx * 0.3,
                            ease: "linear"
                          }}
                        />

                        {/* Arrow Tip */}
                        <path
                          d={`M ${arrowEndX - 8} ${node.y - 5} L ${arrowEndX} ${node.y} L ${arrowEndX - 8} ${node.y + 5}`}
                          fill="none"
                          stroke={node.color}
                          strokeWidth="2.5"
                        />

                        {/* Large Geometric Shape Icon (36x36px) */}
                        <g transform={`translate(${node.x - 18}, ${node.y - 18})`}>
                          <svg viewBox="0 0 36 36" width="36" height="36">
                            {node.shape}
                          </svg>
                        </g>

                        {/* Label Text below shape */}
                        <text
                          x={node.x - 15}
                          y={node.y + 34}
                          fill={isHovered ? '#0284C7' : '#334155'}
                          fontSize="16"
                          fontWeight={isHovered ? 'bold' : '600'}
                          className="font-sans-clean transition-colors"
                        >
                          {node.title}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Bottom Labels in HTML - Readable & Matched */}
              <div className="flex items-center justify-between text-[12px] sm:text-xs font-semibold pt-1 px-0.5">
                <span className="text-[#0284C7]">Mutual Respect</span>
                <span className="text-[#059669] text-right">Individual Identity Preserved</span>
              </div>

              {/* Dynamic Description Box on Hover */}
              <div className="mt-3 pt-3 border-t border-slate-200 min-h-[44px] flex items-center">
                <AnimatePresence mode="wait">
                  {hoveredNode ? (
                    <motion.p
                      key={hoveredNode}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-[#0284C7] font-semibold leading-relaxed font-sans-clean"
                    >
                      ● {UNITY_NODES.find(n => n.id === hoveredNode)?.desc}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="default-unity-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-slate-500 font-sans-clean"
                    >
                      Hover any shape row to see how diverse strengths coordinate towards common goals.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Core Unity Principles List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#0284C7]/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[#151E32] font-sans-clean">
                    Individual Identity & Autonomy
                  </h5>
                  <p className="text-xs text-slate-600 font-sans-clean leading-relaxed">
                    Organizations preserve their unique branding, governance, and grassroots focus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#0284C7]/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[#151E32] font-sans-clean">
                    Coordinated Synergy over Centralization
                  </h5>
                  <p className="text-xs text-slate-600 font-sans-clean leading-relaxed">
                    Connecting charities, donors, businesses, and volunteers without imposing forced control.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 2: UNIFORMITY (Identical & Static - Dark Blue Theme)                 */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#151E32] text-white border-2 border-slate-700/80 p-4 sm:p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-serif-luxury font-extrabold text-white tracking-tight">
                  UNIFORMITY
                </span>
                <span className="text-xs font-mono font-bold uppercase text-slate-300 bg-slate-800/90 px-3 py-1 rounded-full border border-slate-700">
                  Identical & Static
                </span>
              </div>
              <span className="text-xs font-semibold text-red-400 bg-red-950/40 px-3 py-1 rounded-full border border-red-800/50 hidden sm:inline-block">
                Legacy Inflexible Model
              </span>
            </div>

            {/* Static Uniformity Diagram Stage */}
            <div className="relative w-full rounded-2xl bg-[#1D273E]/90 border border-slate-700/70 p-4 sm:p-6 overflow-hidden shadow-inner">

              {/* Sub-label */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                <span>Monochrome Rigid Blocks (Static Rows)</span>
                <span className="text-red-400 font-bold">No Movement / Static ✕</span>
              </div>

              {/* SVG Canvas (Matching 500/295 Aspect Ratio) */}
              <div className="relative w-full aspect-[500/295] select-none">
                <svg viewBox="0 0 500 295" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  <line x1="10" y1="45" x2="490" y2="45" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                  <line x1="10" y1="115" x2="490" y2="115" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                  <line x1="10" y1="185" x2="490" y2="185" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                  <line x1="10" y1="255" x2="490" y2="255" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />

                  {/* 4 Identical Gray Squares stacked on 4 Rows */}
                  {UNIFORMITY_NODES.map((item, idx) => (
                    <g key={`square-${idx}`}>
                      {/* Rigid Square (36x36px) */}
                      <rect
                        x={110}
                        y={item.y - 18}
                        width="36"
                        height="36"
                        rx="6"
                        fill="#475569"
                        stroke="#64748B"
                        strokeWidth="2.5"
                      />

                      {/* Static Arrow Line */}
                      <line
                        x1={160}
                        y1={item.y}
                        x2={280}
                        y2={item.y}
                        stroke="#64748B"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />

                      {/* Label Text next to block */}
                      <text
                        x={300}
                        y={item.y + 6}
                        fill="#CBD5E1"
                        fontSize="16"
                        fontWeight="600"
                        className="font-sans-clean"
                      >
                        {item.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Bottom Warning Labels in HTML - Readable & Matched */}
              <div className="flex items-center justify-between text-[12px] sm:text-xs font-semibold pt-1 px-0.5">
                <span className="text-red-400">Loss of Identity</span>
                <span className="text-red-400 text-right">Forced Conformity</span>
              </div>

              {/* Description Box */}
              <div className="mt-3 pt-3 border-t border-slate-700/60 min-h-[44px] flex items-center">
                <p className="text-xs text-slate-300 font-sans-clean leading-relaxed">
                  Forcing identical methods on every charity suppresses local innovation and destroys grassroots identity.
                </p>
              </div>

            </div>

            {/* Core Flaws Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#1D273E] border border-red-500/20">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white font-sans-clean">
                    Loss of Identity & Local Heritage
                  </h5>
                  <p className="text-xs text-slate-300 font-sans-clean leading-relaxed">
                    Forcing organizations into identical templates erases their unique history and donor trust.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#1D273E] border border-red-500/20">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white font-sans-clean">
                    Rigid Structures & Static Friction
                  </h5>
                  <p className="text-xs text-slate-300 font-sans-clean leading-relaxed">
                    Monolithic systems fail to adapt dynamically when sudden real-world humanitarian crises arise.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* SUMMARY PHILOSOPHY BANNER AT BOTTOM                                       */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-3xl bg-sky-100  border-2 border-[#5EC4F1]/50 p-8 sm:p-10 shadow-xl text-center space-y-4"
        >
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1D273E] max-w-3xl mx-auto leading-snug">
            "We do not demand uniformity; we build unity."
          </h3>

          <p className="text-sm sm:text-base text-[#1D273E]/80 max-w-3xl mx-auto font-sans-clean leading-relaxed font-light">
            By connecting organizations, donors, businesses, volunteers, and the public under one faith-driven platform, we celebrate diversity while focusing collective power toward lasting community benefit.
          </p>

          {/* Join Now CTA Button */}
          <div className="pt-3 flex justify-center">
            <button
              id="vision-banner-join-now-btn"
              onClick={() => onOpenJoinModal && onOpenJoinModal('Vision Banner')}
              className="px-8 py-3.5 rounded-full bg-[#1D273E] hover:bg-[#5EC4F1] text-white font-sans-clean font-bold text-sm sm:text-base shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
