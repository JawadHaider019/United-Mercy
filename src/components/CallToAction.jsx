import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Mail, ShieldCheck } from 'lucide-react';



export const CallToAction = ({ onOpenJoinModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-28 bg-[#1D273E] relative overflow-hidden border-t border-[#5EC4F1]/20">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#5EC4F1]/15 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#151E32] border border-[#5EC4F1]/30 shadow-xl">
          <Sparkles className="w-4 h-4 text-[#5EC4F1]" />
          <span className="text-xs font-mono font-bold text-[#5EC4F1] uppercase tracking-widest">
            A Historic Call to Unity
          </span>
        </div>

        {/* Massive Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-white leading-[1.15] tracking-tight">
          "The Ummah Is Not Powerless. <br />
          <span className="text-sky-gradient italic font-normal">It Is Simply Waiting To Be Connected.</span>"
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-sans-clean font-light leading-relaxed">
          Be part of the sovereign global infrastructure uniting organizations, donors, volunteers, and businesses across the world.
        </p>

        {/* Primary Action Button */}
        <div className="pt-2">
          <button
            onClick={onOpenJoinModal}
            className="px-10 py-5 rounded-full bg-[#5EC4F1] hover:bg-[#43aadb] text-[#1D273E] font-extrabold text-lg shadow-2xl shadow-[#5EC4F1]/35 hover:shadow-[#5EC4F1]/50 hover:scale-105 transition-all inline-flex items-center gap-3 group"
          >
            <span>Join United Mercy Today</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Newsletter Luxury Box */}
        <div className="pt-12 max-w-xl mx-auto">
          <div className="p-8 rounded-3xl bg-[#151E32]/90 border border-[#5EC4F1]/30 shadow-2xl backdrop-blur-xl space-y-4">
            
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#5EC4F1]">
              <Mail className="w-4 h-4" />
              <span>UNITED MERCY BRIEFING & AUDIT DISPATCH</span>
            </div>

            <h3 className="font-serif-luxury font-bold text-xl text-white">
              Receive Quarterly Field Intelligence & Audits
            </h3>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] font-medium text-sm flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Subscribed! You will receive our verified audit dispatches.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-full bg-[#1D273E] border border-[#5EC4F1]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#5EC4F1] text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-[#5EC4F1] text-[#1D273E] font-bold text-xs hover:bg-[#43aadb] transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-[11px] text-gray-400">
              Strict privacy protection. No spam or commercial marketing.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
