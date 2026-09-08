import React, { useState } from "react";
import {
  ArrowRight,
  X,
  MessageSquareCheck,
  Send,
  Sparkles,
} from "lucide-react";

export default function Suggestions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ideaText, setIdeaText] = useState("");
  const [ideaTopic, setIdeaTopic] = useState("Workshop");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ideaText.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setIdeaText("");
    }, 2000);
  };

  return (
    <section id="suggestions" className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-4 sm:mb-5 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17212B] font-heading tracking-tight mb-1.5">
            Share Your Suggestions
          </h2>
          <p
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-sm sm:text-base text-[#66717A] font-normal leading-relaxed"
          >
            Help us build a better community.
          </p>
        </div>

        {/* Suggestion Strip Card matching reference screenshot */}
        <div className="bg-[#FAF7F2] border border-[#E8E1D9] rounded-[5px] sm:rounded-[5px] p-5 sm:p-6 lg:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            {/* Left side with Icon Badge and Description */}
            <div className="flex items-start sm:items-center gap-3.5 sm:gap-4.5">
              {/* Questionnaire / Idea Icon Badge */}
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[5px] bg-[#EFE6DC] border border-[#E4D9CD] flex items-center justify-center shrink-0 shadow-xs">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#9E6738"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="m9 15 6-6" />
                  <circle cx="9.5" cy="9.5" r="1.2" fill="#9E6738" />
                  <circle cx="14.5" cy="14.5" r="1.2" fill="#9E6738" />
                </svg>
              </div>

              {/* Text */}
              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-sm sm:text-base text-[#536B78] font-medium leading-relaxed max-w-2xl"
              >
                Have an idea, suggestion or something you'd like to see in the
                community? Fill out a short questionnaire.
              </p>
            </div>

            {/* Right side Action Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-[#9E6738] hover:bg-[#885427] active:scale-[0.98] text-white font-semibold text-sm sm:text-base rounded-[5px] transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center justify-center gap-2 shrink-0 self-start"
            >
              <span>Share Your Idea</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Suggestion Questionnaire Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17212B]/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-[5px] overflow-hidden shadow-2xl border border-[#E8E1D9]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E8E1D9] bg-[#FAF7F2]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#9E6738]" />
                <h4 className="text-base font-bold text-[#17212B] font-heading">
                  Community Suggestion Box
                </h4>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#EFE6DC] text-[#66717A] hover:text-[#17212B] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center animate-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-[#EFE6DC] text-[#9E6738] mx-auto flex items-center justify-center mb-3">
                  <MessageSquareCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#17212B] font-heading mb-1">
                  Thank You for Your Idea!
                </h4>
                <p
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-xs sm:text-sm text-[#66717A]"
                >
                  The TechSphere organizing team reviews all suggestions every
                  week.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
                <div>
                  <label
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="block text-xs font-semibold text-[#17212B] mb-1.5"
                  >
                    What is this suggestion related to?
                  </label>
                  <select
                    value={ideaTopic}
                    onChange={(e) => setIdeaTopic(e.target.value)}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="w-full px-3.5 py-2.5 rounded-[5px] bg-[#FAF7F2] border border-[#E8E1D9] text-xs sm:text-sm text-[#17212B] focus:outline-none focus:border-[#9E6738] focus:ring-2 focus:ring-[#9E6738]/20 transition-colors"
                  >
                    <option value="Workshop">
                      Technical Workshop / Tech Talk
                    </option>
                    <option value="Hackathon">
                      Hackathon or Coding Challenge
                    </option>
                    <option value="Mentorship">Mentorship Program</option>
                    <option value="Career">
                      Career & Placement Assistance
                    </option>
                    <option value="Venue">
                      Event Venue / Logistics in Udgir
                    </option>
                    <option value="Other">Other Community Feedback</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="block text-xs font-semibold text-[#17212B] mb-1.5"
                  >
                    Describe your idea or suggestion
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={ideaText}
                    onChange={(e) => setIdeaText(e.target.value)}
                    placeholder="E.g., I would love a hands-on session on Building Fullstack Web Apps, Cloud Deployment, or preparing for IT interviews..."
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="w-full px-3.5 py-2.5 rounded-[5px] bg-[#FAF7F2] border border-[#E8E1D9] text-xs sm:text-sm text-[#17212B] placeholder:text-[#8A94A6] focus:outline-none focus:border-[#9E6738] focus:ring-2 focus:ring-[#9E6738]/20 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-2.5 pt-2 border-t border-[#E8E1D9]">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="px-4 py-2 rounded-[5px] border border-[#E8E1D9] text-xs sm:text-sm font-medium text-[#66717A] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="px-5 py-2 rounded-[5px] bg-[#9E6738] hover:bg-[#885427] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Idea</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
