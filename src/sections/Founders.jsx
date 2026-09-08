import React, { useState } from "react";
import { Play, X } from "lucide-react";

export default function Founders() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="founders" className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founders Card Container */}
        <div className="bg-[#FAF6F0]/80 rounded-[8px] border-[6px] border-[#9E6738]/60 p-5 sm:p-7 md:p-9 shadow-[0_12px_40px_rgba(64,45,30,0.07)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-8 lg:gap-12 items-center">
            {/* Left: Video Thumbnail */}
            <div
              className="md:col-span-6 relative rounded-[5px]  overflow-hidden bg-charcoal aspect-[16/10] group cursor-pointer border-[4px] border-[#9E6738]/40 shadow-sm"
              onClick={() => setIsPlaying(true)}
            >
              {/* Founders Image */}
              <img
                src="/images/founders.jpg"
                alt="Suhail & Sajid - TechSphere Founders"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark subtle gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-15 sm:h-15 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 group-hover:bg-black/75 transition-all duration-300">
                  <Play className="w-6 h-6 fill-white text-white" />
                </div>
              </div>

              {/* Bottom Overlay: Suhail - TechSphere - Sajid */}
              <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-5 flex items-end justify-between text-white pointer-events-none z-10">
                <div
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-xs sm:text-sm md:text-base font-bold tracking-wide"
                >
                  Suhail
                </div>

                <div className="flex flex-col items-center text-center">
                  <span className="text-sm sm:text-base md:text-lg font-bold font-heading tracking-tight leading-none text-white">
                    TechSphere
                  </span>
                  <span
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-[9px] sm:text-[11px] text-white/80 font-normal mt-0.5 tracking-wide"
                  >
                    A Community for a Better Tomorrow
                  </span>
                </div>

                <div
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-xs sm:text-sm md:text-base font-bold tracking-wide"
                >
                  Sajid
                </div>
              </div>
            </div>

            {/* Right: Content Information */}
            <div className="md:col-span-6 flex flex-col justify-center lg:items-start items-center text-center">
              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] text-center lg:text-left font-bold text-[#17212B] font-heading tracking-tight mb-3 sm:mb-4">
                Meet the Founders
              </h2>

              {/* Subtitle / Description */}
              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-sm sm:text-base text-[#66717A] leading-relaxed mb-6 sm:mb-8 font-normal max-w-lg lg:text-left text-center"
              >
                Hi, we're Suhail & Sajid. We started TechSphere to bring
                together developers, students and IT professionals, and build a
                stronger tech community from Udgir to the world.
              </p>

              {/* Watch Introduction Button */}
              <button
                onClick={() => setIsPlaying(true)}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="inline-flex items-center justify-center lg:justify-start gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-[8px] bg-[#9E6738] hover:bg-[#885427] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full bg-white text-[#9E6738] flex items-center justify-center pl-0.5 shadow-sm shrink-0">
                  <Play className="w-2.5 h-2.5 fill-[#9E6738] text-[#9E6738]" />
                </span>

                <span>Watch Introduction</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div className="flex items-center justify-between p-4 border-b border-border bg-cream-50">
              <h4 className="text-sm font-bold text-charcoal font-heading">
                TechSphere Introduction — Suhail & Sajid
              </h4>
              <button
                onClick={() => setIsPlaying(false)}
                className="p-1.5 rounded-full hover:bg-cream-200 text-muted hover:text-charcoal cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-[#17212B] flex flex-col items-center justify-center p-6 text-center text-white relative">
              <div className="w-16 h-16 rounded-full bg-[#9E6738]/30 border border-[#9E6738]/50 flex items-center justify-center mb-4">
                <Play className="w-7 h-7 fill-white text-white ml-1" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-1.5">
                Founders' Welcome Message
              </h3>
              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-xs sm:text-sm text-cream-200 max-w-md leading-relaxed"
              >
                "Welcome to TechSphere! Our goal is to connect every developer,
                student, and tech professional from Udgir to the global tech
                ecosystem."
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
