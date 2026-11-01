"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SuccessModal from '@/Components/successModal';

interface FormData {
  firstName: string;
  lastName: string;
  industry: string;
  coverageNeeded: string[];
  phone: string;
  email: string;
  dotNumber?: string;
}

const Hero = () => {
  // Removed unused isVisible variable
  const [isCoverageDropdownOpen, setIsCoverageDropdownOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [triggerConfetti, setTriggerConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    industry: '',
    coverageNeeded: [],
    phone: '',
    email: '',
    dotNumber: ''
  });

  // Industry options
  const industryOptions = [
    { value: 'trucking', label: 'Trucking & Transportation' },
    { value: 'construction', label: 'Construction & Contracting' },
    { value: 'manufacturing', label: 'Manufacturing & Production' },
    { value: 'nonprofit', label: 'Nonprofit & Human Services' },
    { value: 'public-entity', label: 'Government & Public Entities' }
  ];

  // Updated coverage options with client's requested order for trucking
  const getCoverageOptions = (industry: string) => {
    const baseOptions = [
      { value: 'general-liability', label: 'General Liability' },
      { value: 'property', label: 'Commercial Property' },
      { value: 'cyber-liability', label: 'Cyber Liability' },
      { value: 'workers-comp', label: 'Workers Compensation' }
    ];

    switch (industry) {
      case 'trucking':
        return [
          { value: 'auto-liability', label: 'Auto Liability' },
          { value: 'physical-damage', label: 'Physical Damage' },
          { value: 'motor-truck-cargo', label: 'Motor Truck Cargo' },
          { value: 'general-liability', label: 'General Liability' },
          { value: 'workers-comp', label: 'Workers Compensation' },
          { value: 'ntl-phys', label: 'NTL/Phys' },
          { value: 'occupational-accident', label: 'Occupational Accident' },
          { value: 'brokerage-coverages', label: 'Brokerage Coverages' },
          { value: 'garaging-shop', label: 'Garaging/Shop Coverages' },
          { value: 'commercial-property', label: 'Commercial Property' },
          { value: 'cyber-liability', label: 'Cyber Liability' }
        ];
      
      case 'construction':
        return [
          ...baseOptions,
          { value: 'commercial-auto', label: 'Commercial Auto' },
          { value: 'professional-liability', label: 'Professional Liability' },
          { value: 'contractors-pollution', label: 'Contractors Pollution' },
          { value: 'surety-bonds', label: 'Surety Bonds' }
        ];
      
      case 'manufacturing':
        return [
          ...baseOptions,
          { value: 'product-liability', label: 'Product Liability' },
          { value: 'professional-liability', label: 'Professional Liability' },
          { value: 'equipment-breakdown', label: 'Equipment Breakdown' },
          { value: 'business-interruption', label: 'Business Interruption' }
        ];
      
      case 'nonprofit':
        return [
          ...baseOptions,
          { value: 'directors-officers', label: 'Directors & Officers' },
          { value: 'employment-practices', label: 'Employment Practices Liability' },
          { value: 'professional-liability', label: 'Professional Liability' },
          { value: 'volunteer-accident', label: 'Volunteer Accident' }
        ];
      
      case 'public-entity':
        return [
          ...baseOptions,
          { value: 'public-officials', label: 'Public Officials Liability' },
          { value: 'law-enforcement', label: 'Law Enforcement Liability' },
          { value: 'employment-practices', label: 'Employment Practices Liability' },
          { value: 'constitutional-rights', label: 'Constitutional Rights Coverage' }
        ];
      
      default:
        return baseOptions;
    }
  };

  const coverageOptions = getCoverageOptions(formData.industry);

  // Navigation handlers
  const handleGetQuote = () => {
    router.push('/quote-form');
  };

  const handleCallExpert = () => {
    window.location.href = 'tel:+15155817187';
  };

  // Form handlers
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleIndustryChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      industry: value,
      coverageNeeded: []
    }));
  };

  const handleCoverageToggle = (coverageValue: string) => {
    setFormData(prev => ({
      ...prev,
      coverageNeeded: prev.coverageNeeded.includes(coverageValue)
        ? prev.coverageNeeded.filter(c => c !== coverageValue)
        : [...prev.coverageNeeded, coverageValue]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.industry || 
        !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    
    // For trucking industry, DOT number is required
    if (formData.industry === 'trucking' && !formData.dotNumber) {
      alert('Please enter your USDOT number');
      return;
    }
    
    // Show loading state
    setIsSubmitting(true);
    
    try {
      console.log('Submitting hero form...', formData);
      
      // Build payload for Momentum API
const momentumPayload = {
  // Contact Info
  firstName: formData.firstName,
  lastName: formData.lastName,
  contactName: `${formData.firstName} ${formData.lastName}`,
  email: formData.email,
  phone: formData.phone,
  
  // Business Info
  industry: formData.industry,
  dotNumber: formData.dotNumber || '',
  
  // Form metadata
  formType: 'Hero Quick Quote',
  source: 'Homepage Hero Form',
  
  // Description field with all details
  description: `Hero Quick Quote

Contact: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Industry: ${formData.industry}
${formData.dotNumber ? `US DOT #: ${formData.dotNumber}` : ''}

Coverage Needed:
${formData.coverageNeeded.map(coverage => {
  const option = coverageOptions.find(opt => opt.value === coverage);
  return `- ${option?.label || coverage}`;
}).join('\n')}

Source: Homepage Hero Form`
};
      
      console.log('Sending to API:', momentumPayload);
      
      // Send to your API route
      const response = await fetch('/api/momentum-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(momentumPayload)
      });
      
      const result = await response.json();
      console.log('API response:', result);
      
      if (result.success) {
        console.log('✓ Quote submitted successfully to Momentum!');
        
        // Show success popup with confetti
        setShowSuccessPopup(true);
        setTriggerConfetti(true);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          industry: '',
          coverageNeeded: [],
          phone: '',
          email: '',
          dotNumber: ''
        });
        
      } else {
        // Error from API
        console.error('API error:', result.message);
        alert(`There was an issue submitting your quote: ${result.message}\n\nPlease call us at (515) 581-7187`);
      }
      
    } catch (error) {
      console.error('Error submitting hero form:', error);
      alert('Unable to submit quote. Please call us at (515) 581-7187 for immediate assistance.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setTriggerConfetti(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoverageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showSuccessPopup) {
        closeSuccessPopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showSuccessPopup]);

  
return (
  <>
    {/* Background Video/Image */}
    <section id="hero-section" className="relative min-h-[100svh] overflow-hidden">

      <div className="absolute inset-0 z-0">

        {/* Hero background */}
        <div className="absolute inset-0 bg-black" />

        {/* Hero background image */}
        <img
          src="/images/herosample_1.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />

        {/* Subtle gold atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 75% 45%, rgba(204,159,84,0.10), transparent 55%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex items-center">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

            {/* LEFT SIDE: MOXIE BRAND EXPERIENCE */}
            <div className="space-y-5 sm:space-y-8 lg:pr-4">

              {/* Brand logo */}
              <img
                src="/sample_4.png"
                alt="Moxie Risk Partners"
                className="h-14 w-auto sm:h-20 md:h-24"
              />

              {/* Brand eyebrow */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className="h-px w-8 sm:w-12 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(90deg, #CC9F54, rgba(204,159,84,0))'
                  }}
                />

                {/* Small gold label: now the H1 for Google */}
                <h1
                  className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.24em]"
                  style={{
                    color: '#D9B66E',
                    textShadow: '1px 1px 4px rgba(0,0,0,0.7)'
                  }}
                >
                  Commercial Insurance &amp; Risk Management
                </h1>
              </div>

              {/* Big headline: same look, now a <p> */}
              <div>
                <p
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.08] tracking-tight"
                  style={{
                    color: '#F8F6F1',
                    textShadow: '0 3px 24px rgba(0,0,0,0.5)'
                  }}
                >
                  You stay in control.
                  <br />
                  <span style={{ color: '#D9AE60' }}>
                    We stay one step ahead.
                  </span>
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">

                <a
                  href="/quote-form"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#CC9F54] hover:bg-[#DDB66F] text-[#171717] px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-sm sm:text-base font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Let&apos;s Talk About Your Risk

                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14m-7-7 7 7-7 7"
                    />
                  </svg>
                </a>

                <a
                  href="tel:+15155817187"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 border border-white/50 text-white hover:border-[#CC9F54] hover:text-[#D9B66E] px-6 sm:px-8 py-3.5 sm:py-4 rounded-md text-sm sm:text-base font-semibold transition-all duration-300 text-center"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.18l-2.2 1.1a11 11 0 005.5 5.5l1.1-2.2a1 1 0 011.18-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z"
                    />
                  </svg>
                  Speak With Our Team
                </a>

              </div>

            </div>

            {/* RIGHT SIDE: supporting copy */}
            <div className="flex flex-col justify-center gap-6 sm:gap-8 lg:pl-6">
              <div className="rounded-xl bg-black/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                <p
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-white font-medium"
                  style={{
                    textShadow: '1px 1px 6px rgba(0,0,0,0.8)'
                  }}
                >
                  Coverage built for trucking, construction, manufacturing,
                  nonprofits, and public entities.
                </p>

                <div
                  className="border-l-2 pl-4 sm:pl-5 py-1"
                  style={{ borderColor: '#CC9F54' }}
                >
                  <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
                    style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}
                  >
                    Driven by discipline and rooted in family, we bring a
                    personal, proactive approach to protecting the businesses
                    that move, build, make, and serve our communities.
                  </p>
                </div>
              </div>
            </div>

            {/* THE MOXIE PHILOSOPHY — hidden for now */}
            {false && (
            <div className="hidden lg:flex items-center justify-center lg:pl-6">

              <div
                className="relative w-full max-w-[480px] rounded-2xl p-8 xl:p-10 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(19,19,19,0.91), rgba(31,29,25,0.85))',
                  border: '1px solid rgba(204,159,84,0.28)',
                  backdropFilter: 'blur(18px)',
                  boxShadow: '0 25px 80px rgba(0,0,0,0.40)'
                }}
              >

                {/* Gold top accent */}
                <div
                  className="absolute top-0 left-0 w-24 h-[2px]"
                  style={{
                    background: 'linear-gradient(90deg, #CC9F54, transparent)'
                  }}
                />

                <div className="relative z-10">

                  {/* Panel heading */}
                  <div className="flex items-center justify-between mb-7">

                    <div>
                      <p
                        className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-2"
                        style={{ color: '#B8893D' }}
                      >
                        The Moxie Standard
                      </p>

                      <h2 className="text-2xl xl:text-3xl text-white font-semibold tracking-tight">
                        A different kind of
                        <br />
                        risk partner.
                      </h2>
                    </div>

                    {/* Shield symbol */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        border: '1px solid rgba(204,159,84,0.45)',
                        background: 'rgba(204,159,84,0.08)'
                      }}
                    >
                      <svg
                        className="w-7 h-7"
                        style={{ color: '#B8893D' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.4}
                          d="M12 2.8L20 6v5.5c0 5.1-3.3 8.6-8 10.7-4.7-2.1-8-5.6-8-10.7V6l8-3.2z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.4}
                          d="M8.5 12l2.3 2.3 4.8-4.8"
                        />
                      </svg>
                    </div>

                  </div>

                  <div
                    className="h-px w-full mb-7"
                    style={{ background: 'rgba(255,255,255,0.13)' }}
                  />

                  {/* Five Doberman-inspired brand principles */}
                  <div className="space-y-6">

                    {/* 01 - Vigilance */}
                    <div className="flex gap-4 items-start">
                      <div
                        className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-semibold"
                        style={{
                          background: 'rgba(204,159,84,0.12)',
                          color: '#D9B66E',
                          border: '1px solid rgba(204,159,84,0.22)'
                        }}
                      >
                        01
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-base mb-1">
                          Always Alert
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          We stay attentive to changing risks and what lies ahead.
                        </p>
                      </div>
                    </div>

                    {/* 02 - Intelligence */}
                    <div className="flex gap-4 items-start">
                      <div
                        className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-semibold"
                        style={{
                          background: 'rgba(204,159,84,0.12)',
                          color: '#D9B66E',
                          border: '1px solid rgba(204,159,84,0.22)'
                        }}
                      >
                        02
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-base mb-1">
                          Intelligence Over Reaction
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          We bring insight and understanding to every decision.
                        </p>
                      </div>
                    </div>

                    {/* 03 - Discipline */}
                    <div className="flex gap-4 items-start">
                      <div
                        className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-semibold"
                        style={{
                          background: 'rgba(204,159,84,0.12)',
                          color: '#D9B66E',
                          border: '1px solid rgba(204,159,84,0.22)'
                        }}
                      >
                        03
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-base mb-1">
                          Disciplined by Design
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          Consistent processes, thoughtful planning, and follow-through.
                        </p>
                      </div>
                    </div>

                    {/* 04 - Loyalty */}
                    <div className="flex gap-4 items-start">
                      <div
                        className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-semibold"
                        style={{
                          background: 'rgba(204,159,84,0.12)',
                          color: '#D9B66E',
                          border: '1px solid rgba(204,159,84,0.22)'
                        }}
                      >
                        04
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-base mb-1">
                          Built on Relationships
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          Personal attention and partnerships built for the long term.
                        </p>
                      </div>
                    </div>

                    {/* 05 - Confidence */}
                    <div className="flex gap-4 items-start">
                      <div
                        className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-semibold"
                        style={{
                          background: 'rgba(204,159,84,0.12)',
                          color: '#D9B66E',
                          border: '1px solid rgba(204,159,84,0.22)'
                        }}
                      >
                        05
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-base mb-1">
                          Confidence Through Control
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          You remain in control of your risk management program.
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Bottom brand statement */}
                  <div
                    className="mt-8 pt-6 border-t"
                    style={{ borderColor: 'rgba(255,255,255,0.13)' }}
                  >
                    <p
                      className="text-sm italic leading-relaxed"
                      style={{ color: '#B8893D' }}
                    >
                      "Protection with intelligence and control."
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/40 mt-2">
                      Moxie Risk Partners
                    </p>
                  </div>

                </div>

                {/* Subtle decorative background detail */}
                <div
                  className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
                  style={{
                    border: '1px solid rgba(204,159,84,0.10)',
                    boxShadow: '0 0 0 25px rgba(204,159,84,0.025), 0 0 0 50px rgba(204,159,84,0.02)'
                  }}
                />

              </div>

            </div>
            )}

            {/* ORIGINAL QUOTE FORM - PRESERVED */}
            <div className="hidden">
              <div className="rounded-2xl p-8 shadow-2xl" style={{
                background: 'linear-gradient(135deg, rgba(30, 30, 35, 0.95) 0%, rgba(45, 45, 50, 0.92) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(204, 159, 84, 0.15)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(204, 159, 84, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
              }}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Get Your Quote</h3>
                  <p className="text-white/80">Quick & easy commercial insurance quote</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        First Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#CC9F54] focus:ring-2 focus:ring-[#CC9F54]/20 outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder="John"
                        required
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Last Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#CC9F54] focus:ring-2 focus:ring-[#CC9F54]/20 outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder="Doe"
                        required
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  {/* Industry Selection */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Industry <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleIndustryChange(e.target.value)}
                      className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#CC9F54] focus:ring-2 focus:ring-[#CC9F54]/20 outline-none transition-all text-gray-900"
                      required
                      suppressHydrationWarning
                    >
                      <option value="" className="text-gray-500">Select your industry</option>
                      {industryOptions.map((option) => (
                        <option key={option.value} value={option.value} className="text-gray-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Coverage Dropdown */}
                  {formData.industry && (
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Coverage Needed <span className="text-gray-400">(Select all that apply)</span>
                      </label>
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsCoverageDropdownOpen(!isCoverageDropdownOpen)}
                          className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#CC9F54] focus:ring-2 focus:ring-[#CC9F54]/20 outline-none transition-all text-left flex justify-between items-center text-gray-900"
                        >
                          <span className="text-gray-700">
                            {formData.coverageNeeded.length === 0
                              ? 'Select coverage types...'
                              : formData.coverageNeeded.length === 1
                              ? coverageOptions.find(opt => opt.value === formData.coverageNeeded[0])?.label
                              : `${formData.coverageNeeded.length} coverage types selected`
                            }
                          </span>
                          <svg
                            className={`w-5 h-5 transition-transform text-gray-600 ${isCoverageDropdownOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {isCoverageDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                            {coverageOptions.map((option) => (
                              <label
                                key={option.value}
                                className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.coverageNeeded.includes(option.value)}
                                  onChange={() => handleCoverageToggle(option.value)}
                                  className="mr-3 w-4 h-4 text-[#CC9F54] border-gray-300 rounded focus:ring-[#CC9F54]"
                                />
                                <span className="text-gray-900 text-sm font-medium">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* DOT Number for Trucking */}
                  {formData.industry === 'trucking' && (
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        US DOT # <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.dotNumber || ''}
                        onChange={(e) => handleInputChange('dotNumber', e.target.value)}
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#CC9F54] focus:ring-2 focus:ring-[#CC9F54]/20 outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder="Enter your USDOT number"
                        required
                        suppressHydrationWarning
                      />
                      <p className="text-gray-400 text-xs mt-1">Required for trucking & transportation businesses</p>
                    </div>
                  )}

                  {/* Contact Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#CC9F54] focus:ring-2 focus:ring-[#CC9F54]/20 outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder="(555) 123-4567"
                        required
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#CC9F54] focus:ring-2 focus:ring-[#CC9F54]/20 outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder="your@email.com"
                        required
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#CC9F54] hover:bg-[#B8893D] disabled:bg-gray-400 disabled:cursor-not-allowed text-moxie-black py-4 rounded-lg text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                    suppressHydrationWarning
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Get My Quote'
                    )}
                  </button>

                  {/* Trust Elements */}
                  <div className="text-center pt-4 border-t border-white/20">
                    <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      100% Secure & Confidential
                    </div>
                    <p className="text-white/60 text-xs">
                      By submitting, you agree to receive quotes from licensed agents. No spam, unsubscribe anytime.
                    </p>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* Success Modal with Confetti */}
    <SuccessModal
      isOpen={showSuccessPopup}
      onClose={closeSuccessPopup}
      showConfetti={triggerConfetti}
    />
  </>
);
};

export default Hero;