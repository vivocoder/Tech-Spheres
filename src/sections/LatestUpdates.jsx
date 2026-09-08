import React from 'react';
import { Users2, Calendar, Megaphone, ArrowRight } from 'lucide-react';
import { updatesData } from '../data/updates';

export default function LatestUpdates({ onViewAll }) {
  const getUpdateIcon = (type) => {
    switch (type) {
      case 'users':
        return <Users2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#9E6738] stroke-[2]" />;
      case 'calendar':
        return <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#9E6738] stroke-[2]" />;
      case 'megaphone':
        return <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 text-[#9E6738] stroke-[2]" />;
      default:
        return <Users2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#9E6738] stroke-[2]" />;
    }
  };

  return (
    <section id="updates" className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Row */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17212B] font-heading tracking-tight">
            Latest Updates
          </h2>
{/* 
          <button
            onClick={onViewAll}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#9E6738] hover:text-[#795537] transition-colors cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button> */}

        </div>

        {/* 3 Updates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {updatesData.map((update) => (
            <div
              key={update.id}
              className="bg-white rounded-[5px] border border-[#E8E1D9] p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#D8C0A7] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Tag Badge */}
                <div className="mb-3.5 sm:mb-4">
                  <span 
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="inline-block px-3.5 py-1 rounded-full bg-[#F5EEE6] text-[#795537] text-xs font-semibold tracking-wide"
                  >
                    {update.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#17212B] font-heading mb-2 leading-snug group-hover:text-[#9E6738] transition-colors">
                  {update.title}
                </h3>

                {/* Card Description */}
                <p 
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-sm text-[#66717A] font-normal leading-relaxed mb-6"
                >
                  {update.description}
                </p>
              </div>

              {/* Bottom Row: Time and Circular Icon Badge */}
              <div className="flex items-center justify-between mt-auto pt-2">
                <span 
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-xs sm:text-sm text-[#66717A] font-medium"
                >
                  {update.timeAgo}
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F5EEE6] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs">
                  {getUpdateIcon(update.iconType)}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
