// // ============================================
// // FORM DATA TYPES
// // ============================================
// export interface FormData {
//   // Incident Details
//   companyName: string;
//   incidentDate: string;
//   incidentHour: string;
//   incidentMinute: string;
//   incidentPeriod: string;
//   incidentAddress: string;
//   incidentIntersection: string;
//   incidentCity: string;
//   incidentState: string;
//   incidentZip: string;
//   incidentDescription: string;

//   // Claims Contact
//   claimsContactName: string;
//   claimsContactTitle: string;
//   claimsContactPhone: string;
//   claimsContactEmail: string;

//   // Completing Person
//   completingPersonName: string;
//   completingPersonTitle: string;
//   completingPersonPhone: string;
//   completingPersonEmail: string;

//   // Police Report
//   policeReportFiled: string;
//   policeReportNumber: string;
//   policeReportDepartment: string;

//   // Citation
//   citationIssued: string;
//   citationIssuedTo: string;
//   citationNumber: string;
//   citationViolation: string;

//   // Conditions
//   weatherConditions: string;
//   roadConditions: string;
//   visibility: string;

//   // DOT Recordable
//   dotRecordable: string;
//   dotRecordableReason: string;

//   // Towing
//   towingRequired: string;
//   towingCompanyName: string;
//   towingCompanyPhone: string;
//   towingDestination: string;

//   // Truck
//   truckDamaged: string;
//   truckOwnerName: string;
//   truckOwnerContact: string;
//   truckYear: string;
//   truckMake: string;
//   truckModel: string;
//   truckVin: string;

//   // Driver
//   driverName: string;
//   driverPhone: string;
//   driverLicense: string;
//   driverState: string;
//   driverType: string;
//   driverInjured: string;

//   // Trailer
//   trailerPulling: string;
//   trailerDamaged: string;
//   trailerOwnerName: string;
//   trailerOwnerContact: string;
//   trailerYear: string;
//   trailerMake: string;
//   trailerModel: string;
//   trailerVin: string;

//   // Cargo
//   cargoDamaged: string;
//   cargoType: string;
//   cargoOwnerName: string;
//   cargoOwnerContact: string;
//   cargoDescription: string;

//   // Other Vehicle
//   otherVehicleOwnerName: string;
//   otherVehicleOwnerContact: string;
//   otherVehicleDriverName: string;
//   otherVehicleDriverContact: string;
//   otherVehicleInsuranceName: string;
//   otherVehicleInsurancePolicy: string;
//   otherVehicleYear: string;
//   otherVehicleMake: string;
//   otherVehicleModel: string;

//   // Property Damage
//   propertyOwnerName: string;
//   propertyOwnerContact: string;
//   propertyDescription: string;

//   // Bodily Injury
//   injuredPartyName: string;
//   injuredPartyContact: string;
// }

// // ============================================
// // INITIAL FORM DATA
// // ============================================
// export const initialFormData: FormData = {
//   // Incident Details
//   companyName: '',
//   incidentDate: '',
//   incidentHour: '',
//   incidentMinute: '',
//   incidentPeriod: '',
//   incidentAddress: '',
//   incidentIntersection: '',
//   incidentCity: '',
//   incidentState: '',
//   incidentZip: '',
//   incidentDescription: '',

//   // Claims Contact
//   claimsContactName: '',
//   claimsContactTitle: '',
//   claimsContactPhone: '',
//   claimsContactEmail: '',

//   // Completing Person
//   completingPersonName: '',
//   completingPersonTitle: '',
//   completingPersonPhone: '',
//   completingPersonEmail: '',

//   // Police Report
//   policeReportFiled: '',
//   policeReportNumber: '',
//   policeReportDepartment: '',

//   // Citation
//   citationIssued: '',
//   citationIssuedTo: '',
//   citationNumber: '',
//   citationViolation: '',

//   // Conditions
//   weatherConditions: '',
//   roadConditions: '',
//   visibility: '',

//   // DOT Recordable
//   dotRecordable: '',
//   dotRecordableReason: '',

//   // Towing
//   towingRequired: '',
//   towingCompanyName: '',
//   towingCompanyPhone: '',
//   towingDestination: '',

//   // Truck
//   truckDamaged: '',
//   truckOwnerName: '',
//   truckOwnerContact: '',
//   truckYear: '',
//   truckMake: '',
//   truckModel: '',
//   truckVin: '',

//   // Driver
//   driverName: '',
//   driverPhone: '',
//   driverLicense: '',
//   driverState: '',
//   driverType: '',
//   driverInjured: '',

//   // Trailer
//   trailerPulling: '',
//   trailerDamaged: '',
//   trailerOwnerName: '',
//   trailerOwnerContact: '',
//   trailerYear: '',
//   trailerMake: '',
//   trailerModel: '',
//   trailerVin: '',

//   // Cargo
//   cargoDamaged: '',
//   cargoType: '',
//   cargoOwnerName: '',
//   cargoOwnerContact: '',
//   cargoDescription: '',

//   // Other Vehicle
//   otherVehicleOwnerName: '',
//   otherVehicleOwnerContact: '',
//   otherVehicleDriverName: '',
//   otherVehicleDriverContact: '',
//   otherVehicleInsuranceName: '',
//   otherVehicleInsurancePolicy: '',
//   otherVehicleYear: '',
//   otherVehicleMake: '',
//   otherVehicleModel: '',

//   // Property Damage
//   propertyOwnerName: '',
//   propertyOwnerContact: '',
//   propertyDescription: '',

//   // Bodily Injury
//   injuredPartyName: '',
//   injuredPartyContact: '',
// };

// // ============================================
// // WITNESS INFO
// // ============================================
// export interface WitnessInfo {
//   id: string;
//   name: string;
//   phone: string;
//   email: string;
//   statement: string;
// }

// // ============================================
// // UPLOADED FILE
// // ============================================
// export interface UploadedFile {
//   id: string;
//   name: string;
//   type: string;
//   size: number;
//   file?: File;
// }

// // ============================================
// // SELECT OPTIONS
// // ============================================
// export const weatherOptions = [
//   { value: 'clear', label: 'Clear' },
//   { value: 'cloudy', label: 'Cloudy' },
//   { value: 'rain', label: 'Rain' },
//   { value: 'snow', label: 'Snow' },
//   { value: 'sleet', label: 'Sleet/Ice' },
//   { value: 'fog', label: 'Fog' },
//   { value: 'wind', label: 'High Winds' },
//   { value: 'other', label: 'Other' },
// ];

// export const roadConditionOptions = [
//   { value: 'dry', label: 'Dry' },
//   { value: 'wet', label: 'Wet' },
//   { value: 'icy', label: 'Icy' },
//   { value: 'snow-covered', label: 'Snow Covered' },
//   { value: 'muddy', label: 'Muddy' },
//   { value: 'gravel', label: 'Gravel/Loose' },
//   { value: 'construction', label: 'Construction Zone' },
//   { value: 'other', label: 'Other' },
// ];

// export const visibilityOptions = [
//   { value: 'good', label: 'Good' },
//   { value: 'fair', label: 'Fair' },
//   { value: 'poor', label: 'Poor' },
//   { value: 'very-poor', label: 'Very Poor' },
// ];




// ============================================
// FORM DATA TYPES
// ============================================
// ============================================
// FORM DATA TYPES
// ============================================
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
  truckOwnerPhone: '',    // <-- Make sure this exists
  truckOwnerEmail: '',    // <-- Make sure this exists
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
  trailerOwnerPhone: '',  // <-- Make sure this exists
  trailerOwnerEmail: '',  // <-- Make sure this exists
  trailerYear: '',
  trailerMake: '',
  trailerModel: '',
  trailerVin: '',

  // Cargo
  cargoDamaged: '',
  cargoType: '',
  cargoOwnerName: '',
  cargoOwnerPhone: '',    // <-- Make sure this exists
  cargoOwnerEmail: '',    // <-- Make sure this exists
  cargoDescription: '',

  // Other Vehicle
  otherVehicleOwnerName: '',
  otherVehicleOwnerPhone: '',   // <-- Make sure this exists
  otherVehicleOwnerEmail: '',   // <-- Make sure this exists
  otherVehicleDriverName: '',
  otherVehicleDriverPhone: '',  // <-- Make sure this exists
  otherVehicleDriverEmail: '',  // <-- Make sure this exists
  otherVehicleInsuranceName: '',
  otherVehicleInsurancePolicy: '',
  otherVehicleYear: '',
  otherVehicleMake: '',
  otherVehicleModel: '',

  // Property Damage
  propertyOwnerName: '',
  propertyOwnerPhone: '',   // <-- Make sure this exists
  propertyOwnerEmail: '',   // <-- Make sure this exists
  propertyDescription: '',

  // Bodily Injury
  injuredPartyName: '',
  injuredPartyPhone: '',    // <-- Make sure this exists
  injuredPartyEmail: '',    // <-- Make sure this exists
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