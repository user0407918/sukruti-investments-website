/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SukritiIntro } from './components/SukritiIntro';
import { HomePage } from './pages/HomePage';
import { CompliancePage } from './pages/CompliancePages';
import { NotFoundPage } from './pages/NotFoundPage';
import { ScrollToTop } from './components/ScrollToTop';

// Scroll restoration helper
const ScrollToTopAndHash: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

// Main App Container
const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Reveal page sections as they enter the viewport, including client-side route changes.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');

    // Compliance and utility pages use the same reveal treatment without changing their content.
    if (location.pathname !== '/') {
      document.querySelectorAll<HTMLElement>('main section, main article').forEach((target) => {
        target.setAttribute('data-reveal', 'up');
      });
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach((target) => observer.observe(target));

    // Animate actual cards independently as they enter the viewport.
    const cardTargets = Array.from(document.querySelectorAll<HTMLElement>(
      'main section article, main section .group, main section [class*="grid"] > div[class*="rounded-2xl"], main section [class*="grid"] > div[class*="rounded-3xl"], #services .divide-y > div, #resources .grid > div'
    ));
    cardTargets.forEach((card, index) => {
      if (card.closest('#hero')) return;
      card.setAttribute('data-card-motion', index % 2 === 0 ? 'left' : 'right');
    });

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target as HTMLElement;
          card.classList.add('card-motion-visible');
          cardObserver.unobserve(card);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

    cardTargets.forEach((card) => {
      if (!card.closest('#hero')) cardObserver.observe(card);
    });

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, [location.pathname]);

  // Determine if intro should show: only on homepage, and once per browser session
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // If not on homepage, don't show intro
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      return false;
    }

    // Check query params
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('autostart') === '1' || searchParams.get('skipintro') === '1') {
      return false;
    }
    if (searchParams.get('intro') === '1' || searchParams.get('playintro') === '1') {
      return true;
    }

    // Check session storage
    try {
      const alreadyShown = sessionStorage.getItem('sukriti_intro_completed');
      if (alreadyShown === 'true') {
        return false;
      }
    } catch {
      // Ignore session storage restrictions in private mode
    }

    return true;
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    try {
      sessionStorage.setItem('sukriti_intro_completed', 'true');
    } catch {
      // Storage unavailable
    }
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F4] text-[#172321] selection:bg-[#a8d8c8] selection:text-[#103D3B]">
      <ScrollToTopAndHash />

      {/* Full-Screen Opening Intro Animation */}
      {showIntro && isHomePage && (
        <SukritiIntro onComplete={handleIntroComplete} />
      )}

      {/* Global Navbar */}
      <Navbar />

      {/* Route Views */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* 10 Compliance Routes & Important Links */}
          <Route path="/privacy-policy" element={<CompliancePage />} />
          <Route path="/terms-and-conditions" element={<CompliancePage />} />
          <Route path="/risk-disclaimer" element={<CompliancePage />} />
          <Route path="/commission-disclosure" element={<CompliancePage />} />
          <Route path="/grievance-redressal" element={<CompliancePage />} />
          <Route path="/registration-disclosure" element={<CompliancePage />} />
          <Route path="/investor-charter" element={<CompliancePage />} />
          <Route path="/kyc-onboarding" element={<CompliancePage />} />
          <Route path="/transaction-policy" element={<CompliancePage />} />
          <Route path="/fund-recommendation-policy" element={<CompliancePage />} />
          <Route path="/important-links" element={<CompliancePage />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* Global Approved 4-Column Footer */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* Floating Scroll-to-Top Button with progress ring and hover animation */}
      <ScrollToTop />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
