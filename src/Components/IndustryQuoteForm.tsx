"use client";

import React, { useState } from 'react';
import SuccessModal from './successModal';

// Field configuration types
export interface SelectOption {
  value: string;
  label: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: SelectOption[]; // For select fields
}

interface IndustryQuoteFormProps {
  industry: string; // e.g., 'trucking', 'construction', etc.
  formName: string; // e.g., "Trucking Industry Quote"
  title?: string;
  subtitle?: string;
  fields: FormField[]; // Custom fields for each form
}

const IndustryQuoteForm: React.FC<IndustryQuoteFormProps> = ({ 
  industry,
  formName,
  title = "Get Your Free Quote",
  subtitle = "Fast, competitive insurance quotes",
  fields
}) => {
  // Initialize form data dynamically based on fields
  const initialFormData: Record<string, string> = {};
  fields.forEach(field => {
    initialFormData[field.name] = '';
  });

  const [formData, setFormData] = useState<Record<string, string>>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const missingFields = fields
      .filter(field => field.required && !formData[field.name])
      .map(field => field.label);

    if (missingFields.length > 0) {
      alert(`Please fill in: ${missingFields.join(', ')}`);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log(`Submitting ${industry} quote form...`, formData);

      // Build payload for Momentum API
      const momentumPayload = {
        // Extract standard fields with multiple name variations
        firstName: formData.contactName?.split(' ')[0] || '',
        lastName: formData.contactName?.split(' ').slice(1).join(' ') || '',
        contactName: formData.contactName || '',
        email: formData.email || '',
        phone: formData.phone || '',
        
        // Business/Entity/Organization name (check all possible field names)
        businessName: formData.companyName || formData.organizationName || formData.entityName || '',
        companyName: formData.companyName || formData.organizationName || formData.entityName || '',
        organizationName: formData.organizationName || formData.companyName || formData.entityName || '',
        entityName: formData.entityName || formData.companyName || formData.organizationName || '',
        
        // Include ALL form fields (Momentum will map what it needs)
        ...formData,
        
        // Metadata
        industry: industry,
        formType: formName,
        source: `${industry} Page Form`,
        leadSource: 'Industry Page',
        
        // Formatted description with all data
        description: `${formName}
${Object.entries(formData)
  .map(([key, value]) => {
    const field = fields.find(f => f.name === key);
    return field ? `${field.label}: ${value}` : '';
  })
  .filter(Boolean)
  .join('\n')}

Source: ${industry} Page`,
        
        // Required minimal fields
        state: "To Be Collected",
        address: "To Be Collected",
        city: "To Be Collected",
        zip: "00000"
      };

      console.log('Sending to API:', momentumPayload);

      // Send to API
      const response = await fetch('/api/momentum-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(momentumPayload)
      });

      const result = await response.json();
      console.log('API response:', result);

      if (result.success) {
        console.log('✓ Quote submitted successfully!');
        
        // Show success modal with confetti
        setShowSuccessModal(true);
        setShowConfetti(true);
        
        // Reset form data
        setFormData(initialFormData);
        
      } else {
        alert(`Error submitting quote: ${result.message}\n\nPlease call (800) 669-4301`);
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Unable to submit. Please call (800) 669-4301 for immediate assistance.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setShowConfetti(false);
  };
const renderField = (field: FormField) => {
    const commonClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-500 bg-white";

    switch (field.type) {
      case 'select':
        return (
          <select
            value={formData[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={commonClasses}
            required={field.required}
            disabled={isSubmitting}
          >
            <option value="">{field.placeholder || 'Select...'}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'email':
        return (
          <input
            type="email"
            value={formData[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={commonClasses}
            placeholder={field.placeholder || field.label}
            required={field.required}
            disabled={isSubmitting}
          />
        );

      case 'tel':
        return (
          <input
            type="tel"
            value={formData[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={commonClasses}
            placeholder={field.placeholder || '(555) 123-4567'}
            required={field.required}
            disabled={isSubmitting}
          />
        );

      case 'text':
      default:
        return (
          <input
            type="text"
            value={formData[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={commonClasses}
            placeholder={field.placeholder || field.label}
            required={field.required}
            disabled={isSubmitting}
          />
        );
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              {renderField(field)}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Get My Quote Now'
            )}
          </button>

          {/* Trust Badge */}
          <div className="text-center pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mb-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              100% Secure & Confidential
            </div>
            <p className="text-gray-500 text-xs">
              No spam, unsubscribe anytime. Licensed agents only.
            </p>
          </div>
        </form>
      </div>

      {/* Success Modal with Confetti */}
      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        showConfetti={showConfetti}
      />
    </>
  );
};

export default IndustryQuoteForm;