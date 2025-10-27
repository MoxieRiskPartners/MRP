// src/lib/momentum-auth.ts
// Authentication helper for Momentum AMS API

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  agencyId: string;
  agencyName: string;
  userName: string;
  userId: string;
  '.issued': string;
  '.expires': string;
}

interface CachedToken {
  token: string;
  expires: Date;
  agencyId: string;
}

// Cache token in memory (resets on server restart)
let cachedToken: CachedToken | null = null;

/**
 * Gets a valid bearer token for Momentum AMS API
 * Caches the token and only refreshes when expired
 */
export async function getMomentumToken(): Promise<string> {
  // Return cached token if still valid
  if (cachedToken && cachedToken.expires > new Date()) {
    console.log('Using cached Momentum token');
    return cachedToken.token;
  }

  console.log('Fetching new Momentum token...');

  try {
    const response = await fetch('https://api.nowcerts.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'password',
        username: process.env.MOMENTUM_USERNAME!,
        password: process.env.MOMENTUM_PASSWORD!,
        client_id: 'ngAuthApp',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Token request failed:', response.status, errorText);
      throw new Error(`Authentication failed: ${response.status}`);
    }

    const data: TokenResponse = await response.json();

    // Cache the token with expiration
    const expiresAt = new Date(Date.now() + (data.expires_in * 1000));
    cachedToken = {
      token: data.access_token,
      expires: expiresAt,
      agencyId: data.agencyId,
    };

    console.log('Successfully authenticated with Momentum AMS');
    console.log('Agency:', data.agencyName);
    console.log('Token expires at:', expiresAt.toISOString());

    return data.access_token;
  } catch (error) {
    console.error('Error getting Momentum token:', error);
    throw new Error('Failed to authenticate with Momentum AMS');
  }
}

/**
 * Gets the cached agency ID from the token response
 * Useful for validation
 */
export function getCachedAgencyId(): string | null {
  return cachedToken?.agencyId || null;
}

/**
 * Clears the cached token (useful for testing or forced refresh)
 */
export function clearTokenCache(): void {
  cachedToken = null;
  console.log('Momentum token cache cleared');
}