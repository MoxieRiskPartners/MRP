"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Shield, Phone, Mail, FileText, Truck, } from 'lucide-react';
import SuccessModal from '../Components/successModal';

interface CoverageType {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const CoveragePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    coverageType: '',
    industryType: ''
  });

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

  const coverageTypes: CoverageType[] = [
    {
      id: 'commercial-auto-liability',
      title: 'Commercial Auto Liability',
      subtitle: 'DOT Compliant Protection',
      image: '/images/commAuto1.png',
      href: '/commercial-auto-liability',
    },
    {
      id: 'physical-damage',
      title: 'Physical Damage Insurance',
      subtitle: 'Vehicle Protection',
      image: '/images/phydamage.png',
      href: '/physical-damage',
    },
    {
      id: 'motor-truck-cargo',
      title: 'Motor Truck Cargo',
      subtitle: 'Freight Protection',
      image: '/images/cargoHero.png',
      href: '/motor-truck-cargo',
    },
    {
      id: 'owner-operator',
      title: 'Owner Operator Insurance',
      subtitle: 'For Independent Truckers',
      image: '/images/ownerOp.png',
      href: '/owner-operator',
    },
    {
      id: 'workers-compensation',
      title: "Workers' Compensation",
      subtitle: 'Employee Protection',
      image: '/images/workCompHero1.png',
      href: '/workers-compensation',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section ref={heroRef} className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
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
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Complete Insurance
                    <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                      Coverage Solutions
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
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
                      <span className="text-lg font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                    suppressHydrationWarning
                  >
                    Get Your Quote
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

      {/* Coverage Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Our Coverage Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive insurance protection across all business types and industries. 
              From trucking operations to employee protection, we have you covered.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {coverageTypes.map((type) => {
              return (
                <div key={type.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                  
                  {/* Image Section */}
                  <div className="relative h-84 overflow-hidden flex-shrink-0">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="space-y-4 flex-grow">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {type.title}
                        </h3>
                        <p className="text-sm font-semibold text-orange-600">
                          {type.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 mt-6">
                      <a 
                        href={type.href}
                        className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-semibold text-center transition-all duration-300"
                      >
                        Learn More
                      </a>
                      <button 
                        className="flex-1 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300"
                        suppressHydrationWarning
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Coverage Options Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Additional Coverage Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expand your protection with specialized coverage options tailored to your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* General Liability */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                General Liability
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Protection against third-party claims for bodily injury, property damage, and advertising injury
              </p>
              <a href="tel:+18006694301" className="text-orange-600 hover:text-orange-700 font-semibold text-sm inline-flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Commercial Property */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Commercial Property
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Coverage for buildings, equipment, inventory, and business property against damage and loss
              </p>
              <a href="tel:+18006694301" className="text-orange-600 hover:text-orange-700 font-semibold text-sm inline-flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Cyber Liability */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Cyber Liability
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Protection against data breaches, cyber attacks, and digital security incidents
              </p>
              <a href="tel:+18006694301" className="text-orange-600 hover:text-orange-700 font-semibold text-sm inline-flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Professional Liability */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Professional Liability
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Errors and omissions coverage for professional services and advice provided to clients
              </p>
              <a href="tel:+18006694301" className="text-orange-600 hover:text-orange-700 font-semibold text-sm inline-flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Non-Trucking Liability */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Non-Trucking Liability (NTL)
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Coverage for owner-operators when not under dispatch or hauling cargo for hire
              </p>
              <a href="tel:+18006694301" className="text-orange-600 hover:text-orange-700 font-semibold text-sm inline-flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Occupational Accident */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Occupational Accident
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Alternative to workers' comp for owner-operators and independent contractors
              </p>
              <a href="tel:+18006694301" className="text-orange-600 hover:text-orange-700 font-semibold text-sm inline-flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Don't See Your Coverage CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-8 lg:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Don't See the Coverage You're Looking For?
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We offer a wide range of specialized insurance solutions beyond what's listed above. 
                Whether you need umbrella coverage or any other commercial insurance, our experienced 
                specialists can create a customized protection plan for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+18006694301" 
                  className="inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Our Specialists: (800) 669-4301
                </a>
                
                <a 
                  href="mailto:quotes@moxieriskpartners.com" 
                  className="inline-flex items-center justify-center border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Available 24/7 for your convenience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Why Choose Moxie Risk Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              With decades of insurance expertise, we provide comprehensive coverage solutions 
              that protect your business while delivering exceptional service and competitive rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "Specialized knowledge across all commercial insurance lines with dedicated experts",
                icon: Shield
              },
              {
                title: "Fast Service",
                description: "Same-day certificates, instant filings, and 24/7 support when you need it",
                icon: CheckCircle
              },
              {
                title: "Competitive Rates",
                description: "Access to multiple A-rated carriers ensuring the best coverage at the best price",
                icon: FileText
              },
              {
                title: "Complete Support",
                description: "From quotes to claims, we're with you every step of the way",
                icon: Shield
              }
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Footer with Quote Form */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - CTA Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Ready to Protect Your
                  <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                    Business?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
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
                  <a href="tel:+18006694301" className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors">
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
                  <a href="mailto:quotes@moxieriskpartners.com" className="text-lg font-bold text-purple-600 hover:text-purple-700 transition-colors break-all">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
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
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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