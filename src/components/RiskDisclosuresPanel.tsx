import React from 'react';
import { AlertCircle, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DISTRIBUTOR_INFO } from '../types';

export const RiskDisclosuresPanel: React.FC = () => {
  return (
    <section className="py-16 bg-[#F7F8F4]" aria-label="Statutory Disclosures">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#eaf3ee] border border-[#a8d8c8]/60 p-8 sm:p-10 shadow-xs">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#103D3B] text-[#a8d8c8] flex items-center justify-center">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#103D3B]">
                Statutory Risk Disclosures & Status
              </h2>
              <span className="text-xs text-[#707B75] uppercase tracking-wider font-mono">
                Mandatory Regulatory Disclosures
              </span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#172321]/85 leading-relaxed border-t border-[#a8d8c8]/40 pt-5">
            <div className="p-4 rounded-xl bg-white/70 border border-[#a8d8c8]/40">
              <p className="font-medium text-[#103D3B]">
                • Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/70 border border-[#a8d8c8]/40">
              <p className="font-medium text-[#103D3B]">
                • Investments in Specialised Investment Funds involve relatively higher risk, including potential loss of capital, liquidity risk and market volatility. Read all scheme related documents carefully before investing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/70 border border-[#a8d8c8]/40">
              <p className="font-medium text-[#103D3B]">
                • Avinash Bhandari is NOT a SEBI-registered Investment Adviser. Any guidance given is incidental to the distribution of mutual fund schemes and no fee is charged for it.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#a8d8c8]/40 flex flex-wrap items-center justify-between gap-4 text-xs text-[#707B75]">
            <div className="flex items-center gap-4">
              <Link to="/risk-disclaimer" className="text-[#087F7C] hover:underline font-medium inline-flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Complete Risk Disclaimer</span>
              </Link>
              <Link to="/registration-disclosure" className="text-[#087F7C] hover:underline font-medium inline-flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Registration & AMC List</span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={DISTRIBUTOR_INFO.scoresUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#103D3B] hover:text-[#00B7A5] underline inline-flex items-center gap-1"
              >
                <span>SEBI SCORES</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-gray-300">|</span>
              <a
                href={DISTRIBUTOR_INFO.smartOdrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#103D3B] hover:text-[#00B7A5] underline inline-flex items-center gap-1"
              >
                <span>SMART ODR</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
