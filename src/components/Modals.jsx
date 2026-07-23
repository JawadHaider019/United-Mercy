import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CAMPAIGNS_DATA, FEATURES_DATA, PARTNERS_DATA } from '../data/mockData';
import { 
  X, 
  Building2, 
  HeartHandshake, 
  Briefcase, 
  Users, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  Sparkles,
  ArrowRight,
  Heart,
  DollarSign
} from 'lucide-react';

/* ---------------- JOIN MODAL ---------------- */


export const JoinModal = ({ isOpen, onClose, defaultRole }) => {
  const [selectedRole, setSelectedRole] = useState(defaultRole || 'Organization');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orgName: '',
    country: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const roles = [
    { name: 'Organization', icon: Building2, desc: 'Institutional non-profit or NGO' },
    { name: 'Donor', icon: HeartHandshake, desc: 'Individual or family philanthropist' },
    { name: 'Business', icon: Briefcase, desc: 'Ethical CSR or corporate entity' },
    { name: 'Volunteer', icon: Users, desc: 'Specialized field or remote talent' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-xl bg-[#1D273E] border border-[#5EC4F1]/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#151E32] text-gray-400 hover:text-white border border-[#5EC4F1]/20"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981] text-[#10B981] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-white">
              Application Submitted
            </h3>
            <p className="text-gray-300 text-sm max-w-md mx-auto">
              JazakAllah Khair! Our verification board will review your credentials and issue your access credentials within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#5EC4F1] text-[#1D273E] font-bold text-sm"
            >
              Return to Portal
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#5EC4F1] mb-1">
                <Sparkles className="w-4 h-4" />
                SOVEREIGN UMMAH ONBOARDING
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-white">
                Join the United Mercy Alliance
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Select your participant role to unlock specialized portal features.
              </p>
            </div>

            {/* Role Selectors */}
            <div className="grid grid-cols-2 gap-3">
              {roles.map((r) => {
                const Icon = r.icon;
                const isSelected = selectedRole.toLowerCase() === r.name.toLowerCase();
                return (
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => setSelectedRole(r.name)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-[#23304B] border-[#5EC4F1] text-white shadow-lg shadow-[#5EC4F1]/20'
                        : 'bg-[#151E32] border-[#5EC4F1]/15 text-gray-300 hover:border-[#5EC4F1]/40'
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#5EC4F1] text-[#1D273E]' : 'bg-[#1D273E] text-[#5EC4F1]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{r.name}</div>
                      <div className="text-[10px] text-gray-400 line-clamp-1">{r.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-300 font-semibold mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Dr. Ahmed Hassan"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#151E32] border border-[#5EC4F1]/20 text-white text-xs focus:border-[#5EC4F1] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-300 font-semibold mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="ahmed@example.org"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#151E32] border border-[#5EC4F1]/20 text-white text-xs focus:border-[#5EC4F1] outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-300 font-semibold mb-1">Entity / Organization</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Crescent Care Trust"
                    value={formData.orgName}
                    onChange={(e) => setFormData({...formData, orgName: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#151E32] border border-[#5EC4F1]/20 text-white text-xs focus:border-[#5EC4F1] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-300 font-semibold mb-1">Country / Jurisdiction</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. United Kingdom"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#151E32] border border-[#5EC4F1]/20 text-white text-xs focus:border-[#5EC4F1] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#5EC4F1] hover:bg-[#43aadb] text-[#1D273E] font-bold text-sm shadow-xl shadow-[#5EC4F1]/25 transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Complete Onboarding Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};

/* ---------------- DONATE MODAL ---------------- */


export const DonateModal = ({ isOpen, onClose, campaign }) => {
  const activeCampaign = campaign || CAMPAIGNS_DATA[0];
  const [amount, setAmount] = useState(100);
  const [givingType, setGivingType] = useState('Zakat');
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const presetAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-[#1D273E] border border-[#5EC4F1]/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#151E32] text-gray-400 hover:text-white border border-[#5EC4F1]/20"
        >
          <X className="w-5 h-5" />
        </button>

        {completed ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981] text-[#10B981] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-white">
              Transfer Confirmed — Taqabbal Allah
            </h3>
            <p className="text-gray-300 text-sm max-w-sm mx-auto">
              Your contribution of <strong className="text-white">${amount}</strong> ({givingType}) has been dispatched to <strong>{activeCampaign.title}</strong> with zero platform fees.
            </p>
            <div className="p-3 rounded-xl bg-[#151E32] text-xs font-mono text-[#5EC4F1]">
              Audit Hash: #UM-TX-{Math.floor(100000 + Math.random() * 900000)}
            </div>
            <button
              onClick={() => {
                setCompleted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#5EC4F1] text-[#1D273E] font-bold text-sm"
            >
              Close Receipt
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#5EC4F1] uppercase px-2.5 py-1 rounded bg-[#151E32]">
                100% DIRECT CAPITAL TRANSFER
              </span>
              <h3 className="text-xl font-serif-luxury font-bold text-white mt-2">
                {activeCampaign.title}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Managed by {activeCampaign.organization} • {activeCampaign.country}
              </p>
            </div>

            {/* Giving Type Toggle */}
            <div className="flex bg-[#151E32] p-1 rounded-2xl border border-[#5EC4F1]/20">
              <button
                type="button"
                onClick={() => setGivingType('Zakat')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  givingType === 'Zakat' ? 'bg-[#5EC4F1] text-[#1D273E]' : 'text-gray-400 hover:text-white'
                }`}
              >
                Zakat Eligible
              </button>
              <button
                type="button"
                onClick={() => setGivingType('Sadaqah')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  givingType === 'Sadaqah' ? 'bg-[#5EC4F1] text-[#1D273E]' : 'text-gray-400 hover:text-white'
                }`}
              >
                Sadaqah / Voluntary
              </button>
            </div>

            {/* Amount Presets */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">Select Contribution Amount (USD)</label>
              <div className="grid grid-cols-5 gap-2 mb-3">
                {presetAmounts.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAmount(a)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                      amount === a
                        ? 'bg-[#5EC4F1] text-[#1D273E] border-[#5EC4F1]'
                        : 'bg-[#151E32] text-white border-[#5EC4F1]/15 hover:border-[#5EC4F1]/40'
                    }`}
                  >
                    ${a}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                <input 
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-[#151E32] border border-[#5EC4F1]/20 text-white font-mono text-sm focus:border-[#5EC4F1] outline-none"
                />
              </div>
            </div>

            {/* Direct Impact Banner */}
            <div className="p-3 rounded-xl bg-[#151E32] border border-[#5EC4F1]/20 text-xs text-gray-300 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#5EC4F1] shrink-0" />
              <span>United Mercy guarantees 100% of your ${amount} reaches ground operatives with zero administrative cut.</span>
            </div>

            <button
              onClick={() => setCompleted(true)}
              className="w-full py-4 rounded-xl bg-[#5EC4F1] hover:bg-[#43aadb] text-[#1D273E] font-bold text-sm shadow-xl shadow-[#5EC4F1]/25 transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-[#1D273E]" />
              <span>Confirm ${amount} {givingType} Transfer</span>
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

/* ---------------- SEARCH MODAL ---------------- */


export const SearchModal = ({ isOpen, onClose, onSelectCampaign }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedCampaigns = CAMPAIGNS_DATA.filter(
    c => c.title.toLowerCase().includes(query.toLowerCase()) ||
         c.country.toLowerCase().includes(query.toLowerCase()) ||
         c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-full max-w-2xl bg-[#1D273E] border border-[#5EC4F1]/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden space-y-4"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5EC4F1]" />
          <input 
            type="text"
            autoFocus
            placeholder="Search campaigns, regions (Sudan, Gaza), or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-[#151E32] border border-[#5EC4F1]/30 text-white placeholder-gray-400 focus:border-[#5EC4F1] outline-none text-sm"
          />
          <button 
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[#1D273E] text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
          {matchedCampaigns.length === 0 ? (
            <div className="text-center py-8 text-xs text-gray-400">
              No matching campaigns found for "{query}".
            </div>
          ) : (
            matchedCampaigns.map((c) => (
              <div 
                key={c.id}
                onClick={() => {
                  onSelectCampaign(c);
                  onClose();
                }}
                className="p-3 rounded-2xl bg-[#151E32] hover:bg-[#23304B] border border-[#5EC4F1]/15 hover:border-[#5EC4F1]/40 cursor-pointer transition-all flex items-center gap-4 group"
              >
                <img src={c.image} alt={c.title} className="w-12 h-12 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-[#5EC4F1] truncate">
                    {c.title}
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono">
                    {c.flag} {c.country} • {c.category}
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#5EC4F1]">
                  ${c.raisedAmount.toLocaleString()}
                </span>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};
