import { useState, useEffect } from 'react';

interface IPInfo {
  ip: string;
  location: string;
  asn: string;
  org: string;
  latitude: string;
  longitude: string;
  timezone: string;
  loading: boolean;
}

export function useIPInfo(): IPInfo {
  const [ipInfo, setIPInfo] = useState<IPInfo>({
    ip: '',
    location: '',
    asn: '',
    org: '',
    latitude: '',
    longitude: '',
    timezone: '',
    loading: true,
  });

  useEffect(() => {
    // 获取本地时区
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // 创建JSONP回调函数
    (window as any).callback = (ip: string, location: string, asn: string, org: string) => {
      // 尝试获取地理位置
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setIPInfo({
              ip,
              location,
              asn,
              org,
              latitude: position.coords.latitude.toFixed(4),
              longitude: position.coords.longitude.toFixed(4),
              timezone,
              loading: false,
            });
          },
          (error) => {
            // 如果用户拒绝了位置访问
            setIPInfo({
              ip,
              location,
              asn,
              org,
              latitude: 'N/A',
              longitude: 'N/A',
              timezone,
              loading: false,
            });
          }
        );
      } else {
        setIPInfo({
          ip,
          location,
          asn,
          org,
          latitude: 'N/A',
          longitude: 'N/A',
          timezone,
          loading: false,
        });
      }
    };

    // 动态插入JSONP脚本
    const script = document.createElement('script');
    script.src = 'https://ping0.cc/geo/jsonp/callback';
    document.body.appendChild(script);

    // 清理函数
    return () => {
      document.body.removeChild(script);
      delete (window as any).callback;
    };
  }, []);

  return ipInfo;
}
