"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Shield, Phone, Mail, TrendingDown, Users, DollarSign, Target, Building2, Lightbulb, LineChart, PieChart, Calculator } from 'lucide-react';
import SuccessModal from '@/Components/successModal';

interface CaptiveBenefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CaptiveType {
  type: string;
  title: string;
  description: string;
  idealFor: string[];
  minPremium: string;
}

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const CaptivesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "Is a captive insurance company the same as regular insurance coverage?",
      answer: "No. A captive is not a line of coverage—it's a risk management and financing tool. You still maintain your standard insurance coverages (liability, workers' comp, auto, etc.), but a captive allows you to participate in the underwriting profits and better control costs through higher deductibles or self-insured retentions.",
      isOpen: false
    },
    {
      question: "How does a captive help me manage higher deductibles?",
      answer: "Captives create a separate pool of funds to handle higher deductibles on your existing policies. Instead of paying these amounts directly from your operating budget, the captive acts as a structured funding vehicle. This provides better financial planning, tax advantages, and the ability to earn investment income on reserves.",
      isOpen: false
    },
    {
      question: "What's the minimum size company that should consider a captive?",
      answer: "Most group captives require combined annual premiums of at least $250,000 across workers' comp, general liability, and auto liability. Single-parent captives typically need $750,000+ in annual premiums to be cost-effective. Your company should also have strong risk management practices and be financially stable.",
      isOpen: false
    },
    {
      question: "Do my lines of coverage change with a captive?",
      answer: "No—your lines of coverage remain exactly the same. You'll still have general liability, workers' compensation, auto liability, etc. The captive simply changes how you finance and manage the retained risk (deductibles) on those policies, giving you more control and potential financial benefits.",
      isOpen: false
    },
    {
      question: "What are the main cost benefits of a captive?",
      answer: "Captives offer three primary financial advantages: (1) Reduced fixed costs through performance-based pricing, (2) Underwriting profits returned to members when claims are well-managed, and (3) Investment income earned on reserves and premium funds. Companies with strong safety records can see significant long-term savings.",
      isOpen: false
    }
  ]);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    currentPremiums: '',
    industryType: ''
  });

  const heroRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
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
    
    console.log('Captive inquiry submitted:', formData);
    
    setIsSubmitting(false);
    setShowSuccessModal(true);
    setShowConfetti(true);

    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      currentPremiums: '',
      industryType: ''
    });
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setShowConfetti(false);
  };

  const toggleFaq = (index: number) => {
    setFaqItems(prevItems =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : item.isOpen
      }))
    );
  };

  const captiveBenefits: CaptiveBenefit[] = [
    {
      icon: TrendingDown,
      title: 'Cost Stabilization & Reduction',
      description: 'Replace volatile market pricing with performance-based costs. Companies with strong safety records can reduce insurance expenses by 15-30% over time.'
    },
    {
      icon: DollarSign,
      title: 'Underwriting Profit Participation',
      description: 'Keep the underwriting profits instead of giving them to insurance companies. Unused premiums and well-managed claims return to your company as distributions.'
    },
    {
      icon: LineChart,
      title: 'Investment Income',
      description: 'Earn returns on premium reserves, loss reserves, and collateral funds while they wait to pay claims. These earnings compound over time and enhance overall returns.'
    },
    {
      icon: Target,
      title: 'Enhanced Risk Management',
      description: 'Gain complete visibility into claims data and trends. Direct access to risk control resources helps reduce claim frequency and severity across your operations.'
    },
    {
      icon: Shield,
      title: 'Greater Control & Flexibility',
      description: 'Customize coverage terms, manage higher deductibles efficiently, and control the claims process. Choose your own service providers and legal counsel.'
    },
    {
      icon: Calculator,
      title: 'Tax Advantages',
      description: 'Premiums paid to captives are tax-deductible business expenses. Underwriting profits and investment income accumulate on a tax-deferred basis until distributed.'
    }
  ];

  const captiveTypes: CaptiveType[] = [
    {
      type: 'Group Captive',
      title: 'Group Captive Insurance',
      description: 'Join with other companies in your industry to share risks and rewards. Members collaborate on underwriting, loss control, and reinsurance decisions while benefiting from shared expertise and lower operational costs.',
      idealFor: [
        'Mid-sized companies seeking captive benefits without going solo',
        'Organizations wanting industry peer collaboration',
        'Businesses with $250K+ combined annual premiums',
        'Companies ready to invest in risk management'
      ],
      minPremium: '$250,000+ annually'
    },
    {
      type: 'Single-Parent Captive',
      title: 'Single-Parent (Pure) Captive',
      description: 'Establish your own licensed insurance company to insure your risks. Provides maximum control, customization, and potential for long-term financial benefits. Requires substantial commitment and expertise.',
      idealFor: [
        'Large enterprises with $750K+ annual premiums',
        'Fortune 500 companies (90% have captives)',
        'Organizations with complex, unique risk profiles',
        'Companies seeking maximum control and flexibility'
      ],
      minPremium: '$750,000+ annually'
    },
    {
      type: 'Micro Captive (831(b))',
      title: 'Micro Captive Insurance',
      description: 'Small captive that receives $2.2M or less in annual premiums and elects special IRS tax treatment. Can exclude premiums from taxable income and pay tax only on investment income.',
      idealFor: [
        'Smaller businesses seeking captive benefits',
        'Closely-held companies with tax planning goals',
        'Organizations with niche or hard-to-insure risks',
        'Businesses wanting to self-insure specific exposures'
      ],
      minPremium: 'Under $2.2M annually'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-gray-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/captives.png" 
                  alt="Captive insurance risk management solution"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
              
               
                </div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="space-y-8">
                <div>
             
                  
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Captive Insurance
                    <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                      Programs
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Captive insurance is a powerful risk financing tool that helps you manage higher deductibles, 
                    reduce long-term costs, and participate in underwriting profits—while maintaining your existing 
                    lines of coverage.
                  </p>

            
                </div>

                <div className="space-y-4">
                  {[
                    'Reduce Total Cost of Risk',
                    'Participate in Underwriting Profits',
                    'Maintain Same Coverage Lines',
                    'Tax-Advantaged Structure'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                      <span className="text-lg font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#contact"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                  >
                    Get your Quote
                    
                  </a>
                  
                  <a 
                    href="tel:+18006694301" 
                    className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                   Call (800) 326-5581
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Captive Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Is Captive Insurance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A captive is a licensed insurance company that you own and control, created specifically 
              to insure your own risks and provide alternative risk financing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
             
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>You form or join a licensed insurance company (the "captive")</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Your existing policies remain in place with higher deductibles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>The captive funds and manages these higher deductibles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>You participate in underwriting profits and investment returns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>The captive pays claims within the deductible layer</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
             
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Principle</h3>
              <div className="bg-white p-6 rounded-lg border border-green-200 mb-4">
                <p className="text-gray-800 font-semibold mb-3">
                  Coverage Lines Stay the Same:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ General Liability - Same</li>
                  <li>✓ Workers' Compensation - Same</li>
                  <li>✓ Commercial Auto - Same</li>
                  <li>✓ Property Coverage - Same</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="text-orange-900 font-semibold">
                  What Changes: The deductible increases, and the captive manages that higher retention
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <div className="flex items-start space-x-4">
              <Shield className="w-12 h-12 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Real-World Example</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>Scenario:</strong> Your company currently has General Liability insurance with a $25,000 deductible 
                  and pays $300,000 in annual premiums.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>With a Captive:</strong> You increase your deductible to $100,000 (reducing premiums to $250,000) 
                  and join a group captive. The captive creates a fund to handle that $100,000 retention layer.
                </p>
                <p className="text-orange-300 font-semibold">
                  Result: If claims are low, you receive dividends from unused funds plus investment returns. 
                  Your coverage limits and protection remain exactly the same—only the deductible structure changed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Companies Choose Captive Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              90% of Fortune 500 companies use captives to reduce costs, stabilize pricing, 
              and gain control over their insurance programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {captiveBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 p-12 rounded-2xl text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">
                Financial Impact: Real Numbers
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl font-bold mb-2">15-30%</div>
                  <p className="text-orange-100">Average cost reduction over 5 years</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">48%</div>
                  <p className="text-orange-100">Fewer fatalities vs industry average</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">22%</div>
                  <p className="text-orange-100">Fewer workers' comp claims</p>
                </div>
              </div>
              <p className="text-orange-100 mt-6 text-sm">
                *Based on Captive Resources study of 15 mature group captives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Captive Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Types of Captive Structures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the captive structure that best fits your company's size, 
              risk profile, and strategic objectives
            </p>
          </div>

          <div className="space-y-8">
            {captiveTypes.map((captive, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-500 transition-all duration-300 shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mr-4">
                        {captive.type}
                      </div>
                      <div className="text-sm text-gray-600 font-semibold">
                        Min: {captive.minPremium}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {captive.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {captive.description}
                    </p>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Ideal For:</h4>
                      <ul className="space-y-2">
                        {captive.idealFor.map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Captive Formation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We guide you through every step of evaluating and implementing a captive program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Feasibility Study',
                description: 'Analyze your loss history, current premiums, and risk profile to determine if a captive makes sense'
              },
              {
                number: '02',
                title: 'Structure Selection',
                description: 'Choose the optimal captive type and domicile based on your goals, size, and industry'
              },
              {
                number: '03',
                title: 'Formation & Setup',
                description: 'Form the captive entity, secure licensing, establish governance, and fund initial capital'
              },
              {
                number: '04',
                title: 'Ongoing Management',
                description: 'Monitor performance, manage claims, adjust strategy, and receive distributions as earned'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                  <div className="text-5xl font-bold text-orange-200 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-orange-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about captive insurance programs
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-orange-500 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  suppressHydrationWarning
                >
                  <span className="font-bold text-lg text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform duration-300 flex-shrink-0 ${faq.isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                {faq.isOpen && (
                  <div className="px-8 py-6 bg-white border-t border-gray-200" suppressHydrationWarning>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore Captive Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss whether a captive program makes sense for your organization. 
              Our experts will analyze your risk profile and provide customized recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get expert guidance on captive insurance programs, feasibility analysis, and risk management strategies. 
                  Our team specializes in alternative risk solutions and understands your unique needs.
                </p>
              </div>

              <div className="space-y-4">
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

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                <p className="text-gray-600">We'll evaluate if a captive is right for you</p>
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
                    suppressHydrationWarning
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
                    suppressHydrationWarning
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

                {/* Current Premiums and Industry */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Annual Premiums *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900"
                      value={formData.currentPremiums}
                      onChange={(e) => setFormData({...formData, currentPremiums: e.target.value})}
                      suppressHydrationWarning
                    >
                      <option value="">Select Range</option>
                      <option value="under-250k">Under $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-plus">Over $1M</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900"
                      value={formData.industryType}
                      onChange={(e) => setFormData({...formData, industryType: e.target.value})}
                      suppressHydrationWarning
                    >
                      <option value="">Select Industry</option>
                      <option value="construction">Construction</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="trucking">Trucking/Transportation</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="professional">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group mt-6"
                  suppressHydrationWarning
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get my quote now
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Trust Elements */}
                <div className="text-center mt-4 space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>100% Confidential Analysis</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    No obligation. Expert consultation from licensed professionals.
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

export default CaptivesPage;