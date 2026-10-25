import React, { useEffect, useState } from 'react';

interface SukritiIntroProps {
  onComplete: () => void;
  /** Force play even if already seen in current session */
  forcePlay?: boolean;
}

export const SukritiIntro: React.FC<SukritiIntroProps> = ({ onComplete, forcePlay = false }) => {
  const [stage, setStage] = useState<'start' | 'logo' | 'light' | 'text' | 'line' | 'exit'>('start');
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check url param ?autostart=1 or ?skipintro=1
    const urlParams = new URLSearchParams(window.location.search);
    const autostart = urlParams.get('autostart') === '1' || urlParams.get('skipintro') === '1';

    if (prefersReducedMotion || autostart) {
      onComplete();
      return;
    }

    // Safety fallback: ensure intro never gets stuck regardless of asset loading delays
    const safetyTimer = window.setTimeout(() => {
      setFadingOut(true);
      setTimeout(onComplete, 350);
    }, 2400);

    // Sequential timing within ~2.0 seconds:
    // T = 0ms: Background fade-in
    // T = 150ms: Logo reveals with subtle scale-up
    const tLogo = window.setTimeout(() => setStage('logo'), 150);
    // T = 450ms: S-inspired light sweep across logo
    const tLight = window.setTimeout(() => setStage('light'), 450);
    // T = 800ms: Brand name & tagline reveal
    const tText = window.setTimeout(() => setStage('text'), 800);
    // T = 1150ms: Progress accent line expands
    const tLine = window.setTimeout(() => setStage('line'), 1150);
    // T = 1750ms: Start fading out the entire intro
    const tExit = window.setTimeout(() => {
      setStage('exit');
      setFadingOut(true);
    }, 1750);
    // T = 2050ms: Complete and unmount
    const tFinish = window.setTimeout(() => {
      onComplete();
    }, 2050);

    // Prevent body scrolling while intro is displayed
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(safetyTimer);
      clearTimeout(tLogo);
      clearTimeout(tLight);
      clearTimeout(tText);
      clearTimeout(tLine);
      clearTimeout(tExit);
      clearTimeout(tFinish);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      role="region"
      aria-label="Sukriti Investments Brand Introduction"
      aria-live="polite"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#123e35] transition-opacity duration-300 ease-out select-none overflow-hidden ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle organic orbital background glow */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(0, 183, 165, 0.28) 0%, rgba(18, 62, 53, 0) 65%)'
        }}
      />

      {/* Decorative hairline orbital rings */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] rounded-full border border-[#a8d8c8]/10 animate-pulse duration-1000" />
        <div className="absolute w-[620px] h-[620px] rounded-full border border-[#a8d8c8]/5" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm mx-auto">
        {/* Logo Container with Light Sweep Effect */}
        <div
          className={`relative transition-all duration-700 ease-out transform ${
            stage !== 'start' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-2'
          }`}
        >
          {/* Subtle elegant white card to host the authentic logo cleanly */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white shadow-2xl p-3 flex items-center justify-center border border-white/20 overflow-hidden group">
            {/* The actual authentic Sukriti Logo featuring turquoise S/i mark and black dot */}
            <img
              src="/assets/aistudio/image_3e7bf89a.png"
              alt="Sukriti Investments Logo"
              className="w-full h-full object-contain filter contrast-105"
              loading="eager"
              onError={(e) => {
                // Graceful fallback to avoid rendering broken icon if asset path glitch
                (e.target as HTMLElement).style.opacity = '0.9';
              }}
            />

            {/* S-inspired light sweep: restrained teal/white sheen sweeping across the logo */}
            {(stage === 'light' || stage === 'text' || stage === 'line' || stage === 'exit') && (
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none animate-light-sweep"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 20%, rgba(168, 216, 200, 0.45) 45%, rgba(255, 255, 255, 0.85) 50%, rgba(168, 216, 200, 0.45) 55%, transparent 80%)',
                }}
              />
            )}
          </div>

          {/* Soft outer glow */}
          <div 
            aria-hidden="true" 
            className="absolute -inset-2 rounded-3xl bg-[#00B7A5]/15 blur-lg -z-10" 
          />
        </div>

        {/* Brand Name Reveal */}
        <div
          className={`mt-6 transition-all duration-500 ease-out transform ${
            stage === 'text' || stage === 'line' || stage === 'exit'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3'
          }`}
        >
          <h1 className="text-2xl sm:text-3xl font-serif text-[#fffefa] tracking-wide font-normal">
            Sukriti Investments
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-[#a8d8c8] tracking-widest uppercase font-medium">
            Invest with understanding
          </p>
        </div>

        {/* Progress Accent: Thin teal line expands horizontally */}
        <div className="mt-4 h-0.5 w-20 flex items-center justify-center overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-[#00B7A5] to-transparent transition-all duration-700 ease-out ${
              stage === 'line' || stage === 'exit' ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </div>

        {/* Subtitle credentials */}
        <div
          className={`mt-3 transition-opacity duration-500 ${
            stage === 'line' || stage === 'exit' ? 'opacity-70' : 'opacity-0'
          }`}
        >
          <span className="text-[11px] text-[#c4d5cc] font-light tracking-wider">
            Avinash Bhandari · ARN-31739 · Jodhpur
          </span>
        </div>
      </div>
    </div>
  );
};
