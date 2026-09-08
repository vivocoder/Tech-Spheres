import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function UpcomingEvent({ onViewAllEvents, onInterestedClick }) {
  const [interested, setInterested] = useState(false);

  const handleInterested = () => {
    setInterested(!interested);
    if (onInterestedClick) {
      onInterestedClick();
    }
  };

  return (
    <section id="events" className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Row */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17212B] font-heading tracking-tight">
              Our Next Event
            </h2>
            <span
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="inline-flex items-center px-3 py-0.5 rounded-[5px] bg-[#F5EEE6] text-[#795537] text-xs sm:text-[13px] font-semibold tracking-wide"
            >
              Upcoming
            </span>
          </div>

          {/* <button
            type="button"
            onClick={onViewAllEvents}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#9E6738] hover:text-[#795537] transition-colors cursor-pointer"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button> */}

        </div>

        {/* Big Event Card */}
        <div className="relative bg-[#FAF7F2] border border-[#E8E1D9] rounded-[5px] sm:rounded-[5px] overflow-hidden shadow-xs">
          
          {/* Background Meetup Photo on Desktop with Gradient Fade */}
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 lg:w-[50%] pointer-events-none select-none overflow-hidden">
            <img
              src="/images/techies-of-udgir-meetup.jpg"
              alt="Techies of Udgir Meetup #01"
              className="w-full h-full object-cover object-center"
            />
            {/* Smooth Left to Right Gradient Dissolve */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/40 via-transparent to-transparent" />
          </div>

          {/* Mobile Image Banner */}
          <div className="block md:hidden w-full h-52 sm:h-64 relative overflow-hidden">
            <img
              src="/images/techies-of-udgir-meetup.jpg"
              alt="Techies of Udgir Meetup #01"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
          </div>

          {/* Card Content Grid */}
          <div className="relative z-10 p-5 sm:p-7 lg:p-10 flex flex-col sm:flex-row items-start gap-5 sm:gap-6 lg:gap-8">
            
            {/* Left Date Card Box */}
           <div className="shrink-0 w-fit lg:w-36  lg:h-36 rounded-[5px] bg-[#EFE6DC] border border-[#E4D9CD] flex flex-row lg:flex-col items-center justify-start lg:justify-center text-left lg:text-center gap-2 lg:gap-0 p-3 shadow-xs">
  <span
    style={{ fontFamily: "'Montserrat', sans-serif" }}
    className="text-xs sm:text-sm font-semibold tracking-wider text-[#66717A] uppercase"
  >
    OCT
  </span>

  <span className="text-lg sm:text-xl lg:text-2xl font-black text-[#17212B] leading-none font-heading">
    1st Week
  </span>

  <span
    style={{ fontFamily: "'Montserrat', sans-serif" }}
    className="text-xs sm:text-sm font-semibold text-[#66717A]"
  >
    2026
  </span>
</div>

            {/* Middle Event Details */}
            <div className="flex-1 max-w-xl lg:max-w-2xl">
              
              {/* Event Title */}
              <h3 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#17212B] font-heading tracking-tight mb-2 leading-tight">
                Techies of Udgir – Meetup #01
              </h3>

              {/* Audience Target */}
              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-sm sm:text-base text-[#536B78] font-medium mb-4 sm:mb-5 leading-relaxed"
              >
                Developers • Students • Freshers • IT Professionals
              </p>

              {/* Location Row */}
              <div className="flex items-center gap-2.5 mb-3 text-sm sm:text-base text-[#17212B] font-semibold">
                <span className="w-5 h-5 flex items-center justify-center shrink-0">
                  <img src="/icons/location-pin.svg" alt="Location" className="w-4 h-4 text-[#17212B]" />
                </span>
                <span>Udgir, Maharashtra</span>
              </div>

              {/* Topics / Activities Row */}
              <div 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="flex items-center gap-2.5 mb-6 text-xs sm:text-sm text-[#66717A] font-medium leading-relaxed"
              >
                <span className="w-5 h-5 flex items-center justify-center shrink-0">
                  <img src="/icons/target-disc.svg" alt="Topics" className="w-4 h-4 text-[#66717A]" />
                </span>
                <span>Networking • Tech Talks • Career Discussions • Knowledge Sharing</span>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  type="button"
                  onClick={handleInterested}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className={`px-6 py-3 sm:py-3.2 rounded-[5px] font-medium sm:font-semibold text-sm sm:text-base transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2 ${
                    interested
                      ? 'bg-[#EAE1D5] text-[#795537] border border-[#D8C0A7]'
                      : 'bg-[#9E6738] hover:bg-[#885427] active:scale-[0.98] text-white'
                  }`}
                >
                  {interested ? (
                    <>
                      <Check className="w-4 h-4 stroke-[2.5]" />
                      <span>I'm Interested ✓</span>
                    </>
                  ) : (
                    <span>I'm Interested</span>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
