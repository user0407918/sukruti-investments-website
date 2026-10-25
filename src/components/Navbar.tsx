import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { DISTRIBUTOR_INFO } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: isHomePage ? '#hero' : '/' },
    { label: 'About', href: isHomePage ? '#philosophy' : '/#philosophy' },
    { label: 'Our Approach', href: isHomePage ? '#journey' : '/#journey' },
    { label: 'Services', href: isHomePage ? '#services' : '/#services' },
    { label: 'Investor Resources', href: isHomePage ? '#resources' : '/#resources' },
    { label: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fffefa]/95 backdrop-blur-md shadow-sm border-b border-[#DFE6DF]/80 py-3'
          : 'bg-[#F7F8F4]/80 backdrop-blur-xs border-b border-[#DFE6DF]/40 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center gap-3.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B7A5] rounded-lg"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white shadow-sm border border-[#DFE6DF] p-1 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/assets/aistudio/image_3e7bf89a.png"
                alt="Sukriti Investments Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#103D3B] group-hover:text-[#00B7A5] transition-colors leading-tight">
                Sukriti Investments
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans text-[#707B75] tracking-wider uppercase font-medium">
                Avinash Bhandari · ARN-31739
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#172321] hover:text-[#00B7A5] transition-colors relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00B7A5] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#103D3B] hover:bg-[#00B7A5] rounded-full transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#103D3B] hover:bg-[#DFE6DF]/50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B7A5] transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-[68px] bottom-0 bg-[#103D3B]/50 backdrop-blur-sm z-50 lg:hidden overflow-y-auto"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#fffefa] border-b border-[#DFE6DF] px-6 py-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold text-[#707B75] uppercase tracking-widest border-b border-[#DFE6DF] pb-2">
                Navigation
              </span>
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-lg font-serif text-[#103D3B] hover:text-[#00B7A5] py-1 border-b border-gray-100 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#707B75]">→</span>
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="w-full text-center py-3 px-4 rounded-xl font-semibold text-sm bg-[#103D3B] text-white hover:bg-[#00B7A5] transition-colors shadow-sm"
                >
                  Let's Connect
                </a>

                <div className="mt-2 pt-4 border-t border-[#DFE6DF] flex flex-col gap-2 text-xs text-[#707B75]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#00B7A5]" />
                    <span>{DISTRIBUTOR_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#00B7A5]" />
                    <span>{DISTRIBUTOR_INFO.email}</span>
                  </div>
                  <p className="text-[11px] text-[#707B75] mt-1">
                    Jodhpur, Rajasthan · AMFI ARN-31739
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
