import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, X, Sparkles, Check, Share2 } from 'lucide-react';

export default function EventPopupModal({
  isOpen,
  onClose,
  onExploreEvent,
  onViewAllEvents,
}) {
  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [copied, setCopied] = useState(false);

  // Manage smooth enter/exit animation
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Small timeout to trigger css transition smoothly
      const timer = setTimeout(() => setAnimating(true), 10);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      setAnimating(false);
      const timer = setTimeout(() => setMounted(false), 250);
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const handleShare = async () => {
    const shareData = {
      title: 'TechSphere Event 2026',
      text: 'Join us for TechSphere Event 2026 on October 12, 2026 in Udgir!',
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Share cancelled or failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleExplore = () => {
    if (onExploreEvent) {
      onExploreEvent();
    } else {
      setRegistered(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  const handleViewAll = () => {
    if (onViewAllEvents) {
      onViewAllEvents();
    }
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-event-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 transition-all duration-300 ${
        animating
          ? 'bg-charcoal/50 backdrop-blur-sm opacity-100'
          : 'bg-charcoal/0 backdrop-blur-none opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Container */}
      <div
        className={`relative w-full max-w-4xl bg-[#FAF7F2] border border-[#E8DED2] rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(23,33,43,0.22)] overflow-hidden transition-all duration-300 transform ${
          animating
            ? 'scale-100 translate-y-0 opacity-100'
            : 'scale-95 translate-y-3 opacity-0'
        }`}
      >
        {/* Subtle decorative vector curves matching image aesthetics - Ultra-lightweight & 0ms load */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          {/* Left sweeping curved arcs */}
          <svg
            className="absolute -top-16 -left-20 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] text-[#EDE4D7] opacity-65"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="100" cy="180" r="280" stroke="currentColor" strokeWidth="48" opacity="0.35" />
            <circle cx="100" cy="180" r="210" stroke="currentColor" strokeWidth="2" opacity="0.6" />
            <circle cx="100" cy="180" r="150" stroke="#F4ECE2" opacity="0.5" />
          </svg>

          {/* Right sweeping curved arcs */}
          <svg
            className="absolute -bottom-24 -right-20 w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] text-[#EDE4D7] opacity-65"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="380" cy="320" r="290" stroke="currentColor" strokeWidth="44" opacity="0.3" />
            <circle cx="380" cy="320" r="220" stroke="currentColor" strokeWidth="2" opacity="0.6" />
            <circle cx="380" cy="320" r="160" stroke="#F4ECE2" opacity="0.45" />
          </svg>

          {/* Gentle background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#F3EBE0]/30" />
        </div>

        {/* Close Button (Top-Right) */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close announcement"
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-muted hover:text-charcoal border border-[#E8DED2]/80 flex items-center justify-center transition-all duration-200 hover:rotate-90 hover:scale-105 active:scale-95 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue/30"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Inner Content */}
        <div className="relative z-10 px-5 py-6 sm:px-10 sm:py-9 md:px-14 md:py-10 flex flex-col items-center text-center">
          
          {/* Top Row: Badges */}
          <div className="w-full flex items-center justify-between sm:justify-center relative mb-5 sm:mb-6 pr-10 sm:pr-0">
            {/* Center Pill: UPCOMING EVENT */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-[#F5EEE6] border border-[#E8D8C7]/60 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#AD825B]" />
              <span
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#956B47]"
              >
                Upcoming Event
              </span>
            </div>

            {/* Right Tag: #TechSpheres2026 */}
            <div className="sm:absolute sm:right-10 top-0">
              <span
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#C09A73] text-white text-[11px] sm:text-xs font-semibold tracking-wide shadow-xs"
              >
                #TechSpheres Udgir
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h2
            id="popup-event-title"
            className="font-serif text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-bold text-charcoal tracking-tight leading-[1.12] sm:leading-[1.1] mb-2 sm:mb-2.5 max-w-2xl"
          >
            <span> TechSphere Udgir Community  </span>{' '}
            <span className="block sm:inline text-brown-500 font-bold">
              Presents Its First-Ever Session!
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-xs sm:text-sm md:text-base text-muted max-w-xl mx-auto font-normal leading-relaxed mb-6 sm:mb-8"
          >
            Learn smart job-search strategies, resume tips, LinkedIn optimization, and interview techniques to land your dream job!
          </p>

          {/* Event Details Row (3 Items with vertical dividers) */}
          <div className="w-full max-w-4xl bg-white/70 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none rounded-xl sm:rounded-none p-3.5 sm:p-0 border border-[#E8DED2]/80 sm:border-0 mb-7 sm:mb-9 shadow-xs sm:shadow-none">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DED2]">
              
              {/* Item 1: Date */}
              <div className="flex items-center sm:justify-center gap-3 sm:gap-3.5 py-2.5 sm:py-0 sm:px-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F5EEE6] border border-[#E8D8C7] flex items-center justify-center shrink-0 shadow-2xs">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#956B47]" />
                </div>
                <div className="text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <div className="text-sm sm:text-[15px] font-bold text-charcoal leading-tight">
                      Oct 21, 2026
                  </div>
                  <div className="text-xs text-muted font-medium mt-0.5">
                    Saturday
                  </div>
                </div>
              </div>

              {/* Item 2: Time */}
              <div className="flex items-center sm:justify-center gap-3 sm:gap-3.5 py-2.5 sm:py-0 sm:px-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F5EEE6] border border-[#E8D8C7] flex items-center justify-center shrink-0 shadow-2xs">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#956B47]" />
                </div>
                <div className="text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <div className="text-sm sm:text-[15px] font-bold text-charcoal leading-tight">
                    10:00 AM – 4:00 PM
                  </div>
                  <div className="text-xs text-muted font-medium mt-0.5">
                    IST
                  </div>
                </div>
              </div>

              {/* Item 3: Location */}
              <div className="flex items-center sm:justify-center gap-3 sm:gap-3.5 py-2.5 sm:py-0 sm:px-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F5EEE6] border border-[#E8D8C7] flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#956B47]" />
                </div>
                <div className="text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <div className="text-sm sm:text-[15px] font-bold text-charcoal leading-tight">
                    Virtual Event
                  </div>
                  <div className="text-xs text-muted font-medium mt-0.5">
                    Udgir, Maharashtra
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto">
            {/* Primary Action Button */}
            <button
              type="button"
              onClick={handleExplore}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[5px] bg-[#C09A73] hover:bg-[#AD825B] active:scale-[0.98] text-white font-medium text-sm sm:text-base shadow-[0_6px_20px_rgba(78,121,167,0.32)] hover:shadow-[0_8px_24px_rgba(78,121,167,0.42)] transition-all duration-200 cursor-pointer group"
            >
              {registered ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>RSVP Confirmed!</span>
                </>
              ) : (
                <>
                  <span>Explore Event</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </button>

            {/* Secondary Action Link */}
            {/* <button
              type="button"
              onClick={handleViewAll}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="inline-flex items-center justify-center gap-1.5 text-sm sm:text-base font-medium text-charcoal hover:text-[#C09A73] transition-colors duration-200 cursor-pointer py-1.5 group"
            >
              <span>View all events</span>
              <ArrowRight className="w-4 h-4 text-[#C09A73] transition-transform duration-200 group-hover:translate-x-1" />
            </button> */}
          </div>

          {/* Bottom subtle utilities: Share & Dismiss */}
          <div className="mt-5 sm:mt-6 flex items-center justify-center gap-4 text-xs text-muted">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1 hover:text-charcoal transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-success" />
                  <span className="text-success font-medium">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Event</span>
                </>
              )}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onClose}
              className="hover:text-charcoal underline underline-offset-2 transition-colors cursor-pointer"
            >
              Dismiss for now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
