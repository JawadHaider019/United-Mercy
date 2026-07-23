import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { ChevronDown, HelpCircle, ShieldCheck, HeartHandshake, Building2, Users } from 'lucide-react';



export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does United Mercy connect Islamic Organizations worldwide?",
      answer: "Islamic Organizations create a comprehensive profile on United Mercy to share details, campaign budgets, images, and track real-time field progress. Organizations can collaborate directly with other verified Orgs globally to pool resources, co-fund initiatives, and share ground logistics.",
      category: "Organizations"
    },
    {
      question: "How can Donors contribute and find organization details?",
      answer: "Donors can browse live campaigns from registered organizations worldwide, filter by category and country, and donate directly via the external link provided or access verified banking details of the organization for direct transfer with 100% transparency.",
      category: "Donors"
    },
    {
      question: "How do Business Owners & Service Providers offer discounted services?",
      answer: "Business owners and ethical service providers can explore listed needs directly attached to active campaigns. By clicking the QUOTE button, businesses can offer free or discounted products and services directly to campaign leads.",
      category: "Businesses"
    },
    {
      question: "How do Volunteers join hands and contribute their skills?",
      answer: "Volunteers can find humanitarian causes that need their specific time, talents, or specialized skills. By clicking 'Join Hands', volunteers offer their services and open a direct chat with the Campaigner to coordinate their contribution.",
      category: "Volunteers"
    },
    {
      question: "How does the General Muslim Public stay informed?",
      answer: "The general Muslim public can follow active campaigns, receive real-time project updates, and stay connected with the Ummah Feed and community updates section directly on their Dashboard.",
      category: "Public"
    },
    {
      question: "Is there any administrative fee or leakage on direct donations?",
      answer: "No. United Mercy provides direct external links and verified organizational banking details so that capital flows directly from donors to registered campaigns with zero intermediary markup or hidden fees.",
      category: "General"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionTitle 
          badge="Frequently Asked Questions"
          title="Everything You Need to Know"
          subtitle="Clear answers on how United Mercy aligns organizations, donors, businesses, volunteers, and the global Muslim public."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-[#151E32] hover:text-[#0D5C3A] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#0D5C3A] flex items-center justify-center shrink-0 border border-emerald-100">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-serif-luxury text-base sm:text-lg">{faq.question}</span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-emerald-100 text-[#0D5C3A]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-600 font-sans-clean leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
