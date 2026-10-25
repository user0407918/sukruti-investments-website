import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#fffefa] border-b border-[#DFE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-[#087F7C] font-semibold block mb-3">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#103D3B] leading-[1.15]">
            Investment services, thoughtfully considered.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#707B75] leading-relaxed">
            Sukriti Investments distributes investment products in Regular Plans under AMFI ARN-31739. Scheme recommendations are driven solely by investor suitability, never commission rates.
          </p>
        </div>

        {/* Exactly Two Horizontal Service Rows (No Cards, No Insurance Service) */}
        <div className="divide-y divide-[#DFE6DF] border-y border-[#DFE6DF]">
          
          {/* Service 01: Mutual Fund Distribution */}
          <div className="py-10 sm:py-14 transition-colors hover:bg-[#F7F8F4]/80 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Index & Title */}
              <div className="lg:col-span-5 flex items-start gap-4 sm:gap-6">
                <span className="font-mono text-sm sm:text-base font-semibold text-[#00B7A5] pt-1">
                  01
                </span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#103D3B] font-normal group-hover:text-[#087F7C] transition-colors">
                    Mutual Fund Distribution
                  </h3>
                  <span className="inline-block mt-2 text-[11px] font-mono uppercase tracking-wider text-[#707B75]">
                    Empanelled with leading Indian AMCs
                  </span>
                </div>
              </div>

              {/* Description & Features */}
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#172321]/80 leading-relaxed mb-4">
                  Mutual fund scheme distribution from empanelled AMCs, with selections considered in relation to investor suitability and requirements.
                </p>
                <ul className="space-y-2 text-xs text-[#707B75]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B7A5]" />
                    <span>Equity, Debt, Hybrid, Index & Solution-oriented funds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B7A5]" />
                    <span>Systematic Investment Plans (SIP) & lump sum execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B7A5]" />
                    <span>Regular Plan distribution with transparent trail commission disclosure</span>
                  </li>
                </ul>
              </div>

              {/* Circular Action Link */}
              <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                <Link
                  to="/fund-recommendation-policy"
                  className="w-11 h-11 rounded-full border border-[#DFE6DF] group-hover:border-[#00B7A5] group-hover:bg-[#103D3B] group-hover:text-white flex items-center justify-center text-[#103D3B] transition-all duration-200"
                  aria-label="View Fund Recommendation Policy for Mutual Funds"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>
          </div>

          {/* Service 02: Specialised Investment Funds */}
          <div className="py-10 sm:py-14 transition-colors hover:bg-[#F7F8F4]/80 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Index & Title */}
              <div className="lg:col-span-5 flex items-start gap-4 sm:gap-6">
                <span className="font-mono text-sm sm:text-base font-semibold text-[#00B7A5] pt-1">
                  02
                </span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#103D3B] font-normal group-hover:text-[#087F7C] transition-colors">
                    Specialised Investment Funds
                  </h3>
                  <span className="inline-block mt-2 text-[11px] font-mono uppercase tracking-wider text-[#707B75]">
                    SIF Schemes under ARN-31739
                  </span>
                </div>
              </div>

              {/* Description & Disclosures */}
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#172321]/80 leading-relaxed mb-4">
                  SIF distribution under the same ARN in Regular Plans. These products involve relatively higher risk and require careful consideration of scheme disclosures.
                </p>
                <ul className="space-y-2 text-xs text-[#707B75]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B7A5]" />
                    <span>Specialised strategies for qualified and experienced investors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B7A5]" />
                    <span>Rigorous risk profiling and suitability alignment prior to entry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B7A5]" />
                    <span>Explicit acknowledgment of capital volatility and liquidity terms</span>
                  </li>
                </ul>
              </div>

              {/* Circular Action Link */}
              <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                <Link
                  to="/risk-disclaimer"
                  className="w-11 h-11 rounded-full border border-[#DFE6DF] group-hover:border-[#00B7A5] group-hover:bg-[#103D3B] group-hover:text-white flex items-center justify-center text-[#103D3B] transition-all duration-200"
                  aria-label="View SIF Risk Disclaimers"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Editorial Compliance Note */}
        <div className="mt-8 text-xs text-[#707B75] flex items-center justify-between">
          <p>
            * Guidance provided is incidental to the distribution of mutual fund schemes. Avinash Bhandari is NOT a SEBI-registered Investment Adviser.
          </p>
          <Link
            to="/commission-disclosure"
            className="text-[#087F7C] hover:underline font-medium hidden sm:inline"
          >
            Read Commission Disclosure →
          </Link>
        </div>

      </div>
    </section>
  );
};
