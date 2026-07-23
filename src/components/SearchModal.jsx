import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAMPAIGNS_DATA, PARTNERS_DATA } from '../data/mockData';

import { Search, X, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';



export const SearchModal = ({ isOpen, onClose, onSelectCampaign }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredCampaigns = query.trim()
    ? CAMPAIGNS_DATA.filter(
        c =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.country.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase()) ||
          c.organization.toLowerCase().includes(query.toLowerCase())
      )
    : CAMPAIGNS_DATA.slice(0, 3);

  const filteredPartners = query.trim()
    ? PARTNERS_DATA.filter(
        p =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.location.toLowerCase().includes(query.toLowerCase())
      )
    : PARTNERS_DATA.slice(0, 3);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white border-2 border-slate-200 rounded-3xl max-w-2xl w-full p-6 relative shadow-2xl overflow-hidden text-slate-900"
        >
          {/* Search Bar Input */}
          <div className="relative flex items-center mb-6">
            <Search className="w-5 h-5 text-[#0284C7] absolute left-4" />
            <input 
              type="text"
              autoFocus
              placeholder="Search campaigns, countries (Sudan, Gaza, Somalia), or charities..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#0284C7] transition-all"
            />
            <button
              onClick={onClose}
              className="absolute right-3 p-1.5 rounded-full text-slate-400 hover:text-[#151E32]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Results Container */}
          <div className="max-h-[60vh] overflow-y-auto space-y-6 pr-1">
            
            {/* Campaigns Results */}
            <div>
              <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-3">
                Live Verified Campaigns ({filteredCampaigns.length})
              </div>
              <div className="space-y-2">
                {filteredCampaigns.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => {
                      onClose();
                      onSelectCampaign(c);
                    }}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-[#0284C7] transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{c.flag}</span>
                      <div>
                        <div className="text-xs font-bold text-[#151E32] group-hover:text-[#0284C7] transition-colors">
                          {c.title}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium">
                          {c.organization} • {c.country} • ${c.raisedAmount.toLocaleString()} raised
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Organizations Results */}
            <div>
              <div className="text-xs font-bold text-[#B48811] uppercase tracking-wider mb-3">
                Verified Organization Network ({filteredPartners.length})
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredPartners.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#151E32]">{p.name}</div>
                      <div className="text-[10px] text-slate-500">{p.category} • {p.location}</div>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
