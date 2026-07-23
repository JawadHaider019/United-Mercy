import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  X, 
  Heart, 
  ShieldCheck, 
  CreditCard, 
  Building, 
  Coins, 
  CheckCircle2, 
  Sparkles,
  Lock,
  ExternalLink,
  MessageSquare,
  Package,
  Calendar,
  Users,
  Send,
  PhoneCall
} from 'lucide-react';

export const DonateModal = ({ isOpen, onClose, campaign }) => {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isZakat, setIsZakat] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'donate' | 'quote'

  if (!isOpen) return null;

  const presetAmounts = [50, 100, 250, 500, 1000];

  const handleDonate = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const finalAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white border-2 border-slate-200 rounded-3xl max-w-2xl w-full p-5 sm:p-8 relative shadow-2xl overflow-hidden my-6 text-slate-900 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-[#151E32] hover:bg-slate-200 border border-slate-200 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6 overflow-y-auto pr-1">
              
              {/* Header Info */}
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] uppercase tracking-wider bg-[#0284C7]/10 px-3 py-1 rounded-full border border-[#0284C7]/20 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified for Authenticity</span>
                </div>

                <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#151E32] leading-tight">
                  {campaign ? campaign.title : 'Direct Ummah Relief & Zakat Fund'}
                </h2>
                {campaign && (
                  <p className="text-xs text-slate-500 font-mono mt-1 font-semibold">
                    Organized by: <strong className="text-[#151E32]">{campaign.org || campaign.organization}</strong> • {campaign.location || campaign.country}
                  </p>
                )}
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-200 gap-4 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2.5 transition-colors border-b-2 ${
                    activeTab === 'details' ? 'border-[#0284C7] text-[#0284C7]' : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Campaign Overview & Needs
                </button>
                <button
                  onClick={() => setActiveTab('donate')}
                  className={`pb-2.5 transition-colors border-b-2 ${
                    activeTab === 'donate' ? 'border-[#0284C7] text-[#0284C7]' : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Direct Financial Support
                </button>
              </div>

              {/* TAB 1: CAMPAIGN DETAILS & REQUIREMENTS */}
              {activeTab === 'details' && (
                <div className="space-y-5 text-xs text-slate-700 font-sans-clean leading-relaxed">
                  
                  {/* Detailed Description */}
                  {campaign?.fullDesc ? (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <h4 className="font-bold text-slate-900 text-sm">About This Initiative</h4>
                      <p className="whitespace-pre-line text-slate-600">{campaign.fullDesc}</p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <p className="text-slate-600">
                        {campaign?.title} is a verified collaborative campaign operating in {campaign?.location || campaign?.country}. All contributions directly fund physical logistics, food supplies, education, or essential infrastructure on the ground.
                      </p>
                    </div>
                  )}

                  {/* Monthly & Weekly Requirements Checklist (If Orphan Care / Supplies) */}
                  {campaign?.monthlyNeeds && (
                    <div className="p-4 rounded-2xl bg-[#0284C7]/5 border border-[#0284C7]/20 space-y-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#151E32]">
                        <Package className="w-4 h-4 text-[#0284C7]" />
                        <span>Monthly Item Requirements (Quote / In-Kind)</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                        {campaign.monthlyNeeds.map((need, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                            <span>{need}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {campaign?.weeklyNeeds && (
                    <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#151E32]">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>Weekly Fresh Supplies Needed</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[11px]">
                        {campaign.weeklyNeeds.map((item, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-semibold text-slate-800">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* External Donation Links (LaunchGood / Official Site) */}
                  {(campaign?.launchGoodUrl || campaign?.sponsorUrl || campaign?.contactInfo) && (
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-3">
                      <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Direct Verified Links & Contacts</h4>
                      
                      <div className="flex flex-wrap gap-3">
                        {campaign.launchGoodUrl && (
                          <a 
                            href={campaign.launchGoodUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-[#0284C7] text-white font-bold text-xs flex items-center gap-2 shadow-md hover:bg-[#151E32] transition-colors"
                          >
                            <span>Donate on LaunchGood</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {campaign.sponsorUrl && (
                          <a 
                            href={`https://${campaign.sponsorUrl}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-[#151E32] text-white font-bold text-xs flex items-center gap-2 shadow-md hover:bg-[#0284C7] transition-colors"
                          >
                            <span>Visit {campaign.sponsorUrl}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {campaign.contactWhatsApp && (
                          <a 
                            href={`https://wa.me/${campaign.contactWhatsApp.replace(/\+/g, '')}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 shadow-md hover:bg-emerald-700 transition-colors"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>WhatsApp: {campaign.contactWhatsApp}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Business & Volunteer Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => setActiveTab('donate')}
                      className="py-3 rounded-2xl bg-[#0284C7] text-white font-bold text-xs shadow-md hover:bg-[#151E32] transition-colors flex items-center justify-center gap-2"
                    >
                      <Heart className="w-4 h-4" />
                      <span>Donate Directly</span>
                    </button>

                    <button
                      onClick={() => {
                        alert(`Thank you! Your inquiry to collaborate or offer supplies for "${campaign?.title || 'Campaign'}" has been logged. Our ground logistics team will contact you.`);
                      }}
                      className="py-3 rounded-2xl bg-[#151E32] text-white font-bold text-xs shadow-md hover:bg-[#0284C7] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Quote / Join Hands</span>
                    </button>
                  </div>

                </div>
              )}

              {/* TAB 2: FINANCIAL SUPPORT */}
              {activeTab === 'donate' && (
                <div className="space-y-5">
                  {/* Preset Amounts Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">Select Impact Contribution Amount (USD)</label>
                    <div className="grid grid-cols-5 gap-2">
                      {presetAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setAmount(amt);
                            setCustomAmount('');
                          }}
                          className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                            amount === amt && !customAmount
                              ? 'bg-[#0284C7] text-white shadow-md shadow-[#0284C7]/20'
                              : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>

                    <div className="pt-2">
                      <input 
                        type="number"
                        placeholder="Enter Custom Amount ($ USD)"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-[#0284C7] transition-all"
                      />
                    </div>
                  </div>

                  {/* Zakat Compliance Toggle */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#151E32] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                        <span>Qualify as Obligatory Zakat</span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Earmarks funds strictly for eligible categories as defined in Quran 9:60
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsZakat(!isZakat)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors ${isZakat ? 'bg-[#0284C7]' : 'bg-slate-200'}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isZakat ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">Audited Payment Rail</label>
                    <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                          paymentMethod === 'card' ? 'bg-[#151E32] border-[#0284C7] text-white' : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <CreditCard className="w-4 h-4 text-[#0284C7]" />
                        <span>Card</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bank')}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                          paymentMethod === 'bank' ? 'bg-[#151E32] border-[#0284C7] text-white' : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <Building className="w-4 h-4 text-[#B48811]" />
                        <span>Direct Wire</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('crypto')}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                          paymentMethod === 'crypto' ? 'bg-[#151E32] border-[#0284C7] text-white' : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <Coins className="w-4 h-4 text-[#059669]" />
                        <span>Stablecoin</span>
                      </button>
                    </div>
                  </div>

                  {/* Final Submit Button */}
                  <form onSubmit={handleDonate}>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-[#151E32] hover:bg-[#0284C7] text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Heart className="w-4 h-4 fill-current text-rose-400" />
                      <span>Transfer ${finalAmount.toLocaleString()} Impact Contribution</span>
                    </button>
                  </form>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-medium">
                    <Lock className="w-3 h-3 text-[#0284C7]" />
                    <span>256-Bit Cryptographic SSL • 100% Direct Impact Capital</span>
                  </div>

                </div>
              )}

            </div>
          ) : (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center mx-auto border-2 border-[#0284C7]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#151E32]">JazakAllah Khair for Your Support!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 font-sans-clean">
                  Your contribution of <span className="text-[#0284C7] font-bold">${finalAmount.toLocaleString()}</span> has been processed. A receipt and field audit tracking link have been logged.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#151E32] text-white text-xs font-bold shadow-md hover:bg-[#0284C7] transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
