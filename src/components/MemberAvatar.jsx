import React from 'react';

export default function MemberAvatar({ member }) {
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer shrink-0 transition-transform duration-200 hover:-translate-y-1">
      {/* Circular Avatar Photo */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-[#E8E1D9] shadow-xs bg-[#F5EEE6]">
        <img
          src={member.avatar}
          alt={member.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = member.fallback || `https://placehold.co/400x400/EFE6DC/795537?text=${encodeURIComponent(member.name)}`;
          }}
          className="w-full h-full object-cover object-center rounded-full transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Member Name */}
      <h4 className="text-sm sm:text-base md:text-[17px] font-bold text-[#17212B] font-heading mt-3 sm:mt-3.5 leading-snug group-hover:text-[#9E6738] transition-colors">
        {member.name}
      </h4>

      {/* Member Role */}
      <p 
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="text-xs sm:text-[13px] text-[#66717A] font-medium mt-0.5"
      >
        {member.role}
      </p>
    </div>
  );
}
