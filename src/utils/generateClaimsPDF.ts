import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface FormData {
  companyName: string;
  incidentDate: string;
  incidentTime: string;
  claimsContactName: string;
  claimsContactTitle: string;
  claimsContactPhone: string;
  claimsContactEmail: string;
  completingPersonName: string;
  completingPersonTitle: string;
  completingPersonPhone: string;
  completingPersonEmail: string;
  incidentLocation: string;
  incidentDescription: string;
  truckDamaged: string;
  truckOwnerName: string;
  truckOwnerContact: string;
  truckYear: string;
  truckMake: string;
  truckModel: string;
  truckVin: string;
  driverName: string;
  driverPhone: string;
  driverLicense: string;
  driverState: string;
  driverType: string;
  driverInjured: string;
  trailerPulling: string;
  trailerDamaged: string;
  trailerOwnerName: string;
  trailerOwnerContact: string;
  trailerYear: string;
  trailerMake: string;
  trailerModel: string;
  trailerVin: string;
  cargoDamaged: string;
  cargoType: string;
  cargoOwnerName: string;
  cargoOwnerContact: string;
  cargoDescription: string;
  otherVehicleOwnerName: string;
  otherVehicleOwnerContact: string;
  otherVehicleDriverName: string;
  otherVehicleDriverContact: string;
  otherVehicleInsuranceName: string;
  otherVehicleInsuranceContact: string;
  otherVehicleInsurancePolicy: string;
  otherVehicleYear: string;
  otherVehicleMake: string;
  otherVehicleModel: string;
  propertyOwnerName: string;
  propertyOwnerContact: string;
  propertyDescription: string;
  injuredPartyName: string;
  injuredPartyContact: string;
}

export const generateClaimsPDF = (formData: FormData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let yPosition = 20;

  // Helper function to add section header
  const addSectionHeader = (text: string) => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
    doc.setFillColor(33, 37, 41); // Dark gray/black
    doc.rect(10, yPosition, pageWidth - 20, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(text, 15, yPosition + 7);
    yPosition += 15;
    doc.setTextColor(0, 0, 0);
  };

  // Helper function to add field
  const addField = (label: string, value: string) => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(label, 15, yPosition);
    doc.setFont('helvetica', 'normal');
    
    const lines = doc.splitTextToSize(value || 'N/A', pageWidth - 30);
    lines.forEach((line: string) => {
      doc.text(line, 15, yPosition + 5);
      yPosition += 5;
    });
    yPosition += 3;
  };

  // Title
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Trucking Incident Reporting Form', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 15;

  // Incident Details Section
  addSectionHeader('INCIDENT DETAILS');
  addField('Company Name:', formData.companyName);
  addField('Date of Incident:', formData.incidentDate);
  addField('Time of Incident:', formData.incidentTime);
  yPosition += 3;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Business Contact for Claims:', 15, yPosition);
  yPosition += 5;
  addField('  Name:', formData.claimsContactName);
  addField('  Title:', formData.claimsContactTitle);
  addField('  Phone:', formData.claimsContactPhone);
  addField('  Email:', formData.claimsContactEmail);
  yPosition += 3;
  
  doc.setFont('helvetica', 'bold');
  doc.text('Person Completing Form:', 15, yPosition);
  yPosition += 5;
  addField('  Name:', formData.completingPersonName);
  addField('  Title:', formData.completingPersonTitle);
  addField('  Phone:', formData.completingPersonPhone);
  addField('  Email:', formData.completingPersonEmail);
  yPosition += 3;
  
  addField('Location of Incident:', formData.incidentLocation);
  addField('Brief Description:', formData.incidentDescription);
  yPosition += 5;

  // Truck Section
  addSectionHeader('TRUCK');
  addField('Truck Damaged:', formData.truckDamaged);
  if (formData.truckOwnerName || formData.truckOwnerContact) {
    addField('Truck Owner:', formData.truckOwnerName);
    addField('Owner Contact:', formData.truckOwnerContact);
  }
  addField('Year:', formData.truckYear);
  addField('Make:', formData.truckMake);
  addField('Model:', formData.truckModel);
  addField('VIN:', formData.truckVin);
  yPosition += 5;

  // Driver Section
  addSectionHeader('YOUR DRIVER');
  addField('Driver Name:', formData.driverName);
  addField('Driver Phone:', formData.driverPhone);
  addField('Driver License #:', formData.driverLicense);
  addField('State:', formData.driverState);
  addField('Driver Type:', formData.driverType);
  addField('Driver Injured:', formData.driverInjured);
  yPosition += 5;

  // Trailer Section
  if (formData.trailerPulling === 'yes') {
    addSectionHeader('TRAILER');
    addField('Pulling Trailer:', formData.trailerPulling);
    addField('Trailer Damaged:', formData.trailerDamaged);
    if (formData.trailerOwnerName || formData.trailerOwnerContact) {
      addField('Trailer Owner:', formData.trailerOwnerName);
      addField('Owner Contact:', formData.trailerOwnerContact);
    }
    addField('Year:', formData.trailerYear);
    addField('Make:', formData.trailerMake);
    addField('Model:', formData.trailerModel);
    addField('VIN:', formData.trailerVin);
    yPosition += 5;
  }

  // Cargo Section
  if (formData.cargoDamaged === 'yes') {
    addSectionHeader('CARGO');
    addField('Cargo Damaged:', formData.cargoDamaged);
    addField('Cargo Type:', formData.cargoType);
    addField('Cargo Owner:', formData.cargoOwnerName);
    addField('Owner Contact:', formData.cargoOwnerContact);
    addField('Description:', formData.cargoDescription);
    yPosition += 5;
  }

  // Other Vehicle Section
  if (formData.otherVehicleOwnerName || formData.otherVehicleDriverName) {
    addSectionHeader('OTHER VEHICLE(S)');
    addField('Owner Name:', formData.otherVehicleOwnerName);
    addField('Owner Contact:', formData.otherVehicleOwnerContact);
    addField('Driver Name:', formData.otherVehicleDriverName);
    addField('Driver Contact:', formData.otherVehicleDriverContact);
    addField('Insurance Company:', formData.otherVehicleInsuranceName);
    addField('Insurance Contact:', formData.otherVehicleInsuranceContact);
    addField('Policy Number:', formData.otherVehicleInsurancePolicy);
    addField('Year:', formData.otherVehicleYear);
    addField('Make:', formData.otherVehicleMake);
    addField('Model:', formData.otherVehicleModel);
    yPosition += 5;
  }

  // Other Damaged Property
  if (formData.propertyOwnerName || formData.propertyDescription) {
    addSectionHeader('OTHER DAMAGED PROPERTY');
    addField('Owner Name:', formData.propertyOwnerName);
    addField('Owner Contact:', formData.propertyOwnerContact);
    addField('Description:', formData.propertyDescription);
    yPosition += 5;
  }

  // Bodily Injury
  if (formData.injuredPartyName) {
    addSectionHeader('BODILY INJURY');
    addField('Injured Party Name:', formData.injuredPartyName);
    addField('Contact Information:', formData.injuredPartyContact);
  }

  // Footer on last page
  const pageCount = doc.getNumberOfPages();
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.text(
      `Page ${i} of ${pageCount} - Generated on ${new Date().toLocaleDateString()}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }

  // Save the PDF
  const fileName = `Trucking_Incident_Report_${formData.companyName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};