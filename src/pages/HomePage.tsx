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
      <div data-reveal="left"><HomeHero /></div>

      {/* C. Credibility strip */}
      <div data-reveal="up" data-reveal-delay="1"><CredibilityStrip /></div>

      {/* D. Philosophy section */}
      <div data-reveal="up"><PhilosophySection /></div>

      {/* E. Signature financial journey */}
      <div data-reveal="up" data-reveal-delay="1"><FinancialJourney /></div>

      {/* F. Services section (2 horizontal rows) */}
      <div data-reveal="up"><ServicesSection /></div>

      {/* G. Investor resources and process (4 steps) */}
      <div data-reveal="up" data-reveal-delay="1"><InvestorResources /></div>

      {/* H. Risk disclosures */}
      <div data-reveal="up"><RiskDisclosuresPanel /></div>

      {/* I. Contact section */}
      <div data-reveal="up" data-reveal-delay="1"><ContactSection /></div>

      {/* J. Grievance redressal */}
      <div data-reveal="up"><GrievanceSection /></div>
    </main>
  );
};
