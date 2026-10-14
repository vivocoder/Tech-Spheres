import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import Button from './Button';

// Google Apps Script Web App Endpoint from environment variable
const SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbw6Ik11iHhsW_DwfbFms6fTg80xfxxgKaQ--tbxH5KBfAk0SseuWec8T4wW8JlzNSI/exec';

export default function JoinModal({
  isOpen,
  onClose,
  title = 'Join the TechSphere Community',
  badge = 'Membership Application',
  eventName = '',
}) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
    // Clear error message on user input
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Required fields validation
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in required fields (Full Name and Email).');
      return;
    }

    setIsSubmitting(true);

    // Map form fields to requested Google Apps Script schema
    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      city: formData.city.trim(),
      currentRole: formData.currentRole || '',
      experienceLevel: formData.experience || '',
      skills: formData.skills.trim(),
      linkedin: formData.linkedin.trim(),
      reason: formData.whyJoin.trim(),
      eventName: eventName || 'TechSphere Membership Application',
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      // Append query parameters so scripts reading e.parameter get values,
      // and send text/plain JSON body so scripts reading e.postData.contents get values too.
      const targetUrl = new URL(SCRIPT_URL);
      Object.entries(payload).forEach(([key, value]) => {
        targetUrl.searchParams.append(key, value);
      });

      let submissionSuccess = false;

      try {
        // Attempt standard fetch using Content-Type text/plain to prevent preflight OPTIONS failures
        const response = await fetch(targetUrl.toString(), {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        // Handle specific HTTP errors if readable
        if (response.status === 401) {
          throw new Error(
            'Google Apps Script returned 401 Unauthorized. Please open Apps Script > Deploy > Manage deployments, edit the deployment, and set "Who has access" to "Anyone".'
          );
        }

        if (response.type === 'opaque') {
          // Opaque response received (status 0 in mode: no-cors or redirect)
          submissionSuccess = true;
        } else if (response.ok) {
          const responseText = await response.text();
          try {
            const data = JSON.parse(responseText);
            // Verify if Google Apps Script returned explicit failure
            if (data.status === 'error' || data.result === 'error') {
              throw new Error(data.message || data.error || 'Google Apps Script reported an error saving the row.');
            }
            submissionSuccess = true;
          } catch (jsonErr) {
            // Check if response is Google Drive/Script HTML error page
            if (
              responseText.includes('errorMessage') ||
              responseText.includes('Page not found') ||
              responseText.includes('Sorry, unable to open')
            ) {
              throw new Error(
                'Google Apps Script endpoint returned an error page. Please ensure the Web App is deployed with "Who has access: Anyone".'
              );
            }
            // Non-JSON standard 200 response
            submissionSuccess = true;
          }
        } else {
          throw new Error(`Google Apps Script returned HTTP status ${response.status}`);
        }
      } catch (fetchErr) {
        // If standard fetch was blocked by browser CORS redirect on 302
        if (
          fetchErr.name === 'TypeError' &&
          (fetchErr.message.includes('fetch') ||
            fetchErr.message.includes('NetworkError') ||
            fetchErr.message.includes('Failed to fetch'))
        ) {
          // Fallback to mode: 'no-cors' which browsers permit for cross-domain Web Apps
          const fallbackRes = await fetch(targetUrl.toString(), {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(payload),
          });

          // In no-cors mode, successful dispatch gives type 'opaque'
          if (fallbackRes.type === 'opaque') {
            submissionSuccess = true;
          } else {
            throw new Error('Unable to confirm submission response from Google Apps Script.');
          }
        } else {
          throw fetchErr;
        }
      }

      if (submissionSuccess) {
        setSubmitted(true);
      } else {
        throw new Error('Could not confirm data was saved. Please try again.');
      }
    } catch (err) {
      console.error('TechSphere Form Submission Error:', err);
      // Requirement 5: Preserve current UI and form values on errors
      setErrorMessage(
        err.message ||
          'Failed to submit form. Please check your network connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-[5px] overflow-hidden shadow-2xl border border-border max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border bg-cream-50">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brown-600 mb-0.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-charcoal font-display">
              {title}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full hover:bg-cream-200 text-muted hover:text-charcoal transition-colors cursor-pointer"
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
                Thank you, <strong className="text-charcoal">{formData.fullName}</strong>. {eventName ? `Your registration for ${eventName} has been received!` : 'Your application to join our Udgir tech community has been received.'} We will connect you to our WhatsApp community group and notify you of upcoming sessions!
              </p>
              <Button variant="primary" size="md" onClick={handleResetAndClose}>
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error banner preserving form values */}
              {errorMessage && (
                <div className="p-3.5 rounded-[5px] bg-red-50/90 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-red-800">Submission Notice</p>
                    <p className="mt-0.5 leading-relaxed text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Full Name <span className="text-brown-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. Suhail Ahmed"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors disabled:opacity-60"
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
                    disabled={isSubmitting}
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    disabled={isSubmitting}
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    disabled={isSubmitting}
                    placeholder="Udgir (or nearby region)"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Current Role
                  </label>
                  <select
                    name="currentRole"
                    disabled={isSubmitting}
                    value={formData.currentRole}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors disabled:opacity-60"
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
                    disabled={isSubmitting}
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors disabled:opacity-60"
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
                    disabled={isSubmitting}
                    placeholder="e.g. JavaScript, React, Python, Java, Docker, Tailwind"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors disabled:opacity-60"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    disabled={isSubmitting}
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors disabled:opacity-60"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Why do you want to join TechSphere?
                  </label>
                  <textarea
                    rows="3"
                    name="whyJoin"
                    disabled={isSubmitting}
                    placeholder="Tell us what you hope to achieve, learn or collaborate on..."
                    value={formData.whyJoin}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-[5px] bg-cream-50/60 border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-brown-500 focus:bg-white transition-colors resize-none disabled:opacity-60"
                  ></textarea>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-border">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleResetAndClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="min-w-[170px]"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </span>
                  ) : (
                    <span>Submit Application</span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
