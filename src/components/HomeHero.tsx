import React from 'react';
import { ArrowDownRight, Compass } from 'lucide-react';
import { DISTRIBUTOR_INFO } from '../types';

export const HomeHero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F7F8F4]">
      {/* Subtle organic contour line background */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none opacity-40 -z-10"
        style={{
          background: 'radial-gradient(circle at 75% 25%, rgba(168, 216, 200, 0.35) 0%, rgba(247, 248, 244, 0) 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[#00B7A5]" />
              <span className="text-xs uppercase tracking-widest text-[#087F7C] font-semibold">
                A more thoughtful way to invest
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#103D3B] leading-[1.12] tracking-tight mb-7">
              Your future.<br />
              <span className="text-[#00B7A5] italic font-normal font-serif">Your reasons.</span><br />
              Your journey.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#172321]/80 max-w-xl font-normal leading-relaxed mb-8">
              Meaningful investing begins with understanding what matters to you. At Sukriti Investments, we focus on your goals, your circumstances and the choices that fit your investment profile.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#103D3B] hover:bg-[#087F7C] rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Discover Our Approach</span>
                <ArrowDownRight className="w-4 h-4 text-[#a8d8c8]" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-[#103D3B] bg-white hover:bg-[#DFE6DF]/40 border border-[#DFE6DF] rounded-full transition-all duration-200"
              >
                <span>Our Services</span>
              </a>
            </div>

            {/* Registration Metadata */}
            <div className="pt-6 border-t border-[#DFE6DF] flex items-center gap-3 text-xs text-[#707B75]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00B7A5]" />
              <span className="font-medium tracking-wide">
                {DISTRIBUTOR_INFO.name} · AMFI {DISTRIBUTOR_INFO.arn} · Jodhpur, Rajasthan
              </span>
            </div>
          </div>

          {/* Right Column: Minimal Sukriti logo with subtle orbital motion */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-8 sm:py-12">
            <div className="relative flex aspect-square w-full max-w-[420px] items-center justify-center">
              <div aria-hidden="true" className="absolute inset-[12%] rounded-full border border-[#00B7A5]/20 animate-sukriti-orbit-slow" />
              <div aria-hidden="true" className="absolute inset-[22%] rounded-full border border-dashed border-[#087F7C]/25 animate-sukriti-orbit-reverse" />
              <span aria-hidden="true" className="absolute top-[22%] right-[23%] h-3 w-3 rounded-full bg-[#00B7A5] shadow-[0_0_18px_rgba(0,183,165,0.45)] animate-sukriti-float" />
              <span aria-hidden="true" className="absolute bottom-[27%] left-[22%] h-2 w-2 rounded-full bg-[#087F7C] animate-sukriti-float-delayed" />
              <div className="relative z-10 flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full bg-white shadow-[0_12px_45px_rgba(16,61,59,0.12)] ring-1 ring-[#DFE6DF] animate-sukriti-logo-breathe">
                <img
                  src="/assets/aistudio/image_3e7bf89a.png"
                  alt="Sukriti Investments logo"
                  className="h-[72%] w-[72%] object-contain"
                  loading="eager"
                />
              </div>
              <div aria-hidden="true" className="absolute inset-[5%] rounded-full border border-[#DFE6DF]/70" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
