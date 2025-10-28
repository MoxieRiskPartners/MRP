// src/app/api/momentum-quote/route.ts
// FIXED VERSION - Removes firstName/lastName to prevent duplicate contacts
import { getMomentumToken } from '@/lib/momentum-auth';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    console.log('=== Momentum Quote Submission Started ===');
    console.log('Form data received:', JSON.stringify(formData, null, 2));
    
    // STEP 1: Authenticate and get bearer token
    let accessToken: string;
    try {
      accessToken = await getMomentumToken();
      console.log('✓ Authentication successful');
    } catch (authError) {
      console.error('✗ Authentication failed:', authError);
      return Response.json({
        success: false,
        message: 'Failed to authenticate with Momentum AMS. Please contact support.'
      }, { status: 500 });
    }
    
    // STEP 2: Get Agency ID from environment
    const agencyId = process.env.MOMENTUM_AGENCY_ID;
    if (!agencyId) {
      console.error('✗ MOMENTUM_AGENCY_ID not configured in environment variables');
      return Response.json({
        success: false,
        message: 'Server configuration error. Please contact support.'
      }, { status: 500 });
    }
    console.log('✓ Agency ID loaded:', agencyId);
    
    // STEP 3: Determine Line of Business Type
    const commercialIndustries = [
      'trucking', 'construction', 'manufacturing', 'nonprofit', 'public-entity',
      'commercial-auto', 'motor-truck-cargo', 'owner-operator', 'physical-damage'
    ];
    
    const isCommercialLine = commercialIndustries.includes(formData.industry?.toLowerCase() || '');
    const lineOfBusiness = isCommercialLine ? 'Commercial' : 'Personal';
    
    console.log('✓ Line of Business:', lineOfBusiness);
    console.log('✓ Form Type:', formData.formType);
    
    // STEP 4: Build CLEAN payload - NO firstName/lastName to prevent duplicates
   const momentumPayload: Record<string, unknown> = {
      // ========================================
      // REQUIRED CORE FIELDS
      // ========================================
      AgencyID: agencyId,
      FormName: formData.formType || "Website Quote Request",
      LineOfBusiness: lineOfBusiness,
      
      // ========================================
      // CONTACT INFORMATION - ONLY ContactName (no FirstName/LastName)
      // This prevents Momentum from creating duplicate contacts
      // ========================================
      ContactName: formData.contactName || 'Not Provided',
      Email: formData.email || '',
      Phone: formData.phone || '',
      
      // ========================================
      // COMPANY/BUSINESS NAME (choose best match)
      // ========================================
      CompanyName: formData.companyName || formData.businessName || formData.organizationName || formData.entityName || '',
      
      // ========================================
      // INDUSTRY & SOURCE
      // ========================================
      Industry: formData.industry || '',
      Source: formData.source || 'Website',
      
      // ========================================
      // LOCATION (if provided)
      // ========================================
      State: formData.state || formData.domiciledState || "To Be Collected",
      Address: formData.address || "To Be Collected",
      City: formData.city || "To Be Collected",
      Zip: formData.zip || formData.zipCode || "00000",
      
      // ========================================
      // DATES
      // ========================================
      EffectiveDate: formData.desiredStartDate || formData.effectiveDate || new Date().toISOString().split('T')[0],
      RequestDate: new Date().toISOString(),
      
      // ========================================
      // NOTES & DESCRIPTION
      // ========================================
      Description: formData.description || '',
    };
    
    // ========================================
    // CONDITIONAL: Add industry-specific fields ONLY if they exist
    // ========================================
    
    // Trucking fields
    if (formData.dotNumber) {
      momentumPayload.DOTNumber = formData.dotNumber;
    }
    if (formData.fleetSize) {
      momentumPayload.FleetSize = formData.fleetSize;
    }
    if (formData.vehicleType) {
      momentumPayload.VehicleType = formData.vehicleType;
    }
    if (formData.cargoType || formData.primaryCargo) {
      momentumPayload.CargoType = formData.cargoType || formData.primaryCargo;
    }
    
    // Construction fields
    if (formData.contractorType) {
      momentumPayload.ContractorType = formData.contractorType;
    }
    if (formData.yearsExperience) {
      momentumPayload.YearsExperience = formData.yearsExperience;
    }
    
    // Manufacturing fields
    if (formData.industryType) {
      momentumPayload.IndustryType = formData.industryType;
    }
    if (formData.annualRevenue) {
      momentumPayload.AnnualRevenue = formData.annualRevenue;
    }
    
    // Nonprofit fields
    if (formData.organizationType) {
      momentumPayload.OrganizationType = formData.organizationType;
    }
    if (formData.annualBudget) {
      momentumPayload.AnnualBudget = formData.annualBudget;
    }
    
    // Public Entity fields
    if (formData.entityType) {
      momentumPayload.EntityType = formData.entityType;
    }
    
    // Motor Truck Cargo fields
    if (formData.coverageAmount) {
      momentumPayload.CoverageAmount = formData.coverageAmount;
    }
    
    // Physical Damage fields
    if (formData.vehicleValue) {
      momentumPayload.VehicleValue = formData.vehicleValue;
    }
    
    // Workers Comp fields
    if (formData.employeeCount) {
      momentumPayload.EmployeeCount = formData.employeeCount;
    }
    
    // Captives fields
    if (formData.currentPremiums) {
      momentumPayload.CurrentPremiums = formData.currentPremiums;
    }
    
    // Quote page fields
    if (formData.yearsInBusiness) {
      momentumPayload.YearsInBusiness = formData.yearsInBusiness;
    }
    if (formData.previousClaims) {
      momentumPayload.PreviousClaims = formData.previousClaims;
    }
    if (formData.currentInsurance) {
      momentumPayload.CurrentInsurance = formData.currentInsurance;
    }
    
    // Coverage needs
    if (formData.coverageNeeded) {
      momentumPayload.CoverageNeeded = formData.coverageNeeded;
    }
    
    console.log('✓ Clean payload prepared (NO firstName/lastName)');
    console.log('✓ FormName:', momentumPayload.FormName);
    console.log('✓ LineOfBusiness:', momentumPayload.LineOfBusiness);
    console.log('✓ ContactName:', momentumPayload.ContactName);
    console.log('✓ Field count:', Object.keys(momentumPayload).length);
    console.log('Full Payload:', JSON.stringify(momentumPayload, null, 2));
    
    // STEP 5: Submit to Momentum API
    console.log('→ Submitting to Momentum API...');
    const response = await fetch('https://api.nowcerts.com/api/PushJsonQuoteApplications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(momentumPayload)
    });
    
    console.log('← Momentum API response status:', response.status);
    
    // STEP 6: Parse response
    const responseText = await response.text();
    console.log('← Raw response (first 300 chars):', responseText.substring(0, 300));
    
    if (responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
      console.error('✗ Received HTML response instead of JSON');
      return Response.json({
        success: false,
        message: 'API configuration error. Please contact support.'
      }, { status: 500 });
    }
    
    let result;
    try {
      result = JSON.parse(responseText);
      console.log('← Parsed response:', JSON.stringify(result, null, 2));
    } catch (parseError) {
      console.error('✗ Failed to parse JSON response:', parseError);
      return Response.json({
        success: false,
        message: 'Invalid response from API. Please contact support.'
      }, { status: 500 });
    }
    
    // STEP 7: Handle response
    if (result.status === 1) {
      console.log('✓ Quote submitted successfully!');
      console.log('Momentum ID:', result.message);
      console.log('=== Submission Complete (No Duplicates) ===');
      
      return Response.json({
        success: true,
        message: 'Quote submitted successfully',
        momentumId: result.message,
        formName: momentumPayload.FormName,
        lineOfBusiness: momentumPayload.LineOfBusiness
      });
    } else {
      console.error('✗ Momentum API returned error');
      console.error('Error message:', result.message);
      
      return Response.json({
        success: false,
        message: result.message || 'Submission failed. Please try again.'
      }, { status: 400 });
    }
    
  } catch (error: unknown) {
    console.error('✗ Unexpected error during quote submission:', error);
    console.error('Error details:', error instanceof Error ? error.stack : error);
    
    return Response.json({
      success: false,
      message: 'An unexpected error occurred. Please try again or call us at (800) 669-4301'
    }, { status: 500 });
  }
}