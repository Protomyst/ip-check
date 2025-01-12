import { useState, useEffect } from 'react';

interface IPInfo {
  ip: string;
  location: string;
  country: string;
  city: string;
  asn: string;
  org: string;
  latitude: string;
  longitude: string;
  timezone: string;
  isp: string;
  loading: boolean;
  proxy: boolean;
  mobile: boolean;
  hosting: boolean;
}

export function useIPInfo(): IPInfo {
  const [ipInfo, setIPInfo] = useState<IPInfo>({
    ip: '',
    location: '',
    country: '',
    city: '',
    asn: '',
    org: '',
    latitude: '',
    longitude: '',
    timezone: '',
    isp: '',
    loading: true,
    proxy: false,
    mobile: false,
    hosting: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://ip-api.com/json/?fields=status,message,continent,country,regionName,city,lat,lon,timezone,isp,org,as,mobile,proxy,hosting,query');
        const data = await response.json();
        
        if (data.status === 'success') {
          setIPInfo({
            ip: data.query,
            location: `${data.city}, ${data.regionName}, ${data.country}`,
            country: data.country,
            city: data.city,
            asn: data.as,
            org: data.org,
            latitude: data.lat.toString(),
            longitude: data.lon.toString(),
            timezone: data.timezone,
            isp: data.isp,
            loading: false,
            proxy: data.proxy,
            mobile: data.mobile,
            hosting: data.hosting,
          });
        } else {
          throw new Error('Failed to fetch IP info');
        }
      } catch (error) {
        console.error('Error fetching IP info:', error);
        setIPInfo(prev => ({ ...prev, loading: false }));
      }
    };

    fetchData();
  }, []);

  return ipInfo;
}
