import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import {
  Users,
  Heart,
  Megaphone,
  Send,
  Box,
  CheckCircle2
} from 'lucide-react';
import IconAsset from '../../assets/icon.png';

export const HowItWorks = ({ onOpenJoinModal }) => {

  const CONTENT_ITEMS = [
    {
      num: '1',
      title: 'Islamic Organizations',
      desc: 'Create a comprehensive profile, Collaborate with other Islamic Organizations worldwide. Share details, budgets, images while creating campaign and update progress.',
      color: '#22C55E',
      bgClass: 'bg-[#22C55E]',
      borderClass: 'border-[#22C55E]',
      textClass: 'text-[#22C55E]',
      icon: Users
    },
    {
      num: '2',
      title: 'Donors',
      desc: 'Browse live campaigns from registered organizations worldwide, filter by category and country, and donate using external link provided or find banking details of the Organization.',
      color: '#A855F7',
      bgClass: 'bg-[#A855F7]',
      borderClass: 'border-[#A855F7]',
      textClass: 'text-[#A855F7]',
      icon: Heart
    },
    {
      num: '3',
      title: 'Business Owners & Service Providers',
      desc: 'Explore listed needs from campaigns, offer free or discounted products and services directly to campaigns by clicking QUOTE button.',
      color: '#EAB308',
      bgClass: 'bg-[#EAB308]',
      borderClass: 'border-[#EAB308]',
      textClass: 'text-[#EAB308]',
      icon: Megaphone
    },
    {
      num: '4',
      title: 'Volunteers',
      desc: 'Find causes that need your time, skills, click Join Hands to offer your service. Chat directly with the Campaigner and Contribute.',
      color: '#3B82F6',
      bgClass: 'bg-[#3B82F6]',
      borderClass: 'border-[#3B82F6]',
      textClass: 'text-[#3B82F6]',
      icon: Box
    },
    {
      num: '5',
      title: 'The General Muslim Public',
      desc: 'Follow campaigns, see project updates, and stay connected to what’s happening across the Ummah. Be informed with community updates section on Dashboard.',
      color: '#EF4444',
      bgClass: 'bg-[#EF4444]',
      borderClass: 'border-[#EF4444]',
      textClass: 'text-[#EF4444]',
      icon: Send
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 relative overflow-hidden bg-[#151E32] text-white">

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] bg-[#5EC4F1]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <SectionTitle
          badge="Platform Ecosystem Network"
          title="How United Mercy Works"
          subtitle="United Mercy makes it easy for anyone to contribute to the Ummah."
          lightText={true}
        />

        {/* ========================================================================= */}
        {/* FULLY RESPONSIVE ECOSYSTEM DIAGRAM CANVAS (NON-CLICKABLE VISUAL DIAGRAM)  */}
        {/* ========================================================================= */}
        <div className="relative w-full max-w-4xl mx-auto select-none">

          {/* Scalable Vector Canvas Wrapper (Edge-to-Edge on Mobile) */}
          <div className="w-full relative h-auto">
            <svg viewBox="60 0 690 550" className="w-full h-auto overflow-visible">

              {/* ===================================================================== */}
              {/* SVG VECTOR LINES & ANIMATED PULSE BALLS                               */}
              {/* ===================================================================== */}

              {/* Path 1: Card 1 (Islamic Orgs) -> Left Hub */}
              <line
                x1="280"
                y1="268"
                x2="480"
                y2="52.5"
                stroke="#22C55E"
                strokeWidth="3"
                strokeDasharray="6 6"
                className="opacity-90"
              />
              <circle r="6" fill="#22C55E">
                <animate attributeName="cx" from="480" to="280" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="52.5" to="268" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Path 2: Card 2 (Donors) -> Left Hub */}
              <line
                x1="280"
                y1="268"
                x2="480"
                y2="160.5"
                stroke="#A855F7"
                strokeWidth="3"
                strokeDasharray="6 6"
                className="opacity-90"
              />
              <circle r="6" fill="#A855F7">
                <animate attributeName="cx" from="480" to="280" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="160.5" to="268" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Path 3: Card 3 (Business Owners) -> Left Hub */}
              <line
                x1="280"
                y1="268"
                x2="480"
                y2="268.5"
                stroke="#EAB308"
                strokeWidth="3"
                strokeDasharray="6 6"
                className="opacity-90"
              />
              <circle r="6" fill="#EAB308">
                <animate attributeName="cx" from="480" to="280" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="268.5" to="268" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Path 4: Card 4 (Volunteers) -> Left Hub */}
              <line
                x1="280"
                y1="268"
                x2="480"
                y2="376.5"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeDasharray="6 6"
                className="opacity-90"
              />
              <circle r="6" fill="#3B82F6">
                <animate attributeName="cx" from="480" to="280" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="376.5" to="268" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Path 5: Card 5 (General Muslim Public) -> Left Hub */}
              <line
                x1="280"
                y1="268"
                x2="480"
                y2="484.5"
                stroke="#EF4444"
                strokeWidth="3"
                strokeDasharray="6 6"
                className="opacity-90"
              />
              <circle r="6" fill="#EF4444">
                <animate attributeName="cx" from="480" to="280" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="484.5" to="268" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Right Card Endpoint Dots */}
              <circle cx="480" cy="52.5" r="6" fill="#22C55E" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="480" cy="160.5" r="6" fill="#A855F7" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="480" cy="268.5" r="6" fill="#EAB308" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="480" cy="376.5" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="480" cy="484.5" r="6" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.5" />

              {/* ===================================================================== */}
              {/* LEFT HUB CARD (NATIVE SVG FOR PERFECT CROSS-BROWSER SAFARI SUPPORT)   */}
              {/* ===================================================================== */}
              <g transform="translate(70, 178)">
                {/* Glow Backdrop */}
                <rect
                  x="0"
                  y="0"
                  width="210"
                  height="180"
                  rx="24"
                  fill="#5EC4F1"
                  opacity="0.15"
                  filter="url(#glow-mob)"
                />
                {/* Main Dark Box with Blue Border */}
                <rect
                  x="0"
                  y="0"
                  width="210"
                  height="180"
                  rx="24"
                  fill="#151E32"
                  stroke="#5EC4F1"
                  strokeWidth="4"
                />
                {/* Icon Backdrop */}
                <circle
                  cx="105"
                  cy="62"
                  r="32"
                  fill="#5EC4F1"
                  fillOpacity="0.12"
                  stroke="#5EC4F1"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                />
                {/* Center Icon */}
                <image
                  href={IconAsset}
                  x="77"
                  y="34"
                  width="56"
                  height="56"
                  preserveAspectRatio="xMidYMid meet"
                />
                {/* Text Title */}
                <text
                  x="105"
                  y="124"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#FFFFFF"
                  fontSize="16"
                  fontWeight="bold"
                  letterSpacing="0.3"
                  className="font-serif-luxury"
                >
                  United Mercy
                </text>
                <text
                  x="105"
                  y="146"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#5EC4F1"
                  fontSize="14"
                  fontWeight="bold"
                  letterSpacing="0.8"
                  className="font-sans-clean"
                >
                  Platform
                </text>
              </g>

              {/* Center Hub Connection Dot on Right Border of Left Card (x=280, y=268) */}
              <circle cx="280" cy="268" r="7" fill="#5EC4F1" stroke="#FFFFFF" strokeWidth="2" />

              {/* ===================================================================== */}
              {/* 5 RIGHT STAKEHOLDER CARDS EMBEDDED VIA FOREIGN OBJECT                */}
              {/* ===================================================================== */}

              {/* CARD 1: Islamic Organizations (Y=5px) */}
              <foreignObject x="480" y="5" width="265" height="95" className="overflow-visible">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '265px', height: '95px', minHeight: '95px', boxSizing: 'border-box' }} className="p-3 rounded-2xl border-2 border-[#22C55E] bg-[#151E32]/95 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 rounded-xl bg-[#22C55E] text-white font-bold text-xs shadow-md flex items-center gap-2">
                      <Users className="w-3.5 h-3.5" />
                      <span>Islamic Organizations</span>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-0.5 pl-1 text-[11px] text-gray-200 font-sans-clean font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                      <span>Create Profile & Campaigns</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                      <span>Collaborate</span>
                    </li>
                  </ul>
                </div>
              </foreignObject>

              {/* CARD 2: Donors (Y=113px) */}
              <foreignObject x="480" y="113" width="265" height="95" className="overflow-visible">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '265px', height: '95px', minHeight: '95px', boxSizing: 'border-box' }} className="p-3 rounded-2xl border-2 border-[#A855F7] bg-[#151E32]/95 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 rounded-xl bg-[#A855F7] text-white font-bold text-xs shadow-md flex items-center gap-2">
                      <Heart className="w-3.5 h-3.5" />
                      <span>Donors</span>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-0.5 pl-1 text-[11px] text-gray-200 font-sans-clean font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                      <span>Browse Campaigns</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                      <span>Donate Directly</span>
                    </li>
                  </ul>
                </div>
              </foreignObject>

              {/* CARD 3: Business Owners (Y=221px) */}
              <foreignObject x="480" y="221" width="265" height="95" className="overflow-visible">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '265px', height: '95px', minHeight: '95px', boxSizing: 'border-box' }} className="p-3 rounded-2xl border-2 border-[#EAB308] bg-[#151E32]/95 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 rounded-xl bg-[#EAB308] text-slate-950 font-extrabold text-xs shadow-md flex items-center gap-2">
                      <Megaphone className="w-3.5 h-3.5" />
                      <span>Business Owners</span>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-0.5 pl-1 text-[11px] text-gray-200 font-sans-clean font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
                      <span>Explore Needs</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
                      <span>Offer Discounted Services</span>
                    </li>
                  </ul>
                </div>
              </foreignObject>

              {/* CARD 4: Volunteers (Y=329px) */}
              <foreignObject x="480" y="329" width="265" height="95" className="overflow-visible">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '265px', height: '95px', minHeight: '95px', boxSizing: 'border-box' }} className="p-3 rounded-2xl border-2 border-[#3B82F6] bg-[#151E32]/95 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 rounded-xl bg-[#3B82F6] text-white font-bold text-xs shadow-md flex items-center gap-2">
                      <Box className="w-3.5 h-3.5" />
                      <span>Volunteers</span>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-0.5 pl-1 text-[11px] text-gray-200 font-sans-clean font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <span>Find Causes</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <span>Join Hands</span>
                    </li>
                  </ul>
                </div>
              </foreignObject>

              {/* CARD 5: General Muslim Public (Y=437px) */}
              <foreignObject x="480" y="437" width="265" height="95" className="overflow-visible">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '265px', height: '95px', minHeight: '95px', boxSizing: 'border-box' }} className="p-3 rounded-2xl border-2 border-[#EF4444] bg-[#151E32]/95 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 rounded-xl bg-[#EF4444] text-white font-bold text-xs shadow-md flex items-center gap-2">
                      <Send className="w-3.5 h-3.5" />
                      <span>General Muslim Public</span>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-0.5 pl-1 text-[11px] text-gray-200 font-sans-clean font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                      <span>Follow Campaigns</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                      <span>Stay Connected</span>
                    </li>
                  </ul>
                </div>
              </foreignObject>

            </svg>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ALL 5 CONTRIBUTOR DESCRIPTIONS SHOWN TOGETHER IN CARD BELOW DIAGRAM       */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto">


          {/* List of 5 Contributor Roles */}
          <div className="space-y-6">
            {CONTENT_ITEMS.map((item, idx) => {
              const ItemIcon = item.icon;

              return (
                <motion.div
                  key={`content-item-${item.num}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-4 sm:p-5 rounded-2xl bg-[#151E32]/80 border border-slate-700/70 space-y-2.5 transition-all hover:border-slate-500/60"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-xl ${item.bgClass} ${item.num === '3' ? 'text-slate-950' : 'text-white'} font-bold text-xs flex items-center justify-center shrink-0 shadow-md`}>
                      <ItemIcon className={`w-4 h-4  text-white ${item.textClass}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-sans-clean font-bold text-base sm:text-lg text-white">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-200 font-sans-clean leading-relaxed pl-10">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>


    </section>
  );
};
