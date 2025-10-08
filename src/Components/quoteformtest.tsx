// "use client";

// import React, { useState } from 'react';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   industry: string;
//   coverageNeeded: string[];
//   phone: string;
//   email: string;
//   dotNumber?: string;
// }

// const QuoteFormTest = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: 'Test',
//     lastName: 'User',
//     industry: 'trucking',
//     coverageNeeded: ['auto-liability', 'physical-damage'],
//     phone: '555-123-4567',
//     email: 'test@example.com',
//     dotNumber: '12345678'
//   });
  
//  const [response, setResponse] = useState<{
//   success?: boolean;
//   error?: boolean;
//   message?: string;
//   momentumResponse?: any;
// } | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponse(null);
    
//     console.log('Submitting form data:', formData);
    
//     try {
//       const res = await fetch('/api/momentum-quote', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
      
//       const result = await res.json();
//       console.log('Response from API:', result);
//       setResponse(result);
      
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setResponse({ 
//         error: true, 
//         message: error instanceof Error ? error.message : 'Unknown error' 
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 py-12">
//       <div className="max-w-2xl mx-auto px-4">
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Momentum API Test Form</h1>
//           <p className="text-gray-600 mb-8">Test your Momentum AMP integration</p>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name Fields */}
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   First Name
//                 </label>
//                 <input 
//                   type="text" 
//                   value={formData.firstName}
//                   onChange={(e) => setFormData({...formData, firstName: e.target.value})}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Last Name
//                 </label>
//                 <input 
//                   type="text" 
//                   value={formData.lastName}
//                   onChange={(e) => setFormData({...formData, lastName: e.target.value})}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>

//             {/* Industry */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Industry
//               </label>
//               <select 
//                 value={formData.industry}
//                 onChange={(e) => setFormData({...formData, industry: e.target.value})}
//                 className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="trucking">Trucking</option>
//                 <option value="construction">Construction</option>
//                 <option value="manufacturing">Manufacturing</option>
//                 <option value="nonprofit">Nonprofit</option>
//                 <option value="public-entity">Public Entity</option>
//               </select>
//             </div>

//             {/* Coverage Checkboxes */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Coverage Needed
//               </label>
//               <div className="space-y-2 bg-gray-50 p-4 rounded-md">
//                 {['auto-liability', 'physical-damage', 'motor-truck-cargo', 'general-liability'].map(coverage => (
//                   <label key={coverage} className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded">
//                     <input
//                       type="checkbox"
//                       checked={formData.coverageNeeded.includes(coverage)}
//                       onChange={(e) => {
//                         if (e.target.checked) {
//                           setFormData({...formData, coverageNeeded: [...formData.coverageNeeded, coverage]});
//                         } else {
//                           setFormData({...formData, coverageNeeded: formData.coverageNeeded.filter(c => c !== coverage)});
//                         }
//                       }}
//                       className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                     />
//                     <span className="text-gray-700">{coverage}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* DOT Number (conditional) */}
//             {formData.industry === 'trucking' && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   DOT Number
//                 </label>
//                 <input 
//                   type="text" 
//                   value={formData.dotNumber || ''}
//                   onChange={(e) => setFormData({...formData, dotNumber: e.target.value})}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             )}

//             {/* Contact Info */}
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone
//                 </label>
//                 <input 
//                   type="tel" 
//                   value={formData.phone}
//                   onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input 
//                   type="email" 
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button 
//               type="submit" 
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
//             >
//               {loading ? 'Sending to Momentum...' : 'Test Submit to Momentum'}
//             </button>
//           </form>
//         </div>

//         {/* Response Display */}
//         {response && (
//           <div className={`mt-8 p-6 rounded-lg ${
//             response.success 
//               ? 'bg-green-50 border-2 border-green-200' 
//               : 'bg-red-50 border-2 border-red-200'
//           }`}>
//             <h2 className={`text-lg font-semibold mb-3 ${
//               response.success ? 'text-green-800' : 'text-red-800'
//             }`}>
//               {response.success ? '✓ Success' : '✗ Error'}
//             </h2>
//             <pre className="whitespace-pre-wrap text-sm font-mono bg-white p-4 rounded border">
//               {JSON.stringify(response, null, 2)}
//             </pre>
//           </div>
//         )}

//         {/* Current Form Data (for debugging) */}
//         <div className="mt-8 bg-gray-100 p-6 rounded-lg">
//           <h3 className="text-sm font-semibold text-gray-700 mb-2">Current Form Data (Debug)</h3>
//           <pre className="text-xs font-mono text-gray-600">
//             {JSON.stringify(formData, null, 2)}
//           </pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuoteFormTest;