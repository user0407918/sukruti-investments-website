import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MessageCircle, MapPin, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { DISTRIBUTOR_INFO } from '../types';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const anchorPrefix = isHomePage ? '' : '/';

  return (
    <footer className="bg-[#123e35] text-[#c4d5cc] pt-16 pb-12 border-t border-[#205c4d]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#205c4d]/80">
          {/* Column 1: Brand & Contact (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md">
                  <img
                    src="/assets/aistudio/image_3e7bf89a.png"
                    alt="Sukriti Investments Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#fffefa] tracking-wide">
                    {DISTRIBUTOR_INFO.brandName}
                  </h3>
                  <p className="text-xs text-[#a8d8c8] font-medium tracking-wider uppercase">
                    {DISTRIBUTOR_INFO.tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-[#c4d5cc] mb-5">
                <p className="text-sm font-medium text-[#fffefa]">{DISTRIBUTOR_INFO.name}</p>
                <p className="text-[#a8d8c8]">{DISTRIBUTOR_INFO.registrationStatus}</p>
                <p className="font-mono text-[11px] text-[#a8d8c8]/90">
                  AMFI Registration: <strong className="text-white">{DISTRIBUTOR_INFO.arn}</strong>
                </p>
                <p className="font-mono text-[11px] text-[#c4d5cc]">
                  GSTIN: {DISTRIBUTOR_INFO.gstin}
                </p>
              </div>

              <div className="flex items-start gap-2 text-xs text-[#c4d5cc]/80 mb-6 max-w-sm">
                <MapPin className="w-4 h-4 text-[#a8d8c8] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{DISTRIBUTOR_INFO.address}</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href={`tel:${DISTRIBUTOR_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#205c4d] hover:bg-[#00B7A5] text-[#fffefa] text-xs font-medium transition-colors"
                title="Call Avinash Bhandari"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/919828535035`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#205c4d] hover:bg-[#25D366] text-[#fffefa] text-xs font-medium transition-colors"
                title="WhatsApp Avinash Bhandari"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${DISTRIBUTOR_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#205c4d] hover:bg-[#00B7A5] text-[#fffefa] text-xs font-medium transition-colors"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Column 2: Our Practice (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-serif font-medium text-[#fffefa] uppercase tracking-wider mb-4 pb-1 border-b border-[#205c4d]">
              Our Practice
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`${anchorPrefix}#philosophy`}
                  className="hover:text-[#a8d8c8] transition-colors flex items-center gap-1"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href={`${anchorPrefix}#services`}
                  className="hover:text-[#a8d8c8] transition-colors flex items-center gap-1"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href={`${anchorPrefix}#services`}
                  className="hover:text-[#a8d8c8] transition-colors flex items-center gap-1"
                >
                  Mutual Funds
                </a>
              </li>
              <li>
                <a
                  href={`${anchorPrefix}#services`}
                  className="hover:text-[#a8d8c8] transition-colors flex items-center gap-1"
                >
                  Specialised Funds (SIF)
                </a>
              </li>
              <li>
                <a
                  href={`${anchorPrefix}#journey`}
                  className="hover:text-[#a8d8c8] transition-colors flex items-center gap-1"
                >
                  How We Work
                </a>
              </li>
              <li>
                <a
                  href={`${anchorPrefix}#contact`}
                  className="hover:text-[#a8d8c8] transition-colors flex items-center gap-1"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Disclosures & Policies (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-serif font-medium text-[#fffefa] uppercase tracking-wider mb-4 pb-1 border-b border-[#205c4d]">
              Disclosures & Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/privacy-policy" className="hover:text-[#a8d8c8] transition-colors">
                  1. Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-[#a8d8c8] transition-colors">
                  2. Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/risk-disclaimer" className="hover:text-[#a8d8c8] transition-colors">
                  3. Risk Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/commission-disclosure" className="hover:text-[#a8d8c8] transition-colors">
                  4. Commission Disclosure
                </Link>
              </li>
              <li>
                <Link to="/grievance-redressal" className="hover:text-[#a8d8c8] transition-colors">
                  5. Grievance Redressal
                </Link>
              </li>
              <li>
                <Link to="/registration-disclosure" className="hover:text-[#a8d8c8] transition-colors">
                  6. Registration Disclosure
                </Link>
              </li>
              <li>
                <Link to="/investor-charter" className="hover:text-[#a8d8c8] transition-colors">
                  7. Investor Charter
                </Link>
              </li>
              <li>
                <Link to="/kyc-onboarding" className="hover:text-[#a8d8c8] transition-colors">
                  8. KYC & Onboarding Policy
                </Link>
              </li>
              <li>
                <Link to="/transaction-policy" className="hover:text-[#a8d8c8] transition-colors">
                  9. Transaction Policy
                </Link>
              </li>
              <li>
                <Link to="/fund-recommendation-policy" className="hover:text-[#a8d8c8] transition-colors">
                  10. Fund Recommendation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclosure Panel */}
        <div className="my-8 p-6 rounded-2xl bg-[#103D3B] border border-[#205c4d] text-xs leading-relaxed text-[#c4d5cc] space-y-3">
          <div className="flex items-center gap-2 text-[#a8d8c8] font-medium text-sm mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Important Regulatory Disclosures</span>
          </div>

          <p>
            <strong className="text-[#fffefa]">Market Risk:</strong> Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully.
          </p>
          <p>
            <strong className="text-[#fffefa]">Specialised Investment Funds (SIF):</strong> SIF investments involve relatively higher risk, including potential loss of capital, liquidity risk and market volatility. Read the relevant scheme documents carefully before investing.
          </p>
          <p>
            <strong className="text-[#fffefa]">Distributor Status:</strong> Avinash Bhandari is NOT a SEBI-registered Investment Adviser. Guidance is incidental to mutual fund distribution, and no fee is charged for it.
          </p>
          <p>
            <strong className="text-[#fffefa]">Commission Disclosure:</strong> Avinash Bhandari receives trail commission from Asset Management Companies (AMCs) on Regular Plans; commission is part of the scheme's Base Expense Ratio (BER) and does not add to investor cost.
          </p>
          <div className="pt-2 border-t border-[#205c4d] flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px]">
            <span className="text-[#a8d8c8] font-medium">Investor Grievance Escalations:</span>
            <a
              href={DISTRIBUTOR_INFO.scoresUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline inline-flex items-center gap-1"
            >
              <span>SEBI SCORES ({DISTRIBUTOR_INFO.scoresUrl})</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={DISTRIBUTOR_INFO.smartOdrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline inline-flex items-center gap-1"
            >
              <span>SMART ODR ({DISTRIBUTOR_INFO.smartOdrUrl})</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Quick Legal Links & Replay Animation Option */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#c4d5cc]/80 gap-4">
          <p>© {currentYear} Sukriti Investments. All rights reserved. AMFI Registered ARN-31739.</p>

          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/risk-disclaimer" className="hover:text-white transition-colors">
              Risk Disclaimer
            </Link>

            {onReplayIntro && (
              <button
                type="button"
                onClick={onReplayIntro}
                className="inline-flex items-center gap-1 text-[#a8d8c8] hover:text-white text-xs transition-colors cursor-pointer"
                title="Replay Logo Reveal Animation"
              >
                <Sparkles className="w-3 h-3" />
                <span>Replay Intro</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
