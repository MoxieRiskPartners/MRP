"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Shield, Phone, Mail, X } from 'lucide-react';
import SuccessModal from '../Components/successModal';

interface CoverageType {
  id: string;
  title: string;
  description: string;
  detailedOverview: string;
  coverageAmount: string;
  keyFeatures: string[];
  whoNeedsIt: string[];
}

const CoveragePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCoverage, setSelectedCoverage] = useState<CoverageType | null>(null);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    coverageType: '',
    industryType: ''
  });

  const heroRef = useRef(null);
  const formRef = useRef<HTMLDivElement>(null);

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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCoverage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCoverage]);

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setShowConfetti(true);

      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        coverageType: '',
        industryType: ''
      });
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setShowConfetti(false);
  };

  const openCoverageModal = (coverage: CoverageType) => {
    setSelectedCoverage(coverage);
  };

  const closeCoverageModal = () => {
    setSelectedCoverage(null);
  };

  const scrollToForm = () => {
    closeCoverageModal();
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const coverageTypes: CoverageType[] = [
    // CONSTRUCTION COVERAGES
    {
      id: 'general-liability',
      title: 'General Liability',
      description: 'Protection against third-party claims for bodily injury, property damage, and advertising injury',
      detailedOverview: 'Comprehensive protection against third-party claims, property damage, and completed operations. Essential coverage for all construction trades with protection against lawsuits and accidents.',
      coverageAmount: '$1M - $2M per occurrence',
      keyFeatures: [
        'Third-party injury claims protection',
        'Property damage coverage',
        'Products-completed operations',
        'Additional insured endorsements',
        'Primary & non-contributory coverage'
      ],
      whoNeedsIt: ['General contractors', 'Subcontractors', 'Construction managers', 'Specialty trades', 'Design-build firms']
    },
    {
      id: 'workers-compensation',
      title: "Workers' Compensation",
      description: 'Mandatory employee protection covering medical expenses, lost wages, and disability benefits for work-related injuries',
      detailedOverview: 'Mandatory employee protection with EMR management and safety training support. Covers medical expenses, lost wages, and provides crucial protection for your workforce.',
      coverageAmount: 'State-mandated minimums',
      keyFeatures: [
        'Work-related injuries coverage',
        'Medical expenses',
        'Lost wage replacement',
        'Disability benefits',
        'Return-to-work programs',
        'EMR rate management'
      ],
      whoNeedsIt: ['All construction employers', 'General contractors', 'Specialty contractors', 'Construction services', 'Labor contractors']
    },
    {
      id: 'builders-risk',
      title: "Builders Risk",
      description: 'Project protection from fire, weather, vandalism, and theft during construction covering structures, materials, and equipment',
      detailedOverview: 'Project protection from fire, weather, vandalism, and theft during construction. Covers the structure, materials, and equipment while work is in progress.',
      coverageAmount: 'Project value coverage',
      keyFeatures: [
        'Fire & explosion protection',
        'Weather damage coverage',
        'Theft & vandalism',
        'Material damage',
        'Soft cost coverage',
        'Debris removal'
      ],
      whoNeedsIt: ['Project owners', 'General contractors', 'Construction managers', 'Developers', 'Property managers']
    },
    {
      id: 'commercial-auto',
      title: 'Commercial Auto',
      description: 'Specialized coverage for construction vehicles and equipment transport with comprehensive liability and physical damage protection',
      detailedOverview: 'Specialized coverage for construction vehicles and equipment transport. Protects your fleet with comprehensive liability and physical damage coverage.',
      coverageAmount: '$1M+ liability limits',
      keyFeatures: [
        'Vehicle liability protection',
        'Comprehensive coverage',
        'Collision protection',
        'Uninsured motorist',
        'Fleet discounts',
        'Equipment coverage'
      ],
      whoNeedsIt: ['Fleet operators', 'Equipment transporters', 'Service contractors', 'Material suppliers', 'Mobile services']
    },
    {
      id: 'professional-liability',
      title: 'Professional Liability',
      description: 'Errors and omissions coverage for professional services and advice provided to clients',
      detailedOverview: 'Errors & omissions protection for design professionals and consultants. Covers mistakes, omissions, and professional negligence claims.',
      coverageAmount: '$1M - $5M per claim',
      keyFeatures: [
        'Design errors coverage',
        'Professional omissions protection',
        'Negligent acts',
        'Breach of duty coverage',
        'Prior acts coverage',
        'Extended reporting'
      ],
      whoNeedsIt: ['Architects', 'Engineers', 'Design consultants', 'Construction managers', 'Project managers']
    },
    {
      id: 'tools-equipment',
      title: 'Tools & Equipment',
      description: 'Protect valuable tools and machinery from theft, damage, and loss with comprehensive replacement cost coverage',
      detailedOverview: 'Protect valuable tools and machinery from theft, damage, and loss. Comprehensive coverage for contractors\' most important assets.',
      coverageAmount: 'Actual tool value',
      keyFeatures: [
        'Theft protection',
        'Damage coverage',
        'Loss of use',
        'Replacement cost coverage',
        'Newly acquired coverage',
        'Worldwide territory'
      ],
      whoNeedsIt: ['All contractors', 'Equipment owners', 'Tool-dependent trades', 'Mobile contractors', 'Specialty trades']
    },
    
    // MANUFACTURING COVERAGES
    {
      id: 'product-liability',
      title: 'Product Liability',
      description: 'Comprehensive protection against manufacturing defects, design flaws, and product-related injuries or damages',
      detailedOverview: 'Comprehensive protection against manufacturing defects, design flaws, and product-related injuries or damages. Essential coverage for any business that manufactures, distributes, or sells products.',
      coverageAmount: '$1M - $10M per occurrence',
      keyFeatures: [
        'Manufacturing defect coverage',
        'Design error protection',
        'Product recall expenses',
        'Legal defense costs',
        'Worldwide territory',
        'Settlement authority'
      ],
      whoNeedsIt: ['All manufacturers', 'Product distributors', 'Private label producers', 'Component suppliers', 'Consumer goods companies']
    },
    {
      id: 'equipment-breakdown',
      title: 'Equipment Breakdown',
      description: 'Specialized coverage for manufacturing equipment failure, machinery breakdown, and resulting business interruption',
      detailedOverview: 'Specialized coverage for manufacturing equipment failure, machinery breakdown, and resulting business interruption. Critical protection for production-dependent businesses.',
      coverageAmount: 'Equipment replacement value',
      keyFeatures: [
        'Machinery breakdown coverage',
        'Business interruption',
        'Expediting expenses',
        'Spoilage coverage',
        '24/7 claims support',
        'Emergency repairs'
      ],
      whoNeedsIt: ['Heavy manufacturers', 'Technology companies', 'Food processors', 'Chemical manufacturers', 'Equipment-dependent operations']
    },
    {
      id: 'commercial-property',
      title: 'Commercial Property',
      description: 'Coverage for buildings, equipment, inventory, and business property against damage and loss',
      detailedOverview: 'Protect manufacturing facilities, inventory, raw materials, and finished goods from fire, theft, and natural disasters. Comprehensive asset protection for manufacturers.',
      coverageAmount: 'Property replacement cost',
      keyFeatures: [
        'Fire & explosion coverage',
        'Weather damage',
        'Theft & vandalism',
        'Business interruption',
        'Agreed value coverage',
        'Debris removal'
      ],
      whoNeedsIt: ['Facility owners', 'Equipment lessees', 'Inventory holders', 'Multi-location operations', 'All manufacturers']
    },
    {
      id: 'cyber-liability',
      title: 'Cyber Liability',
      description: 'Protection against data breaches, cyber attacks, and digital security incidents',
      detailedOverview: 'Protection against data breaches, cyber attacks, and technology-related risks in modern manufacturing operations. Essential for connected manufacturing environments.',
      coverageAmount: '$1M - $25M per claim',
      keyFeatures: [
        'Data breach response',
        'Cyber extortion coverage',
        'Business interruption',
        'Regulatory fines',
        'Incident response team',
        'Forensic investigation'
      ],
      whoNeedsIt: ['Connected manufacturers', 'IoT operations', 'Customer data holders', 'Cloud-based systems', 'Digital manufacturers']
    },
    {
      id: 'environmental-liability',
      title: 'Environmental Liability',
      description: 'Coverage for pollution incidents, environmental cleanup, and regulatory compliance issues',
      detailedOverview: 'Coverage for pollution incidents, environmental cleanup, and regulatory compliance issues. Critical for manufacturers with environmental exposures.',
      coverageAmount: '$1M - $50M per claim',
      keyFeatures: [
        'Pollution cleanup',
        'Third-party claims',
        'Regulatory defense',
        'Business interruption',
        'Gradual pollution coverage',
        'Transportation coverage'
      ],
      whoNeedsIt: ['Chemical manufacturers', 'Industrial operations', 'Waste generators', 'Fuel storage operations', 'Heavy industry']
    },
    
    // TRUCKING & TRANSPORTATION COVERAGES
    {
      id: 'commercial-auto-liability',
      title: 'Commercial Auto Liability',
      description: 'DOT-compliant protection for commercial vehicle operations with liability coverage ranging from $750K to $5M',
      detailedOverview: 'DOT-compliant protection for all commercial vehicle operations. Mandatory coverage for trucking companies with competitive rates and expert guidance.',
      coverageAmount: '$750K - $5M liability',
      keyFeatures: [
        'DOT compliance',
        'Third-party liability',
        'Bodily injury coverage',
        'Property damage',
        'Cargo incidental coverage',
        'MCS-90 endorsement'
      ],
      whoNeedsIt: ['All commercial vehicle operations', 'Trucking companies', 'Fleet operators', 'Owner operators', 'Transportation businesses']
    },
    {
      id: 'physical-damage',
      title: 'Physical Damage Insurance',
      description: 'Vehicle protection coverage for your fleet covering actual cash value or stated amount for collision and comprehensive claims',
      detailedOverview: 'Comprehensive vehicle protection for your commercial trucks and equipment. Covers collision, comprehensive, and total loss with flexible deductible options.',
      coverageAmount: 'ACV or Stated Amount',
      keyFeatures: [
        'Collision coverage',
        'Comprehensive coverage',
        'Total loss protection',
        'Flexible deductibles',
        'Towing & labor',
        'Rental reimbursement'
      ],
      whoNeedsIt: ['Businesses with commercial vehicles', 'Fleet owners', 'Leased equipment', 'New truck buyers', 'High-value equipment']
    },
    {
      id: 'motor-truck-cargo',
      title: 'Motor Truck Cargo',
      description: 'Freight protection covering goods in transit from loading to final delivery with comprehensive coverage options',
      detailedOverview: 'Essential protection for goods in transit covering theft, damage, and loss of freight. Required by most brokers and shippers with customizable limits.',
      coverageAmount: '$5,000 - $250,000 per load',
      keyFeatures: [
        'Goods in transit coverage',
        'Loading/unloading protection',
        'Theft coverage',
        'Damage protection',
        'Refrigeration breakdown',
        'Debris removal'
      ],
      whoNeedsIt: ['All trucking operations hauling freight', 'Owner operators', 'Fleet carriers', 'Specialized haulers', 'Refrigerated transport']
    },
    {
      id: 'owner-operator',
      title: 'Owner Operator Insurance',
      description: 'Comprehensive protection packages for independent truckers with 1-3 units including liability, physical damage, and cargo coverage',
      detailedOverview: 'Specialized insurance packages designed for independent truckers. Combines liability, physical damage, and cargo coverage at competitive rates for small fleet operations.',
      coverageAmount: 'Comprehensive protection packages',
      keyFeatures: [
        'Combined coverage packages',
        'Flexible payment options',
        'DOT compliance support',
        'Competitive rates',
        'Claims assistance',
        'Quick quote turnaround'
      ],
      whoNeedsIt: ['Independent truckers with 1-3 units', 'New authority holders', 'Lease purchase operators', 'Small fleet owners', 'Specialized haulers']
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        /* Fluid Responsive Scaling - Works on ALL screen sizes */
        :root {
          --fluid-spacing-xs: clamp(0.5rem, 1vw, 1rem);
          --fluid-spacing-sm: clamp(1rem, 2vw, 1.5rem);
          --fluid-spacing-md: clamp(1.5rem, 3vw, 2rem);
          --fluid-spacing-lg: clamp(2rem, 4vw, 3rem);
          --fluid-spacing-xl: clamp(3rem, 6vw, 5rem);
        }
        
        /* Ensure smooth scaling on ultra-wide monitors */
        @media (min-width: 2000px) {
          .responsive-container {
            max-width: 1920px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        
        /* Prevent overflow on any screen */
        * {
          box-sizing: border-box;
        }
      `}</style>

      
      {/* Hero Section */}
      <section ref={heroRef} className="bg-white py-12 lg:py-[clamp(3rem,8vw,5rem)]">
        <div className="responsive-container max-w-[min(90rem,95vw)] mx-auto px-[clamp(1rem,3vw,2rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,4vw,3rem)] items-center">
            
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/coverage.png" 
                  alt="Commercial insurance coverage solutions"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="space-y-[clamp(1.5rem,3vw,2rem)]">
                <div>
                  <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-gray-900 leading-tight mb-6">
                   Insurance
                    <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                      Coverage Solutions
                    </span>
                  </h1>
                  
                  <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-600 leading-relaxed mb-8 max-w-lg">
                    From commercial auto liability to workers' compensation, we provide comprehensive insurance solutions 
                    tailored to your business needs. Expert guidance, competitive rates, and superior service.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'DOT Compliant Coverage',
                    'All Industries Served',
                    '24/7 Expert Support'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                      <span className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={scrollToForm}
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] rounded-lg font-bold text-[clamp(0.95rem,1.2vw,1.125rem)] min-h-[3rem] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                    suppressHydrationWarning
                  >
                    Get Your Quote
                  </button>
                  
                  <a href="tel:+18006694301" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] rounded-lg font-bold text-[clamp(0.95rem,1.2vw,1.125rem)] min-h-[3rem] transition-all duration-300 flex items-center justify-center">
                    Call (800) 669-4301
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Coverage Types Section - Cards with Modal */}
      <section className="py-[clamp(3rem,8vw,5rem)] bg-gray-50">
        <div className="responsive-container max-w-[min(90rem,95vw)] mx-auto px-[clamp(1rem,3vw,2rem)]">
          
          <div className="mb-16">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 mb-4 leading-tight">
              Our Insurance <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">Coverage Options</span>
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-600 max-w-3xl">
              Comprehensive protection across all industries. Click "Learn More" on any coverage to see details.
            </p>
          </div>

          {/* Coverage Grid - Cards */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6">
            {coverageTypes.map((coverage) => (
              <div 
                key={coverage.id}
                className="bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {coverage.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {coverage.description}
                </p>

                {/* Learn More Button */}
                <button
                  onClick={() => openCoverageModal(coverage)}
                  className="mt-auto flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors group"
                  suppressHydrationWarning
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details Modal */}
      {selectedCoverage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-white/80 backdrop-blur-md"
            onClick={closeCoverageModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal-scale border border-gray-200">
            
            {/* Close Button */}
            <button
              onClick={closeCoverageModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              suppressHydrationWarning
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Modal Header */}
            <div className="p-8 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 pr-10">
                {selectedCoverage.title}
              </h2>
              <p className="text-gray-600">
                {selectedCoverage.description}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-[clamp(1rem,2.5vw,1.5rem)]">
              
              {/* Overview */}
              <div>
                <h3 className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-bold text-gray-900 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedCoverage.detailedOverview}
                </p>
              </div>

              {/* Coverage Amount */}
              <div>
                <h3 className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-bold text-gray-900 mb-3">Coverage Amount</h3>
                <p className="text-orange-600 font-bold text-xl">
                  {selectedCoverage.coverageAmount}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-bold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedCoverage.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Needs This */}
              <div>
                <h3 className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-bold text-gray-900 mb-3">Who Needs This Coverage</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCoverage.whoNeedsIt.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer - CTA Buttons */}
            <div className="p-8 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+18006694301" 
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-6 rounded-lg font-bold text-[clamp(0.95rem,1.2vw,1.125rem)] min-h-[3rem] transition-all duration-300 flex items-center justify-center group shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <button 
                  onClick={scrollToForm}
                  className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 px-6 rounded-lg font-bold text-[clamp(0.95rem,1.2vw,1.125rem)] min-h-[3rem] transition-all duration-300 flex items-center justify-center group shadow-lg"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us Section */}
      <section className="py-[clamp(3rem,8vw,5rem)] bg-white">
        <div className="responsive-container max-w-[min(90rem,95vw)] mx-auto px-[clamp(1rem,3vw,2rem)]">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 mb-4">
              Why Choose
              <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                Moxie Risk Partners?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-[clamp(1.5rem,3vw,2rem)]">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Licensed insurance professionals with decades of combined experience across all industries
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-gray-900 mb-4">Competitive Rates</h3>
              <p className="text-gray-600">
                Access to multiple A-rated carriers ensures you get the best coverage at the most competitive prices
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock claims support and dedicated service team always available when you need us
              </p>
            </div>
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
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-gray-900 mb-6 leading-tight">
                  Ready to Protect Your
                  <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                    Business?
                  </span>
                </h2>
                
                <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-600 leading-relaxed mb-8">
                  Join thousands of businesses who trust Moxie Risk Partners for their insurance needs. 
                  Get your quote today and experience the difference specialized expertise makes.
                </p>
              </div>

              {/* Contact Information Grid */}
              <div className="grid md:grid-cols-1 gap-6">
                
                {/* Phone */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Call Us Now</h4>
                  <a href="tel:+18006694301" className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-bold text-green-600 hover:text-green-700 transition-colors">
                    (800) 669-4301
                  </a>
                  <p className="text-xs text-gray-500 mt-1">24/7 Available</p>
                </div>

                {/* Email */}
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Email Us</h4>
                  <a href="mailto:quotes@moxieriskpartners.com" className="text-[clamp(0.95rem,1.2vw,1.125rem)] font-bold text-purple-600 hover:text-purple-700 transition-colors break-all">
                    quotes@moxieriskpartners.com
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Quick Response</p>
                </div>
              </div>
            </div>

            {/* Right Side - Quote Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                <p className="text-gray-600">Fast, competitive insurance quotes</p>
              </div>

              <div className="space-y-4">
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                    placeholder="Your Company Name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                    placeholder="Your Full Name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    suppressHydrationWarning
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      suppressHydrationWarning
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Coverage Type *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900"
                      value={formData.coverageType}
                      onChange={(e) => setFormData({...formData, coverageType: e.target.value})}
                      suppressHydrationWarning
                    >
                      <option value="">Select Coverage</option>
                      <option value="commercial-auto-liability">Commercial Auto Liability</option>
                      <option value="physical-damage">Physical Damage</option>
                      <option value="motor-truck-cargo">Motor Truck Cargo</option>
                      <option value="owner-operator">Owner Operator</option>
                      <option value="workers-comp">Workers' Compensation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Industry Type *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900"
                      value={formData.industryType}
                      onChange={(e) => setFormData({...formData, industryType: e.target.value})}
                      suppressHydrationWarning
                    >
                      <option value="">Select Industry</option>
                      <option value="trucking">Trucking/Transportation</option>
                      <option value="construction">Construction</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="service">Service Company</option>
                      <option value="retail">Retail/Distribution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleFormSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-lg font-bold text-[clamp(0.95rem,1.2vw,1.125rem)] min-h-[3rem] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  suppressHydrationWarning
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Quote Now'}
                  {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />}
                </button>

                <div className="text-center mt-4 space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>100% Secure & Confidential</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    No spam, unsubscribe anytime. Licensed agents only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        showConfetti={showConfetti}
      />
    </div>
  );
};

export default CoveragePage;