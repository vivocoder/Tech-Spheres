import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function JoinCommunity({ onOpenDetailed }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      alert('Please enter your Full Name and Email.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="join" className="w-full py-5 sm:py-7 lg:py-8">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-5 sm:mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17212B] font-heading tracking-tight mb-2">
            Join Udgir Community
          </h2>
          <p
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-sm sm:text-base text-[#66717A] font-normal leading-relaxed"
          >
            Be a part of the growing tech community in Udgir.
          </p>
        </div>

        {/* Quick Join Form */}
        <form onSubmit={handleSubmit} className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 items-center">
            
            {/* Full Name Input */}
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="w-full h-12 sm:h-13 px-4 sm:px-5 rounded-[5px] bg-white border border-[#9E6738]/90 text-sm sm:text-[15px] text-[#17212B]  placeholder:text-[#8A94A6] outline-none focus:ring-2 focus:ring-[#9E6738]/25 focus:border-[#9E6738] transition-all shadow-xs"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="w-full h-12 sm:h-13 px-4 sm:px-5 rounded-[5px] bg-white border border-[#9E6738]/90 text-sm sm:text-[15px] text-[#17212B] placeholder:text-[#8A94A6] outline-none focus:ring-2 focus:ring-[#9E6738]/25 focus:border-[#9E6738] transition-all shadow-xs"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="w-full h-12 sm:h-13 px-4 sm:px-5 rounded-[5px] bg-white border border-[#9E6738]/90 text-sm sm:text-[15px] text-[#17212B] placeholder:text-[#8A94A6] outline-none focus:ring-2 focus:ring-[#9E6738]/25 focus:border-[#9E6738] transition-all shadow-xs"
              />
            </div>

            {/* Join Now Button */}
            <div>
              <button
                type="submit"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="w-full h-12 sm:h-13 px-6 bg-[#9E6738] hover:bg-[#885427] active:scale-[0.99] text-white font-medium sm:font-semibold text-sm sm:text-base rounded-[5px] transition-all duration-200 shadow-xs cursor-pointer flex items-center justify-center"
              >
                Join Now
              </button>
            </div>

          </div>
        </form>

        {/* Detailed Membership Form Link */}
        <div className="mt-4 sm:mt-5 flex justify-center">
          <button
            type="button"
            onClick={onOpenDetailed}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="group inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-medium text-[#9E6738] hover:text-[#795537] transition-colors cursor-pointer"
          >
            <span>Or fill the detailed membership form</span>
            <span className="text-base font-normal transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Success Feedback Notification */}
        {submitted && (
          <div className="mt-4 p-4 rounded-xl bg-[#F5EEE6] border border-[#D8C0A7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#795537] text-sm animate-in fade-in duration-200">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#9E6738] shrink-0" />
              <span>
                Thank you, <strong className="text-[#17212B]">{formData.fullName}</strong>! Welcome to Udgir Community. We'll contact you soon.
              </span>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: '', email: '', phone: '' });
              }}
              className="text-xs font-semibold underline cursor-pointer hover:text-[#5c3e24] self-start sm:self-auto"
            >
              Submit Another
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
