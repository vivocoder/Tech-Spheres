import React from "react";
import { MessageCircle } from "lucide-react";

export default function Founders() {

  return (
    <section id="founders" className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founders Card Container */}
        <div className="bg-[#FAF6F0]/80 rounded-[8px] border-[6px] border-[#9E6738]/60 p-5 sm:p-7 md:p-9 shadow-[0_12px_40px_rgba(64,45,30,0.07)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-8 lg:gap-12 items-center">
            {/* Left: Founders Image */}
            <div
              className="md:col-span-6 relative rounded-[5px] overflow-hidden bg-charcoal aspect-[16/10] group border-[4px] border-[#9E6738]/40 shadow-sm"
            >
              {/* Founders Image */}
              <img
                src="/images/Modern_Tech_Portrait_with_Purple_Halo.png"
                alt="Suhail & Sajid - TechSphere Founders"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark subtle gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

              {/* Bottom Overlay: Suhail - TechSphere - Sajid */}
              <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-5 flex items-end justify-between text-white pointer-events-none z-10">
                <div
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-xs sm:text-sm md:text-base font-bold tracking-wide"
                >
                  Mohammad Suhail
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
              </div>
            </div>

            {/* Right: Content Information */}
            <div className="md:col-span-6 flex flex-col justify-center lg:items-start items-center text-center">
              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] text-center lg:text-left font-bold text-[#17212B] font-heading tracking-tight mb-3 sm:mb-4">
                Why I started this
              </h2>

              {/* Subtitle / Description */}
              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-sm sm:text-base text-[#66717A] leading-relaxed mb-6 sm:mb-8 font-normal max-w-lg lg:text-left text-center"
              >
                I'm Suhail, and I work with databases and cloud infrastructure.
                Almost everything I know came from strangers on the internet,
                TechSphere is me trying to make that easier for whoever comes
                next. If you're stuck on something, or building something, write
                to me.
              </p>

              {/* Connect with me WhatsApp Button */}
              <a
                href="https://wa.me/917038488253?text=Hello%20Mohammad%20Suhail%2C%20I%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-[5px] bg-[#9E6738] hover:bg-[#885427] active:scale-[0.98] text-white font-semibold text-sm sm:text-base shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                <span>Connect with me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
