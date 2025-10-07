"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Shield, Phone, Mail, Truck, Users, FileText, Map, Settings, Target } from 'lucide-react';
import SuccessModal from '../Components/successModal';


interface FleetTier {
  id: string;
  title: string;
  vehicles: string;
  price: string;
  priceNote: string;
  savings: string;
  popular: boolean;
}

interface CoverageOption {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
}

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const FleetInsurance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTier, setSelectedTier] = useState('medium-fleet');
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "What is considered a commercial fleet?",
      answer: "A commercial fleet typically consists of 10 or more vehicles used for business purposes. This includes delivery vehicles, service trucks, company cars, and any vehicles used to generate income for your business. Anything under 10 units is considered non-fleet in the underwriting world",
       isOpen: false
    },
    {
      question: "How much can I save with fleet insurance?",
      answer: "Fleet insurance savings typically range from 15-25% compared to individual policies. The more vehicles you have, the greater your potential savings due to volume discounts and simplified administration.",
      isOpen: false
    },
    {
      question: "Can I mix different vehicle types in my fleet policy?",
      answer: "Yes, fleet policies can accommodate mixed vehicle types including trucks, vans, trailers, and passenger vehicles. We customize coverage based on each vehicle's specific use and risk profile.",
      isOpen: false
    },
    {
      question: "What happens if I add or remove vehicles from my fleet?",
      answer: "Fleet policies offer flexibility to add or remove vehicles throughout the policy term. We provide automatic coverage for newly acquired vehicles and can adjust your policy as your fleet size changes.",
      isOpen: false
    },
    {
      question: "Do all vehicles need the same coverage limits?",
      answer: "No, fleet policies can be customized with different coverage limits for different vehicle types or uses. For example, cargo vehicles might need higher liability limits than passenger vehicles.",
      isOpen: false
    }
  ]);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    fleetSize: '',
    fleetType: ''
  });

const [showSuccessModal, setShowSuccessModal] = useState(false);
const [showConfetti, setShowConfetti] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);

  const heroRef = useRef(null);

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

  const fleetTiers: FleetTier[] = [
    {
      id: "small-fleet",
      title: "Small Fleet",
      vehicles: "2-5 Vehicles",
      price: "$1,200",
      priceNote: "per vehicle/year",
      savings: "Save 15%",
      popular: false
    },
    {
      id: "medium-fleet", 
      title: "Medium Fleet",
      vehicles: "6-25 Vehicles",
      price: "$950",
      priceNote: "per vehicle/year",
      savings: "Save 20%",
      popular: true
    },
    {
      id: "large-fleet",
      title: "Large Fleet",
      vehicles: "25+ Vehicles",
      price: "$800",
      priceNote: "per vehicle/year", 
      savings: "Save 25%",
      popular: false
    }
  ];

  const coverageOptions: CoverageOption[] = [
    {
      title: "DOT Liability Coverage",
      description: "Required $750K minimum liability with options up to $5M per occurrence for interstate compliance.",
      features: ["$750K-$5M Coverage Limits", "Interstate Compliance", "BMC-32 Filing Support", "Instant Certificates"],
      icon: Shield
    },
    {
      title: "Physical Damage Protection",
      description: "Comprehensive and collision coverage for all vehicles in your fleet with flexible deductible options.",
      features: ["Comprehensive Coverage", "Collision Protection", "Glass & Windshield", "Rental Reimbursement"],
      icon: Truck
    },
    {
      title: "Cargo Insurance",
      description: "Up to $250,000 coverage for freight and cargo you transport with all-risk protection.",
      features: ["Up to $250K Coverage", "All-Risk Protection", "Loading/Unloading", "Temperature Damage"],
      icon: FileText
    },
    {
      title: "Fleet Management Services",
      description: "Beyond insurance - fleet tracking, driver training, safety programs, and DOT compliance consulting.",
      features: ["Fleet Tracking Systems", "Driver Training Programs", "Safety Consulting", "DOT Compliance Support"],
      icon: Settings
    },
    {
      title: "Workers' Compensation",
      description: "Protect your drivers and fleet personnel with comprehensive workers' compensation coverage.",
      features: ["Driver Coverage", "Medical Benefits", "Lost Wage Protection", "Return-to-Work Programs"],
      icon: Users
    },
    {
      title: "Cyber Liability Insurance",
      description: "Protection against cyber threats targeting fleet management systems and customer data.",
      features: ["Data Breach Response", "System Downtime Coverage", "Cyber Extortion Protection", "Regulatory Compliance"],
      icon: Target
    }
  ];

  const fleetCategories = [
    {
      title: "Transportation & Logistics",
      fleetTypes: ["Long-Haul Trucking", "Local Delivery", "LTL Carriers", "Freight Brokers", "Logistics Companies"]
    },
    {
      title: "Service & Trades", 
      fleetTypes: ["Construction Fleets", "HVAC Services", "Electrical Services", "Plumbing Services", "Field Services"]
    },
    {
      title: "Retail & Distribution",
      fleetTypes: ["Food Delivery", "Retail Distribution", "E-commerce Delivery", "Medical Supply", "Industrial Supply"]
    },
    {
      title: "Specialized Transport",
      fleetTypes: ["Heavy Haul", "Oversized Loads", "Hazmat Transport", "Refrigerated Transport", "Auto Transport"]
    }
  ];

  const managementServices = [
    {
      icon: Map,
      title: "Fleet Tracking & Telematics",
      description: "Advanced GPS tracking and telematics systems to monitor vehicle performance, driver behavior, and route optimization for improved efficiency and safety."
    },
    {
      icon: Users,
      title: "Driver Training Programs",
      description: "Comprehensive driver safety training and certification programs to reduce accidents, improve CSA scores, and lower insurance premiums."
    },
    {
      icon: FileText,
      title: "DOT Compliance Management",
      description: "Complete DOT compliance management including HOS monitoring, vehicle inspections, driver qualification files, and audit preparation."
    },
    {
      icon: Shield,
      title: "Safety Consulting",
      description: "Expert safety consulting services to develop comprehensive safety programs, reduce incidents, and create a culture of safety within your organization."
    }
  ];

  const toggleFAQ = (index: number) => {
    setFaqItems(prev => prev.map((item, idx) => ({
      ...item,
      isOpen: idx === index ? !item.isOpen : false
    })));
  };

const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Fleet insurance form submitted:', formData);
  
  setIsSubmitting(false);
  setShowSuccessModal(true);
  setShowConfetti(true);

  setFormData({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    fleetSize: '',
    fleetType: ''
  });
};

  const handleTierSelection = (tierId: string) => {
    setSelectedTier(tierId);
  };


  const handleCloseModal = () => {
  setShowSuccessModal(false);
  setShowConfetti(false);
};

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section ref={heroRef} className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/fleet.png" 
                  alt="Commercial fleet vehicles for insurance"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Commercial Fleet
                    <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                      Insurance Solutions
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                    Comprehensive fleet protection with up to 25% savings. DOT-compliant coverage for 2+ vehicles with dedicated fleet specialists and streamlined management.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Up to 25% Fleet Discounts',
                    'DOT Compliance Support',
                    'Single Policy Management'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                      <span className="text-lg font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group">
                    Get Fleet Quote
           
                  </button>
                  
                  <a href="tel:+18006694301" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center">
                    Call (800) 669-4301
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Pricing Tiers */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Fleet Pricing Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mb-6">
              The more vehicles you insure, the more you save. Simple, transparent pricing with volume discounts that grow with your fleet size.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fleetTiers.map((tier) => (
              <div 
                key={tier.id} 
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                  tier.popular ? 'border-orange-600 shadow-lg scale-105' : 'border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 mt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                  <div className="text-gray-600 font-medium">{tier.vehicles}</div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">{tier.price}</div>
                  <div className="text-gray-600">{tier.priceNote}</div>
                </div>
                
                <div className="text-center mb-6">
                  <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                    {tier.savings}
                  </span>
                </div>
                
                <button
                  onClick={() => handleTierSelection(tier.id)}
                  className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get {tier.title} Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Coverage Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Coverage Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mb-6">
              From DOT liability to cargo protection, we provide comprehensive insurance solutions tailored to your specific fleet operations and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageOptions.map((coverage) => {
              const IconComponent = coverage.icon;
              return (
                <div key={coverage.title} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{coverage.title}</h3>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-gray-600 mb-4">{coverage.description}</p>
                    <ul className="space-y-2">
                      {coverage.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Management Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Fleet Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mb-6">
              Beyond insurance - comprehensive fleet management solutions that optimize operations, reduce costs, and improve safety across your entire fleet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Fleet Types We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mb-6">
              Specialized insurance solutions for every type of commercial fleet operation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-200">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.fleetTypes.map((type) => (
                    <li key={type} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Fleet Insurance FAQs
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Common questions about commercial fleet insurance coverage, savings, and management
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={faq.isOpen}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <div className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-200 ${faq.isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {faq.isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Form */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Ready to Save on
                  <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                    Fleet Insurance?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Join thousands of fleet operators who trust Moxie Risk Partners for their insurance needs. Get your customized fleet quote today and experience the difference specialized fleet insurance expertise makes.
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-6">
                
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Call Us Now</h4>
                  <a href="tel:+18006694301" className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors">
                    (800) 669-4301
                  </a>
                  <p className="text-xs text-gray-500 mt-1">24/7 Available</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Email Us</h4>
                  <a href="mailto:quotes@moxieriskpartners.com" className="text-lg font-bold text-purple-600 hover:text-purple-700 transition-colors break-all">
                    quotes@moxieriskpartners.com
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Quick Response</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                <p className="text-gray-600">Fast, competitive fleet insurance quotes</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
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
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fleet Size *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900"
                      value={formData.fleetSize}
                      onChange={(e) => setFormData({...formData, fleetSize: e.target.value})}
                    >
                      <option value="">Select Size</option>
                      <option value="2-5">2-5 Vehicles</option>
                      <option value="6-25">6-25 Vehicles</option>
                      <option value="26-50">26-50 Vehicles</option>
                      <option value="50+">50+ Vehicles</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fleet Type *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900"
                      value={formData.fleetType}
                      onChange={(e) => setFormData({...formData, fleetType: e.target.value})}
                    >
                      <option value="">Select Type</option>
                      <option value="trucking">Trucking/Logistics</option>
                      <option value="service">Service & Trades</option>
                      <option value="retail">Retail/Distribution</option>
                      <option value="specialized">Specialized Transport</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
              </form>
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
export default FleetInsurance;