"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Shield, Phone, Mail, Truck, Package, Users, FileText } from 'lucide-react';
import SuccessModal from '../Components/successModal';

interface InsuranceType {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const TruckingTransportationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    dotNumber: '',
    fleetSize: ''
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setShowSuccessModal(true);
    setShowConfetti(true);

    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      dotNumber: '',
      fleetSize: ''
    });
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setShowConfetti(false);
  };

  const insuranceTypes: InsuranceType[] = [
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
    },
    {
      id: 'captives',
      title: 'Captive Insurance Programs',
      subtitle: 'Risk Management Solutions',
      image: '/images/captives.png',
      href: '/captives-benefit',
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
                  src="/images/truckhero.png" 
                  alt="Commercial trucking and transportation insurance"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Trucking & Transportation
                    <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                      Insurance Solutions
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                    Comprehensive insurance solutions for owner-operators, fleets, and freight protection. 
                    DOT-compliant coverage with competitive rates and expert guidance for all trucking operations.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Owner Operators & Fleets',
                    'DOT Compliance Support',
                    '24/7 Claims Service'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                      <span className="text-lg font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group">
                    Get Your Quote
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <a href="tel:+18003265581" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center">
                    Call (800) 326-5581
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Comprehensive Insurance Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From DOT-compliant liability to cargo protection, we provide complete coverage 
              solutions tailored to your trucking operation's unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((type) => {
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
                      <button className="flex-1 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Why Choose Moxie Risk Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              With decades of trucking insurance expertise, we understand your unique challenges 
              and provide solutions that keep your wheels turning and your business protected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "Specialized trucking insurance knowledge with dedicated transportation specialists",
                icon: Shield
              },
              {
                title: "Fast Service",
                description: "Same-day certificates, instant filings, and 24/7 claims support when you need it",
                icon: CheckCircle
              },
              {
                title: "Competitive Rates",
                description: "Access to multiple A-rated carriers ensuring the best coverage at the best price",
                icon: FileText
              },
              {
                title: "DOT Compliance",
                description: "Complete compliance support including BMC-91X filings and regulatory guidance",
                icon: Truck
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

      {/* Contact/Quote Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free Trucking Insurance Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, competitive quotes for all types of trucking operations. 
              Our specialists are ready to help you get on the road with the right coverage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Methods */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Our Trucking Specialists</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get expert guidance on DOT compliance, coverage requirements, and competitive rates. 
                  Our team specializes in trucking insurance and understands your unique needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Phone */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Call Us Now</h4>
                  <a href="tel:+18003265581" className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors">
                     Call (800) 326-5581
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
                <p className="text-gray-600">Fast, competitive trucking insurance quotes</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Company Name */}
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
                    suppressHydrationWarning={true}
                  />
                </div>

                {/* Contact Name */}
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
                    suppressHydrationWarning={true}
                  />
                </div>

                {/* Email and Phone Row */}
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
                      suppressHydrationWarning={true}
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
                      suppressHydrationWarning={true}
                    />
                  </div>
                </div>

                {/* DOT Number and Fleet Size Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      US DOT # *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                      placeholder="DOT Number"
                      value={formData.dotNumber}
                      onChange={(e) => setFormData({...formData, dotNumber: e.target.value})}
                      suppressHydrationWarning={true}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fleet Size *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900"
                      value={formData.fleetSize}
                      onChange={(e) => setFormData({...formData, fleetSize: e.target.value})}
                      suppressHydrationWarning={true}
                    >
                      <option value="">Select Size</option>
                      <option value="1">Owner Operator (1 Unit)</option>
                      <option value="2-5">Small Fleet (2-5 Units)</option>
                      <option value="6-25">Medium Fleet (6-25 Units)</option>
                      <option value="26-50">Large Fleet (26-50 Units)</option>
                      <option value="50+">Enterprise (50+ Units)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  suppressHydrationWarning={true}
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Quote Now'}
                  {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />}
                </button>

                {/* Trust Elements */}
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

export default TruckingTransportationPage;