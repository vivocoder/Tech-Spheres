import React from 'react';
import { ArrowRight } from 'lucide-react';
import MemberAvatar from '../components/MemberAvatar';
import { membersData } from '../data/members';

export default function CommunityMembers({ onViewAllMembers, onOpenJoinModal }) {
  return (
    <section id="members" className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container matching the reference design */}
        <div className="bg-white border border-[#E8E1D9] rounded-[5px] p-5 sm:p-7 lg:p-8 shadow-xs">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17212B] font-heading tracking-tight">
              Community Members
            </h2>

            {/* <button
              type="button"
              onClick={onViewAllMembers || onOpenJoinModal}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#9E6738] hover:text-[#795537] transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>View All Members</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button> */}
          </div>

          {/* Subtitle */}
          <p
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-sm sm:text-base text-center text-[#66717A] font-normal leading-relaxed mb-8 sm:mb-10"
          >
            A diverse community of learners, builders and professionals.
          </p>

         <div className="members-width flex justify-center items-center">
           {/* 6 Members Grid (Desktop: 6 in 1 row; Mobile: 2 or 3 per row) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 w-[100%] sm:w-[80%] mx-auto items-center justify-items-center pt-6">
            {membersData.map((member) => (
              <MemberAvatar key={member.id} member={member} />
            ))}
          </div>
         </div>

        </div>

      </div>
    </section>
  );
}
