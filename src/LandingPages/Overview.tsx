
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CargoType {
  id: string;
  title: string;
  image: string;
  href: string;
}

const CARGO_TYPES_DATA: CargoType[] = [
  {
    id: 'dry-van',
    title: "Dry Van",
    image: "/images/dryvan.png",
    href: "/motor-truck-cargo?type=dry-van",
  },
  {
    id: 'flatbed',
    title: "Flatbed",
    image: "/images/flatbed.png",
    href: "/motor-truck-cargo?type=flatbed",
  },
  {
    id: 'refrigerated',
    title: "Refrigerated",
    image: "/images/refrigerated.png",
    href: "/motor-truck-cargo?type=refrigerated",
  },
  {
    id: 'hazmat',
    title: "Hazmat",
    image: "/images/hazmat.png",
    href: "/motor-truck-cargo?type=hazmat",
  },
  {
    id: 'auto-hauler',
    title: "Auto Hauler",
    image: "/images/autoHauler.png",
    href: "/motor-truck-cargo?type=auto-hauler",
  },
  {
    id: 'dump-truck',
    title: "Dump Truck",
    image: "/images/dumptruck.png",
    href: "/motor-truck-cargo?type=dump-truck",
  }
];

interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  badge: string;
}

const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'trucking',
    title: "Trucking & Transportation",
    description: "Comprehensive fleet insurance with Risk Management support, cargo protection, and specialized coverage for owner-operators and commercial fleets.",
    image: "/images/Trucking2.png",
    href: "/trucking-transportation",
    badge: "Most Popular",
  },
  {
    id: 'construction',
    title: "Construction & Contracting",
    description: "Specialized protection for contractors, builders, and construction professionals with general liability, workers' comp, and project-specific coverage.",
    image: "/images/construct.png",
    href: "/construction-insurance",
    badge: "Essential",
  },
  {
    id: 'manufacturing',
    title: "Manufacturing & Production",
    description: "Product liability, equipment breakdown, and operational coverage for manufacturers across all industries from food processing to electronics.",
    image: "/images/Manufact.png",
    href: "/manufacturing-insurance",
    badge: "Comprehensive",
  },
  {
    id: 'nonprofit',
    title: "Nonprofit & Human Services",
    description: "Tailored coverage for nonprofits, human service organizations, and community groups with D&O, professional liability, and volunteer protection.",
    image: "/images/nonProf.png",
    href: "/non-profit",
    badge: "Specialized",
  },
  {
    id: 'public-entity',
    title: "Government & Public Entities",
    description: "Comprehensive coverage for municipalities, public agencies, and government organizations with specialized liability and constitutional coverage.",
    image: "/images/publicE1.png",
    href: "/public-entity",
    badge: "Government",
  }
];

const IndustryCard = React.memo(({ industry, index }: { industry: Industry; index: number }) => (
  <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">

    {/* Badge */}
    <div className="absolute top-4 left-4 z-10">
      <span className="bg-[#CC9F54] text-[#171717] px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
        {industry.badge}
      </span>
    </div>

    {/* Background Image */}
    <div className="relative h-64 overflow-hidden">
      <Image
        src={industry.image}
        alt={`${industry.title} background`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={index < 2}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#B8893D] transition-colors">
        {industry.title}
      </h3>

      <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
        {industry.description}
      </p>

      {/* CTA */}
      <a
        href={industry.href}
        className="flex items-center justify-center w-full bg-[#191919] hover:bg-[#B8893D] text-white py-3 rounded-md font-semibold transition-all duration-300"
      >
        Learn More
        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
));

IndustryCard.displayName = 'IndustryCard';

const CargoTypeCard = React.memo(({ cargo, index }: { cargo: CargoType; index: number }) => (
  <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-[#CC9F54]">

    {/* Cargo Image */}
    <div className="relative h-32 flex items-center justify-center bg-gray-50 p-4">
      <Image
        src={cargo.image}
        alt={`${cargo.title} cargo insurance`}
        width={120}
        height={80}
        className="object-contain transition-transform duration-300 group-hover:scale-110"
        priority={index < 3}
      />
    </div>

    {/* Content */}
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center group-hover:text-[#B8893D] transition-colors">
        {cargo.title}
      </h3>

      {/* CTA */}
      <a
        href={cargo.href}
        className="flex items-center justify-center w-full bg-gray-900 hover:bg-[#B8893D] text-white py-2 rounded-lg font-semibold text-sm transition-all duration-200"
      >
        Learn More
        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
));

CargoTypeCard.displayName = 'CargoTypeCard';

const Overview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const brandPillars = [
    {
      number: '01',
      title: 'Always Alert',
      description: 'We look beyond the immediate need, identifying potential exposures before they become problems.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Intelligent Guidance',
      description: 'We bring industry knowledge and thoughtful strategy to every risk management decision.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 18h6m-5 4h4m-5-8a7 7 0 1 1 6 0c-.9.7-1 1.3-1 2h-4c0-.7-.1-1.3-1-2Z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'You Stay in Control',
      description: 'Your business. Your decisions. We give you the clarity and confidence to lead your risk program.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15V3m0 0L7 8m5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'All In, Together',
      description: 'Rooted in family and built on loyalty, our entire team stands behind the clients we serve.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M14 3.13a4 4 0 0 1 0 7.75M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white">

      {/* ABOUT / BRAND STORY */}
      <div className="relative py-24 lg:py-32">

        {/* Subtle brand accent */}
        <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-[#CC9F54] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: Brand Story */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

              <div className="flex items-center gap-4">
                <span className="w-10 h-px bg-[#CC9F54]"></span>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8893D]">
                  The Moxie Difference
                </span>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#171717] leading-[1.12] tracking-tight">
                  Protection is more than a policy.
                  <span className="block text-[#B8893D] mt-2">
                    It's a commitment.
                  </span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                With over 45 years of combined experience, Moxie Risk Partners
                brings specialized commercial insurance and thoughtful risk
                management to businesses nationwide. We take the time to
                understand how your business operates, where its risks lie,
                and what it takes to protect its future.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                We believe the best protection starts with awareness,
                intelligence, and trust. Not a one-size-fits-all policy.
                Not another account number. A real partnership built around
                your business and your goals.
              </p>

              {/* Boutique positioning */}
              <div className="pt-5 border-t border-gray-200">
                <p className="text-sm uppercase tracking-[0.2em] text-[#B8893D] font-semibold mb-3">
                  A Different Kind of Partnership
                </p>
                <p className="text-gray-800 text-xl font-medium leading-relaxed">
                  Personal attention. Specialized expertise. A team that's
                  always in your corner.
                </p>
              </div>

            </div>

            {/* Right: Brand Pillars */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} delay-200`}>

              <div className="space-y-8">

                {brandPillars.map((pillar) => (
                  <div key={pillar.number} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-lg mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-900 font-semibold text-lg">
                    &quot;One In, All In.&quot;
                  </p>
                  <p className="text-[#B8893D] text-sm mt-1">
                    The Moxie Commitment
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* INDUSTRIES SECTION */}
      <div className="py-24 bg-[#F7F6F3] border-t border-gray-200/70">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-14 max-w-3xl space-y-5">

            <div className="flex items-center gap-4">
              <span className="w-10 h-px bg-[#CC9F54]"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8893D]">
                Specialized Expertise
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold text-[#171717] leading-tight">
              We understand the industries
              <span className="block text-[#B8893D]">
                that move the world.
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Deep expertise across trucking, construction, manufacturing,
              nonprofit, and public entities with industry-specific coverage,
              regulatory compliance support, and dedicated specialists.
            </p>

          </div>

          {/* Industries Stacked — image left/right, card floating opposite */}
          <div className="space-y-6 sm:space-y-10 lg:space-y-12">
            {INDUSTRIES_DATA.map((industry, index) => {
              const isRight = index % 2 === 1;
              return (
                <a
                  key={industry.id}
                  href={industry.href}
                  className="group relative block"
                >
                  {/* Image — full width on mobile, half on sm+ */}
                  <div className={`relative overflow-hidden rounded-xl w-full sm:w-[50%] md:w-[45%] aspect-[16/10] sm:aspect-[4/3] ${isRight ? 'sm:ml-auto' : ''}`}>
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index < 2}
                    />
                  </div>

                  {/* White card — below image on mobile, floating overlay on sm+ */}
                  <div className={`
                    bg-white p-4 sm:p-5 md:p-6 shadow-lg group-hover:shadow-xl transition-shadow z-10
                    relative -mt-4 mx-3
                    sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:mt-0 sm:mx-0 sm:w-[48%] md:w-[45%]
                    ${isRight ? 'sm:left-[5%]' : 'sm:right-[5%]'}
                  `}>
                    <h3 className="text-gray-900 font-semibold text-sm sm:text-base leading-tight mb-1.5 sm:mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                      {industry.description}
                    </p>
                    <span className="inline-flex items-center text-[#CC9F54] text-xs sm:text-sm font-semibold group-hover:text-[#B8893D] transition-colors">
                      Learn More
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

    </section>
  );
};

export default React.memo(Overview);
