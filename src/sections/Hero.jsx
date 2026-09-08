import React from 'react';
import { ArrowRight, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function Hero({ onJoinClick, onEventsClick }) {
  return (
    <section id="home" className="relative pt-6 sm:pt-6  overflow-hidden select-none">
      

      {/* Main Grid Container - Exactly 1350px Max Width Centered */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10 px-1 sm:px-0">
          
          {/* Eyebrow / Subtitle */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 sm:mb-5">
            <span 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="text-[11px] sm:text-[13px] font-bold tracking-[0.22em] sm:tracking-[0.26em] text-[#8C7A6B] uppercase"
            >
              PEOPLE • IDEAS • OPPORTUNITIES
            </span>
          </div>

          {/* Main Headline in Playfair Display (font-heading) with Brown Accent */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-bold text-[#17212B] tracking-tight leading-[1.15] lg:leading-[1.12] mb-3 sm:mb-5 text-center lg:text-left">
            A Stronger <br />
            <span className="text-[#9E6738] font-bold">Tech Community</span> <br />
            Starts Here.
          </h1>

          {/* Paragraph Description */}
          <p 
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-xs sm:text-base text-[#66717A] max-w-[450px] leading-relaxed mb-6 sm:mb-9 font-normal text-center lg:text-left mx-auto lg:mx-0"
          >
            For Developers, Students, Freshers and IT Professionals — to learn, connect, share and grow together.
          </p>

          {/* Action Buttons - 1 Row with 2 Buttons on Mobile, Responsive */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-none grid grid-cols-2 gap-2.5 sm:gap-4 lg:flex lg:flex-row lg:items-center mx-auto lg:mx-0">
            <button
              onClick={onJoinClick}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-7 py-3 sm:py-3.5 rounded-[5px] bg-[#9E6738] hover:bg-[#885427] text-white font-semibold text-xs sm:text-sm lg:text-base shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span>Join Community</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 shrink-0" />
            </button>
            <button
              onClick={onEventsClick}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="w-full inline-flex items-center justify-center px-3 sm:px-7 py-3 sm:py-3.5 rounded-[5px] bg-white hover:bg-[#FAF7F2] border border-[#D8C0A7] hover:border-[#9E6738] text-[#17212B] hover:text-[#9E6738] font-semibold text-xs sm:text-sm lg:text-base shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              Explore Events
            </button>
          </div>
        </div>

        {/* Right Visual Composition Column */}
        <div className="lg:col-span-7 relative flex items-center justify-center pt-4 lg:pt-0">
          <div className="relative w-full max-w-[650px] flex items-center justify-center">
            
            {/* Warm Arch Shape behind the people (Curved top arch, sits flat on desk) */}
            <div 
              className="absolute top-1 w-[88%] sm:w-[90%] h-[92%] rounded-t-[360px] rounded-b-none pointer-events-none -z-0"
              style={{
                background: 'radial-gradient(ellipse at 50% 40%, #F5EAE0 0%, #EDE0D1 60%, #E2CFBD 100%)',
                boxShadow: 'inset 0 0 50px rgba(255,255,255,0.65)',
              }}
            />

            {/* Hand-drawn Doodles (Tick Marks //) */}
            {/* Top Doodle near Learn Together */}
            <div className="absolute top-7 sm:top-9 left-[8%] sm:left-[12%] text-[#AD825B] pointer-events-none select-none z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                <line x1="6" y1="4" x2="14" y2="12" />
                <line x1="11" y1="12" x2="19" y2="20" />
              </svg>
            </div>

            {/* Left Doodle below Share Ideas */}
            <div className="absolute top-[48%] -left-3 sm:-left-5 text-[#AD825B] pointer-events-none select-none z-20">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                <line x1="4" y1="8" x2="12" y2="16" />
                <line x1="8" y1="16" x2="16" y2="24" />
              </svg>
            </div>

            {/* FLOATING BADGE 1: Learn Together (Top) */}
            <div className="absolute top-2 sm:top-3 left-[32%] sm:left-[28%] -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-[5px] border border-[#E8E1D9] shadow-[0_8px_24px_rgba(23,33,43,0.08)] flex items-center gap-2 sm:gap-2.5 scale-90 sm:scale-100 transition-transform duration-300 hover:scale-105">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#F8F4EE] text-[#9E6738] flex items-center justify-center">
                <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#9E6738]" />
              </div>
              <div className="flex flex-col text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="text-xs sm:text-[13px] font-bold text-[#17212B] leading-tight">
                  Learn
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#66717A] font-semibold leading-tight mt-0.5">
                  Together
                </span>
              </div>
            </div>

            {/* FLOATING BADGE 2: Share Ideas (Left) */}
            <div className="absolute top-[32%] left-0 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-[5px] border border-[#E8E1D9] shadow-[0_8px_24px_rgba(23,33,43,0.08)] flex items-center gap-2 sm:gap-2.5 scale-85 sm:scale-100 origin-left transition-transform duration-300 hover:scale-105">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#F8F4EE] text-[#9E6738] flex items-center justify-center">
                <Lightbulb className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#9E6738]" />
              </div>
              <div className="flex flex-col text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="text-xs sm:text-[13px] font-bold text-[#17212B] leading-tight">
                  Share
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#66717A] font-semibold leading-tight mt-0.5">
                  Ideas
                </span>
              </div>
            </div>

            {/* FLOATING BADGE 3: Grow Careers (Right) */}
            <div className="absolute top-10 sm:top-14 right-0 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-[5px] border border-[#E8E1D9] shadow-[0_8px_24px_rgba(23,33,43,0.08)] flex items-center gap-2 sm:gap-2.5 scale-85 sm:scale-100 origin-right transition-transform duration-300 hover:scale-105">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#F8F4EE] text-[#9E6738] flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#9E6738]" />
              </div>
              <div className="flex flex-col text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="text-xs sm:text-[13px] font-bold text-[#17212B] leading-tight">
                  Grow
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#66717A] font-semibold leading-tight mt-0.5">
                  Careers
                </span>
              </div>
            </div>

            {/* Handwritten Script Tag: "Community for a Better Tomorrow" */}
            <div className="absolute top-64 sm:top-60 -right-2 sm:-right-7 z-20 text-center pointer-events-none select-none hidden sm:block -rotate-2 bg-white p-4 rounded-[5px] border-[#E8E1D9] shadow-[0_8px_24px_rgba(23,33,43,0.08)] transition-transform duration-300 hover:scale-105">
              <div className="font-['Caveat',_cursive] text-[19px] sm:text-[21px] text-[#795537] leading-[1.08] font-bold tracking-wide">
                Community <br />
                <span className="text-[17px] sm:text-[18px] font-normal text-[#956B47]">for a</span> <br />
                Better Tomorrow
              </div>
              {/* Hand-drawn underline squiggle */}
              <svg className="w-24 h-4 mx-auto text-[#AD825B] mt-0.5" viewBox="0 0 100 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6,8 Q35,14 65,7 T94,9" />
              </svg>
            </div>

            {/* Main Cutout Image Container with Seamless Wooden Table Surface */}
            <div className="relative z-10 w-full pt-4 pb-0">
              
              {/* Wooden Desk Surface Base */}
              <div 
                className="absolute bottom-0 inset-x-0 h-10 sm:h-12 z-0 pointer-events-none rounded-[5px]"
                style={{
                  background: 'linear-gradient(to bottom, #F3E9DD 0%, #E9DACB 50%, #DFCEBC 100%)',
                  borderTop: '1px solid #DFCEBC',
                  boxShadow: '0 -2px 10px rgba(0,0,0,0.02)',
                }}
              />

              <img
                src="/images/herobg.png"
                alt="TechSphere community members collaborating on a laptop"
                className="relative z-10 w-full h-auto object-contain select-none pointer-events-none"
                loading="eager"
              />

            


            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
