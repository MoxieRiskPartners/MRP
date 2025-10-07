// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import { CheckCircle, ArrowRight, Shield, Clock, Users, Star, Phone, Mail, MapPin } from 'lucide-react';
// import SuccessModal from '@/Components/successModal';

// interface CoverageData {
//   type: string;
//   typeCode: string;
//   title: string;
//   description: string;
//   commonLoads: string[];
//   risksCovered: string[];
//   whoNeedsIt: string[];
//   coverageAmount: string;
//   specialFeatures: string[];
//   image: string;
// }

// const TruckingTransportationPage = () => {
//   const [selectedType, setSelectedType] = useState('dry-van');
//   const [isVisible, setIsVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     companyName: '',
//     contactName: '',
//     email: '',
//     phone: '',
//     dotNumber: '',
//     fleetSize: ''
//   });

//   // Modal state management
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const heroRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.1 }
//     );

//     if (heroRef.current) {
//       observer.observe(heroRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const coverageTypes: CoverageData[] = [
//     {
//       type: 'Dry Van',
//       typeCode: 'dry-van',
//       title: 'Dry Van Cargo Insurance',
//       description: 'Comprehensive motor truck cargo protection for general freight haulers. Covers packaged goods, retail freight, and non-perishable cargo during loading, transit, and unloading operations.',
//       commonLoads: ['Packaged goods', 'Retail freight', 'Non-perishable items', 'General freight', 'Consumer products'],
//       risksCovered: ['Theft protection', 'Collision damage', 'Load shift damage', 'Fire coverage', 'Vandalism'],
//       whoNeedsIt: ['General freight haulers', 'Contract carriers', 'Distribution companies', 'Amazon contractors', 'FTL carriers'],
//       coverageAmount: '$100,000 - $250,000',
//       specialFeatures: ['UIIA endorsement available', 'Broad form coverage', 'Specific shipper options', 'Intermodal container coverage'],
//       image: '/images/dryvan.png'
//     },
//     {
//       type: 'Flatbed',
//       typeCode: 'flatbed',
//       title: 'Flatbed Cargo Insurance',
//       description: 'Heavy-duty cargo insurance for flatbed operations. Covers lumber, steel, machinery, and construction materials with specialized protection for load securement and weather-related damages.',
//       commonLoads: ['Steel products', 'Lumber', 'Heavy machinery', 'Construction materials', 'Industrial equipment'],
//       risksCovered: ['Load securement failure', 'Weather damage', 'Shifting load damage', 'Theft protection', 'Transit accidents'],
//       whoNeedsIt: ['Flatbed operators', 'Construction logistics', 'Steel haulers', 'Equipment transporters', 'Building material carriers'],
//       coverageAmount: '$100,000 - $250,000',
//       specialFeatures: ['Rollover deductible structure', 'Tarped load coverage', 'Oversized load endorsements', 'Weather protection'],
//       image: '/images/flatbed.png'
//     },
//     {
//       type: 'Refrigerated',
//       typeCode: 'refrigerated',
//       title: 'Reefer Cargo Insurance',
//       description: 'Specialized temperature-controlled cargo insurance for cold chain logistics. Protects perishable freight including produce, pharmaceuticals, dairy, and frozen goods against temperature fluctuations and spoilage.',
//       commonLoads: ['Fresh produce', 'Pharmaceuticals', 'Dairy products', 'Frozen foods', 'Medical supplies'],
//       risksCovered: ['Reefer breakdown coverage', 'Spoilage protection', 'Temperature fluctuation',],
//       whoNeedsIt: ['Food transporters', 'Cold chain logistics', 'Pharmaceutical haulers', 'Grocery distributors', 'Medical transport'],
//       coverageAmount: '$100,000 - $250,000',
//       specialFeatures: ['Mechanical breakdown coverage', 'Driver error coverage', 'Spoilage protection', 'Temperature monitoring', 'Delayed delivery coverage'],
//       image: '/images/refrigerated.png'
//     },
//     {
//       type: 'Hazmat',
//       typeCode: 'hazmat',
//       title: 'Hazmat Cargo Insurance',
//       description: 'High-limit hazardous materials cargo insurance for DOT-compliant carriers. Covers chemicals, fuels, and dangerous goods with pollution liability and environmental damage protection.',
//       commonLoads: ['Industrial chemicals', 'Petroleum products', 'Corrosive materials', 'Flammable liquids', 'Hazardous waste'],
//       risksCovered: ['Spill coverage', 'Explosion protection', 'Fire damage', 'Environmental liability', 'Cleanup costs'],
//       whoNeedsIt: ['Hazmat carriers', 'Chemical distributors', 'Fuel transporters', 'Industrial waste haulers', 'Tanker operators'],
//       coverageAmount: '$1,000,000 - $5,000,000',
//       specialFeatures: ['Pollution liability coverage', 'Environmental cleanup', 'DOT compliance support', 'Emergency response'],
//       image: '/images/hazmat.png'
//     },
//     {
//       type: 'Auto Hauler',
//       typeCode: 'auto-hauler',
//       title: 'Auto Transport Insurance',
//       description: 'Specialized vehicle transport cargo insurance for car carriers. Protects new and used vehicles, specialty autos, and salvage cars during loading, transport, and delivery operations.',
//       commonLoads: ['New vehicles', 'Used cars', 'Specialty vehicles', 'Salvage automobiles', 'Exotic cars'],
//       risksCovered: ['Load shift damage', 'Road debris damage', 'Vehicle theft', 'Loading/unloading damage', 'Weather damage'],
//       whoNeedsIt: ['Auto transport companies', 'Dealership transporters', 'Auction haulers', 'Enclosed car carriers', 'RV transporters'],
//       coverageAmount: '$100,000 - $1,000,000',
//       specialFeatures: ['Open & enclosed coverage', 'High-value vehicle options', 'Loading coverage', 'Multi-vehicle protection'],
//       image: '/images/autoHauler.png'
//     },
//     {
//       type: 'Dump Truck',
//       typeCode: 'dump-truck',
//       title: 'Dump Truck Cargo Insurance',
//       description: 'Heavy-duty insurance for aggregate and construction material haulers. Covers sand, gravel, asphalt, and demolition debris with protection for spillage and environmental contamination.',
//       commonLoads: ['Sand & gravel', 'Asphalt', 'Dirt & soil', 'Demolition debris', 'Road salt'],
//       risksCovered: ['Load spillage', 'Tip-over coverage', 'Environmental contamination', 'Equipment damage', 'Material theft'],
//       whoNeedsIt: ['Aggregate haulers', 'Construction contractors', 'Road maintenance', 'Demolition companies', 'Mining operations'],
//       coverageAmount: '$50,000 - $250,000',
//       specialFeatures: ['Multi-dump type coverage', 'Off-road operations', 'Environmental protection', 'Construction site coverage'],
//       image: '/images/dumptruck.png'
//     }
//   ];

//   const selectedCoverage = coverageTypes.find(coverage => coverage.typeCode === selectedType) || coverageTypes[0];

//   const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     console.log('Form submitted:', formData);
    
//     setIsSubmitting(false);
    
//     // Show success modal with confetti
//     setShowSuccessModal(true);
//     setShowConfetti(true);

//     // Reset form
//     setFormData({
//       companyName: '',
//       contactName: '',
//       email: '',
//       phone: '',
//       dotNumber: '',
//       fleetSize: ''
//     });
//   };

//   const handleCloseModal = () => {
//     setShowSuccessModal(false);
//     setShowConfetti(false);
//   };

//   const handleTypeSelection = (typeCode: string) => {
//     setSelectedType(typeCode);
//   };

//   return (
//     <div className="min-h-screen bg-white">
      
//       {/* Hero Section - Side by Side Layout */}
//       <section ref={heroRef} className="bg-white py-12 lg:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Left Side - Hero Image */}
//             <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 <img 
//                   src="/images/truckhero.png" 
//                   alt="Commercial trucking fleet on highway"
//                   className="w-full h-[500px] lg:h-[600px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//               </div>
//             </div>

//             {/* Right Side - Content */}
//             <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
//               <div className="space-y-8">
//                 <div>
//                   <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
//                     Commercial Truck
//                     <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
//                       Cargo Insurance
//                     </span>
//                   </h1>
                  
//                   <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
//                     Comprehensive motor truck cargo protection for all freight types and trailer configurations. 
//                     Competitive rates, expert guidance, and nationwide coverage for owner-operators and fleets.
//                   </p>
//                 </div>

//                 {/* Features */}
//                 <div className="space-y-4">
//                   {[
//                     'All Trailer Types',
//                     'Nationwide Coverage', 
                   
//                   ].map((feature, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
//                       <span className="text-lg font-medium text-gray-800">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button 
//                     className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
//                     suppressHydrationWarning={true}
//                   >
//                     Get Your Quote
                 
//                   </button>
                  
//                   <a href="tel:+18006694301" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center">
//                     Call (800) 669-4301
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Cargo Coverage Selector Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Section Header - Left Aligned */}
//           <div className="mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//               Choose Your Specialized Cargo Coverage
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mb-6">
//               Each trailer type and freight category has unique risks and requirements. 
//               Select your specific cargo type below to explore tailored coverage options and industry-specific endorsements.
//             </p>
//           </div>

//           {/* Cargo Type Buttons */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
//             {coverageTypes.map((coverage) => (
//               <button
//                 key={coverage.typeCode}
//                 onClick={() => handleTypeSelection(coverage.typeCode)}
//                 className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
//                   selectedType === coverage.typeCode
//                     ? 'border-orange-600 bg-orange-50 shadow-lg scale-105'
//                     : 'border-gray-200 bg-white hover:border-orange-300'
//                 }`}
//                 suppressHydrationWarning={true}
//               >
//                 <div className="text-center">
//                   <div className="mb-4 mx-auto w-20 h-16 flex items-center justify-center">
//                     <img
//                       src={coverage.image}
//                       alt={coverage.type}
//                       className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
//                     />
//                   </div>
//                   <h3 className={`text-sm font-bold transition-colors ${
//                     selectedType === coverage.typeCode ? 'text-orange-600' : 'text-gray-800'
//                   }`}>
//                     {coverage.type}
//                   </h3>
//                 </div>
                
//                 {/* Selected Indicator */}
//                 {selectedType === coverage.typeCode && (
//                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
//                     <CheckCircle className="w-4 h-4 text-white" />
//                   </div>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Footer with Quote Form */}
//       <section className="relative py-20 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Left Side - CTA Content */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                   Ready to Protect Your
//                   <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
//                     Trucking Business?
//                   </span>
//                 </h2>
                
//                 <p className="text-xl text-gray-600 leading-relaxed mb-8">
//                   Join thousands of trucking professionals who trust Moxie Risk Partners. 
//                   Get your quote today and experience specialized cargo insurance expertise.
//                 </p>
//               </div>

            
//                     {/* Contact Information Grid */}
//                           <div className="grid md:grid-cols-1 gap-6">
                        
//                             {/* Phone */}
//                             <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
//                               <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
//                                 <Phone className="w-6 h-6 text-white" />
//                               </div>
//                               <h4 className="text-sm font-semibold text-gray-900 mb-1">Call Us Now</h4>
//                               <a href="tel:+18006694301" className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors">
//                                 (800) 669-4301
//                               </a>
//                               <p className="text-xs text-gray-500 mt-1">24/7 Available</p>
//                             </div>
            
//                             {/* Email */}
//                             <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
//                               <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mx-auto mb-3">
//                                 <Mail className="w-6 h-6 text-white" />
//                               </div>
//                               <h4 className="text-sm font-semibold text-gray-900 mb-1">Email Us</h4>
//                               <a href="mailto:quotes@moxieriskpartners.com" className="text-lg font-bold text-purple-600 hover:text-purple-700 transition-colors break-all">
//                                 quotes@moxieriskpartners.com
//                               </a>
//                               <p className="text-xs text-gray-500 mt-1">Quick Response</p>
//                             </div>
            
                        
//                           </div>
                    
            

//               {/* Trust Elements */}
//               <div className="flex flex-wrap justify-start items-center gap-4 pt-6 border-t border-gray-200">
           
//               </div>
//             </div>

//             {/* Right Side - Quote Form */}
//             <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              
//               <div className="text-center mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Shield className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
//                 <p className="text-gray-600">Fast, competitive trucking insurance quotes</p>
//               </div>

//               <form onSubmit={handleFormSubmit} className="space-y-4">
                
//                 {/* Company Name */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Company Name *
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
//                     placeholder="Your Company Name"
//                     value={formData.companyName}
//                     onChange={(e) => setFormData({...formData, companyName: e.target.value})}
//                     suppressHydrationWarning={true}
//                   />
//                 </div>

//                 {/* Contact Name */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Contact Name *
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
//                     placeholder="Your Full Name"
//                     value={formData.contactName}
//                     onChange={(e) => setFormData({...formData, contactName: e.target.value})}
//                     suppressHydrationWarning={true}
//                   />
//                 </div>

//                 {/* Email and Phone Row */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
//                       placeholder="email@company.com"
//                       value={formData.email}
//                       onChange={(e) => setFormData({...formData, email: e.target.value})}
//                       suppressHydrationWarning={true}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Phone *
//                     </label>
//                     <input
//                       type="tel"
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
//                       placeholder="(555) 123-4567"
//                       value={formData.phone}
//                       onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                       suppressHydrationWarning={true}
//                     />
//                   </div>
//                 </div>

//                 {/* DOT Number and Fleet Size Row */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       US DOT # *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
//                       placeholder="DOT Number"
//                       value={formData.dotNumber}
//                       onChange={(e) => setFormData({...formData, dotNumber: e.target.value})}
//                       suppressHydrationWarning={true}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Fleet Size *
//                     </label>
//                     <select
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900"
//                       value={formData.fleetSize}
//                       onChange={(e) => setFormData({...formData, fleetSize: e.target.value})}
//                       suppressHydrationWarning={true}
//                     >
//                       <option value="">Select Size</option>
//                       <option value="1-10">1-10 Units</option>
//                       <option value="11-25">11-25 Units</option>
//                       <option value="25-50">25-50 Units</option>
//                       <option value="50-100">50-100 Units</option>
//                       <option value="100+">100+ Units</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//                   suppressHydrationWarning={true}
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Get My Quote Now'}
//                   {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />}
//                 </button>

//                 {/* Trust Elements */}
//                 <div className="text-center mt-4 space-y-2">
//                   <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
//                     <CheckCircle className="w-4 h-4 text-green-500" />
//                     <span>100% Secure & Confidential</span>
//                   </div>
//                   <p className="text-xs text-gray-500">
//                     No spam, unsubscribe anytime. Licensed agents only.
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Success Modal */}
//       <SuccessModal 
//         isOpen={showSuccessModal}
//         onClose={handleCloseModal}
//         showConfetti={showConfetti}
//       />
//     </div>
//   );
// };

// export default TruckingTransportationPage;


"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, Shield, Phone, Mail, Truck, Package, Users, FileText } from 'lucide-react';
import SuccessModal from '../Components/successModal';

interface InsuranceType {
  id: string;
  title: string;
  subtitle: string;
  // description: string;
  // features: string[];
  idealFor: string;
  coverageRange: string;
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
      id: 'owner-operator',
      title: 'Owner Operator Insurance',
      subtitle: 'For Independent Truckers',
      // description: 'Comprehensive coverage designed for independent truck drivers who own and operate their own commercial vehicles. Get DOT-compliant protection with flexible terms.',
      // features: [
    
      //   'Physical Damage Coverage',
      //   'Non-Trucking Use Liability',
      //   'Occupational Accident Protection'
      // ],
      idealFor: 'Independent truckers with 1-3 units',
      coverageRange: '$750K - $5M liability',
      image: '/images/ownerOp.png',
      href: '/owner-operator',
   
    },
    {
      id: 'fleet-insurance',
      title: 'Fleet Insurance',
      subtitle: 'Multi-Vehicle Coverage',
      // description: 'Save up to 25% with comprehensive fleet protection for 2+ vehicles. Streamlined policy management, DOT compliance support, and dedicated fleet specialists.',
      // features: [
      //   'Volume Discounts (15-25% savings)',
      //   'Single Policy Management',
      //   'Fleet Safety Programs',
      //   'Telematics & Tracking Options'
      // ],
      idealFor: 'Companies with 2+ commercial vehicles',
      coverageRange: 'Scalable coverage for any fleet size',
      image: '/images/fleet.png',
      href: '/fleet-insurance',
  
    },
    {
      id: 'motor-truck-cargo',
      title: 'Motor Truck Cargo',
      subtitle: 'Freight Protection',
      // description: 'Protect the freight you haul with comprehensive cargo insurance. Coverage for all trailer types from dry van to hazmat, with limits up to $250,000 per load.',
      // features: [
      //   'All Cargo Types Covered',
      //   'Loading/Unloading Protection',
      //   'Refrigeration Breakdown',
      //   'Broad Form Coverage'
      // ],
      idealFor: 'All trucking operations hauling freight',
      coverageRange: '$5,000 - $250,000 per load',
      image: '/images/cargoHero.png',
      href: '/motor-truck-cargo',
     
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
                    Get Coverage Quote
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
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

      {/* Insurance Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Complete Trucking Insurance Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From single owner-operators to large fleets, we provide specialized insurance solutions 
              tailored to your specific trucking operations and compliance requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
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

                  {/* Content Section - flex-grow to push buttons to bottom */}
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

                      <p className="text-gray-600 leading-relaxed">
                        {/* {type.description} */}
                      </p>

                      {/* Features List */}
                      {/* <ul className="space-y-2">
                        {type.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul> */}
                    </div>

                    {/* CTA Buttons - at the bottom */}
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
              Why Truckers Choose Moxie Risk Partners
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

      {/* Enhanced CTA Footer with Quote Form */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - CTA Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Ready to Protect Your
                  <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                    Trucking Business?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Join thousands of trucking professionals who trust Moxie Risk Partners. 
                  Get your quote today and experience specialized cargo insurance expertise.
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

              {/* Trust Elements */}
              <div className="flex flex-wrap justify-start items-center gap-4 pt-6 border-t border-gray-200">
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