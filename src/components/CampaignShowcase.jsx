import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Heart,
  Clock,
  Users,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const CampaignShowcase = ({ onSelectCampaign, onSelectCampaignToDonate }) => {
  const handleSelect = onSelectCampaign || onSelectCampaignToDonate;
  const [selectedCategory, setSelectedCategory] = useState('All');

  // EXACT 9 COLLABORATIVE CAMPAIGNS WITH FULL DETAILS & REQUIREMENTS
  const CAMPAIGN_ITEMS = [
    {
      id: 'c1',
      category: 'Orphan Care',
      title: 'Support Orphan Care In Lilongwe',
      org: 'An Nur Charity Foundation Limited (in collab with Imam Development Program)',
      location: 'Lilongwe, Malawi',
      targetAmount: 50000,
      raisedAmount: 38500,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      daysLeft: 12,
      donorsCount: 420,
      fullDesc: `Help Support a Thriving Madrasah for Orphans in Malawi. Run by Imam Development Program in collaboration with An Nur Charity.

What We Have Achieved:
• A Fully Functioning Boarding Madrasah – Operating as a boarding school for Islamic and secular education.
• Increased Care – Caring for 70 orphans, more than double our initial numbers.
• Quality Secular Education – Enrolled in private Muslim-owned schools.
• Regular Meals Provided – Monthly meals consistently met.
• Essential Staffing – Cook and cleaner hired for a clean environment.`,
      monthlyNeeds: [
        'Beans 36 kg',
        'BUTEX SOAP (SMALL) 1 carton',
        'CHARCOAL 3 heaps',
        'COLGATE SMALL 2 dozen',
        'COOKING OIL 5L (4 bottles)',
        'CLERE LOTION COCO BUTTER 1 carton',
        'Glycerine (bodycare-small) 1 carton',
        'MAIZE FLOUR 25KG (16 bags)',
        'MATCHES (10Pcs/Box) 1 box',
        'Likuni Phala 25kg (5 bags)',
        'MILK 10 Litres',
        'PEANUT BUTTER (5 bottles)',
        'RICE 400kg',
        'SALT 10kg',
        'SOYA PIECES (4 bales)',
        'SUGAR 50kg',
        'TEA BAGS (2 boxes)',
        'WASHING POWDER 15KG (2 packs)',
        'MUTTON CLOTH 1KG'
      ],
      weeklyNeeds: [
        'BREAD 11 loaves',
        'CASAVA 1 heap',
        'CHICKEN 10 pcs',
        '5 trays EGGS',
        'FISH 18 dozen',
        'VEGETABLES 3 bundles',
        'TOMATOES 1 crate',
        'ONIONS 1 bag'
      ],
      launchGoodUrl: 'https://www.launchgood.com/v4/campaign/help_us_nourish_70_orphans_sustain_their_food_amp_future',
      sponsorUrl: 'imamdp.org/orphanage',
    },
    {
      id: 'c2',
      category: 'Education',
      title: 'Writing Materials For National Exams Candidates',
      org: 'Organized by Yasin Yusuf Sanudi',
      location: 'Malawi',
      targetAmount: 25000,
      raisedAmount: 19800,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
      daysLeft: 8,
      donorsCount: 215,
      fullDesc: `Reaching out to learners sitting for this year's national exams with exam coaching sessions and distribution of writing materials.

Target Allocation of $500:
• $250 towards Pens
• $100 towards Pencils
• $150 towards special inspirational gifts for top performers during District mock exams.`,
    },
    {
      id: 'c3',
      category: 'Education',
      title: 'New Muslim Education Programme',
      org: 'iERA - Malawi',
      location: 'Malawi',
      targetAmount: 30000,
      raisedAmount: 24500,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop',
      daysLeft: 15,
      donorsCount: 340,
      fullDesc: `Support New Muslims on Their Journey to Islam. We have new Muslims who recently took Shahada and are beginning their enrollment into our education programme covering:
- 5 Pillars of Islam (Shahada, Prayer, Fasting, Zakat, Hajj)
- 6 Articles of Faith (Allah, Angels, Books, Prophets, Day of Judgment, Divine Decree)
- Basic Fiqh (Wudhu, Salat, Fasting)
- Quran & Surah Memorisation
- Islamic Social System & Brotherhood

Sponsorship Tiers:
• £100: Sponsor education & feeding of 2 new Muslims for 1 month
• £250: Sponsor education & feeding of 5 new Muslims for 1 month
• £500: Sponsor education & feeding of 10 new Muslims for 1 month`,
      launchGoodUrl: 'https://www.launchgood.com/v4/campaign/new_muslim_funds_ramadan_challenge',
    },
    {
      id: 'c4',
      category: 'Community Development',
      title: 'Building A Learning Center And Masjid For Yumbe’s Future',
      org: 'Organized by Lifetime Learning',
      location: 'Yumbe District, Uganda',
      targetAmount: 75000,
      raisedAmount: 56200,
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop',
      daysLeft: 20,
      donorsCount: 512,
      fullDesc: `We invite you to be part of a powerful initiative to uplift the youth and Muslim community of Yumbe District, Uganda. 

This campaign supports the construction of the Lifetime Innovation Learning Centre (LILC) — a space dedicated to equipping young people and school dropouts with vital digital and entrepreneurial skills alongside a community masjid for spiritual growth.`,
    },
    {
      id: 'c5',
      category: 'Education',
      title: 'COMPUTERS, LAPTOPS AND PROJECTORS',
      org: 'Organized by Iqbal Pandor (Iqra University)',
      location: 'Malawi',
      targetAmount: 40000,
      raisedAmount: 31000,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      daysLeft: 14,
      donorsCount: 280,
      fullDesc: `Iqra University is a donor-sponsored university catering for underprivileged mature students offering Diploma and Degree courses.

Urgent In-Kind Need:
• 40 "all-in-one" PCs
• 20 Laptops
• 20 Projectors

We do not necessarily need cash; PCs, laptops, and projectors can be donated directly in kind or sold at reasonable cost.`,
    },
    {
      id: 'c6',
      category: 'Orphan Care',
      title: 'Orphan Care In Bangladesh – Give Them Hope, Give Them A Future',
      org: 'Jabal-e-Nur Development Society (JDS) / Md. Barkat Ullah',
      location: 'Kushtia District, Bangladesh',
      targetAmount: 60000,
      raisedAmount: 48900,
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop',
      daysLeft: 9,
      donorsCount: 610,
      fullDesc: `Providing safe shelter, nutritious meals, quality education, health services, and emotional support to over 100 orphaned children in Kushtia District.

What Your Support Can Do:
• $30/month: Provides food, school supplies, and healthcare for 1 orphan
• $100: Sponsors a child's full educational expenses for a full year
• $500: Supports our orphanage's full operational costs for a month`,
    },
    {
      id: 'c7',
      category: 'Education',
      title: '💡 Help New Muslims Learn, Pray, And Stay Connected To Islam.',
      org: 'iERA - Malawi',
      location: 'Malawi',
      targetAmount: 35000,
      raisedAmount: 29400,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop',
      daysLeft: 18,
      donorsCount: 390,
      fullDesc: `Hundreds embraced Islam in Malawi — now they need support to grow in faith. 🕌

Help them learn, pray, and stay connected to Islam.
Donate £50, £100, or £150 — your charity today strengthens a whole community of new Muslims.`,
      launchGoodUrl: 'https://LaunchGood.com/iERAMalawiDH',
    },
    {
      id: 'c8',
      category: 'Water Access',
      title: 'Water Well Construction',
      org: 'Al Rayyan Charity Organisation',
      location: 'Uganda',
      targetAmount: 45000,
      raisedAmount: 41200,
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop',
      daysLeft: 5,
      donorsCount: 780,
      fullDesc: `Clean water is the foundation of life and health, yet for millions in Uganda, this essential need remains unmet. 

By providing clean water, you offer a life-changing gift that saves lives and fosters community health.

Contact & Inquiries:
WhatsApp: +256786774280
Email: alrayyancharityorg@gmail.com`,
      contactWhatsApp: '+256786774280',
    },
    {
      id: 'c9',
      category: 'Mosque Construction',
      title: 'Masjid Construction & Expansion',
      org: 'Al Rayyan Charity Organisation',
      location: 'Uganda',
      targetAmount: 120000,
      raisedAmount: 98000,
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800&auto=format&fit=crop',
      daysLeft: 25,
      donorsCount: 890,
      fullDesc: `"The mosques of Allah shall be maintained only by those who believe in Allah and the Last Day..." [Surah At-Tawbah 9:18]

The Messenger of Allah ﷺ said: "Whoever builds a mosque for the sake of Allah, like a sparrow's nest or even smaller, Allah will build for him a house in Paradise."

Contact & Inquiries:
WhatsApp: +256786774280
Email: alrayyancharityorg@gmail.com`,
      contactWhatsApp: '+256786774280',
    },
  ];

  const categories = ['All', 'Orphan Care', 'Education', 'Community Development', 'Water Access', 'Mosque Construction'];

  const filteredCampaigns = selectedCategory === 'All'
    ? CAMPAIGN_ITEMS
    : CAMPAIGN_ITEMS.filter(c => c.category === selectedCategory);

  return (
    <section id="campaigns" className="py-20 sm:py-24 relative overflow-hidden bg-[#5EC4F1]/30 border-y border-[#0284C7]/15">
      {/* Subtle Islamic Geometric Mesh Background */}
      <div className="absolute inset-0 islamic-pattern-bg opacity-15 pointer-events-none" />

      {/* Light Radial Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38BDF8]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 mb-3 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#0284C7]" />
              <span className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-wider">
                Audited Field Initiatives
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#151E32]">
              Collaborative Campaigns <span className="text-[#0284C7]">in Action</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md font-sans-clean font-normal">
            Every listed initiative is thoroughly vetted, monitored by ground logistics partners, and reports 100% direct capital transfers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${selectedCategory === cat
                  ? 'bg-[#0284C7] text-white shadow-md shadow-[#0284C7]/20 font-bold scale-105'
                  : 'bg-white text-slate-700 hover:text-[#151E32] hover:bg-slate-100 border border-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Campaign Cards Grid (Exact 9 Items, 3 in a Row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredCampaigns.map((campaign) => {
              const progressPercentage = Math.min(100, Math.round((campaign.raisedAmount / campaign.targetAmount) * 100));

              return (
                <motion.div
                  key={campaign.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl bg-white border border-slate-200 hover:border-[#0284C7] transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden flex flex-col justify-between group cursor-pointer"
                  onClick={() => handleSelect && handleSelect(campaign)}
                >
                  {/* Card Image Header */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-white/90 text-[#151E32] backdrop-blur-md border border-slate-200">
                        {campaign.category}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#10B981] text-white font-mono font-bold shadow-sm flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                      <MapPin className="w-3.5 h-3.5 text-[#5EC4F1]" />
                      <span className="font-semibold">{campaign.location}</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-[#0284C7] font-mono mb-1 font-bold line-clamp-1">
                        {campaign.org}
                      </div>

                      <h3 className="text-lg font-serif-luxury font-bold text-[#151E32] group-hover:text-[#0284C7] transition-colors line-clamp-2 leading-snug">
                        {campaign.title}
                      </h3>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect && handleSelect(campaign);
                      }}
                      className="w-full py-3 rounded-xl bg-[#151E32] hover:bg-[#0284C7] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 group/btn shadow-md cursor-pointer"
                    >
                      <span>View Details & Support</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
