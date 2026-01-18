// ============================================
// FORM DATA TYPES
// ============================================


export interface InsuranceCardData {
  insuranceCompany: string;
  policyNumber: string;
  policyholderFirstName: string;
  policyholderLastName: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleVin: string;
  effectiveDate: string;
  expirationDate: string;
}

export const initialInsuranceCardData: InsuranceCardData = {
  insuranceCompany: '',
  policyNumber: '',
  policyholderFirstName: '',
  policyholderLastName: '',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleVin: '',
  effectiveDate: '',
  expirationDate: '',
};

export interface FormData {
  // Incident Details
  companyName: string;
  incidentDate: string;
  incidentHour: string;
  incidentMinute: string;
  incidentPeriod: string;
  incidentAddress: string;
  incidentIntersection: string;
  incidentCity: string;
  incidentState: string;
  incidentZip: string;
  incidentDescription: string;

  // Claimant Policy Information
  claimantInsuranceCompany: string;
  claimantPolicyNumber: string;

  // Claims Contact
  claimsContactName: string;
  claimsContactTitle: string;
  claimsContactPhone: string;
  claimsContactEmail: string;

  // Completing Person
  completingPersonName: string;
  completingPersonTitle: string;
  completingPersonPhone: string;
  completingPersonEmail: string;

  // Police Report
  policeReportFiled: string;
  policeReportNumber: string;
  policeReportDepartment: string;

  // Citation
  citationIssued: string;
  citationIssuedTo: string;
  citationNumber: string;
  citationViolation: string;

  // Conditions
  weatherConditions: string;
  roadConditions: string;
  visibility: string;

  // DOT Recordable
  dotRecordable: string;
  dotRecordableReason: string;

  // Towing
  towingRequired: string;
  towingCompanyName: string;
  towingCompanyPhone: string;
  towingDestination: string;

  // Truck
  truckDamaged: string;
  truckOwnerName: string;
  truckOwnerPhone: string;
  truckOwnerEmail: string;
  truckYear: string;
  truckMake: string;
  truckModel: string;
  truckVin: string;

  // Driver
  driverName: string;
  driverPhone: string;
  driverLicense: string;
  driverState: string;
  driverType: string;
  driverInjured: string;

  // Trailer
  trailerPulling: string;
  trailerDamaged: string;
  trailerOwnerName: string;
  trailerOwnerPhone: string;
  trailerOwnerEmail: string;
  trailerYear: string;
  trailerMake: string;
  trailerModel: string;
  trailerVin: string;

  // Cargo
  cargoDamaged: string;
  cargoType: string;
  cargoOwnerName: string;
  cargoOwnerPhone: string;
  cargoOwnerEmail: string;
  cargoDescription: string;

  // Other Vehicle
  otherVehicleOwnerName: string;
  otherVehicleOwnerPhone: string;
  otherVehicleOwnerEmail: string;
  otherVehicleDriverName: string;
  otherVehicleDriverPhone: string;
  otherVehicleDriverEmail: string;
  otherVehicleInsuranceName: string;
  otherVehicleInsurancePolicy: string;
  otherVehicleYear: string;
  otherVehicleMake: string;
  otherVehicleModel: string;

  // Property Damage
  propertyOwnerName: string;
  propertyOwnerPhone: string;
  propertyOwnerEmail: string;
  propertyDescription: string;

  // Bodily Injury
  injuredPartyName: string;
  injuredPartyPhone: string;
  injuredPartyEmail: string;
}

// ============================================
// INITIAL FORM DATA
// ============================================
export const initialFormData: FormData = {
  // Incident Details
  companyName: '',
  incidentDate: '',
  incidentHour: '',
  incidentMinute: '',
  incidentPeriod: '',
  incidentAddress: '',
  incidentIntersection: '',
  incidentCity: '',
  incidentState: '',
  incidentZip: '',
  incidentDescription: '',

  // Claimant Policy Information
  claimantInsuranceCompany: '',
  claimantPolicyNumber: '',

  // Claims Contact
  claimsContactName: '',
  claimsContactTitle: '',
  claimsContactPhone: '',
  claimsContactEmail: '',

  // Completing Person
  completingPersonName: '',
  completingPersonTitle: '',
  completingPersonPhone: '',
  completingPersonEmail: '',

  // Police Report
  policeReportFiled: '',
  policeReportNumber: '',
  policeReportDepartment: '',

  // Citation
  citationIssued: '',
  citationIssuedTo: '',
  citationNumber: '',
  citationViolation: '',

  // Conditions
  weatherConditions: '',
  roadConditions: '',
  visibility: '',

  // DOT Recordable
  dotRecordable: '',
  dotRecordableReason: '',

  // Towing
  towingRequired: '',
  towingCompanyName: '',
  towingCompanyPhone: '',
  towingDestination: '',

  // Truck
  truckDamaged: '',
  truckOwnerName: '',
  truckOwnerPhone: '',
  truckOwnerEmail: '',
  truckYear: '',
  truckMake: '',
  truckModel: '',
  truckVin: '',

  // Driver
  driverName: '',
  driverPhone: '',
  driverLicense: '',
  driverState: '',
  driverType: '',
  driverInjured: '',

  // Trailer
  trailerPulling: '',
  trailerDamaged: '',
  trailerOwnerName: '',
  trailerOwnerPhone: '',
  trailerOwnerEmail: '',
  trailerYear: '',
  trailerMake: '',
  trailerModel: '',
  trailerVin: '',

  // Cargo
  cargoDamaged: '',
  cargoType: '',
  cargoOwnerName: '',
  cargoOwnerPhone: '',
  cargoOwnerEmail: '',
  cargoDescription: '',

  // Other Vehicle
  otherVehicleOwnerName: '',
  otherVehicleOwnerPhone: '',
  otherVehicleOwnerEmail: '',
  otherVehicleDriverName: '',
  otherVehicleDriverPhone: '',
  otherVehicleDriverEmail: '',
  otherVehicleInsuranceName: '',
  otherVehicleInsurancePolicy: '',
  otherVehicleYear: '',
  otherVehicleMake: '',
  otherVehicleModel: '',

  // Property Damage
  propertyOwnerName: '',
  propertyOwnerPhone: '',
  propertyOwnerEmail: '',
  propertyDescription: '',

  // Bodily Injury
  injuredPartyName: '',
  injuredPartyPhone: '',
  injuredPartyEmail: '',
};

// ============================================
// WITNESS INFO
// ============================================
export interface WitnessInfo {
  id: string;
  name: string;
  phone: string;
  email: string;
  statement: string;
}

// ============================================
// UPLOADED FILE
// ============================================
export interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: number;
  file?: File;
}

// ============================================
// SELECT OPTIONS
// ============================================
export const weatherOptions = [
  { value: 'clear', label: 'Clear' },
  { value: 'cloudy', label: 'Cloudy' },
  { value: 'rain', label: 'Rain' },
  { value: 'snow', label: 'Snow' },
  { value: 'sleet', label: 'Sleet/Ice' },
  { value: 'fog', label: 'Fog' },
  { value: 'wind', label: 'High Winds' },
  { value: 'other', label: 'Other' },
];

export const roadConditionOptions = [
  { value: 'dry', label: 'Dry' },
  { value: 'wet', label: 'Wet' },
  { value: 'icy', label: 'Icy' },
  { value: 'snow-covered', label: 'Snow Covered' },
  { value: 'muddy', label: 'Muddy' },
  { value: 'gravel', label: 'Gravel/Loose' },
  { value: 'construction', label: 'Construction Zone' },
  { value: 'other', label: 'Other' },
];

export const visibilityOptions = [
  { value: 'good', label: 'Good' },
  { value: 'fair', label: 'Fair' },
  { value: 'poor', label: 'Poor' },
  { value: 'very-poor', label: 'Very Poor' },
];