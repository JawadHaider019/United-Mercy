import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import logoImg from '../../assets/unitedmercy.png';

export const Footer = ({ onOpenJoinModal, onOpenDonateModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const SOCIAL_LINKS = [
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'Youtube', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Tiktok', url: '#' },
  ];

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 pt-16 pb-12 relative overflow-hidden select-none">

      {/* Background Soft Subtle Lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0284C7]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Main Footer Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-200">

          {/* Column 1: Brand Logo, Community Description, Contact & Newsletter (lg:col-span-5) */}
          <div className="lg:col-span-6 space-y-6">

            {/* Footer Logo */}
            <a href="#" className="inline-block group">
              <img
                src={logoImg}
                alt="United Mercy Logo"
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Community Description directly below logo */}
            <p className="text-xs sm:text-sm text-slate-600 font-sans-clean leading-relaxed">
              Join our community of changemakers! Subscribe to our newsletter for updates on how we are making tangible differences in the lives of those in need.
            </p>

            {/* Contact Information */}
            <div className="space-y-1.5 text-xs text-slate-600 font-sans-clean leading-relaxed">
              <p className="font-semibold text-slate-800">
                If you have any questions or concerns, please contact us at:
              </p>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0284C7]">
                <Mail className="w-4 h-4 shrink-0 text-[#0284C7]" />
                <span>Email: <a href="mailto:info@unitedmercy.com" className="hover:underline">info@unitedmercy.com</a></span>
              </div>
            </div>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-1 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#151E32] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium pt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>JazakAllah Khair! You are subscribed to our newsletter.</span>
              </div>
            )}

          </div>

          {/* Column 2: Follow Us Grid Column (lg:col-span-3) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif-luxury text-sm font-bold text-[#151E32] uppercase tracking-wider">
              Follow Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    className="hover:text-[#0284C7] transition-colors flex items-center gap-2"
                  >
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pages Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif-luxury text-sm font-bold text-[#151E32] uppercase tracking-wider">
              Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><a href="#vision" className="hover:text-[#0284C7] transition-colors">About</a></li>
              <li><button onClick={() => onOpenJoinModal && onOpenJoinModal('Volunteers')} className="hover:text-[#0284C7] transition-colors cursor-pointer">Volunteer</button></li>
              <li><a href="#campaigns" className="hover:text-[#0284C7] transition-colors">Campaigns</a></li>
              <li><a href="#key-features" className="hover:text-[#0284C7] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Legal Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif-luxury text-sm font-bold text-[#151E32] uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><a href="#" className="hover:text-[#0284C7] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#0284C7] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            United Mercy ©2024. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#0284C7] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0284C7] transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
