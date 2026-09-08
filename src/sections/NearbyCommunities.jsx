import React from 'react';
import { ArrowRight } from 'lucide-react';
import { communitiesData } from '../data/communities';

export default function NearbyCommunities({ onViewMap }) {
  const handleViewMap = () => {
    if (onViewMap) {
      onViewMap();
    } else {
      alert("Udgir tech community map and regional expansion chapters coming soon!");
    }
  };

  return (
    <section id="communities" className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-2 sm:gap-4 mb-5 sm:mb-7">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17212B] font-heading tracking-tight mb-1 sm:mb-1.5">
              Nearby Communities
            </h2>
            <p
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="text-sm sm:text-base text-[#66717A] text-center font-normal leading-relaxed"
            >
              Growing together, beyond Udgir.
            </p>
          </div>

          {/* <button
            type="button"
            onClick={handleViewMap}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#9E6738] hover:text-[#795537] transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>View Map</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button> */}
        </div>

        {/* 5 City Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {communitiesData.map((item) => (
            <div
              key={item.id}
              className={`p-5 sm:p-6 rounded-[5px] text-center flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer ${
                item.isCurrent
                  ? 'bg-[#FAF4ED] border border-[#D8C0A7] shadow-xs'
                  : 'bg-white border border-[#E8E1D9] hover:border-[#D8C0A7] hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              {/* Circular Halo with Map Pin Icon */}
              <div
                className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center mb-3 sm:mb-3.5 transition-transform duration-300 group-hover:scale-110 ${
                  item.isCurrent
                    ? 'bg-[#F2E8DC] text-[#9E6738]'
                    : 'bg-[#FAF7F2] text-[#9E6738] group-hover:bg-[#F5EEE6]'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#9E6738]"
                >
                  <path d="M12 2C7.8 2 4.4 5.4 4.4 9.6C4.4 15 12 22 12 22C12 22 19.6 15 19.6 9.6C19.6 5.4 16.2 2 12 2ZM12 12.3C10.5 12.3 9.3 11.1 9.3 9.6C9.3 8.1 10.5 6.9 12 6.9C13.5 6.9 14.7 8.1 14.7 9.6C14.7 11.1 13.5 12.3 12 12.3Z" />
                </svg>
              </div>

              {/* City Name */}
              <h3 className="text-base sm:text-lg font-bold text-[#17212B] font-heading mb-1 group-hover:text-[#9E6738] transition-colors">
                {item.city}
              </h3>

              {/* Status Label */}
              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-xs sm:text-sm text-[#66717A] font-medium"
              >
                {item.status}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
