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

          {/* Right Column: Original Abstract Landscape Illustration */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="w-full max-w-md lg:max-w-none relative aspect-4/3 sm:aspect-square rounded-3xl bg-[#fffefa] border border-[#DFE6DF] p-6 sm:p-8 shadow-sm overflow-hidden flex flex-col justify-between">
              
              {/* Top editorial note */}
              <div className="flex items-center justify-between text-[11px] text-[#707B75] uppercase tracking-wider font-semibold border-b border-[#DFE6DF]/60 pb-3 z-10">
                <span className="flex items-center gap-1.5 text-[#103D3B]">
                  <Compass className="w-3.5 h-3.5 text-[#00B7A5]" />
                  <span>Sukriti Visual Journal</span>
                </span>
                <span>Fig. 01</span>
              </div>

              {/* Bespoke SVG Landscape Vector Artwork */}
              <div className="relative my-4 flex-1 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full max-h-[250px] object-contain drop-shadow-xs"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Abstract landscape illustration with curved terrain, orbital outlines and guiding path"
                >
                  <defs>
                    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F7F8F4" />
                      <stop offset="100%" stopColor="#e8f3ef" />
                    </linearGradient>
                    <linearGradient id="hillGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#103D3B" />
                      <stop offset="100%" stopColor="#205c4d" />
                    </linearGradient>
                    <linearGradient id="hillGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#087F7C" />
                      <stop offset="100%" stopColor="#00B7A5" />
                    </linearGradient>
                    <linearGradient id="pathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a8d8c8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#fffefa" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>

                  {/* Backdrop canvas */}
                  <rect width="400" height="300" rx="16" fill="url(#skyGrad)" />

                  {/* Subtle orbital concentric circles */}
                  <circle cx="280" cy="110" r="70" stroke="#00B7A5" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.35" />
                  <circle cx="280" cy="110" r="110" stroke="#103D3B" strokeWidth="0.8" strokeDasharray="2 5" strokeOpacity="0.2" />
                  <circle cx="280" cy="110" r="14" fill="#00B7A5" fillOpacity="0.15" />
                  <circle cx="280" cy="110" r="6" fill="#00B7A5" />

                  {/* Horizon Layer 1 - Distant mountains */}
                  <path
                    d="M0 200 C80 180 140 160 210 185 C270 205 340 175 400 190 L400 300 L0 300 Z"
                    fill="#DFE6DF"
                    fillOpacity="0.6"
                  />

                  {/* Layer 2 - Midground gentle contours */}
                  <path
                    d="M0 220 C70 195 160 230 250 205 C330 185 370 215 400 210 L400 300 L0 300 Z"
                    fill="url(#hillGrad2)"
                    fillOpacity="0.85"
                  />

                  {/* Layer 3 - Foreground deep slope */}
                  <path
                    d="M0 250 C90 225 180 260 280 230 C340 210 380 230 400 225 L400 300 L0 300 Z"
                    fill="url(#hillGrad1)"
                  />

                  {/* Winding journey path */}
                  <path
                    d="M80 300 C110 260 170 270 210 240 C240 220 265 190 280 115"
                    stroke="url(#pathGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="4 3"
                  />

                  {/* Subtle milestone nodes on the path */}
                  <circle cx="125" cy="270" r="3.5" fill="#fffefa" />
                  <circle cx="185" cy="250" r="3.5" fill="#fffefa" />
                  <circle cx="235" cy="210" r="3.5" fill="#a8d8c8" />

                  {/* Horizon light accent */}
                  <line x1="40" y1="210" x2="360" y2="210" stroke="#00B7A5" strokeWidth="0.5" strokeOpacity="0.4" />
                </svg>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="pt-3 border-t border-[#DFE6DF]/60 text-center">
                <p className="text-xs font-serif font-medium text-[#103D3B] tracking-wide">
                  OUR PHILOSOPHY — <span className="italic text-[#087F7C]">Purpose before products.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
