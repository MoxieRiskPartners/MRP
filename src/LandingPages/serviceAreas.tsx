"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import USMap from '@/Components/USMap';

interface State {
  code: string;
  name: string;
  region: string;
}

// All supported states (no CA, AK, HI)
const SUPPORTED_STATES: State[] = [
  { code: 'AL', name: 'Alabama', region: 'Southeast' },
  { code: 'AZ', name: 'Arizona', region: 'Southwest' },
  { code: 'AR', name: 'Arkansas', region: 'Southeast' },
  { code: 'CA', name: 'California', region: 'West' },
  { code: 'CO', name: 'Colorado', region: 'West' },
  { code: 'CT', name: 'Connecticut', region: 'Northeast' },
  { code: 'DE', name: 'Delaware', region: 'Northeast' },
  { code: 'FL', name: 'Florida', region: 'Southeast' },
  { code: 'GA', name: 'Georgia', region: 'Southeast' },
  { code: 'ID', name: 'Idaho', region: 'West' },
  { code: 'IL', name: 'Illinois', region: 'Midwest' },
  { code: 'IN', name: 'Indiana', region: 'Midwest' },
  { code: 'IA', name: 'Iowa', region: 'Midwest' },
  { code: 'KS', name: 'Kansas', region: 'Midwest' },
  { code: 'KY', name: 'Kentucky', region: 'Southeast' },
  { code: 'LA', name: 'Louisiana', region: 'Southeast' },
  { code: 'ME', name: 'Maine', region: 'Northeast' },
  { code: 'MD', name: 'Maryland', region: 'Northeast' },
  { code: 'MA', name: 'Massachusetts', region: 'Northeast' },
  { code: 'MI', name: 'Michigan', region: 'Midwest' },
  { code: 'MN', name: 'Minnesota', region: 'Midwest' },
  { code: 'MS', name: 'Mississippi', region: 'Southeast' },
  { code: 'MO', name: 'Missouri', region: 'Midwest' },
  { code: 'MT', name: 'Montana', region: 'West' },
  { code: 'NE', name: 'Nebraska', region: 'Midwest' },
  { code: 'NV', name: 'Nevada', region: 'West' },
  { code: 'NH', name: 'New Hampshire', region: 'Northeast' },
  { code: 'NJ', name: 'New Jersey', region: 'Northeast' },
  { code: 'NM', name: 'New Mexico', region: 'Southwest' },
  { code: 'NY', name: 'New York', region: 'Northeast' },
  { code: 'NC', name: 'North Carolina', region: 'Southeast' },
  { code: 'ND', name: 'North Dakota', region: 'Midwest' },
  { code: 'OH', name: 'Ohio', region: 'Midwest' },
  { code: 'OK', name: 'Oklahoma', region: 'Southwest' },
  { code: 'OR', name: 'Oregon', region: 'West' },
  { code: 'PA', name: 'Pennsylvania', region: 'Northeast' },
  { code: 'RI', name: 'Rhode Island', region: 'Northeast' },
  { code: 'SC', name: 'South Carolina', region: 'Southeast' },
  { code: 'SD', name: 'South Dakota', region: 'Midwest' },
  { code: 'TN', name: 'Tennessee', region: 'Southeast' },
  { code: 'TX', name: 'Texas', region: 'Southwest' },
  { code: 'UT', name: 'Utah', region: 'West' },
  { code: 'VT', name: 'Vermont', region: 'Northeast' },
  { code: 'VA', name: 'Virginia', region: 'Southeast' },
  { code: 'WA', name: 'Washington', region: 'West' },
  { code: 'WV', name: 'West Virginia', region: 'Southeast' },
  { code: 'WI', name: 'Wisconsin', region: 'Midwest' },
  { code: 'WY', name: 'Wyoming', region: 'West' }
];

const ServiceAreas: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [foundState, setFoundState] = useState<State | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    setIsMounted(true);
  }, []);

  // Array of popup images
  const popupImages = [
    '/images/popup.png',
    '/images/popup2.png',
    '/images/popup3.png'
  ];

  // Simple ZIP code to state lookup
  const zipToState = (zip: string): State | null => {
    const zipNum = parseInt(zip);

    const zipRanges: { [key: string]: [number, number][] } = {
      AL: [[35000, 36999]],
      AZ: [[85000, 86999]],
      AR: [[71600, 72999]],
      CA: [[90000, 96199]],
      CO: [[80000, 81999]],
      CT: [[6000, 6999]],
      DE: [[19700, 19999]],
      FL: [[32000, 34999]],
      GA: [[30000, 31999], [39800, 39999]],
      ID: [[83200, 83999]],
      IL: [[60000, 62999]],
      IN: [[46000, 47999]],
      IA: [[50000, 52999]],
      KS: [[66000, 67999]],
      KY: [[40000, 42999]],
      LA: [[70000, 71599]],
      ME: [[3900, 4999]],
      MD: [[20600, 21999]],
      MA: [[1000, 2799]],
      MI: [[48000, 49999]],
      MN: [[55000, 56799]],
      MS: [[38600, 39799]],
      MO: [[63000, 65999]],
      MT: [[59000, 59999]],
      NE: [[68000, 69999]],
      NV: [[89000, 89999]],
      NH: [[3000, 3899]],
      NJ: [[7000, 8999]],
      NM: [[87000, 88999]],
      NY: [[10000, 14999]],
      NC: [[27000, 28999]],
      ND: [[58000, 58999]],
      OH: [[43000, 45999]],
      OK: [[73000, 74999]],
      OR: [[97000, 97999]],
      PA: [[15000, 19699]],
      RI: [[2800, 2999]],
      SC: [[29000, 29999]],
      SD: [[57000, 57999]],
      TN: [[37000, 38599]],
      TX: [[75000, 79999], [73301, 73399], [77000, 77999]],
      UT: [[84000, 84999]],
      VT: [[5000, 5999]],
      VA: [[20100, 20199], [22000, 24699]],
      WA: [[98000, 99499]],
      WV: [[24700, 26999]],
      WI: [[53000, 54999]],
      WY: [[82000, 83199]]
    };

    for (const [stateCode, ranges] of Object.entries(zipRanges)) {
      for (const [min, max] of ranges) {
        if (zipNum >= min && zipNum <= max) {
          return SUPPORTED_STATES.find(s => s.code === stateCode) || null;
        }
      }
    }

    return null;
  };

  const handleZipSearch = async () => {
    if (!zipCode || zipCode.length !== 5) {
      setError('Please enter a valid 5-digit zip code');
      return;
    }

    setIsLoading(true);
    setError('');
    setSearchPerformed(true);

    // Preserve existing simulated lookup delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const state = zipToState(zipCode);

    if (state) {
      setFoundState(state);
      setError('');
    } else {
      setFoundState(null);
      setError("Sorry, we don't currently provide coverage in this area. Contact us to discuss options.");
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleZipSearch();
    }
  };

  const handleStateClick = (state: State) => {
    setSelectedState(state);
    setIsModalOpen(true);
    setImageIndex(prev => (prev + 1) % 3);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedState(null);
  };

  return (
    <section className="relative overflow-hidden bg-moxie-ink py-16 sm:py-24">
      {/* Ambient background details */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#CC9F54]/10 blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-[#CC9F54]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header and ZIP search */}
        <div className={`mx-auto mb-16 max-w-4xl text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#CC9F54]" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#CC9F54]">
              Moxie Risk Partners
            </span>
            <span className="h-px w-8 bg-[#CC9F54]" />
          </div>

          <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Coverage That Goes
            <span className="block text-[#CC9F54]">Where Business Takes You.</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Your business doesn't operate within boundaries. Neither should your
            risk management strategy. Explore the areas we serve and connect with
            a team that puts your interests first.
          </p>

          {/* ZIP Search Panel */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-[#231F20]/10 bg-moxie-cream p-5 shadow-2xl sm:p-8">
            <div className="mb-5 text-left">
              <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#CC9F54]">
                Check your location
              </p>
              <p className="text-sm text-gray-600">
                Enter your ZIP code to explore service availability.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#CC9F54]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" strokeWidth={1.7} />
                  </svg>
                </div>

                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="Enter 5-digit ZIP code"
                  value={zipCode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                    setZipCode(value);
                    setError('');

                    if (value === '') {
                      setSearchPerformed(false);
                      setFoundState(null);
                    }
                  }}
                  onKeyDown={handleKeyPress}
                  className="w-full rounded-lg border border-white/15 bg-moxie-ink py-4 pl-12 pr-4 text-base text-white outline-none transition-all placeholder:text-gray-500 focus:border-[#CC9F54] focus:ring-2 focus:ring-[#CC9F54]/20"
                  maxLength={5}
                  suppressHydrationWarning
                />
              </div>

              <button
                onClick={handleZipSearch}
                disabled={isLoading || zipCode.length !== 5}
                className="flex min-h-[54px] items-center justify-center gap-2 rounded-lg bg-[#CC9F54] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#171717] transition-all duration-300 hover:bg-[#DDBB7D] hover:shadow-lg hover:shadow-[#CC9F54]/10 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300"
                suppressHydrationWarning
              >
                {isLoading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#171717] border-t-transparent" />
                    <span>Checking</span>
                  </>
                ) : (
                  <>
                    Check Area
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Search Results */}
            {searchPerformed && (
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-moxie-ink p-5 text-left sm:p-6">
                {foundState ? (
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CC9F54]/30 bg-[#CC9F54]/10 text-[#CC9F54]">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#CC9F54]">
                          Location found
                        </p>
                        <h3 className="text-lg font-semibold text-white">
                          {foundState.name}
                        </h3>
                      </div>
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-gray-400">
                      Your ZIP code falls within our listed {foundState.region} service area.
                      Contact our team to discuss your business and confirm coverage options.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/quote-form"
                        className="flex flex-1 items-center justify-center rounded-lg bg-[#CC9F54] px-5 py-3 text-sm font-bold text-[#171717] transition-all hover:bg-[#DDBB7D]"
                      >
                        Request a Quote
                      </Link>
                      <a
                        href="tel:+15155817187"
                        className="flex flex-1 items-center justify-center rounded-lg border border-[#CC9F54]/50 px-5 py-3 text-sm font-semibold text-[#CC9F54] transition-all hover:bg-[#CC9F54]/10"
                      >
                        Call Our Team
                      </a>
                    </div>
                  </div>
                ) : error && (
                  <div className="text-center sm:text-left">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CC9F54]/30 bg-[#CC9F54]/10 text-[#CC9F54]">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v4m0 4h.01M10.3 3.86l-8.1 14.02A2 2 0 003.93 21h16.14a2 2 0 001.73-3.12L13.7 3.86a2 2 0 00-3.46 0z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-white">Let's talk about your location.</p>
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-gray-400">{error}</p>

                    <a
                      href="tel:+15155817187"
                      className="inline-flex items-center justify-center rounded-lg bg-[#CC9F54] px-6 py-3 text-sm font-bold text-[#171717] transition-all hover:bg-[#DDBB7D]"
                    >
                      Contact Our Team
                    </a>
                  </div>
                )}
              </div>
            )}

            <p className="mt-4 text-xs text-gray-600">
              ZIP lookup is a preliminary service-area guide. Coverage is subject to confirmation.
            </p>
          </div>
        </div>

        {/* US Map — highlights the state found by the ZIP lookup.
            Breaks ~3in past the container on each side for a larger, fluid map. */}
        <div className={`mb-16 mx-0 sm:-mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32 overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} delay-200`}>
          <USMap
            highlightCode={foundState?.code ?? null}
            onStateSelect={(code) => {
              const st = SUPPORTED_STATES.find((s) => s.code === code);
              if (st) handleStateClick(st);
            }}
          />
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 sm:mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} delay-400`}>

              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#CC9F54]">
                Let&apos;s Start a Conversation
              </div>

              <h3 className="mb-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Your Business Deserves
                <span className="block text-[#CC9F54]">More Than a Policy.</span>
              </h3>

              <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
                Don&apos;t see your state listed? Reach out anyway. Let&apos;s talk about
                your operation, understand your risks, and explore what options
                may be available for your business.
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href="tel:+15155817187"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#CC9F54] px-7 py-3.5 text-sm font-bold text-[#171717] transition-all hover:bg-[#DDBB7D] hover:shadow-lg"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (515) 581-7187
                </a>

                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#CC9F54] hover:text-[#CC9F54]"
                >
                  Contact Us
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </a>
              </div>
        </div>

      </div>

      {/* State Modal */}
      {isModalOpen && selectedState && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm sm:p-6"
          onClick={closeModal}
        >
          <div
            className="relative mx-auto max-h-[85vh] sm:max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[#1a1a1a] shadow-2xl animate-modal-appear"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-all hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Top: Logo + State */}
            <div className="border-b border-white/10 px-5 py-6 sm:px-8 sm:py-8 text-center">
              <img
                src="/sample_4.png"
                alt="Moxie Risk Partners"
                className="mx-auto mb-4 sm:mb-5 h-12 w-auto sm:h-20"
              />
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl sm:text-5xl font-semibold text-white">{selectedState.code}</span>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">{selectedState.name}</p>
                  <p className="text-xs text-[#CC9F54]">{selectedState.region} Region</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 py-5 sm:px-8 sm:py-8">

              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Let&apos;s Talk Business in {selectedState.name}.
              </h3>

              <p className="mb-5 sm:mb-6 text-xs sm:text-sm leading-relaxed text-gray-400">
                Professional commercial insurance guidance for businesses
                operating in {selectedState.name}. Let&apos;s understand your
                operation, identify your exposures, and explore coverage
                options that make sense for your business.
              </p>

              {/* Benefits — compact */}
              <div className="mb-5 sm:mb-6 space-y-2.5 sm:space-y-3">
                {[
                  'Coverage built around your business',
                  `Industry-focused guidance for the ${selectedState.region} region`,
                  'A team in your corner'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <svg className="h-4 w-4 flex-shrink-0 text-[#CC9F54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-xs sm:text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/quote-form"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#CC9F54] px-5 py-3 text-sm font-bold text-[#171717] transition-all hover:bg-[#DDBB7D]"
                >
                  Request a Quote
                </Link>

                <a
                  href="tel:+15155817187"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-[#CC9F54] hover:text-[#CC9F54]"
                >
                  (515) 581-7187
                </a>
              </div>

              <p className="mt-4 text-center text-[11px] text-gray-500">
                Coverage availability and terms subject to review.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        @keyframes modal-appear {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-modal-appear {
          animation: modal-appear 0.25s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default React.memo(ServiceAreas);