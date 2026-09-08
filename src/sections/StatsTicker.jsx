import React from 'react';

// 1. Members Group Icon (Exact match to reference screenshot)
const MembersIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 40 40" fill="currentColor" className={className}>
    {/* Center person (larger, in front) */}
    <circle cx="20" cy="11.5" r="4.2" />
    <path d="M12.5 28C12.5 23.6 15.8 20 20 20C24.2 20 27.5 23.6 27.5 28C27.5 28.8 26.8 29.5 26 29.5H14C13.2 29.5 12.5 28.8 12.5 28Z" />
    {/* Left person */}
    <circle cx="9" cy="15" r="3.3" />
    <path d="M4 28C4 24.6 6.4 21.8 9.5 21.4C8.5 23 8 24.9 8 27C8 27.9 8.1 28.7 8.4 29.5H5.5C4.7 29.5 4 28.8 4 28Z" />
    {/* Right person */}
    <circle cx="31" cy="15" r="3.3" />
    <path d="M36 28C36 28.8 35.3 29.5 34.5 29.5H31.6C31.9 28.7 32 27.9 32 27C32 24.9 31.5 23 30.5 21.4C33.6 21.8 36 24.6 36 28Z" />
  </svg>
);

// 2. Calendar with Star Badge Icon (Exact match to reference screenshot)
const EventsIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 40 40" fill="currentColor" className={className}>
    {/* Binder pegs */}
    <rect x="11.5" y="2.5" width="2.8" height="5.5" rx="1.4" fill="currentColor" />
    <rect x="23.5" y="2.5" width="2.8" height="5.5" rx="1.4" fill="currentColor" />
    {/* Calendar frame with header */}
    <path fillRule="evenodd" clipRule="evenodd" d="M10 5.5C7.5 5.5 5.5 7.5 5.5 10V28C5.5 30.5 7.5 32.5 10 32.5H22C21.4 31.3 21 30 21 28.5C21 23.3 25.3 19 30.5 19C31.2 19 31.9 19.1 32.5 19.3V10C32.5 7.5 30.5 5.5 28 5.5H10ZM8.2 12.5V10C8.2 9 9 8.2 10 8.2H28C29 8.2 29.8 9 29.8 10V12.5H8.2Z" />
    {/* Grid date dots */}
    <rect x="10.5" y="15.5" width="3.2" height="3.2" rx="0.8" fill="currentColor" />
    <rect x="16.5" y="15.5" width="3.2" height="3.2" rx="0.8" fill="currentColor" />
    <rect x="22.5" y="15.5" width="3.2" height="3.2" rx="0.8" fill="currentColor" />
    <rect x="10.5" y="21.5" width="3.2" height="3.2" rx="0.8" fill="currentColor" />
    <rect x="16.5" y="21.5" width="3.2" height="3.2" rx="0.8" fill="currentColor" />
    {/* Circular star badge */}
    <path fillRule="evenodd" clipRule="evenodd" d="M30.5 20.5C26.1 20.5 22.5 24.1 22.5 28.5C22.5 32.9 26.1 36.5 30.5 36.5C34.9 36.5 38.5 32.9 38.5 28.5C38.5 24.1 34.9 20.5 30.5 20.5ZM30.5 23.5L31.8 26.6L35.2 26.9L32.6 29.2L33.4 32.5L30.5 30.8L27.6 32.5L28.4 29.2L25.8 26.9L29.2 26.6L30.5 23.5Z" />
  </svg>
);

// 3. Community Group with Heart & Radiating Rays Icon (Exact match to reference screenshot)
const CommunityHeartIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 40 40" fill="currentColor" className={className}>
    {/* Radiating sparkle rays above heart */}
    <line x1="20" y1="2" x2="20" y2="4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="14.5" y1="3.5" x2="16" y2="5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="25.5" y1="3.5" x2="24" y2="5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="11.5" y1="7.5" x2="13.5" y2="8.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="28.5" y1="7.5" x2="26.5" y2="8.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    {/* Heart symbol */}
    <path d="M20 14.5C19.5 13.9 18.5 12.2 16.5 12.2C14.5 12.2 13 13.7 13 15.6C13 18.3 17 21 20 23C23 21 27 18.3 27 15.6C27 13.7 25.5 12.2 23.5 12.2C21.5 12.2 20.5 13.9 20 14.5Z" />
    {/* Center person */}
    <circle cx="20" cy="18.5" r="3.2" />
    <path d="M14 31C14 27.5 16.7 24.8 20 24.8C23.3 24.8 26 27.5 26 31C26 31.8 25.3 32.5 24.5 32.5H15.5C14.7 32.5 14 31.8 14 31Z" />
    {/* Left person */}
    <circle cx="10" cy="21" r="2.6" />
    <path d="M5.5 31C5.5 28.2 7.5 26 10 25.6C9.2 26.9 8.7 28.4 8.7 30C8.7 30.8 8.8 31.7 9.1 32.5H6.8C6.1 32.5 5.5 31.8 5.5 31Z" />
    {/* Right person */}
    <circle cx="30" cy="21" r="2.6" />
    <path d="M34.5 31C34.5 31.8 33.9 32.5 33.2 32.5H30.9C31.2 31.7 31.3 30.8 31.3 30C31.3 28.4 30.8 26.9 30 25.6C32.5 26 34.5 28.2 34.5 31Z" />
  </svg>
);

// 4. Infinity Opportunities Icon (Exact match to reference screenshot)
const InfinityIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path
      d="M12.5 14C8.9 14 6 16.9 6 20.5C6 24.1 8.9 27 12.5 27C16.8 27 19.5 21.8 20 20.5C20.5 19.2 23.2 14 27.5 14C31.1 14 34 16.9 34 20.5C34 24.1 31.1 27 27.5 27C23.2 27 20.5 21.8 20 20.5C19.5 19.2 16.8 14 12.5 14Z"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function StatsTicker() {
  const stats = [
    { value: '500+', label: 'Members', icon: MembersIcon },
    { value: '10+', label: 'Events', icon: EventsIcon },
    { value: '1', label: 'Community', sub: 'Udgir', icon: CommunityHeartIcon },
    { value: '∞', label: 'Opportunities', icon: InfinityIcon },
  ];

  // Repeat items for wide seamless continuous ticker loop
  const marqueeItems = [...stats, ...stats, ...stats];

  return (
    <section className="w-full relative z-20">
      <div className="sliding-text-one w-full bg-[#9E6738] lg:py-4 py-3 overflow-hidden shadow-md select-none border-y border-[#9E6738]">
        <div className="sliding-text-one__wrap flex overflow-hidden w-full">
          <ul className="sliding-text__list list-unstyled flex animate-ticker whitespace-nowrap m-0 p-0 items-center">
            
            {/* Primary Track */}
            <div className="js-marquee flex items-center shrink-0">
              {marqueeItems.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <li key={`track1-${idx}`} className="inline-flex items-center mx-4 sm:mx-6 md:mx-8">
                    <div className="flex items-center gap-2.5 sm:gap-3 group cursor-default">
                      {/* Exact Circular Cream Badge with Brown Icon */}
                      <span className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-[#FCFAF7] text-[#9E6738] inline-flex items-center justify-center p-1 sm:p-1.5 shrink-0 transition-transform duration-300  shadow-xs">
                        <Icon className="w-full h-full" />
                      </span>
                      
                      {/* Stat Text */}
                      <h2 
                        data-hover={`${stat.value} ${stat.label}`} 
                        className="sliding-text__title flex items-center font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wider text-white group-hover:text-[#17212B] transition-colors duration-300 m-0"
                      >
                        <span>
                          {stat.value} {stat.label} {stat.sub ? `(${stat.sub})` : ''}
                        </span>
                      </h2>
                    </div>
                  </li>
                );
              })}
            </div>

            {/* Cloned Track for Infinite Seamless Marquee */}
            <div className="js-marquee flex items-center shrink-0" aria-hidden="true">
              {marqueeItems.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <li key={`track2-${idx}`} className="inline-flex items-center mx-4 sm:mx-6 md:mx-8">
                    <div className="flex items-center gap-2.5 sm:gap-3 group cursor-default">
                      {/* Exact Circular Cream Badge with Brown Icon */}
                      <span className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-[#FCFAF7] text-[#9E6738] inline-flex items-center justify-center p-1 sm:p-1.5 shrink-0 transition-transform duration-300 shadow-xs">
                        <Icon className="w-full h-full" />
                      </span>
                      
                      {/* Stat Text */}
                      <h2 
                        data-hover={`${stat.value} ${stat.label}`} 
                        className="sliding-text__title flex items-center font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wider text-white group-hover:text-[#17212B] transition-colors duration-300 m-0"
                      >
                        <span>
                          {stat.value} {stat.label} {stat.sub ? `(${stat.sub})` : ''}
                        </span>
                      </h2>
                    </div>
                  </li>
                );
              })}
            </div>

          </ul>
        </div>
      </div>
    </section>
  );
}
