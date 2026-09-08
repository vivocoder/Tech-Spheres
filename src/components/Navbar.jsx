import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search } from 'lucide-react';
import Button from './Button';

export default function Navbar({ onOpenJoinModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Community', href: '#why-community' },
    { name: 'Events', href: '#events' },
    { name: 'Members', href: '#members' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Suggestions', href: '#suggestions' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full font-heading transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-cream-50 border-b border-border/60'
      }`}
    >
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-brown-500/10 border border-brown-500/20 flex items-center justify-center p-1.5 transition-transform duration-200 group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <circle cx="12" cy="12" r="9" stroke="#AD825B" strokeWidth="2.2" strokeDasharray="38 12" />
                <circle cx="12" cy="12" r="4.5" fill="#795537" />
                <circle cx="12" cy="5" r="2" fill="#AD825B" />
                <circle cx="17.5" cy="16" r="1.7" fill="#C09A73" />
                <circle cx="6.5" cy="16" r="1.7" fill="#AD825B" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[30px] sm:text-[25px] font-bold font-heading tracking-tight text-charcoal flex items-center">
                Tech<span className="text-brown-500">Sphere</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm lg:text-[16px] font-heading font-[600] text-charcoal hover:text-muted transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3.5">
           
            <Button
              variant="primary"
              size="sm"
              icon={ArrowRight}
              onClick={onOpenJoinModal}
              className="font-heading font-medium !px-4 !py-2"
            >
              Join Community
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:bg-cream-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-border px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-soft font-heading">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-heading font-medium text-charcoal hover:bg-cream-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              icon={ArrowRight}
              className="w-full font-heading font-semibold"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
            >
              Join Community
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
