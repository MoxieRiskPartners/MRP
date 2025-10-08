export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const agencyId = process.env.MOMENTUM_AGENCY_ID;
    
    console.log('Agency ID from env:', agencyId ? 'Present' : 'Missing');
    
    // Split contact name into first and last
    const nameParts = formData.contactName?.split(' ') || ['', ''];
    const firstName = nameParts[0] || 'Not Provided';
    const lastName = nameParts.slice(1).join(' ') || nameParts[0] || 'Not Provided';
    
     // Build payload exactly as it worked in Postman
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const momentumPayload: any = {
      AgencyID: agencyId,
      FormName: "Website Quote Request",
      FirstName: firstName,
      LastName: lastName,
      Email: formData.email,
      Phone: formData.phone,
      Address: "123 Test Street",
      City: "Test City",
      State: formData.domiciledState || "CA",
      Zip: "12345",
      Coverage: formData.primaryCargo || "General",
      EffectiveDate: formData.desiredStartDate || new Date().toISOString().split('T')[0],
      BusinessName: formData.businessName,
      FleetSize: formData.fleetSize,
      YearsInBusiness: formData.yearsInBusiness,
      PreviousClaims: formData.previousClaims,
      CurrentInsurance: formData.currentInsurance || "None",
      AdditionalInfo: formData.additionalInfo || ""
    };
    
    console.log('Sending to Momentum:', JSON.stringify(momentumPayload));
    
    const response = await fetch('https://api.nowcerts.com/api/PushJsonQuoteApplications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(momentumPayload)
    });
    
    const responseText = await response.text();
    console.log('Momentum response (first 200 chars):', responseText.substring(0, 200));
    
    if (responseText.includes('<!DOCTYPE')) {
      console.error('Got HTML response instead of JSON');
      return Response.json({
        success: false,
        message: 'Configuration error with Momentum API'
      });
    }
    
    const result = JSON.parse(responseText);
    
    if (result.status === 1) {
      return Response.json({
        success: true,
        message: 'Quote submitted successfully',
        momentumId: result.message
      });
    } else {
      return Response.json({
        success: false,
        message: result.message || 'Submission failed'
      });
    }
    
  } catch (error) {
    console.error('API Error:', error);
    return Response.json({
      success: false,
      message: 'Server error'
    }, { status: 500 });
  }
}