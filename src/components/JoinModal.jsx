import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';
import Button from './Button';

export default function JoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Udgir',
    currentRole: '',
    experience: '',
    skills: '',
    linkedin: '',
    whyJoin: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert("Please enter required fields.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      // Keep open briefly or allow manual close
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-[5px] overflow-hidden shadow-2xl border border-border max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border bg-cream-50">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brown-600 mb-0.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Membership Application</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-charcoal font-display">
              Join the TechSphere Community
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-cream-200 text-muted hover:text-charcoal transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-success/15 text-success mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-charcoal font-display mb-1">
                Welcome to TechSphere!
              </h3>
              <p className="text-xs sm:text-sm text-muted max-w-sm mx-auto mb-6">
                Thank you, <strong className="text-charcoal">{formData.fullName}</strong>. Your application to join our Udgir tech community has been received. We will connect you to our WhatsApp community group and notify you of upcoming meetups!
              </p>
              <Button variant="primary" size="md" onClick={onClose}>
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Full Name <span className="text-brown-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Suhail Ahmed"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Email Address <span className="text-brown-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Udgir (or nearby region)"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Current Role
                  </label>
                  <select
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors"
                  >
                    <option value="">Select your role...</option>
                    <option value="Student">Student (BCA / MCA / B.Tech / Diploma)</option>
                    <option value="Fresher">Fresher / Graduate</option>
                    <option value="Developer">Software Developer / Engineer</option>
                    <option value="Designer">UI/UX Designer</option>
                    <option value="IT Professional">IT / DevOps / Cloud</option>
                    <option value="Senior Professional">Senior Professional / Tech Lead</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors"
                  >
                    <option value="">Select experience...</option>
                    <option value="Student">Student / Exploring</option>
                    <option value="0-1 years">0 – 1 Year (Fresher)</option>
                    <option value="1-3 years">1 – 3 Years</option>
                    <option value="3-5 years">3 – 5 Years</option>
                    <option value="5+ years">5+ Years</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Skills / Tech Stack
                  </label>
                  <input
                    type="text"
                    name="skills"
                    placeholder="e.g. JavaScript, React, Python, Java, Docker, Tailwind"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Why do you want to join TechSphere?
                  </label>
                  <textarea
                    rows="3"
                    name="whyJoin"
                    placeholder="Tell us what you hope to achieve, learn or collaborate on..."
                    value={formData.whyJoin}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-border">
                <Button variant="secondary" size="sm" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="md">
                  Submit Application
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
