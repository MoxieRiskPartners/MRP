// "use client";

// import React, { useState, useEffect } from 'react';
// import { Truck, AlertCircle, Download, Send, Plus, FileText, Shield, Users, Car, Package, Building, Heart } from 'lucide-react';
// import Header from '../Header';
// import Footer from '../footer';
// import {
//   FormData,
//   WitnessInfo,
//   UploadedFile,
//   initialFormData,
//   weatherOptions,
//   roadConditionOptions,
//   visibilityOptions,
// } from './types';
// import {
//   TextInput,
//   TextArea,
//   Select,
//   RadioGroup,
//   FormSection,
//   SubSection,
//   ContactFields,
//   VehicleFields,
//   OwnerFields,
//   WitnessEntry,
//   FileUpload,
//   yesNoOptions,
// } from './formFields';

// const TruckingClaimsForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [witnesses, setWitnesses] = useState<WitnessInfo[]>([
//     { id: '1', name: '', phone: '', email: '', statement: '' },
//   ]);
//   const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = requestAnimationFrame(() => {
//       setIsVisible(true);
//     });
//     return () => cancelAnimationFrame(timer);
//   }, []);

//   // ============================================
//   // HANDLERS
//   // ============================================
//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleWitnessChange = (id: string, field: keyof WitnessInfo, value: string) => {
//     setWitnesses((prev) =>
//       prev.map((w) => (w.id === id ? { ...w, [field]: value } : w))
//     );
//   };

//   const addWitness = () => {
//     setWitnesses((prev) => [
//       ...prev,
//       { id: Date.now().toString(), name: '', phone: '', email: '', statement: '' },
//     ]);
//   };

//   const removeWitness = (id: string) => {
//     setWitnesses((prev) => prev.filter((w) => w.id !== id));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const submitData = {
//         ...formData,
//         witnesses: witnesses.filter((w) => w.name),
//         files: uploadedFiles,
//       };

//       console.log('Submitting:', submitData);
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       setSubmitStatus('success');
//       setTimeout(() => setSubmitStatus('idle'), 3000);
//     } catch (error) {
//       setSubmitStatus('error');
//       setTimeout(() => setSubmitStatus('idle'), 3000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleDownloadPDF = () => {
//     alert('PDF download functionality - requires jsPDF library installation');
//   };

//   // ============================================
//   // RENDER
//   // ============================================
//   return (
//     <>
//       <Header />
//       <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           {/* Header - Open/Floating */}
//           <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//               Trucking Incident Report
//             </h1>
//             <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
//               Complete all sections and submit to your Claims contact
//             </p>
            
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* INCIDENT DETAILS */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
//               <FormSection title="INCIDENT DETAILS" darkHeader >
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <TextInput
//                     label="NAME OF YOUR COMPANY"
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={handleInputChange}
//                     required
//                     labelClassName="font-semibold"
//                   />
//                   <div className="grid grid-cols-2 gap-3">
//                     <TextInput
//                       label="DATE OF INCIDENT"
//                       name="incidentDate"
//                       value={formData.incidentDate}
//                       onChange={handleInputChange}
//                       type="date"
//                       required
//                       labelClassName="font-semibold"
//                     />
//                     <TextInput
//                       label="TIME"
//                       name="incidentTime"
//                       value={formData.incidentTime}
//                       onChange={handleInputChange}
//                       type="time"
//                       required
//                       labelClassName="font-semibold"
//                     />
//                   </div>
//                 </div>

//                 <SubSection title="BUSINESS CONTACT FOR CLAIMS (who should the claims adjuster contact?)">
//                   <ContactFields
//                     prefix="claimsContact"
//                     values={{
//                       name: formData.claimsContactName,
//                       title: formData.claimsContactTitle,
//                       phone: formData.claimsContactPhone,
//                       email: formData.claimsContactEmail,
//                     }}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </SubSection>

//                 <SubSection title="PERSON COMPLETING THIS FORM">
//                   <ContactFields
//                     prefix="completingPerson"
//                     values={{
//                       name: formData.completingPersonName,
//                       title: formData.completingPersonTitle,
//                       phone: formData.completingPersonPhone,
//                       email: formData.completingPersonEmail,
//                     }}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </SubSection>

//                 <SubSection title="">
//                   <TextInput
//                     label="LOCATION OF INCIDENT (ADDRESS/INTERSECTION, CITY, STATE)"
//                     name="incidentLocation"
//                     value={formData.incidentLocation}
//                     onChange={handleInputChange}
//                     required
//                     labelClassName="font-semibold"
//                     className="mb-4"
//                   />
//                   <TextArea
//                     label="BRIEF DESCRIPTION OF INCIDENT"
//                     name="incidentDescription"
//                     value={formData.incidentDescription}
//                     onChange={handleInputChange}
//                     required
//                     rows={4}
//                     labelClassName="font-semibold"
//                     placeholder="Please provide a detailed description of what happened..."
//                   />
//                 </SubSection>
//               </FormSection>
//             </div>

//             {/* POLICE REPORT & CITATION */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
//               <FormSection title="POLICE REPORT & CITATION" darkHeader >
//                 <div className="space-y-6">
//                   <RadioGroup
//                     label="Was a police report filed?"
//                     name="policeReportFiled"
//                     value={formData.policeReportFiled}
//                     onChange={handleInputChange}
//                     options={yesNoOptions}
//                     required
//                   />

//                   {formData.policeReportFiled === 'yes' && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 border-l-4 border-orange-200 bg-orange-50/50 p-4 rounded-r-lg">
//                       <TextInput
//                         label="Police Report Number"
//                         name="policeReportNumber"
//                         value={formData.policeReportNumber}
//                         onChange={handleInputChange}
//                       />
//                       <TextInput
//                         label="Police Department"
//                         name="policeReportDepartment"
//                         value={formData.policeReportDepartment}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   )}

//                   <RadioGroup
//                     label="Was a citation issued?"
//                     name="citationIssued"
//                     value={formData.citationIssued}
//                     onChange={handleInputChange}
//                     options={yesNoOptions}
//                     required
//                   />

//                   {formData.citationIssued === 'yes' && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 border-l-4 border-orange-200 bg-orange-50/50 p-4 rounded-r-lg">
//                       <TextInput
//                         label="Citation Issued To"
//                         name="citationIssuedTo"
//                         value={formData.citationIssuedTo}
//                         onChange={handleInputChange}
//                         placeholder="Name of person cited"
//                       />
//                       <TextInput
//                         label="Citation Number"
//                         name="citationNumber"
//                         value={formData.citationNumber}
//                         onChange={handleInputChange}
//                       />
//                       <TextInput
//                         label="Violation Description"
//                         name="citationViolation"
//                         value={formData.citationViolation}
//                         onChange={handleInputChange}
//                         className="md:col-span-2"
//                       />
//                     </div>
//                   )}
//                 </div>
//               </FormSection>
//             </div>

//             {/* WEATHER & ROAD CONDITIONS */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
//               <FormSection title="WEATHER & ROAD CONDITIONS" darkHeader>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <Select
//                     label="Weather Conditions"
//                     name="weatherConditions"
//                     value={formData.weatherConditions}
//                     onChange={handleInputChange}
//                     options={weatherOptions}
//                     required
//                   />
//                   <Select
//                     label="Road Conditions"
//                     name="roadConditions"
//                     value={formData.roadConditions}
//                     onChange={handleInputChange}
//                     options={roadConditionOptions}
//                     required
//                   />
//                   <Select
//                     label="Visibility"
//                     name="visibility"
//                     value={formData.visibility}
//                     onChange={handleInputChange}
//                     options={visibilityOptions}
//                     required
//                   />
//                 </div>
//               </FormSection>
//             </div>

//             {/* DOT RECORDABLE */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '250ms' }}>
//               <FormSection title="DOT RECORDABLE" darkHeader>
//                 <div className="space-y-6">
//                   <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4">
//                     <p className="text-sm text-amber-800">
//                       <strong>Note:</strong> A crash is DOT recordable if it results in a fatality,
//                       bodily injury requiring immediate medical treatment away from the scene, or
//                       disabling damage to any vehicle requiring towing.
//                     </p>
//                   </div>

//                   <RadioGroup
//                     label="Is this incident DOT recordable?"
//                     name="dotRecordable"
//                     value={formData.dotRecordable}
//                     onChange={handleInputChange}
//                     options={[
//                       { value: 'yes', label: 'Yes' },
//                       { value: 'no', label: 'No' },
//                       { value: 'unknown', label: 'Unknown' },
//                     ]}
//                     required
//                   />

//                   {formData.dotRecordable === 'yes' && (
//                     <div className="pl-4 border-l-4 border-orange-200 bg-orange-50/50 p-4 rounded-r-lg">
//                       <TextArea
//                         label="Reason for DOT Recordability"
//                         name="dotRecordableReason"
//                         value={formData.dotRecordableReason}
//                         onChange={handleInputChange}
//                         rows={2}
//                         placeholder="e.g., Fatality, injury requiring medical transport, vehicle towed..."
//                       />
//                     </div>
//                   )}
//                 </div>
//               </FormSection>
//             </div>

//             {/* TOWING INFORMATION */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
//               <FormSection title="TOWING INFORMATION" darkHeader>
//                 <div className="space-y-6">
//                   <RadioGroup
//                     label="Was towing required?"
//                     name="towingRequired"
//                     value={formData.towingRequired}
//                     onChange={handleInputChange}
//                     options={yesNoOptions}
//                     required
//                   />

//                   {formData.towingRequired === 'yes' && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 border-l-4 border-orange-200 bg-orange-50/50 p-4 rounded-r-lg">
//                       <TextInput
//                         label="Towing Company Name"
//                         name="towingCompanyName"
//                         value={formData.towingCompanyName}
//                         onChange={handleInputChange}
//                       />
//                       <TextInput
//                         label="Towing Company Phone"
//                         name="towingCompanyPhone"
//                         value={formData.towingCompanyPhone}
//                         onChange={handleInputChange}
//                         type="tel"
//                       />
//                       <TextInput
//                         label="Tow Destination"
//                         name="towingDestination"
//                         value={formData.towingDestination}
//                         onChange={handleInputChange}
//                         placeholder="Where was the vehicle towed to?"
//                         className="md:col-span-2"
//                       />
//                     </div>
//                   )}
//                 </div>
//               </FormSection>
//             </div>

//             {/* WITNESS INFORMATION */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '350ms' }}>
//               <FormSection title="WITNESS INFORMATION" darkHeader >
//                 <p className="text-sm text-gray-600 mb-4">
//                   Please provide information for any witnesses to the incident.
//                 </p>

//                 {witnesses.map((witness, index) => (
//                   <WitnessEntry
//                     key={witness.id}
//                     witness={witness}
//                     index={index}
//                     onChange={handleWitnessChange}
//                     onRemove={removeWitness}
//                     canRemove={witnesses.length > 1}
//                   />
//                 ))}

//                 <button
//                   type="button"
//                   onClick={addWitness}
//                   className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors"
//                 >
//                   <Plus className="h-4 w-4" />
//                   Add Another Witness
//                 </button>
//               </FormSection>
//             </div>

//             {/* PHOTOS & DOCUMENTATION */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
//               <FormSection title="PHOTOS & DOCUMENTATION" darkHeader>
//                 <FileUpload
//                   files={uploadedFiles}
//                   onFilesChange={setUploadedFiles}
//                   maxFiles={10}
//                 />
//               </FormSection>
//             </div>

//             {/* TRUCK */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '450ms' }}>
//               <FormSection title="TRUCK" darkHeader >
//                 <RadioGroup
//                   label="Was your truck damaged?"
//                   name="truckDamaged"
//                   value={formData.truckDamaged}
//                   onChange={handleInputChange}
//                   options={yesNoOptions}
//                   required
//                   className="mb-6"
//                 />

//                 <OwnerFields
//                   prefix="truck"
//                   nameValue={formData.truckOwnerName}
//                   contactValue={formData.truckOwnerContact}
//                   onChange={handleInputChange}
//                   label="TRUCK OWNER name and contact information (if not owned by your company)"
//                 />

//                 <VehicleFields
//                   prefix="truck"
//                   values={{
//                     year: formData.truckYear,
//                     make: formData.truckMake,
//                     model: formData.truckModel,
//                     vin: formData.truckVin,
//                   }}
//                   onChange={handleInputChange}
//                 />
//               </FormSection>
//             </div>

//             {/* YOUR DRIVER */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
//               <FormSection title="YOUR DRIVER" darkHeader>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                   <TextInput
//                     label="DRIVER name"
//                     name="driverName"
//                     value={formData.driverName}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <TextInput
//                     label="DRIVER phone"
//                     name="driverPhone"
//                     value={formData.driverPhone}
//                     onChange={handleInputChange}
//                     type="tel"
//                   />
//                   <TextInput
//                     label="DRIVER license #"
//                     name="driverLicense"
//                     value={formData.driverLicense}
//                     onChange={handleInputChange}
//                   />
//                   <TextInput
//                     label="STATE"
//                     name="driverState"
//                     value={formData.driverState}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <RadioGroup
//                   label="DRIVER is (choose one):"
//                   name="driverType"
//                   value={formData.driverType}
//                   onChange={handleInputChange}
//                   options={[
//                     { value: 'employee', label: 'Employee' },
//                     { value: 'owner-operator', label: 'Owner-Operator' },
//                   ]}
//                   className="mb-6"
//                 />

//                 <RadioGroup
//                   label="WAS YOUR DRIVER INJURED?"
//                   name="driverInjured"
//                   value={formData.driverInjured}
//                   onChange={handleInputChange}
//                   options={yesNoOptions}
//                   required
//                 />
//               </FormSection>
//             </div>

//             {/* TRAILER */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '550ms' }}>
//               <FormSection title="TRAILER" darkHeader>
//                 <RadioGroup
//                   label="Was your truck pulling a trailer?"
//                   name="trailerPulling"
//                   value={formData.trailerPulling}
//                   onChange={handleInputChange}
//                   options={yesNoOptions}
//                   required
//                   className="mb-6"
//                 />

//                 {formData.trailerPulling === 'yes' && (
//                   <>
//                     <RadioGroup
//                       label="Was the trailer damaged?"
//                       name="trailerDamaged"
//                       value={formData.trailerDamaged}
//                       onChange={handleInputChange}
//                       options={yesNoOptions}
//                       className="mb-6"
//                     />

//                     <OwnerFields
//                       prefix="trailer"
//                       nameValue={formData.trailerOwnerName}
//                       contactValue={formData.trailerOwnerContact}
//                       onChange={handleInputChange}
//                       label="TRAILER OWNER name and contact information (if not owned by your company)"
//                     />

//                     <VehicleFields
//                       prefix="trailer"
//                       values={{
//                         year: formData.trailerYear,
//                         make: formData.trailerMake,
//                         model: formData.trailerModel,
//                         vin: formData.trailerVin,
//                       }}
//                       onChange={handleInputChange}
//                     />
//                   </>
//                 )}
//               </FormSection>
//             </div>

//             {/* CARGO */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
//               <FormSection title="CARGO" darkHeader >
//                 <RadioGroup
//                   label="Was your cargo damaged?"
//                   name="cargoDamaged"
//                   value={formData.cargoDamaged}
//                   onChange={handleInputChange}
//                   options={yesNoOptions}
//                   className="mb-6"
//                 />

//                 {formData.cargoDamaged === 'yes' && (
//                   <>
//                     <RadioGroup
//                       label="Cargo was (choose one):"
//                       name="cargoType"
//                       value={formData.cargoType}
//                       onChange={handleInputChange}
//                       options={[
//                         { value: 'pulled', label: 'Pulled' },
//                         { value: 'driven', label: 'Driven' },
//                       ]}
//                       className="mb-6"
//                     />

//                     <OwnerFields
//                       prefix="cargo"
//                       nameValue={formData.cargoOwnerName}
//                       contactValue={formData.cargoOwnerContact}
//                       onChange={handleInputChange}
//                       label="CARGO OWNER name and contact information"
//                     />

//                     <TextArea
//                       label="DESCRIPTION OF DAMAGED CARGO"
//                       name="cargoDescription"
//                       value={formData.cargoDescription}
//                       onChange={handleInputChange}
//                       rows={3}
//                     />
//                   </>
//                 )}
//               </FormSection>
//             </div>

//             {/* OTHER VEHICLE(S) */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '650ms' }}>
//               <FormSection title="OTHER VEHICLE(S)" darkHeader >
//                 <p className="text-sm text-gray-600 italic mb-6">
//                   For additional vehicles, use additional sheets of paper.
//                 </p>

//                 <div className="space-y-6">
//                   <OwnerFields
//                     prefix="otherVehicle"
//                     nameValue={formData.otherVehicleOwnerName}
//                     contactValue={formData.otherVehicleOwnerContact}
//                     onChange={handleInputChange}
//                     label="OWNER name and contact information"
//                   />

//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       DRIVER name and contact information
//                     </label>
//                     <div className="space-y-3">
//                       <input
//                         type="text"
//                         name="otherVehicleDriverName"
//                         value={formData.otherVehicleDriverName}
//                         onChange={handleInputChange}
//                         placeholder="Driver name"
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-gray-900 hover:border-gray-300"
//                       />
//                       <input
//                         type="text"
//                         name="otherVehicleDriverContact"
//                         value={formData.otherVehicleDriverContact}
//                         onChange={handleInputChange}
//                         placeholder="Contact information"
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-gray-900 hover:border-gray-300"
//                       />
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       OWNER INSURANCE COMPANY name, contact information, and policy number
//                     </label>
//                     <div className="space-y-3">
//                       <input
//                         type="text"
//                         name="otherVehicleInsuranceName"
//                         value={formData.otherVehicleInsuranceName}
//                         onChange={handleInputChange}
//                         placeholder="Insurance company name"
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-gray-900 hover:border-gray-300"
//                       />
//                       <input
//                         type="text"
//                         name="otherVehicleInsuranceContact"
//                         value={formData.otherVehicleInsuranceContact}
//                         onChange={handleInputChange}
//                         placeholder="Contact information"
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-gray-900 hover:border-gray-300"
//                       />
//                       <input
//                         type="text"
//                         name="otherVehicleInsurancePolicy"
//                         value={formData.otherVehicleInsurancePolicy}
//                         onChange={handleInputChange}
//                         placeholder="Policy number"
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-gray-900 hover:border-gray-300"
//                       />
//                     </div>
//                   </div>

//                   <VehicleFields
//                     prefix="otherVehicle"
//                     values={{
//                       year: formData.otherVehicleYear,
//                       make: formData.otherVehicleMake,
//                       model: formData.otherVehicleModel,
//                     }}
//                     onChange={handleInputChange}
//                     showVin={false}
//                   />
//                 </div>
//               </FormSection>
//             </div>

//             {/* OTHER DAMAGED PROPERTY */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}>
//               <FormSection title="OTHER DAMAGED PROPERTY" darkHeader >
//                 <OwnerFields
//                   prefix="property"
//                   nameValue={formData.propertyOwnerName}
//                   contactValue={formData.propertyOwnerContact}
//                   onChange={handleInputChange}
//                   label="OWNER name and contact information"
//                 />

//                 <TextArea
//                   label="DESCRIPTION OF DAMAGED PROPERTY"
//                   name="propertyDescription"
//                   value={formData.propertyDescription}
//                   onChange={handleInputChange}
//                   rows={3}
//                 />
//               </FormSection>
//             </div>

//             {/* BODILY INJURY */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '750ms' }}>
//               <FormSection title="BODILY INJURY" darkHeader >
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     INJURED PARTY name and contact information (other than your driver, already
//                     identified above)
//                   </label>
//                   <div className="space-y-3">
//                     <input
//                       type="text"
//                       name="injuredPartyName"
//                       value={formData.injuredPartyName}
//                       onChange={handleInputChange}
//                       placeholder="Injured party name"
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-gray-900 hover:border-gray-300"
//                     />
//                     <input
//                       type="text"
//                       name="injuredPartyContact"
//                       value={formData.injuredPartyContact}
//                       onChange={handleInputChange}
//                       placeholder="Contact information"
//                       className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-gray-900 hover:border-gray-300"
//                     />
//                   </div>
//                 </div>
//               </FormSection>
//             </div>

//             {/* SUBMIT BUTTONS */}
//             <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
//               <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button
//                     type="button"
//                     onClick={handleDownloadPDF}
//                     className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-800 text-gray-800 rounded-xl font-bold hover:bg-gray-800 hover:text-white transition-all duration-200"
//                   >
//                     <Download className="h-5 w-5" />
//                     Download as PDF
//                   </button>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
//                         Submitting...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="h-5 w-5" />
//                         Submit Form
//                       </>
//                     )}
//                   </button>
//                 </div>

//                 {submitStatus === 'success' && (
//                   <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-xl">
//                     <div className="flex items-center">
//                       <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
//                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="text-green-800 font-semibold">
//                         Form submitted successfully! We'll be in touch soon.
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {submitStatus === 'error' && (
//                   <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-500 rounded-r-xl">
//                     <div className="flex items-center">
//                       <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
//                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                       </div>
//                       <p className="text-red-800 font-semibold">
//                         There was an error submitting the form. Please try again.
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>
//       <Footer />

//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.5s ease-out forwards;
//         }
//       `}</style>
//     </>
//   );
// };

// export default TruckingClaimsForm;