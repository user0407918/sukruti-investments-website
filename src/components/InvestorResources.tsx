import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export const InvestorResources: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'KYC and risk profiling',
      desc: 'Before any investment can be placed, identity and address proofs are verified via KRAs, and the investor completes a four-question risk profiling assessment.',
      link: '/kyc-onboarding',
      linkText: 'View Onboarding Policy',
    },
    {
      num: '02',
      title: 'Suitability-based scheme selection',
      desc: 'Schemes are chosen from empanelled AMCs strictly matching the investor’s risk category, investment horizon (<3Y, 3-5Y, >5Y), and Scheme Riskometer.',
      link: '/fund-recommendation-policy',
      linkText: 'View Suitability Matrix',
    },
    {
      num: '03',
      title: 'Commission disclosure',
      desc: 'Trail commissions paid by AMCs as part of the scheme Base Expense Ratio (BER) are transparently disclosed and acknowledged before transactions.',
      link: '/commission-disclosure',
      linkText: 'Read Commission Policy',
    },
    {
      num: '04',
      title: 'Periodic portfolio reviews',
      desc: 'Annual reviews assess whether current holdings still align with risk parameters, benchmark performance, and evolving family milestones.',
      link: '/transaction-policy',
      linkText: 'Learn about Portfolio Reviews',
    },
  ];

  return (
    <section id="resources" className="py-24 sm:py-32 bg-[#F7F8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-[#00B7A5]" />
              <span className="text-xs uppercase tracking-widest text-[#087F7C] font-semibold">
                Investor Education
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#103D3B] leading-[1.2] mb-6">
              Responsible investing starts with the basics.
            </h2>

            <p className="text-base text-[#172321]/80 leading-relaxed mb-8">
              A well-structured mutual fund investment process protects investor interests at every stage. We operate with complete regulatory adherence so you always understand where, why, and how your wealth is deployed.
            </p>

            <div className="space-y-3">
              <Link
                to="/investor-charter"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#103D3B] hover:text-[#00B7A5] transition-colors"
              >
                <span>Read Official Investor Charter</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <br />
              <Link
                to="/important-links"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#087F7C] hover:text-[#00B7A5] transition-colors"
              >
                <span>Access SEBI & AMFI Regulatory Resources</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Steps Vertical List with Numbered Markers (No Cards) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#DFE6DF] border-y border-[#DFE6DF]">
              {steps.map((step) => (
                <div key={step.num} className="py-7 group">
                  <div className="flex items-start gap-5 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#00B7A5] pt-0.5">
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#103D3B] font-normal mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#707B75] leading-relaxed mb-3">
                        {step.desc}
                      </p>
                      <Link
                        to={step.link}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F7C] hover:text-[#103D3B] uppercase tracking-wider transition-colors"
                      >
                        <span>{step.linkText}</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
