import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Show button after scrolling past 280px
      if (scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage (0 to 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circular progress stroke calculation (radius = 20, circumference = 2 * PI * 20 ~= 125.66)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#103D3B] text-white shadow-lg hover:shadow-2xl hover:bg-[#087F7C] transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B7A5] focus-visible:ring-offset-2 cursor-pointer"
      >
        {/* Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 48 48"
        >
          {/* Track background */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="#205c4d"
            strokeWidth="2.5"
            strokeOpacity="0.4"
          />
          {/* Active progress */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="#00B7A5"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* Upward Arrow Icon with gliding hover animation */}
        <div className="relative z-10 flex items-center justify-center overflow-hidden">
          <ArrowUp className="w-5 h-5 text-[#a8d8c8] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 group-active:translate-y-0" />
        </div>

        {/* Floating Tooltip Label with smooth hover reveal */}
        <span
          className="absolute right-full mr-3 px-2.5 py-1 rounded-md bg-[#123e35] text-[#fffefa] text-[11px] font-sans font-medium tracking-wide shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block border border-[#205c4d]"
          role="tooltip"
        >
          Back to top
        </span>

        {/* Ambient glow effect on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#00B7A5]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
        />
      </button>
    </div>
  );
};
