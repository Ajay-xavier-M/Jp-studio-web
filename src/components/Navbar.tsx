import React, { useState, useEffect } from 'react';
import { Volume2, Video, Phone, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Event Coverage', href: '#event-coverage' },
    { label: 'Studio Services', href: '#studio-services' },
    { label: 'Showreel & Portfolio', href: '#showreel' },
    { label: 'Audio Suite', href: '#audio-suite' },
    { label: 'Gear Arsenal', href: '#gear-arsenal' },
    { label: 'Packages', href: '#packages' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080f]/90 backdrop-blur-xl border-b border-amber-500/15 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#08080f]/90 via-[#08080f]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & On Air Indicator */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-500 via-red-500 to-purple-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Volume2 className="w-5 h-5 text-white" />
              </div>
              {/* Pulsing red live dot */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-[#08080f]"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-white">
                  JP <span className="text-amber-400">STUDIO</span>
                </span>
                <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30">
                  ON AIR
                </span>
              </div>
              <span className="text-[10px] sm:text-xs tracking-widest text-slate-400 uppercase font-medium">
                Audio • Video • Grand Events
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-wide uppercase text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-wider uppercase px-3.5 py-2 rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Quote Estimator</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-95 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Event AV</span>
            </button>

            <a
              href="tel:+919876543210"
              className="hidden xl:inline-flex items-center space-x-1.5 text-xs font-medium text-slate-400 hover:text-amber-400 border-l border-white/10 pl-3 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>+91 98765 43210</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="text-xs font-bold px-3 py-1.5 rounded-md bg-amber-500 text-black sm:hidden"
            >
              Book AV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0e0e18] border border-amber-500/20 shadow-2xl space-y-3">
            <div className="grid grid-cols-1 gap-2 pb-2 border-b border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-white/10 text-white text-xs font-bold uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Instant Cost Estimator</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-amber-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Event Audio & Video</span>
              </button>

              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 py-2 text-xs text-slate-400 hover:text-amber-400"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hotline: +91 98765 43210</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

