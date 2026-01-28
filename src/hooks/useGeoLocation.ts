import { useState, useEffect } from 'react';

export type Region = 'india' | 'us' | 'uk' | 'global';

interface GeoData {
  country: string;
  countryCode: string;
  region: Region;
  city?: string;
  isLoading: boolean;
  error: string | null;
}

const countryToRegion: Record<string, Region> = {
  'IN': 'india',
  'US': 'us',
  'CA': 'us', // Canada - similar ingredients
  'MX': 'us', // Mexico
  'GB': 'uk',
  'IE': 'uk', // Ireland
  'AU': 'uk', // Australia - similar to UK
  'NZ': 'uk', // New Zealand
};

export const useGeoLocation = (): GeoData => {
  const [geoData, setGeoData] = useState<GeoData>({
    country: '',
    countryCode: '',
    region: 'global',
    city: undefined,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const detectLocation = async () => {
      // First try cached location
      const cached = localStorage.getItem('user_geo');
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          // Cache for 24 hours
          if (Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
            setGeoData({
              ...parsed.data,
              isLoading: false,
              error: null,
            });
            return;
          }
        } catch (e) {
          localStorage.removeItem('user_geo');
        }
      }

      // Try browser language as fallback hint
      const browserLang = navigator.language || (navigator as any).userLanguage || 'en-US';
      const langRegion = browserLang.split('-')[1]?.toUpperCase();
      
      try {
        // Use free IP geolocation API (no key required, CORS-friendly)
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(5000),
        });
        
        if (!response.ok) throw new Error('Geo API failed');
        
        const data = await response.json();
        const countryCode = data.country_code || langRegion || 'US';
        const region = countryToRegion[countryCode] || 'global';
        
        const result = {
          country: data.country_name || 'Unknown',
          countryCode,
          region,
          city: data.city,
          isLoading: false,
          error: null,
        };
        
        // Cache the result
        localStorage.setItem('user_geo', JSON.stringify({
          data: result,
          timestamp: Date.now(),
        }));
        
        setGeoData(result);
      } catch (error) {
        // Fallback to browser language detection
        const fallbackRegion = countryToRegion[langRegion] || 'global';
        
        setGeoData({
          country: langRegion === 'IN' ? 'India' : langRegion === 'US' ? 'United States' : 'Unknown',
          countryCode: langRegion || 'US',
          region: fallbackRegion,
          city: undefined,
          isLoading: false,
          error: 'Could not detect location, using browser settings',
        });
      }
    };

    detectLocation();
  }, []);

  return geoData;
};

// Helper to get region display name
export const getRegionName = (region: Region, language: 'en' | 'hi' = 'en'): string => {
  const names: Record<Region, { en: string; hi: string }> = {
    india: { en: 'India', hi: 'भारत' },
    us: { en: 'Americas', hi: 'अमेरिका' },
    uk: { en: 'UK & Europe', hi: 'यूके और यूरोप' },
    global: { en: 'Global', hi: 'वैश्विक' },
  };
  return names[region][language];
};
