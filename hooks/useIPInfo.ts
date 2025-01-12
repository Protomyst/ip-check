import { useState, useEffect } from 'react';

interface IPInfo {
  loading: boolean;
  error?: string;
  ip?: string;
  city?: string;
  region?: string;
  country_name?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  asn?: string;
  org?: string;
  currency?: string;
  languages?: string;
}

export function useIPInfo(): IPInfo {
  const [ipInfo, setIPInfo] = useState<IPInfo>({
    loading: true
  });

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setIPInfo({
          loading: false,
          ...data
        });
      })
      .catch(err => {
        setIPInfo({
          loading: false,
          error: 'Failed to load IP information'
        });
      });
  }, []);

  return ipInfo;
}
