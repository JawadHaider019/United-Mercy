import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovementSection } from './components/MovementSection';
import { TrustedPartners } from './components/TrustedPartners';
import { VisionSection } from './components/VisionSection';
import { FaithValues } from './components/FaithValues';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorks } from './components/HowItWorks';
import { CampaignShowcase } from './components/CampaignShowcase';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { DonateModal } from './components/DonateModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [joinRole, setJoinRole] = useState(undefined);

  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleOpenJoinModal = (role) => {
    setJoinRole(role);
    setJoinModalOpen(true);
  };

  const handleOpenDonateModal = (campaign) => {
    setSelectedCampaign(campaign || null);
    setDonateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0284C7]/20 selection:text-[#0284C7] font-sans-clean overflow-x-hidden relative">

      {/* Sticky Luxury Navbar */}
      <Navbar
        onOpenJoinModal={handleOpenJoinModal}
        onOpenSearchModal={() => setSearchModalOpen(true)}
        onOpenDonateModal={() => handleOpenDonateModal(null)}
      />

      {/* Main Page Content Flow */}
      <main>
        {/* Massive Hero */}
        <Hero
          onOpenJoinModal={handleOpenJoinModal}
          onOpenDonateModal={() => handleOpenDonateModal(null)}
        />

        {/* Coordinated Movement & Interactive Arc Diagram Section */}
        <MovementSection
          onOpenJoinModal={handleOpenJoinModal}
        />

        {/* Trusted Partners Logo Cloud */}
        <TrustedPartners />

        {/* Faith Guided Quranic Values */}
        <FaithValues />
        {/* Global Architecture / Vision */}
        <VisionSection onOpenJoinModal={handleOpenJoinModal} />
        {/* Five Onboarding Steps */}

        <HowItWorks
        />

        {/* Features / Why United Mercy */}
        <FeaturesSection
          onOpenJoinModal={handleOpenJoinModal}
        />





        {/* Live Campaign Showcase */}
        <CampaignShowcase
          onSelectCampaign={(campaign) => handleOpenDonateModal(campaign)}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Large CTA Section */}
        <CTASection
          onOpenJoinModal={handleOpenJoinModal}
        />


      </main>

      {/* Minimal Luxury Footer */}
      <Footer
        onOpenJoinModal={handleOpenJoinModal}
        onOpenDonateModal={() => handleOpenDonateModal(null)}
      />

      {/* Interactive Modal Windows */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        defaultRole={joinRole}
      />

      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        campaign={selectedCampaign}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectCampaign={(campaign) => handleOpenDonateModal(campaign)}
      />

    </div>
  );
}
