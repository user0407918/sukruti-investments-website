import React from 'react';
import { HomeHero } from '../components/HomeHero';
import { CredibilityStrip } from '../components/CredibilityStrip';
import { PhilosophySection } from '../components/PhilosophySection';
import { FinancialJourney } from '../components/FinancialJourney';
import { ServicesSection } from '../components/ServicesSection';
import { InvestorResources } from '../components/InvestorResources';
import { RiskDisclosuresPanel } from '../components/RiskDisclosuresPanel';
import { ContactSection } from '../components/ContactSection';
import { GrievanceSection } from '../components/GrievanceSection';

export const HomePage: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-hidden">
      {/* B. Hero section */}
      <HomeHero />

      {/* C. Credibility strip */}
      <CredibilityStrip />

      {/* D. Philosophy section */}
      <PhilosophySection />

      {/* E. Signature financial journey */}
      <FinancialJourney />

      {/* F. Services section (2 horizontal rows) */}
      <ServicesSection />

      {/* G. Investor resources and process (4 steps) */}
      <InvestorResources />

      {/* H. Risk disclosures */}
      <RiskDisclosuresPanel />

      {/* I. Contact section */}
      <ContactSection />

      {/* J. Grievance redressal */}
      <GrievanceSection />
    </main>
  );
};
