"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Shield, Phone, Mail, Truck, Package, Users, FileText, Star, Wrench, HardHat } from 'lucide-react';
import { truckingTransportationFields } from '@/config/industryFormConfigs';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const IndustryQuoteForm = dynamic(
  () => import('@/Components/IndustryQuoteForm'),
  { ssr: false }
);

interface CoverageData {
  type: string;
  typeCode: string;
  title: string;
  description: string;
  commonApplications: string[];
  risksCovered: string[];
  whoNeedsIt: string[];
  specialFeatures: string[];
  icon: React.ElementType;
  href: string;
}

const TruckingTransportationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedType, setSelectedType] = useState('commercial-auto-liability');
  const heroRef = useRef(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleTypeSelection = (typeCode: string) => {
    setSelectedType(typeCode);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coverageTypes: CoverageData[] = [
    {
      type: 'Commercial Auto',
      typeCode: 'commercial-auto-liability',
      title: 'Commercial Auto Liability',
      description: 'DOT-compliant liability coverage for trucking operations. Protects against bodily injury and property damage claims arising from your commercial vehicle operations.',
      commonApplications: ['Long-haul trucking', 'Local delivery fleets', 'Intermodal operations', 'Hotshot carriers', 'Refrigerated transport'],
      risksCovered: ['Bodily injury liability', 'Property damage liability', 'DOT-compliant coverage', 'Legal defense costs', 'Medical payments'],
      whoNeedsIt: ['Motor carriers', 'Fleet operators', 'For-hire truckers', 'Private carriers', 'Freight haulers'],
      specialFeatures: ['DOT/FMCSA compliant', 'BMC-91X filings', 'Broad form coverage', 'Hired & non-owned auto'],
      icon: Truck,
      href: '/commercial-auto-liability',
    },
    {
      type: 'Physical Damage',
      typeCode: 'physical-damage',
      title: 'Physical Damage Insurance',
      description: 'Comprehensive and collision coverage to protect your trucks, trailers, and equipment from physical loss or damage whether on the road or parked.',
      commonApplications: ['Collision damage', 'Comprehensive losses', 'Trailer coverage', 'Equipment protection', 'Total loss replacement'],
      risksCovered: ['Collision coverage', 'Comprehensive coverage', 'Fire & theft', 'Vandalism protection', 'Weather damage'],
      whoNeedsIt: ['Owner operators', 'Fleet owners', 'Leased vehicle operators', 'Equipment lessors', 'New truck purchasers'],
      specialFeatures: ['Agreed value options', 'Downtime coverage', 'Towing & recovery', 'Rental reimbursement'],
      icon: Shield,
      href: '/physical-damage',
    },
    {
      type: 'Motor Truck Cargo',
      typeCode: 'motor-truck-cargo',
      title: 'Motor Truck Cargo Insurance',
      description: 'Protection for the freight and goods you haul. Covers loss or damage to cargo in your care, custody, and control during transit.',
      commonApplications: ['General freight', 'Refrigerated cargo', 'Hazardous materials', 'High-value loads', 'Household goods'],
      risksCovered: ['Cargo damage', 'Theft protection', 'Loading/unloading losses', 'Refrigeration breakdown', 'Contamination'],
      whoNeedsIt: ['For-hire carriers', 'Freight brokers', 'Specialized haulers', 'Reefer operators', 'Flatbed carriers'],
      specialFeatures: ['Customizable limits', 'Broad form coverage', 'Reefer breakdown', 'Debris removal'],
      icon: Package,
      href: '/motor-truck-cargo',
    },
    {
      type: 'Owner Operator',
      typeCode: 'owner-operator',
      title: 'Owner Operator Insurance',
      description: 'Tailored insurance packages for independent truckers. Bundled coverage designed for owner operators who need comprehensive protection at competitive rates.',
      commonApplications: ['Independent truckers', 'Leased-on operators', 'Authority holders', 'Single-truck operations', 'Husband-wife teams'],
      risksCovered: ['Liability protection', 'Physical damage', 'Cargo coverage', 'Occupational accident', 'Non-trucking liability'],
      whoNeedsIt: ['Independent owner operators', 'Leased operators', 'New authority holders', 'Single-truck owners', 'Team drivers'],
      specialFeatures: ['Bundled packages', 'Competitive rates', 'Flexible payments', 'Certificates of insurance'],
      icon: HardHat,
      href: '/owner-operator',
    },
    {
      type: "Workers' Comp",
      typeCode: 'workers-compensation',
      title: "Workers' Compensation Insurance",
      description: 'Statutory workers compensation coverage for trucking employees. Covers medical expenses, lost wages, and rehabilitation for work-related injuries.',
      commonApplications: ['Driver injuries', 'Loading dock accidents', 'Repetitive motion injuries', 'Workplace incidents', 'Return-to-work programs'],
      risksCovered: ['Medical expenses', 'Lost wages', 'Rehabilitation costs', 'Disability benefits', 'Death benefits'],
      whoNeedsIt: ['Carriers with employees', 'Fleet operators', 'Warehouse operations', 'Dispatch companies', 'Maintenance shops'],
      specialFeatures: ['Pay-as-you-go options', 'Safety programs', 'Claims advocacy', 'Return-to-work support'],
      icon: Users,
      href: '/workers-compensation',
    },
    {
      type: 'Captive Programs',
      typeCode: 'captives',
      title: 'Captive Insurance Programs',
      description: 'Alternative risk management through captive insurance structures. Gain more control over your insurance costs and benefit from favorable loss experience.',
      commonApplications: ['Large fleets', 'Risk retention groups', 'Group captives', 'Single-parent captives', 'Cost stabilization'],
      risksCovered: ['Customized risk retention', 'Loss control programs', 'Long-term cost savings', 'Investment income', 'Coverage flexibility'],
      whoNeedsIt: ['Large fleet operators', 'Well-managed carriers', 'Safety-focused operations', 'Growth-stage fleets', 'Multi-entity operations'],
      specialFeatures: ['Cost control', 'Profit sharing', 'Tailored programs', 'Risk management partnership'],
      icon: Wrench,
      href: '/captives-benefit',
    },
  ];

  const selectedCoverage = coverageTypes.find(c => c.typeCode === selectedType) || coverageTypes[0];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Side by Side Layout */}
      <section ref={heroRef} className="bg-white py-12 lg:py-[clamp(3rem,8vw,5rem)]">
        <div className="responsive-container max-w-[min(90rem,95vw)] mx-auto px-[clamp(1rem,3vw,2rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,4vw,3rem)] items-center">

            {/* Left Side - Hero Image */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/truckhero.png"
                  alt="Commercial trucking and transportation insurance"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="space-y-[clamp(1.5rem,3vw,2rem)]">
                <div>
                  <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold text-gray-900 leading-tight mb-[clamp(1rem,2.5vw,1.5rem)]">
                    Trucking & Transportation
                    <span className="block text-transparent bg-gradient-to-r from-[#CC9F54] to-[#B8893D] bg-clip-text">
                      Insurance Solutions
                    </span>
                  </h1>

                  <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-600 leading-relaxed mb-[clamp(1.5rem,3vw,2rem)]">
                    Comprehensive insurance solutions for owner-operators, fleets, and freight protection.
                    DOT-compliant coverage with competitive rates and expert guidance for all trucking operations.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {[
                    'Owner Operators & Fleets',
                    'Risk Management support',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#CC9F54] flex-shrink-0" />
                      <span className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote-form"
                    className="bg-gradient-to-r from-[#CC9F54] to-[#B8893D] hover:from-[#A87A32] hover:to-[#9A7030] text-moxie-black px-8 py-4 rounded-lg font-bold text-[clamp(0.95rem,1.2vw,1.125rem)] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                  >
                    Get Your Quote
                  </Link>

                  <a href="tel:+15155817187" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-lg font-bold text-[clamp(0.95rem,1.2vw,1.125rem)] transition-all duration-300 flex items-center justify-center">
                    Call (515) 581-7187
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-[clamp(3rem,8vw,5rem)] bg-gray-50">
        <div className="responsive-container max-w-[min(90rem,95vw)] mx-auto px-[clamp(1rem,3vw,2rem)]">

          <div className="mb-[clamp(2.5rem,6vw,4rem)]">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-gray-900 mb-4 leading-tight">
              Comprehensive Insurance <span className="text-transparent bg-gradient-to-r from-[#CC9F54] to-[#B8893D] bg-clip-text">Solutions</span>
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-600 max-w-[min(56rem,90vw)]">
              From DOT-compliant liability to cargo protection, we provide coverage
              tailored to your trucking operation&apos;s unique needs. These are some of our most common coverages, and we write many more.
            </p>
          </div>

          {/* Coverage Type Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-[clamp(2rem,4vw,3rem)]">
            {coverageTypes.map((coverage) => {
              const IconComponent = coverage.icon;
              return (
                <button
                  key={coverage.typeCode}
                  onClick={() => handleTypeSelection(coverage.typeCode)}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    selectedType === coverage.typeCode
                      ? 'border-[#CC9F54] bg-[#FBF5EB] shadow-lg scale-105'
                      : 'border-gray-200 bg-white hover:border-[#D9BC82]'
                  }`}
                  suppressHydrationWarning={true}
                >
                  <div className="text-center">
                    <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                      <IconComponent
                        className={`w-12 h-12 transition-all duration-300 ${
                          selectedType === coverage.typeCode ? 'text-[#CC9F54]' : 'text-gray-600'
                        } group-hover:scale-110`}
                      />
                    </div>
                    <h3 className={`text-sm font-semibold transition-colors ${
                      selectedType === coverage.typeCode ? 'text-[#CC9F54]' : 'text-gray-800'
                    }`}>
                      {coverage.type}
                    </h3>
                  </div>

                  {/* Selected Indicator */}
                  {selectedType === coverage.typeCode && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#CC9F54] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              );
            })}

            {/* And More Card */}
            <button
              onClick={scrollToForm}
              className="group relative p-6 rounded-2xl border-2 border-dashed border-[#CC9F54] bg-gradient-to-br from-[#FBF5EB] to-[#F5EBDA] hover:border-solid hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#CC9F54] to-[#B8893D] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">+</span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-[#CC9F54]">
                  And More...
                </h3>
              </div>
            </button>
          </div>

          {/* Coverage Details Panel */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">

            {/* Coverage Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-[clamp(1.5rem,3vw,2rem)] pb-6 border-b-2 border-[#F0E2C8]">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] lg:text-4xl font-semibold text-gray-900 mb-2">
                  {selectedCoverage.title}
                </h3>
              </div>
              <Link
                href={selectedCoverage.href}
                className="inline-flex items-center bg-gradient-to-r from-[#CC9F54] to-[#B8893D] hover:from-[#A87A32] hover:to-[#9A7030] text-moxie-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Coverage Description */}
            <p className="text-[clamp(0.95rem,1.2vw,1.125rem)] text-gray-600 leading-relaxed mb-[clamp(1.5rem,3vw,2rem)] max-w-[min(56rem,90vw)]">
              {selectedCoverage.description}
            </p>

            {/* Coverage Details Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-[clamp(1.5rem,3vw,2rem)] mb-[clamp(1.5rem,3vw,2rem)]">

              {/* Common Applications */}
              <div className="space-y-[clamp(0.75rem,2vw,1rem)]">
                <h4 className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-semibold text-gray-900 pb-2 border-b-2 border-[#E5CFA5]">
                  Common Applications
                </h4>
                <div className="space-y-2">
                  {selectedCoverage.commonApplications.map((application, index) => (
                    <div key={index} className="flex items-start space-x-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <CheckCircle className="w-4 h-4 text-[#CC9F54] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risks Covered */}
              <div className="space-y-[clamp(0.75rem,2vw,1rem)]">
                <h4 className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-semibold text-gray-900 pb-2 border-b-2 border-[#E5CFA5]">
                  Risks Covered
                </h4>
                <div className="space-y-2">
                  {selectedCoverage.risksCovered.map((risk, index) => (
                    <div key={index} className="flex items-start space-x-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <CheckCircle className="w-4 h-4 text-[#CC9F54] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Needs It */}
              <div className="space-y-[clamp(0.75rem,2vw,1rem)]">
                <h4 className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-semibold text-gray-900 pb-2 border-b-2 border-[#E5CFA5]">
                  Who Needs This Coverage
                </h4>
                <div className="space-y-2">
                  {selectedCoverage.whoNeedsIt.map((who, index) => (
                    <div key={index} className="flex items-start space-x-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <CheckCircle className="w-4 h-4 text-[#CC9F54] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{who}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Features */}
              <div className="space-y-[clamp(0.75rem,2vw,1rem)]">
                <h4 className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-semibold text-gray-900 pb-2 border-b-2 border-[#E5CFA5]">
                  Special Features
                </h4>
                <div className="space-y-2">
                  {selectedCoverage.specialFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 p-3 bg-[#FBF5EB] rounded-lg border border-[#E5CFA5]">
                      <Star className="w-4 h-4 text-[#CC9F54] mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-gray-800 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-[clamp(3rem,8vw,5rem)] bg-white">
        <div className="responsive-container max-w-[min(90rem,95vw)] mx-auto px-[clamp(1rem,3vw,2rem)]">

          <div className="text-center mb-[clamp(2.5rem,6vw,4rem)]">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-gray-900 mb-4 leading-tight">
              Why Choose Moxie Risk Partners
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-600 max-w-[min(56rem,90vw)] mx-auto">
              With decades of trucking insurance expertise, we understand your unique challenges
              and provide solutions that keep your wheels turning and your business protected.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-[clamp(1.5rem,3vw,2rem)]">
            {[
              {
                title: "Industry Expertise",
                description: "Specialized trucking insurance knowledge with dedicated transportation specialists",
                icon: Shield
              },
              {
                title: "Dedicated Service",
                description: "Certificates, filings, and claims support when you need it",
                icon: CheckCircle
              },
              {
                title: "Competitive Rates",
                description: "Access to multiple A-rated carriers ensuring the best coverage at the best price",
                icon: FileText
              },
              {
                title: "Risk Management Support",
                description: "Risk management support tailored to your trucking operation's needs",
                icon: Truck
              }
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#CC9F54] to-[#B8893D] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Footer with Quote Form */}
      <section className="relative py-[clamp(3rem,8vw,5rem)] bg-gray-50 overflow-hidden">
        <div className="responsive-container max-w-[min(90rem,95vw)] mx-auto px-[clamp(1rem,3vw,2rem)]">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,4vw,3rem)] items-center">

            {/* Left Side - CTA Content */}
            <div className="space-y-[clamp(1.5rem,3vw,2rem)]">
              <div>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold text-gray-900 mb-[clamp(1rem,2.5vw,1.5rem)] leading-tight">
                  Ready to Protect Your
                  <span className="block text-transparent bg-gradient-to-r from-[#CC9F54] to-[#B8893D] bg-clip-text">
                    Trucking Business?
                  </span>
                </h2>

                <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-600 leading-relaxed mb-[clamp(1.5rem,3vw,2rem)]">
                  Join the trucking operations that trust Moxie Risk Partners
                  for their insurance needs. Get your quote today and experience the difference
                  specialized trucking insurance expertise makes.
                </p>
              </div>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 gap-[clamp(1rem,2.5vw,1.5rem)]">

                {/* Phone */}
                <div className="text-center p-6 bg-gray-100 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-[#CC9F54] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Call Us Now</h4>
                  <a href="tel:+15155817187" className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-bold text-gray-900 hover:text-[#CC9F54] transition-colors">
                    (515) 581-7187
                  </a>
                </div>

                {/* Email */}
                <div className="text-center p-6 bg-gray-100 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-[#CC9F54] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Email Us</h4>
                  <a href="mailto:quotes@moxieriskpartners.com" className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-bold text-gray-900 hover:text-[#CC9F54] transition-colors break-all">
                    quotes@moxieriskpartners.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Quote Form */}
            <div ref={formRef}>
              <IndustryQuoteForm
                industry="trucking-transportation"
                formName="Trucking & Transportation Quote"
                title="Get Your Free Quote"
                subtitle="Fast, competitive trucking insurance quotes"
                fields={truckingTransportationFields}
              />
            </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default TruckingTransportationPage;