import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  HeartHandshake, 
  Briefcase, 
  Users, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';



export const JoinModal = ({ isOpen, onClose, defaultRole }) => {
  const [selectedRole, setSelectedRole] = useState('Organization');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orgName: '',
    country: 'United Kingdom',
    phone: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultRole) {
      if (defaultRole.toLowerCase().includes('donor')) setSelectedRole('Donor');
      else if (defaultRole.toLowerCase().includes('business')) setSelectedRole('Business');
      else if (defaultRole.toLowerCase().includes('volunteer')) setSelectedRole('Volunteer');
      else setSelectedRole('Organization');
    }
  }, [defaultRole, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const roles = [
    { id: 'Organization', title: 'Humanitarian Charity', desc: 'Seeking global audit verification & funding rails', icon: Building2 },
    { id: 'Donor', title: 'Major Donor / Zakat Fund', desc: 'Direct 100% impact transfers & milestone tracking', icon: HeartHandshake },
    { id: 'Business', title: 'Ethical Corporation', desc: 'CSR integration & employee Zakat match', icon: Briefcase },
    { id: 'Volunteer', title: 'Specialized Volunteer', desc: 'Medical, technical & logistical field deployment', icon: Users },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white border-2 border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden my-8 text-slate-900"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-[#151E32] hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] uppercase tracking-wider bg-[#0284C7]/10 px-3 py-1 rounded-full border border-[#0284C7]/20 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Onboarding Portal</span>
                </div>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#151E32]">
                  Join the United Mercy Network
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-sans-clean mt-1">
                  Select your institutional capacity to initiate audit verification or donor access.
                </p>
              </div>

              {/* Role Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roles.map((role) => {
                  const IconComp = role.icon;
                  const isSelected = selectedRole === role.id;
                  return (
                    <div
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#151E32] text-white border-[#0284C7] shadow-lg shadow-[#151E32]/20'
                          : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-[#0284C7]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#0284C7] text-white' : 'bg-white text-[#0284C7] border border-slate-200'}`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-[#151E32]'}`}>{role.title}</span>
                      </div>
                      <p className={`text-[11px] line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>{role.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Dr. Yousef Al-Mansoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-[#0284C7] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Official Email</label>
                    <input 
                      type="email"
                      required
                      placeholder="name@organization.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-[#0284C7] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Entity / Organization Name</label>
                    <input 
                      type="text"
                      placeholder="e.g. Bayt Al-Amanah Trust"
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-[#0284C7] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Primary Country</label>
                    <input 
                      type="text"
                      placeholder="e.g. Qatar / United Kingdom / Turkey"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-[#0284C7] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Operational Overview / Field Capability</label>
                  <textarea 
                    rows={3}
                    placeholder="Briefly describe your humanitarian focus, Zakat allocation needs, or field capabilities..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-[#0284C7] transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-[#151E32] hover:bg-[#0284C7] text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Institutional Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

            </div>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center mx-auto border-2 border-[#0284C7]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#151E32]">Application Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 font-sans-clean">
                  JazakAllah Khair {formData.name}. Our Governance & Onboarding Board has received your submission for <span className="text-[#0284C7] font-bold">{selectedRole}</span>. An audit protocol officer will contact you within 24 hours.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#151E32] text-white text-xs font-bold shadow-md hover:bg-[#0284C7] transition-all"
              >
                Return to Dashboard
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
