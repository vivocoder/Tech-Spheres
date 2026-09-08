import React from 'react';
import { Users2, BookOpen, TrendingUp } from 'lucide-react';

export default function WhyCommunity() {
  const features = [
    {
      title: 'Connect',
      description: 'Meet like-minded people, locally and globally.',
      icon: (
        <Users2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
      ),
    },
    {
      title: 'Learn',
      description: 'Share knowledge, attend sessions and grow your skills.',
      icon: (
        <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
      ),
    },
    {
      title: 'Grow',
      description: 'Get opportunities, mentorship and career guidance.',
      icon: (
        <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
      ),
    },
    {
      title: 'Build',
      description: 'Collaborate on ideas and create real impact together.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 sm:w-7 sm:h-7"
        >
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <circle cx="12" cy="12" r="1.5" />
          <line x1="8.2" y1="8.2" x2="15.8" y2="15.8" />
          <line x1="15.8" y1="8.2" x2="8.2" y2="15.8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-community" className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 lg:mt-6 mt-3">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px]  font-bold text-[#17212B] font-heading tracking-tight mb-2 sm:mb-2.5">
            Why TechSphere?
          </h2>
          <p 
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-sm sm:text-base text-[#66717A] font-normal leading-relaxed"
          >
            We believe in a stronger, more connected tech ecosystem.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start group p-4 sm:p-5 lg:p-6 shadow-sm shadow-[#FFFFFF]/80 rounded-[5px] bg-[#FFFFFF] backdrop-blur-50">
              {/* Circular Icon Badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F5EEE6] flex items-center justify-center text-[#9E6738] mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110 shadow-xs">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl text-center lg:text-left font-bold text-[#17212B] font-heading mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-sm sm:text-[15px] text-[#66717A] leading-relaxed font-normal text-center lg:text-left"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
