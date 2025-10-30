import { FormField } from '@/Components/IndustryQuoteForm';

// ==================== MOTOR TRUCK CARGO ====================
export const motorTruckCargoFields: FormField[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Your Company Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'email@company.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'coverageAmount',
    label: 'Coverage Amount',
    type: 'select',
    placeholder: 'Select Amount',
    required: true,
    options: [
      { value: '$5,000 - $25,000', label: '$5,000 - $25,000' },
      { value: '$25,000 - $50,000', label: '$25,000 - $50,000' },
      { value: '$50,000 - $100,000', label: '$50,000 - $100,000' },
      { value: '$100,000 - $250,000', label: '$100,000 - $250,000' }
    ]
  },
  {
    name: 'cargoType',
    label: 'Cargo Type',
    type: 'select',
    placeholder: 'Select Type',
    required: true,
    options: [
      { value: 'General Freight', label: 'General Freight' },
      { value: 'Electronics', label: 'Electronics' },
      { value: 'Food & Beverage', label: 'Food & Beverage' },
      { value: 'Refrigerated Goods', label: 'Refrigerated Goods' },
      { value: 'Automotive Parts', label: 'Automotive Parts' },
      { value: 'Construction Materials', label: 'Construction Materials' },
      { value: 'High-Value Goods', label: 'High-Value Goods' },
      { value: 'Hazardous Materials', label: 'Hazardous Materials' }
    ]
  }
];

// ==================== MANUFACTURING ====================
export const manufacturingFields: FormField[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Your Company Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'industryType',
    label: 'Industry Type',
    type: 'select',
    placeholder: 'Select Industry',
    required: true,
    options: [
      { value: 'Food & Beverage', label: 'Food & Beverage' },
      { value: 'Automotive', label: 'Automotive' },
      { value: 'Electronics', label: 'Electronics' },
      { value: 'Chemical', label: 'Chemical' },
      { value: 'Textile', label: 'Textile' },
      { value: 'Metal & Machinery', label: 'Metal & Machinery' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    name: 'annualRevenue',
    label: 'Annual Revenue',
    type: 'select',
    placeholder: 'Select Revenue',
    required: true,
    options: [
      { value: 'Under $1M', label: 'Under $1M' },
      { value: '$1M - $5M', label: '$1M - $5M' },
      { value: '$5M - $25M', label: '$5M - $25M' },
      { value: '$25M - $100M', label: '$25M - $100M' },
      { value: 'Over $100M', label: 'Over $100M' }
    ]
  }
];

// ==================== NONPROFIT ====================
export const nonprofitFields: FormField[] = [
  {
    name: 'organizationName',
    label: 'Organization Name',
    type: 'text',
    placeholder: 'Your Organization Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'organizationType',
    label: 'Organization Type',
    type: 'select',
    placeholder: 'Select Type',
    required: true,
    options: [
      { value: 'Human Services', label: 'Human Services' },
      { value: 'Healthcare & Medical', label: 'Healthcare & Medical' },
      { value: 'Education & Youth', label: 'Education & Youth' },
      { value: 'Arts & Culture', label: 'Arts & Culture' },
      { value: 'Religious Organization', label: 'Religious Organization' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    name: 'annualBudget',
    label: 'Annual Budget',
    type: 'select',
    placeholder: 'Select Budget',
    required: true,
    options: [
      { value: 'Under $100K', label: 'Under $100K' },
      { value: '$100K - $500K', label: '$100K - $500K' },
      { value: '$500K - $2M', label: '$500K - $2M' },
      { value: '$2M - $10M', label: '$2M - $10M' },
      { value: 'Over $10M', label: 'Over $10M' }
    ]
  }
];

// ==================== OWNER OPERATOR ====================
export const ownerOperatorFields: FormField[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Your Company Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'dotNumber',
    label: 'US DOT #',
    type: 'text',
    placeholder: 'Enter your USDOT number',
    required: true
  },
  {
    name: 'vehicleType',
    label: 'Vehicle Type',
    type: 'select',
    placeholder: 'Select Type',
    required: true,
    options: [
      { value: 'Dry Van', label: 'Dry Van' },
      { value: 'Flatbed', label: 'Flatbed' },
      { value: 'Reefer', label: 'Reefer' },
      { value: 'Box Truck', label: 'Box Truck' },
      { value: 'Dump Truck', label: 'Dump Truck' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    name: 'cargoType',
    label: 'Primary Cargo',
    type: 'select',
    placeholder: 'Select Cargo Type',
    required: true,
    options: [
      { value: 'General Freight', label: 'General Freight' },
      { value: 'Refrigerated', label: 'Refrigerated' },
      { value: 'Automotive', label: 'Automotive' },
      { value: 'Building Materials', label: 'Building Materials' },
      { value: 'Other', label: 'Other' }
    ]
  }
];

// ==================== PHYSICAL DAMAGE ====================
export const physicalDamageFields: FormField[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Your Company Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'fleetSize',
    label: 'Fleet Size',
    type: 'select',
    placeholder: 'Select Size',
    required: true,
    options: [
      { value: 'Owner Operator (1 Unit)', label: 'Owner Operator (1 Unit)' },
      { value: 'Small Fleet (2-5 Units)', label: 'Small Fleet (2-5 Units)' },
      { value: 'Medium Fleet (6-25 Units)', label: 'Medium Fleet (6-25 Units)' },
      { value: 'Large Fleet (26-50 Units)', label: 'Large Fleet (26-50 Units)' },
      { value: 'Enterprise (50+ Units)', label: 'Enterprise (50+ Units)' }
    ]
  },
  {
    name: 'vehicleValue',
    label: 'Total Vehicle Value',
    type: 'select',
    placeholder: 'Select Range',
    required: true,
    options: [
      { value: 'Under $50K', label: 'Under $50K' },
      { value: '$50K - $150K', label: '$50K - $150K' },
      { value: '$150K - $300K', label: '$150K - $300K' },
      { value: '$300K - $500K', label: '$300K - $500K' },
      { value: 'Over $500K', label: 'Over $500K' }
    ]
  }
];

// ==================== PUBLIC ENTITY ====================
export const publicEntityFields: FormField[] = [
  {
    name: 'entityName',
    label: 'Entity Name',
    type: 'text',
    placeholder: 'Your Entity Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'entityType',
    label: 'Entity Type',
    type: 'select',
    placeholder: 'Select Type',
    required: true,
    options: [
      { value: 'Municipal Government', label: 'Municipal Government' },
      { value: 'County Government', label: 'County Government' },
      { value: 'Special District', label: 'Special District' },
      { value: 'State & Federal', label: 'State & Federal' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    name: 'annualBudget',
    label: 'Annual Budget',
    type: 'select',
    placeholder: 'Select Budget',
    required: true,
    options: [
      { value: 'Under $1M', label: 'Under $1M' },
      { value: '$1M - $10M', label: '$1M - $10M' },
      { value: '$10M - $50M', label: '$10M - $50M' },
      { value: '$50M - $250M', label: '$50M - $250M' },
      { value: 'Over $250M', label: 'Over $250M' }
    ]
  }
];

// ==================== CONSTRUCTION ====================
export const constructionFields: FormField[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Your Company Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'contractorType',
    label: 'Contractor Type',
    type: 'select',
    placeholder: 'Select Type',
    required: true,
    options: [
      { value: 'General Contractor', label: 'General Contractor' },
      { value: 'Electrical', label: 'Electrical' },
      { value: 'Plumbing', label: 'Plumbing' },
      { value: 'Roofing', label: 'Roofing' },
      { value: 'HVAC', label: 'HVAC' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    name: 'yearsExperience',
    label: 'Years Experience',
    type: 'select',
    placeholder: 'Select Years',
    required: true,
    options: [
      { value: '0-2 Years', label: '0-2 Years' },
      { value: '3-5 Years', label: '3-5 Years' },
      { value: '6-10 Years', label: '6-10 Years' },
      { value: '10+ Years', label: '10+ Years' }
    ]
  }
];

// ==================== COMMERCIAL AUTO ====================
export const commAutoFields: FormField[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Your Company Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'fleetSize',
    label: 'Fleet Size',
    type: 'select',
    placeholder: 'Select Size',
    required: true,
    options: [
      { value: '1-3 Vehicles', label: '1-3 Vehicles' },
      { value: '4-10 Vehicles', label: '4-10 Vehicles' },
      { value: '11-25 Vehicles', label: '11-25 Vehicles' },
      { value: '26-50 Vehicles', label: '26-50 Vehicles' },
      { value: '50+ Vehicles', label: '50+ Vehicles' }
    ]
  },
  {
    name: 'vehicleType',
    label: 'Vehicle Type',
    type: 'select',
    placeholder: 'Select Type',
    required: true,
    options: [
      { value: 'Sedans/Cars', label: 'Sedans/Cars' },
      { value: 'Vans', label: 'Vans' },
      { value: 'Light Trucks', label: 'Light Trucks' },
      { value: 'Box Trucks', label: 'Box Trucks' },
      { value: 'Service Vehicles', label: 'Service Vehicles' },
      { value: 'Mixed Fleet', label: 'Mixed Fleet' }
    ]
  }
];

// ==================== WORKERS COMPENSATION ====================
export const workersCompFields: FormField[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Your Company Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'industryType',
    label: 'Industry Type',
    type: 'select',
    placeholder: 'Select Industry',
    required: true,
    options: [
      { value: 'Construction', label: 'Construction' },
      { value: 'Manufacturing', label: 'Manufacturing' },
      { value: 'Healthcare', label: 'Healthcare' },
      { value: 'Retail', label: 'Retail' },
      { value: 'Hospitality', label: 'Hospitality' },
      { value: 'Professional Services', label: 'Professional Services' },
      { value: 'Transportation', label: 'Transportation' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    name: 'employeeCount',
    label: 'Number of Employees',
    type: 'select',
    placeholder: 'Select Count',
    required: true,
    options: [
      { value: '1-5', label: '1-5 Employees' },
      { value: '6-20', label: '6-20 Employees' },
      { value: '21-50', label: '21-50 Employees' },
      { value: '51-100', label: '51-100 Employees' },
      { value: '100+', label: '100+ Employees' }
    ]
  }
];


// ==================== CAPTIVES INSURANCE ====================
export const captivesFields: FormField[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Your Company Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'currentPremiums',
    label: 'Estimated Annual Premiums (Optional - helps us recommend the right program)',
    type: 'select',
    placeholder: 'Select Range',
    required: false,  // ✅ Changed to optional
    options: [
      { value: 'Under $250K', label: 'Under $250K' },
      { value: '$250K - $500K', label: '$250K - $500K' },
      { value: '$500K - $1M', label: '$500K - $1M' },
      { value: '$1M - $2M', label: '$1M - $2M' },
      { value: '$2M - $5M', label: '$2M - $5M' },
      { value: 'Over $5M', label: 'Over $5M' },
      { value: 'Not Sure', label: 'Not Sure / Prefer to Discuss' }  // ✅ Added opt-out
    ]
  },
  {
    name: 'industryType',
    label: 'Industry Type',
    type: 'select',
    placeholder: 'Select Industry',
    required: true,
    options: [
      { value: 'Manufacturing', label: 'Manufacturing' },
      { value: 'Construction', label: 'Construction' },
      { value: 'Healthcare', label: 'Healthcare' },
      { value: 'Transportation', label: 'Transportation' },
      { value: 'Hospitality', label: 'Hospitality' },
      { value: 'Retail', label: 'Retail' },
      { value: 'Professional Services', label: 'Professional Services' },
      { value: 'Other', label: 'Other' }
    ]
  }
];

// ==================== TRUCKING & TRANSPORTATION ====================
export const truckingTransportationFields: FormField[] = [
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Your Company Name',
    required: true
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    placeholder: 'Your Full Name',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'email@company.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    required: true
  },
  {
    name: 'dotNumber',
    label: 'US DOT #',
    type: 'text',
    placeholder: 'DOT Number',
    required: true
  },
  {
    name: 'fleetSize',
    label: 'Fleet Size',
    type: 'select',
    placeholder: 'Select Size',
    required: true,
    options: [
      { value: '1', label: 'Owner Operator (1 Unit)' },
      { value: '2-5', label: 'Small Fleet (2-5 Units)' },
      { value: '6-25', label: 'Medium Fleet (6-25 Units)' },
      { value: '26-50', label: 'Large Fleet (26-50 Units)' },
      { value: '50+', label: 'Enterprise (50+ Units)' }
    ]
  }
];