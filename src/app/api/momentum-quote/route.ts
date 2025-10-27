// export async function POST(request: Request) {
//   try {
//     const formData = await request.json();
//     const agencyId = process.env.MOMENTUM_AGENCY_ID;
    
//     console.log('Agency ID from env:', agencyId ? 'Present' : 'Missing');
    
//     // Split contact name into first and last
//     const nameParts = formData.contactName?.split(' ') || ['', ''];
//     const firstName = nameParts[0] || 'Not Provided';
//     const lastName = nameParts.slice(1).join(' ') || nameParts[0] || 'Not Provided';
    
//      // Build payload exactly as it worked in Postman
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const momentumPayload: any = {
//       AgencyID: agencyId,
//       FormName: "Website Quote Request",
//       FirstName: firstName,
//       LastName: lastName,
//       Email: formData.email,
//       Phone: formData.phone,
//       Address: "123 Test Street",
//       City: "Test City",
//       State: formData.domiciledState || "CA",
//       Zip: "12345",
//       Coverage: formData.primaryCargo || "General",
//       EffectiveDate: formData.desiredStartDate || new Date().toISOString().split('T')[0],
//       BusinessName: formData.businessName,
//       FleetSize: formData.fleetSize,
//       YearsInBusiness: formData.yearsInBusiness,
//       PreviousClaims: formData.previousClaims,
//       CurrentInsurance: formData.currentInsurance || "None",
//       AdditionalInfo: formData.additionalInfo || ""
//     };
    
//     console.log('Sending to Momentum:', JSON.stringify(momentumPayload));
    
//     const response = await fetch('https://api.nowcerts.com/api/PushJsonQuoteApplications', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(momentumPayload)
//     });
    
//     const responseText = await response.text();
//     console.log('Momentum response (first 200 chars):', responseText.substring(0, 200));
    
//     if (responseText.includes('<!DOCTYPE')) {
//       console.error('Got HTML response instead of JSON');
//       return Response.json({
//         success: false,
//         message: 'Configuration error with Momentum API'
//       });
//     }
    
//     const result = JSON.parse(responseText);
    
//     if (result.status === 1) {
//       return Response.json({
//         success: true,
//         message: 'Quote submitted successfully',
//         momentumId: result.message
//       });
//     } else {
//       return Response.json({
//         success: false,
//         message: result.message || 'Submission failed'
//       });
//     }
    
//   } catch (error) {
//     console.error('API Error:', error);
//     return Response.json({
//       success: false,
//       message: 'Server error'
//     }, { status: 500 });
//   }
// }



// src/app/api/momentum-quote/route.ts
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
    
    // STEP 3: Parse contact name into first and last
    const nameParts = formData.contactName?.split(' ') || ['', ''];
    const firstName = nameParts[0] || 'Not Provided';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    // STEP 4: Build payload for Momentum API
    const momentumPayload = {
      AgencyID: agencyId,
      FormName: "Website Quote Request",
      FirstName: firstName,
      LastName: lastName || firstName, // Use first name if no last name provided
      Email: formData.email,
      Phone: formData.phone,
      // Business Information
      BusinessName: formData.businessName,
      FleetSize: formData.fleetSize,
      Coverage: formData.primaryCargo || "General",
      State: formData.domiciledState || "CA",
      // Insurance History
      YearsInBusiness: formData.yearsInBusiness,
      PreviousClaims: formData.previousClaims,
      CurrentInsurance: formData.currentInsurance || "None",
      // Additional Information
      EffectiveDate: formData.desiredStartDate || new Date().toISOString().split('T')[0],
      AdditionalInfo: formData.additionalInfo || "",
      // Optional fields (can be removed if not needed)
      Address: "Pending", // Will be collected by agent
      City: "Pending",
      Zip: "00000"
    };
    
    console.log('✓ Payload prepared');
    console.log('Payload:', JSON.stringify(momentumPayload, null, 2));
    
    // STEP 5: Submit to Momentum API with authentication
    console.log('→ Submitting to Momentum API...');
    const response = await fetch('https://api.nowcerts.com/api/PushJsonQuoteApplications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`, // ✅ AUTHENTICATION HEADER
      },
      body: JSON.stringify(momentumPayload)
    });
    
    console.log('← Momentum API response status:', response.status);
    
    // STEP 6: Parse response
    const responseText = await response.text();
    console.log('← Raw response (first 300 chars):', responseText.substring(0, 300));
    
    // Check if we got HTML error page instead of JSON
    if (responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
      console.error('✗ Received HTML response instead of JSON');
      console.error('Full response:', responseText);
      return Response.json({
        success: false,
        message: 'API configuration error. Please contact support.'
      }, { status: 500 });
    }
    
    // Parse JSON response
    let result;
    try {
      result = JSON.parse(responseText);
      console.log('← Parsed response:', JSON.stringify(result, null, 2));
    } catch (parseError) {
      console.error('✗ Failed to parse JSON response:', parseError);
      console.error('Response text:', responseText);
      return Response.json({
        success: false,
        message: 'Invalid response from API. Please contact support.'
      }, { status: 500 });
    }
    
    // STEP 7: Handle response
    if (result.status === 1) {
      console.log('✓ Quote submitted successfully!');
      console.log('Momentum ID:', result.message);
      console.log('=== Submission Complete ===');
      
      return Response.json({
        success: true,
        message: 'Quote submitted successfully',
        momentumId: result.message
      });
    } else {
      console.error('✗ Momentum API returned error');
      console.error('Error message:', result.message);
      console.log('=== Submission Failed ===');
      
      return Response.json({
        success: false,
        message: result.message || 'Submission failed. Please try again.'
      }, { status: 400 });
    }
    
  } catch (error) {
    console.error('✗ Unexpected error during quote submission:', error);
    console.error('Error details:', error instanceof Error ? error.stack : error);
    console.log('=== Submission Error ===');
    
    return Response.json({
      success: false,
      message: 'An unexpected error occurred. Please try again or call us at (800) 669-4301'
    }, { status: 500 });
  }
}