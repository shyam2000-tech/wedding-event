/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { siteConfig } from '../config/site';
import { weddingImages } from '../assets/images';
import {
  EVENT_TYPE_OPTIONS,
  EventTypeOption,
  EnquiryFormData,
  EnquiryValidationErrors,
  validateEnquiryForm,
} from '../utils/enquiryValidation';
import { buildWhatsAppEnquiryUrl } from '../utils/whatsappEnquiry';
import {
  Compass,
  Palette,
  ShieldCheck,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

const COMMON_COUNTRY_CODES = [
  { code: '+91', label: 'India (+91)' },
  { code: '+1', label: 'USA / Canada (+1)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+971', label: 'UAE (+971)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+65', label: 'Singapore (+65)' },
  { code: '+974', label: 'Qatar (+974)' },
  { code: '+966', label: 'Saudi Arabia (+966)' },
  { code: '+968', label: 'Oman (+968)' },
  { code: '+965', label: 'Kuwait (+965)' },
  { code: '+49', label: 'Germany (+49)' },
  { code: '+33', label: 'France (+33)' },
  { code: '+60', label: 'Malaysia (+60)' },
];

export default function AboutPage() {
  const location = useLocation();
  const navigationState = location.state as
    | { eventType?: EventTypeOption; eventName?: string; additionalNotes?: string }
    | undefined;

  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phoneCountryCode: '+91',
    phoneNumber: '',
    eventType: navigationState?.eventType || 'Wedding',
    eventName: navigationState?.eventName || '',
    district: '',
    city: '',
    fullAddress: '',
    additionalNotes: navigationState?.additionalNotes || '',
  });

  const [errors, setErrors] = useState<EnquiryValidationErrors>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if navigated with state from a service card
  useEffect(() => {
    if (navigationState?.eventType) {
      setFormData((prev) => ({
        ...prev,
        eventType: navigationState.eventType || prev.eventType,
        eventName: navigationState.eventName || prev.eventName,
        additionalNotes: navigationState.additionalNotes || prev.additionalNotes,
      }));
    }
  }, [navigationState]);

  // Scroll to #contact if the hash is present or updated
  useEffect(() => {
    if (location.hash === '#contact') {
      const timer = setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (hasAttemptedSubmit) {
      const validation = validateEnquiryForm(updated);
      setErrors(validation.errors);
    }
  };

  const handleEventTypeSelect = (type: EventTypeOption) => {
    const updated = { ...formData, eventType: type };
    setFormData(updated);

    if (hasAttemptedSubmit) {
      const validation = validateEnquiryForm(updated);
      setErrors(validation.errors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    const validation = validateEnquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Build the prefilled WhatsApp URL with all form details
    const waUrl = buildWhatsAppEnquiryUrl(formData, siteConfig.whatsappPhone);

    // Open WhatsApp in a new tab/window
    const waLink = document.createElement('a');
    waLink.href = waUrl;
    waLink.target = '_blank';
    waLink.rel = 'noopener noreferrer';
    document.body.appendChild(waLink);
    waLink.click();
    document.body.removeChild(waLink);

    // Smooth scroll to the confirmation box
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phoneCountryCode: '+91',
      phoneNumber: '',
      eventType: 'Wedding',
      eventName: '',
      district: '',
      city: '',
      fullAddress: '',
      additionalNotes: '',
    });
    setErrors({});
    setHasAttemptedSubmit(false);
    setIsSubmitted(false);
  };

  const scrollToContactForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const approachSteps = [
    {
      number: '01',
      title: 'Vision & Initial Consultation',
      description:
        'We begin by listening closely to your priorities, personal aesthetic, and guest expectations to define a clear creative direction and realistic production budget.',
    },
    {
      number: '02',
      title: 'Curated Design & Vendor Curation',
      description:
        'Every floral texture, linen weight, lighting angle, and culinary partner is hand-selected and orchestrated to achieve complete visual and sensory harmony.',
    },
    {
      number: '03',
      title: 'Seamless On-Site Execution',
      description:
        'On your wedding weekend, our directors manage production load-in, timeline cues, and artist logistics so you and your families can celebrate without distraction.',
    },
  ];

  const coreStrengths = [
    {
      icon: Compass,
      title: 'Calm, Methodical Management',
      description:
        'We believe meticulous preparation creates peace of mind. Our team handles every contingency quietly behind the scenes.',
    },
    {
      icon: Palette,
      title: 'Cohesive Spatial Aesthetics',
      description:
        'We approach event spaces with an architectural mindset, ensuring lighting, florals, furniture, and paper suites tell one unified story.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Collaboration',
      description:
        'Direct communication, honest vendor guidance, and structured timelines keep you informed and confident at every juncture.',
    },
    {
      icon: HeartHandshake,
      title: 'Guest-Centered Hospitality',
      description:
        'From the ceremony welcome drink to the departure transportation, we design an effortless experience for every attending guest.',
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Page Header */}
      <PageHeader
        tagline="The Story & Vision"
        title="About Aurelia"
        subtitle="An artisanal wedding and event management team dedicated to curating celebrations with poise, intimacy, and architectural elegance."
      />

      {/* 2. Introduction & Brand Story */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#262626]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Supporting Photograph */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#F1ECE5] shadow-sm">
                <img
                  src={weddingImages.decorReception}
                  alt="Luxury wedding banquet setting orchestrated by our atelier"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
                Our Heritage
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#262626] font-normal leading-tight">
                Rooted in Passion for Enduring Celebrations
              </h2>
              <div className="space-y-4 text-base text-[#737373] leading-relaxed">
                <p>
                  {siteConfig.name} was established with a clear conviction: weddings are among life’s most profound milestones and deserve to be planned with genuine care, artistic discernment, and unyielding professionalism.
                </p>
                <p>
                  We deliberately limit the number of celebrations we produce each season. This intentional focus allows our team to dedicate our full creative energy, attention to detail, and presence to each couple’s once-in-a-lifetime gathering.
                </p>
                <p>
                  Whether organizing an intimate destination celebration or a grand ballroom banquet, we act as trusted advisors, designers, and coordinators who safeguard your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Mission */}
      <section className="py-16 sm:py-24 bg-[#F1ECE5]/70 border-b border-[#262626]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
            Our Mission
          </p>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#262626] font-normal leading-snug">
            “To remove the stress of wedding production and elevate every couple’s vision into an effortlessly refined celebration filled with meaning, warmth, and enduring beauty.”
          </blockquote>
          <div className="pt-2 text-xs uppercase tracking-widest text-[#737373]">
            — Aurelia Founding Philosophy
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#262626]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
              The Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#262626] font-normal">
              Our Approach
            </h2>
            <p className="text-sm text-[#737373]">
              How our team methodically guides you from initial ideas to an effortless day of celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-8 border border-[#262626]/8 rounded-none space-y-4"
              >
                <span className="text-2xl font-serif text-[#B59B72] font-semibold block">
                  {step.number}
                </span>
                <h3 className="text-xl font-serif text-[#262626] font-normal">
                  {step.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Key Strengths */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#262626]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
              The Difference
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#262626] font-normal">
              Key Strengths of Our Atelier
            </h2>
            <p className="text-sm text-[#737373]">
              What sets our management style, design philosophy, and on-site execution apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreStrengths.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#F1ECE5]/40 p-8 border border-[#262626]/8 rounded-none space-y-4"
                >
                  <div className="w-10 h-10 flex items-center justify-center text-[#B59B72] bg-white border border-[#B59B72]/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif text-[#262626] font-normal">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={scrollToContactForm}
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#262626] hover:bg-[#B59B72] rounded-sm transition-colors cursor-pointer"
            >
              Discuss Your Wedding With Us
            </button>
          </div>
        </div>
      </section>

      {/* 6. Integrated Contact Us Section (Enquiry Form) */}
      <section
        id="contact"
        className="py-10 sm:py-16 lg:py-20 bg-[#F1ECE5]/60 border-b border-[#262626]/10 scroll-mt-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Atelier Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
                  Get In Touch
                </p>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#262626] font-normal">
                  Contact Our Atelier
                </h2>
                <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                  We look forward to learning about your vision, chosen venue, and aesthetic inspirations. Every enquiry is given our undivided care and attention.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
                {/* Phone */}
                <div className="flex items-center gap-3 p-3 bg-white border border-[#262626]/10 rounded-xs">
                  <div className="w-8 h-8 flex items-center justify-center text-[#B59B72] bg-[#FAF8F5] border border-[#B59B72]/20 shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[10px] uppercase tracking-wider font-semibold text-[#737373]">
                      Concierge Desk
                    </h3>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-xs sm:text-sm font-medium text-[#262626] hover:text-[#B59B72] transition-colors truncate block"
                    >
                      {siteConfig.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 p-3 bg-white border border-[#262626]/10 rounded-xs">
                  <div className="w-8 h-8 flex items-center justify-center text-[#B59B72] bg-[#FAF8F5] border border-[#B59B72]/20 shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[10px] uppercase tracking-wider font-semibold text-[#737373]">
                      Email Enquiries
                    </h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-xs sm:text-sm font-medium text-[#262626] hover:text-[#B59B72] transition-colors truncate block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 bg-white border border-[#262626]/10 rounded-xs">
                  <div className="w-8 h-8 flex items-center justify-center text-[#B59B72] bg-[#FAF8F5] border border-[#B59B72]/20 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[10px] uppercase tracking-wider font-semibold text-[#737373]">
                      Atelier Location
                    </h3>
                    <p className="text-xs text-[#262626] truncate">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-center gap-3 p-3 bg-white border border-[#262626]/10 rounded-xs">
                  <div className="w-8 h-8 flex items-center justify-center text-[#B59B72] bg-[#FAF8F5] border border-[#B59B72]/20 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[10px] uppercase tracking-wider font-semibold text-[#737373]">
                      Consultation Hours
                    </h3>
                    <p className="text-xs text-[#262626] truncate">
                      Mon – Sat: 9:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Photograph */}
              <div className="hidden lg:block relative aspect-[16/9] w-full overflow-hidden rounded-xs bg-[#F1ECE5] border border-[#262626]/10 shadow-xs">
                <img
                  src={weddingImages.planningDetail}
                  alt="Wedding stationery detail flatlay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Structured Compact Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-4 sm:p-6 md:p-8 border border-[#262626]/10 rounded-xs shadow-sm">
              {isSubmitted ? (
                /* Submission Confirmation State */
                <div className="py-6 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#B59B72]/15 text-[#B59B72] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-2 max-w-lg mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
                      Enquiry Received
                    </p>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#262626] font-normal">
                      Thank You, {formData.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                      Your enquiry for your upcoming <strong>{formData.eventType}</strong> celebration has been successfully registered with the {siteConfig.name} concierge.
                    </p>
                    <p className="text-xs text-[#737373]">
                      Our directors will connect directly with you via phone ({formData.phoneNumber.startsWith('+') ? formData.phoneNumber : `${formData.phoneCountryCode} ${formData.phoneNumber}`}) within 24 hours.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="max-w-md mx-auto text-left bg-[#FAF8F5] p-3.5 border border-[#262626]/10 rounded-xs space-y-1.5 text-xs">
                    <h4 className="font-semibold text-[#262626] uppercase tracking-wider text-[10px] pb-1 border-b border-[#262626]/10">
                      Enquiry Summary
                    </h4>
                    <p><strong>Event:</strong> {formData.eventType} {formData.eventName ? `(${formData.eventName})` : ''}</p>
                    <p><strong>Destination:</strong> {formData.city}, {formData.district}</p>
                    <p className="truncate"><strong>Venue:</strong> {formData.fullAddress}</p>
                    {formData.additionalNotes && (
                      <p className="truncate"><strong>Notes:</strong> {formData.additionalNotes}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#262626] hover:bg-[#B59B72] rounded-xs transition-colors cursor-pointer shadow-xs"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Structured Compact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-2.5 sm:space-y-3">
                  <div className="space-y-0.5 pb-2 border-b border-[#262626]/10">
                    <div className="flex items-center gap-1 text-[#B59B72]">
                      <Sparkles className="w-3 h-3" />
                      <span className="text-[9px] uppercase tracking-[0.2em] font-medium">
                        Event Details
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-serif text-[#262626] font-normal leading-snug">
                      Tell Us About Your Celebration
                    </h3>
                    <p className="text-[10px] sm:text-[10.5px] text-[#737373]">
                      Please share your event particulars below. Required fields are marked with (<span className="text-[#B59B72]">*</span>).
                    </p>
                  </div>

                  {/* 1. Name & 2. Phone (side-by-side on tablet/desktop, stacked on mobile) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {/* 1. Name */}
                    <div className="space-y-0.5">
                      <label
                        htmlFor="enquiry-name"
                        className="block text-[9.5px] sm:text-[10px] uppercase tracking-wider font-medium text-[#525252]"
                      >
                        Full Name <span className="text-[#B59B72]">*</span>
                      </label>
                      <input
                        type="text"
                        id="enquiry-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full h-8 sm:h-8.5 px-2.5 py-1 text-xs bg-[#FAF8F5] border ${
                          errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#262626]/20'
                        } rounded-xs focus:outline-none focus:border-[#B59B72] transition-colors`}
                        required
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-600 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* 2. Phone Number (with Country Code) */}
                    <div className="space-y-0.5">
                      <label
                        htmlFor="enquiry-phone"
                        className="block text-[9.5px] sm:text-[10px] uppercase tracking-wider font-medium text-[#525252]"
                      >
                        Phone Number <span className="text-[#B59B72]">*</span>
                      </label>
                      <div className="flex gap-1.5">
                        <select
                          name="phoneCountryCode"
                          value={formData.phoneCountryCode}
                          onChange={handleChange}
                          aria-label="Country Code"
                          className="w-[95px] sm:w-[105px] shrink-0 h-8 sm:h-8.5 px-2 py-1 text-[11px] sm:text-xs bg-[#FAF8F5] border border-[#262626]/20 rounded-xs focus:outline-none focus:border-[#B59B72] transition-colors truncate"
                        >
                          {COMMON_COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          id="enquiry-phone"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className={`flex-1 min-w-0 h-8 sm:h-8.5 px-2.5 py-1 text-xs bg-[#FAF8F5] border ${
                            errors.phoneNumber ? 'border-red-500 ring-1 ring-red-500' : 'border-[#262626]/20'
                          } rounded-xs focus:outline-none focus:border-[#B59B72] transition-colors`}
                          required
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="text-[10px] text-red-600 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 3. Event Type */}
                  <div className="space-y-0.5">
                    <label className="block text-[9.5px] sm:text-[10px] uppercase tracking-wider font-medium text-[#525252]">
                      Event Type <span className="text-[#B59B72]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-1">
                      {EVENT_TYPE_OPTIONS.map((type) => {
                        const isSelected = formData.eventType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleEventTypeSelect(type)}
                            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[10.5px] font-normal rounded-full transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#262626] text-white shadow-xs'
                                : 'bg-[#FAF8F5] text-[#262626] border border-[#262626]/15 hover:border-[#B59B72]'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                    {errors.eventType && (
                      <p className="text-[10px] text-red-600 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                        <span>{errors.eventType}</span>
                      </p>
                    )}
                  </div>

                  {/* 4. Event Name */}
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="enquiry-event-name"
                        className="block text-[9.5px] sm:text-[10px] uppercase tracking-wider font-medium text-[#525252]"
                      >
                        Event Name
                      </label>
                      <span className="text-[8.5px] uppercase tracking-wider text-[#a3a3a3]">Optional</span>
                    </div>
                    <input
                      type="text"
                      id="enquiry-event-name"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleChange}
                      className="w-full h-8 sm:h-8.5 px-2.5 py-1 text-xs bg-[#FAF8F5] border border-[#262626]/20 rounded-xs focus:outline-none focus:border-[#B59B72] transition-colors"
                    />
                  </div>

                  {/* 5. District & 6. City (Side-by-side even on mobile to keep form ultra-compact) */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    {/* 5. District */}
                    <div className="space-y-0.5">
                      <label
                        htmlFor="enquiry-district"
                        className="block text-[9.5px] sm:text-[10px] uppercase tracking-wider font-medium text-[#525252]"
                      >
                        District <span className="text-[#B59B72]">*</span>
                      </label>
                      <input
                        type="text"
                        id="enquiry-district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        className={`w-full h-8 sm:h-8.5 px-2.5 py-1 text-xs bg-[#FAF8F5] border ${
                          errors.district ? 'border-red-500 ring-1 ring-red-500' : 'border-[#262626]/20'
                        } rounded-xs focus:outline-none focus:border-[#B59B72] transition-colors`}
                        required
                      />
                      {errors.district && (
                        <p className="text-[10px] text-red-600 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                          <span>{errors.district}</span>
                        </p>
                      )}
                    </div>

                    {/* 6. City */}
                    <div className="space-y-0.5">
                      <label
                        htmlFor="enquiry-city"
                        className="block text-[9.5px] sm:text-[10px] uppercase tracking-wider font-medium text-[#525252]"
                      >
                        City <span className="text-[#B59B72]">*</span>
                      </label>
                      <input
                        type="text"
                        id="enquiry-city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full h-8 sm:h-8.5 px-2.5 py-1 text-xs bg-[#FAF8F5] border ${
                          errors.city ? 'border-red-500 ring-1 ring-red-500' : 'border-[#262626]/20'
                        } rounded-xs focus:outline-none focus:border-[#B59B72] transition-colors`}
                        required
                      />
                      {errors.city && (
                        <p className="text-[10px] text-red-600 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                          <span>{errors.city}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 7. Full Address */}
                  <div className="space-y-0.5">
                    <label
                      htmlFor="enquiry-address"
                      className="block text-[9.5px] sm:text-[10px] uppercase tracking-wider font-medium text-[#525252]"
                    >
                      Full Address (Venue / Residence) <span className="text-[#B59B72]">*</span>
                    </label>
                    <input
                      type="text"
                      id="enquiry-address"
                      name="fullAddress"
                      value={formData.fullAddress}
                      onChange={handleChange}
                      className={`w-full h-8 sm:h-8.5 px-2.5 py-1 text-xs bg-[#FAF8F5] border ${
                        errors.fullAddress ? 'border-red-500 ring-1 ring-red-500' : 'border-[#262626]/20'
                      } rounded-xs focus:outline-none focus:border-[#B59B72] transition-colors`}
                      required
                    />
                    {errors.fullAddress && (
                      <p className="text-[10px] text-red-600 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-2.5 h-2.5 shrink-0" />
                        <span>{errors.fullAddress}</span>
                      </p>
                    )}
                  </div>

                  {/* 8. Additional Notes (compact 2 rows) */}
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="enquiry-notes"
                        className="block text-[9.5px] sm:text-[10px] uppercase tracking-wider font-medium text-[#525252]"
                      >
                        Additional Notes
                      </label>
                      <span className="text-[8.5px] uppercase tracking-wider text-[#a3a3a3]">Optional</span>
                    </div>
                    <textarea
                      id="enquiry-notes"
                      name="additionalNotes"
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      className="w-full px-2.5 py-1.5 text-xs bg-[#FAF8F5] border border-[#262626]/20 rounded-xs focus:outline-none focus:border-[#B59B72] transition-colors resize-y min-h-[46px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2 sm:py-2.5 bg-[#262626] hover:bg-[#B59B72] active:bg-[#9A8057] text-white text-[10.5px] sm:text-[11px] font-medium uppercase tracking-wider rounded-xs transition-all shadow-xs hover:shadow-sm cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      <span>Submit Event Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
