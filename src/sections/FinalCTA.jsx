import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ onJoinClick }) {
  return (
    <section className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Container with bg_img.webp background */}
        <div className="relative rounded-[10px] overflow-hidden shadow-lg border border-[#E8E1D9]/40 group text-center py-10 sm:py-14 lg:py-16 px-5 sm:px-8 lg:px-12">
          
          {/* Background Image: bg_img.webp */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('/images/bg_img.webp')`,
            }}
          />

          {/* Dark Cinematic Tint Overlay for text readability */}
          <div className="absolute inset-0 bg-[#17212B]/20 backdrop-blur-[1px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17212B]/75 via-[#17212B]/40 to-[#17212B]/60 pointer-events-none" />

          {/* Paper Airplane Illustration with Swoosh Trail on the Right */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 lg:bottom-8 lg:right-12 pointer-events-none select-none transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
            <svg
              viewBox="0 0 120 100"
              fill="none"
              className="w-20 h-16 sm:w-28 sm:h-22 lg:w-36 lg:h-28 opacity-85"
            >
              {/* Dashed flight loop */}
              <path
                d="M12 75 C 28 92, 58 85, 48 58 C 38 35, 62 30, 88 50"
                stroke="#FAF4ED"
                strokeWidth="1.8"
                strokeDasharray="4 3"
                strokeLinecap="round"
                opacity="0.6"
              />
              {/* Paper Plane */}
              <g transform="translate(68, 18) rotate(15)">
                <polygon
                  points="36,4 4,24 16,33"
                  stroke="#FAF4ED"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
                <polygon
                  points="36,4 16,33 21,20"
                  stroke="#FAF4ED"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
                <polyline
                  points="16,33 18,44 24,35"
                  stroke="#FAF4ED"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </svg>
          </div>

          {/* Center Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white font-heading tracking-tight mb-3 sm:mb-4 leading-tight">
              Your Next Connection Could Start Here.
            </h2>

            {/* Subtitle */}
            <p
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed mb-7 sm:mb-9 max-w-xl"
            >
              Join developers, students and IT professionals who are learning, building and growing together.
            </p>

            {/* CTA Button */}
            <button
              type="button"
              onClick={onJoinClick}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="px-7 sm:px-9 py-3.5 sm:py-4 bg-[#9E6738] hover:bg-[#885427] active:scale-[0.98] text-white font-semibold text-sm sm:text-base rounded-[5px] transition-all duration-200 shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>Join the Community</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
