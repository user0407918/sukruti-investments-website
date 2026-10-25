import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';

interface Stage {
  number: string;
  tag: string;
  heading: string;
  summary: string;
  details: string[];
}

export const FinancialJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages: Stage[] = [
    {
      number: '01',
      tag: 'START WITH YOUR WHY',
      heading: 'Start with your why.',
      summary:
        'The process begins by understanding your personal goals, life stage, time horizon, and comfortable risk parameters through disciplined profiling before any financial product is considered.',
      details: [
        'Structured 4-question risk assessment profiling',
        'Clarification of short-term vs long-term family priorities',
        'Evaluation of liquidity and emergency requirements',
        'Verification of KYC documents and investor validation',
      ],
    },
    {
      number: '02',
      tag: 'MAKE AN INFORMED CHOICE',
      heading: 'Make an informed choice.',
      summary:
        'Suitable mutual fund and Specialised Investment Fund (SIF) distribution options are explored based strictly on your suitability requirements, scheme riskometer, historical consistency, and statutory disclosures.',
      details: [
        'Scheme comparison against category benchmarks and peers',
        'Evaluation of fund manager tenure and expense ratios',
        'Full transparency with signed Commission Disclosures',
        'Execution through authorized BSE StAR MF / NSE MF platforms',
      ],
    },
    {
      number: '03',
      tag: 'KEEP YOUR JOURNEY IN VIEW',
      heading: 'Keep your journey in view.',
      summary:
        'Investing is a continuous commitment. We provide periodic portfolio reviews and hands-on servicing as your circumstances, income, or family milestones evolve over the years.',
      details: [
        'Annual portfolio reviews against initial goals',
        'Rebalancing recommendations when risk profiles shift',
        'Consolidated Account Statement (CAS) tracking',
        'Direct distributor assistance for non-financial servicing',
      ],
    },
  ];

  return (
    <section id="journey" className="relative py-28 sm:py-36 bg-[#103D3B] text-[#fffefa] overflow-hidden">
      {/* Restrained decorative orbital outlines */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="600" cy="400" r="280" stroke="#a8d8c8" strokeWidth="0.75" strokeDasharray="3 6" />
          <circle cx="600" cy="400" r="480" stroke="#a8d8c8" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="600" cy="400" r="680" stroke="#a8d8c8" strokeWidth="0.5" strokeDasharray="6 12" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Compass className="w-4 h-4 text-[#00B7A5]" />
            <span className="text-xs uppercase tracking-widest text-[#a8d8c8] font-semibold">
              Our Signature Process
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#fffefa] mb-6">
            A journey shaped by your priorities.
          </h2>

          <p className="text-base sm:text-lg text-[#c4d5cc] leading-relaxed">
            No two financial journeys are identical. Our process begins with understanding your situation and continues through informed selection and ongoing support.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#205c4d] space-y-16 lg:space-y-20">
          {stages.map((stage, index) => {
            const isActive = activeStage === index;
            return (
              <div
                key={stage.number}
                className="relative cursor-pointer transition-all duration-300 group"
                onClick={() => setActiveStage(index)}
              >
                {/* Circular Numbered Marker on Timeline */}
                <div
                  className={`absolute -left-[37px] sm:-left-[53px] top-1.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-mono font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00B7A5] text-[#103D3B] ring-4 ring-[#00B7A5]/25 shadow-lg scale-110'
                      : 'bg-[#123e35] text-[#c4d5cc] border border-[#205c4d] group-hover:border-[#00B7A5]'
                  }`}
                >
                  {stage.number}
                </div>

                {/* Stage Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  {/* Left Column: Stage Tag & Serif Title */}
                  <div className="lg:col-span-5">
                    <span
                      className={`text-[11px] font-mono tracking-widest uppercase block mb-2 transition-colors ${
                        isActive ? 'text-[#00B7A5]' : 'text-[#c4d5cc]/70'
                      }`}
                    >
                      {stage.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#fffefa] font-normal leading-snug">
                      {stage.heading}
                    </h3>
                  </div>

                  {/* Right Column: Narrative & Key Checkpoints */}
                  <div className="lg:col-span-7">
                    <p className="text-sm sm:text-base text-[#c4d5cc] leading-relaxed mb-5">
                      {stage.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {stage.details.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#fffefa]/90"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${
                              isActive ? 'text-[#00B7A5]' : 'text-[#205c4d]'
                            }`}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-10 border-t border-[#205c4d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-[#a8d8c8]">
            <ShieldCheck className="w-5 h-5 text-[#00B7A5] shrink-0" />
            <span>Process driven by suitability and SEBI/AMFI regulatory compliance.</span>
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00B7A5] text-[#103D3B] hover:bg-[#a8d8c8] transition-colors shadow-sm"
          >
            <span>Discover Our Services</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
