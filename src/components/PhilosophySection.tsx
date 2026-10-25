import React from 'react';
import { ArrowRight } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#F7F8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-widest text-[#087F7C] font-semibold block mb-4">
              A different starting point
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#103D3B] leading-[1.2] mb-6">
              Before the numbers, there is you.
            </h2>

            <p className="text-base text-[#172321]/80 leading-relaxed mb-8">
              At Sukriti Investments, we believe an investment portfolio should reflect an individual's actual life—their values, responsibilities, aspirations, and temperamental comfort with market fluctuations. We take the time to understand your circumstances before discussing any mutual fund schemes.
            </p>

            <a
              href="#journey"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#103D3B] hover:text-[#00B7A5] transition-colors group"
            >
              <span>Explore Our Philosophy</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column (7 cols): Editorial Statement & 3 Principles */}
          <div className="lg:col-span-7">
            {/* Introductory Statement */}
            <div className="pb-8 border-b border-[#DFE6DF]">
              <blockquote className="font-serif text-xl sm:text-2xl text-[#103D3B] italic leading-snug">
                “Not every investment starts with a number. Some begin with a dream, a responsibility or the desire to feel more prepared for what comes next.”
              </blockquote>
            </div>

            {/* Three Numbered Principles - Editorial rows with dividers */}
            <div className="divide-y divide-[#DFE6DF]">
              
              {/* Principle 01 */}
              <div className="py-8 group">
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#00B7A5] pt-0.5">
                    01
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#103D3B] mb-2.5">
                      Understand the person, not just the portfolio.
                    </h3>
                    <p className="text-sm text-[#707B75] leading-relaxed">
                      Every family has distinct responsibilities, time horizons, and emotional reactions to volatility. We listen closely to establish your true priorities before evaluating suitability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 02 */}
              <div className="py-8 group">
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#00B7A5] pt-0.5">
                    02
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#103D3B] mb-2.5">
                      Make room for informed decisions.
                    </h3>
                    <p className="text-sm text-[#707B75] leading-relaxed">
                      Complex financial terms become clear through patient dialogue. You receive honest explanations of scheme features, realistic expectations, expenses, and potential risks without sales pressure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 03 */}
              <div className="py-8 group">
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm sm:text-base font-semibold text-[#00B7A5] pt-0.5">
                    03
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#103D3B] mb-2.5">
                      Keep the conversation going.
                    </h3>
                    <p className="text-sm text-[#707B75] leading-relaxed">
                      Life changes—careers evolve, families grow, and markets cycle. We conduct periodic portfolio reviews to ensure your investments remain aligned with your evolving reality.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
