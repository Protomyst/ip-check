import { useState, useEffect } from 'react';

interface IPInfo {
  ip: string;
  location: string;
  asn: string;
  org: string;
  loading: boolean;
}

export function useIPInfo(): IPInfo {
  const [ipInfo, setIPInfo] = useState<IPInfo>({
    ip: '',
    location: '',
    asn: '',
    org: '',
    loading: true,
  });

  useEffect(() => {
    // 创建JSONP回调函数
    (window as any).callback = (ip: string, location: string, asn: string, org: string) => {
      setIPInfo({
        ip,
        location,
        asn,
        org,
        loading: false,
      });
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
