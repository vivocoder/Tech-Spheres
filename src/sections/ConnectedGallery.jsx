import React, { useState } from 'react';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import { galleryMoments } from '../data/gallery';

export default function ConnectedGallery({ onViewGallery }) {
  const [activePhoto, setActivePhoto] = useState(null);

  const socials = [
    {
      name: 'LinkedIn',
      action: 'Follow',
      href: 'https://linkedin.com',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="24" height="24" rx="4" fill="#0A66C2" />
          <path
            d="M7.12 18.2H4.44V9.6h2.68v8.6zM5.78 8.42a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12zm13.78 9.78h-2.68v-4.2c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.21v4.27H11.2V9.6h2.57v1.18h.04c.36-.68 1.23-1.4 2.54-1.4 2.72 0 3.22 1.79 3.22 4.12v4.7z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: 'Meetup',
      action: 'Join',
      href: 'https://meetup.com',
      icon: (
        <img
          src="/icons/meetup.png"
          alt="Meetup"
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
        />
      ),
    },
    {
      name: 'Instagram',
      action: 'Follow',
      href: 'https://instagram.com',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#insta-gradient)" strokeWidth="2.2" />
          <circle cx="12" cy="12" r="4.2" stroke="url(#insta-gradient)" strokeWidth="2.2" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="url(#insta-gradient)" />
          <defs>
            <linearGradient id="insta-gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFDD55" />
              <stop offset="0.3" stopColor="#FF543E" />
              <stop offset="0.6" stopColor="#C837AB" />
              <stop offset="1" stopColor="#6B33D4" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      action: 'Join',
      href: 'https://whatsapp.com',
      icon: (
        <svg viewBox="0 0 24 24" width="34" height="34" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
          <circle cx="12" cy="12" r="11" fill="#25D366" />
          <path
            d="M17.5 14.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .8.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.2-.3-.3-.6-.5z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="gallery" className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Combined Card Box with Box Shadow and rounded-[5px] */}
        <div className="bg-white border border-[#E8E1D9] rounded-[5px] p-5 sm:p-7 lg:p-8 shadow-md shadow-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start">
            
            {/* Left Side: Stay Connected */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div className='text-center'>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#17212B] font-heading tracking-tight mb-2">
                  Stay Connected
                </h2>
                <p
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-sm sm:text-base text-[#66717A] font-normal leading-relaxed mb-6 sm:mb-8"
                >
                  Follow us on our social platforms for updates, events and opportunities.
                </p>

                {/* 4 Social Cards in a Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 sm:p-4 rounded-[5px] bg-white border border-[#E8E1D9] flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-[#D8C0A7] hover:shadow-xs group cursor-pointer"
                    >
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[5px] flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110">
                        {social.icon}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#17212B] font-heading leading-tight group-hover:text-[#9E6738] transition-colors">
                        {social.name}
                      </h4>
                      <span
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-[11px] text-[#66717A] font-medium mt-1"
                      >
                        {social.action}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Community Moments Gallery */}
            <div className="lg:col-span-7">
              {/* Header Row */}
              <div className="flex items-center justify-center mb-1">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#17212B] font-heading tracking-tight">
                  Community Moments
                </h2>

                {/* <button
                  type="button"
                  onClick={onViewGallery}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#9E6738] hover:text-[#795537] transition-colors cursor-pointer"
                >
                  <span>View Gallery</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button> */}
              </div>

              {/* Subtitle */}
              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-sm sm:text-base text-center text-[#66717A] font-normal leading-relaxed mb-6"
              >
                Photos from our meetups, sessions and events.
              </p>

              {/* 3x2 Photo Collage Grid */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
                {galleryMoments.slice(0, 6).map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhoto(photo)}
                    className="group relative rounded-[5px] overflow-hidden max-w-[210px] max-h-[100px] bg-[#FAF4ED] border border-[#E8E1D9] cursor-pointer shadow-xs"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/400x300/F5EEE6/795537?text=Meetup+${photo.id}`;
                      }}
                      className="w-full h-full object-cover rounded-[5px] transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#17212B]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-white/90 text-[#17212B] flex items-center justify-center shadow-xs">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal for Photo Preview */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17212B]/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-[5px] overflow-hidden shadow-2xl border border-[#E8E1D9] p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-5 right-5 z-10 p-2 rounded-full bg-[#17212B]/70 text-white hover:bg-[#17212B] transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-[5px] overflow-hidden max-h-[70vh] bg-[#FAF4ED] flex items-center justify-center">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/800x600/F5EEE6/795537?text=TechSphere+Meetup`;
                }}
                className="w-full h-auto object-contain max-h-[70vh] rounded-[5px]"
              />
            </div>
            <div className="p-3 bg-white">
              <h4 className="text-base font-bold text-[#17212B] font-heading">
                {activePhoto.title}
              </h4>
              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-xs text-[#66717A] mt-0.5"
              >
                {activePhoto.caption} • TechSphere Community Gallery
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
