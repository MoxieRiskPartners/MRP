"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Shield, Phone, Mail, Truck, Package, AlertTriangle, Thermometer, Lock, FileText } from 'lucide-react';
import SuccessModal from '../Components/successModal';


interface CargoBenefit {
  icon: React.ElementType;
  title: string;
  description: string;
  stat: string;
}

interface CoverageType {
  title: string;
  description: string;
  features: string[];
  isIncluded: boolean;
}

interface CargoType {
  name: string;
  description: string;
  riskLevel: 'standard' | 'specialized' | 'high-risk';
}

interface CoverageDetail {
  title: string;
  description: string;
  limit: string;
}

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const MotorTruckCargo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "Is cargo insurance required for truckers?",
      answer: "While not federally required, most shippers and brokers require truckers to carry cargo insurance to protect their freight. It's essential for securing contracts and protecting your business.",
      isOpen: false
    },
    {
      question: "What's the difference between cargo insurance and freight insurance?",
      answer: "Motor truck cargo insurance and freight insurance refer to the same coverage - protection for goods being transported. The terms are used interchangeably in the trucking industry.",
      isOpen: false
    },
    {
      question: "How much cargo insurance coverage do I need?",
      answer: "Coverage limits typically range from $5,000 to $250,000 depending on the value of freight you haul. Many shippers require minimum limits of $100,000 to $250,000.",
      isOpen: false
    },
    {
      question: "Does cargo insurance cover refrigerated freight?",
      answer: "Standard cargo insurance may have limited coverage for refrigerated goods. Refrigeration breakdown coverage is available as an optional enhancement for temperature-sensitive cargo.",
      isOpen: false
    },
    {
      question: "What happens if cargo is damaged during loading?",
      answer: "Motor truck cargo insurance typically covers damage that occurs during loading and unloading operations, as well as while goods are in transit between pickup and delivery.",
      isOpen: false
    }
  ]);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    cargoType: '',
    coverageAmount: ''
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

  const cargoBenefits: CargoBenefit[] = [
    {
      icon: Shield,
      title: "Broad Form Protection",
      description: "Comprehensive coverage that protects against a wider range of risks than standard cargo policies.",
      stat: "Maximum coverage"
    },
    {
      icon: Truck,
      title: "Transit Coverage",
      description: "Protection during loading, transportation, unloading, and temporary storage at terminals.",
      stat: "End-to-end protection"
    },
    {
      icon: Thermometer,
      title: "Refrigeration Breakdown",
      description: "Specialized coverage for temperature-controlled cargo and refrigeration equipment failure.",
      stat: "Perishable goods"
    },
    {
      icon: Lock,
      title: "Theft & Security",
      description: "Coverage for theft, mysterious disappearance, and cargo security incidents during transit.",
      stat: "Security protection"
    }
  ];

  const coverageTypes: CoverageType[] = [
    {
      title: "Fire and Collision",
      description: "Primary coverage for cargo damage due to vehicle accidents, fires, and collision-related incidents.",
      features: [
        "Vehicle accident damage",
        "Fire and explosion coverage",
        "Rollover incident protection",
        "Multi-vehicle collision coverage"
      ],
      isIncluded: true
    },
    {
      title: "Theft and Pilferage",
      description: "Protection against cargo theft, mysterious disappearance, and employee dishonesty.",
      features: [
        "Cargo theft coverage",
        "Mysterious disappearance",
        "Employee dishonesty protection",
        "Pilferage and partial loss"
      ],
      isIncluded: true
    },
    {
      title: "Weather and Natural Disasters",
      description: "Coverage for cargo damage caused by weather events and natural disasters.",
      features: [
        "Hail and wind damage",
        "Flood and water damage",
        "Lightning strike coverage",
        "Natural disaster protection"
      ],
      isIncluded: true
    },
    {
      title: "Loading and Unloading",
      description: "Protection during cargo handling operations at pickup and delivery locations.",
      features: [
        "Loading dock accidents",
        "Crane and forklift damage",
        "Improper handling coverage",
        "Terminal storage protection"
      ],
      isIncluded: true
    },
    {
      title: "Refrigeration Breakdown",
      description: "Specialized coverage for temperature-sensitive cargo when refrigeration equipment fails.",
      features: [
        "Equipment failure coverage",
        "Spoilage protection",
        "Temperature deviation losses",
        "Maintenance failure coverage"
      ],
      isIncluded: false
    },
    {
      title: "General Average and Salvage",
      description: "Coverage for proportional losses and salvage expenses in multi-party cargo situations.",
      features: [
        "General average contributions",
        "Salvage expense coverage",
        "Sue and labor costs",
        "Loss mitigation expenses"
      ],
      isIncluded: false
    }
  ];

  const cargoTypes: CargoType[] = [
    { name: "General Freight", description: "Standard manufactured goods and consumer products", riskLevel: "standard" },
    { name: "Electronics", description: "Consumer electronics, computers, and technology equipment", riskLevel: "specialized" },
    { name: "Food & Beverage", description: "Packaged food products, beverages, and consumer goods", riskLevel: "standard" },
    { name: "Refrigerated Goods", description: "Perishable food items and temperature-controlled products", riskLevel: "specialized" },
    { name: "Automotive Parts", description: "Vehicle components, tires, and automotive accessories", riskLevel: "standard" },
    { name: "Construction Materials", description: "Building supplies, lumber, and construction equipment", riskLevel: "standard" },
    { name: "High-Value Goods", description: "Valuable merchandise requiring enhanced security", riskLevel: "high-risk" },
    { name: "Hazardous Materials", description: "Chemicals and regulated dangerous goods", riskLevel: "high-risk" }
  ];

  const coverageDetails: CoverageDetail[] = [
    {
      title: "Debris Removal",
      description: "Coverage for cleanup and removal of damaged cargo and debris after an incident.",
      limit: "Up to $10,000"
    },
    {
      title: "Earned Freight Charges",
      description: "Protection against loss of freight charges for undelivered loads due to covered incidents.",
      limit: "Up to $10,000"
    },
    {
      title: "Pollution Cleanup",
      description: "Environmental cleanup costs for cargo-related pollution or hazardous material spills.",
      limit: "Up to $10,000"
    },
    {
      title: "Sue and Labor",
      description: "Legal expenses and costs to prevent further loss to damaged cargo.",
      limit: "Included"
    },
    {
      title: "Reloading Expenses",
      description: "Costs to transfer undamaged cargo to another vehicle after an incident.",
      limit: "Up to $5,000"
    },
    {
      title: "General Average",
      description: "Proportional contributions for shared losses in multi-party cargo situations.",
      limit: "Included"
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
      cargoType: '',
      coverageAmount: ''
    });
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
                  src="/images/cargoHero.png" 
                  alt="Motor truck cargo insurance for freight protection"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Motor Truck Cargo
                    <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                      Insurance Solutions
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                    Comprehensive freight protection from loading dock to delivery. Protect the cargo you haul with broad form coverage up to $250,000.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Broad Form Coverage',
                    '$250K Max Coverage',
                    '24/7 Claims Support'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                      <span className="text-lg font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group">
                    Get Cargo Quote
           
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Why Motor Truck Cargo Insurance is Essential
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mb-6">
              Truckers assume enormous financial responsibility for the property they haul. Cargo insurance provides crucial protection against the unique risks of transporting freight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cargoBenefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="inline-block bg-orange-50 text-orange-600 px-4 py-2 rounded-full font-bold text-sm">
                    {benefit.stat}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Coverage Options
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mb-6">
              Our broad form cargo insurance provides comprehensive protection against the full spectrum of transit risks your freight faces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageTypes.map((coverage) => (
              <div 
                key={coverage.title} 
                className={`rounded-xl p-6 border-2 ${
                  coverage.isIncluded 
                    ? 'bg-orange-50 border-orange-200' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {coverage.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    coverage.isIncluded 
                      ? 'bg-orange-600 text-white' 
                      : 'bg-gray-600 text-white'
                  }`}>
                    {coverage.isIncluded ? 'Included' : 'Optional'}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {coverage.description}
                </p>
                <ul className="space-y-2">
                  {coverage.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cargo Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Coverage for All Types of Freight
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mb-6">
              We provide specialized coverage options tailored to different cargo types and risk levels in the trucking industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cargoTypes.map((cargoType) => (
              <div 
                key={cargoType.name} 
                className={`bg-white rounded-xl p-6 border-2 hover:shadow-lg transition-all duration-300 ${
                  cargoType.riskLevel === 'high-risk' ? 'border-red-200' :
                  cargoType.riskLevel === 'specialized' ? 'border-orange-200' :
                  'border-gray-200'
                }`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cargoType.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {cargoType.description}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                  cargoType.riskLevel === 'high-risk' ? 'bg-red-100 text-red-700' :
                  cargoType.riskLevel === 'specialized' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {cargoType.riskLevel.replace('-', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              What's Included in Motor Truck Cargo Insurance?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mb-6">
              Our comprehensive cargo policies include essential coverages and services that many other insurers exclude or charge extra for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageDetails.map((detail) => (
              <div key={detail.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {detail.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {detail.description}
                </p>
                <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                  {detail.limit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Motor Truck Cargo Insurance FAQs
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Common questions about motor truck cargo insurance coverage, requirements, and claims
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
                  Protect Your Freight with
                  <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                    Cargo Insurance
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Don't let cargo losses destroy your trucking business. Get comprehensive motor truck cargo insurance coverage that protects your liability from loading dock to final delivery.
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
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                <p className="text-gray-600">Fast, competitive cargo insurance quotes</p>
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

  {/* ADD THIS SECTION - Email and Phone fields */}
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

  {/* Then your existing Coverage Amount and Cargo Type fields */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Coverage Amount *
      </label>
      <select
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900"
        value={formData.coverageAmount}
        onChange={(e) => setFormData({...formData, coverageAmount: e.target.value})}
      >
        <option value="">Select Amount</option>
        <option value="5000-25000">$5,000 - $25,000</option>
        <option value="25000-50000">$25,000 - $50,000</option>
        <option value="50000-100000">$50,000 - $100,000</option>
        <option value="100000-250000">$100,000 - $250,000</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Cargo Type *
      </label>
      <select
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900"
        value={formData.cargoType}
        onChange={(e) => setFormData({...formData, cargoType: e.target.value})}
      >
        <option value="">Select Type</option>
        <option value="general">General Freight</option>
        <option value="electronics">Electronics</option>
        <option value="food">Food & Beverage</option>
        <option value="refrigerated">Refrigerated Goods</option>
        <option value="automotive">Automotive Parts</option>
        <option value="construction">Construction Materials</option>
        <option value="high-value">High-Value Goods</option>
        <option value="hazmat">Hazardous Materials</option>
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
export default MotorTruckCargo;