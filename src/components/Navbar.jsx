import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Search,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  HeartHandshake,
  Building2,
  Users,
  Sparkles,
  ArrowRight
} from 'lucide-react';

import logoImg from '../../assets/unitedmercy.png';



export const Navbar = ({
  onOpenJoinModal,
  onOpenSearchModal,
  onOpenDonateModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Our Vision', href: '#vision' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white backdrop-blur-md border-b border-slate-100 shadow-md shadow-slate-900/5'
        : 'bg-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="United Mercy Logo"
              className="h-15 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300 "
            />

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold uppercase text-[#1D273E] transition-colors  hover:text-[#5EC4F1]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">


            {/* Primary CTA */}
            <button
              id="nav-join-btn"
              onClick={() => onOpenJoinModal()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#5EC4F1] text-white  hover:bg-[#1D273E] font-bold text-sm shadow-md shadow-[#5EC4F1]/20 hover:shadow-lg hover:shadow-[#5EC4F1]/30 transition-all hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Join Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 "
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0D5C3A]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base uppercase font-semibold text-slate-800 hover:text-[#0D5C3A] py-2 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-2.5">

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoinModal();
                  }}
                  className="w-full py-3 rounded-3xl bg-gradient-to-r from-[#5EC4F1] to-[#1D273E] text-white font-bold text-sm shadow-lg shadow-[#0D5C3A]/20"
                >
                  Join Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
