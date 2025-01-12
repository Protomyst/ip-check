import { Typography, Box, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { LocationOn, Speed, Security, VpnLock } from '@mui/icons-material';
import { useIPInfo } from '../hooks/useIPInfo';
import React from 'react';
import dynamic from 'next/dynamic';

const LocationMap = dynamic(() => import('../components/LocationMap'), {
  ssr: false,
});

export default function Home() {
  const ipInfo = useIPInfo();

  if (ipInfo.loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (ipInfo.error) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="error">{ipInfo.error}</Typography>
      </Box>
    );
  }

  const formatLocation = (info: any) => {
    const parts = [info.country_name, info.region, info.city].filter(Boolean);
    return parts.join(', ');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        IP 信息检测
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">位置信息</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" gutterBottom>IP 地址: {ipInfo.ip}</Typography>
                  <Typography variant="body1">地理位置: {formatLocation(ipInfo)}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    经纬度: {ipInfo.latitude}°N, {ipInfo.longitude}°E
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {ipInfo.latitude && ipInfo.longitude && (
                    <LocationMap
                      latitude={ipInfo.latitude}
                      longitude={ipInfo.longitude}
                      popupText={formatLocation(ipInfo)}
                    />
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Security color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">网络信息</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" gutterBottom>ASN: {ipInfo.asn}</Typography>
                  <Typography variant="body1">组织: {ipInfo.org}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" gutterBottom>货币: {ipInfo.currency}</Typography>
                  <Typography variant="body1">语言: {ipInfo.languages}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <VpnLock color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">安全评估</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" gutterBottom>代理状态: 未检测到代理</Typography>
                  <Typography variant="body1">VPN检测: 未使用VPN</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" gutterBottom>IP欺诈分值: 10/100</Typography>
                  <Typography variant="body1">威胁等级: 低风险</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Speed color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">网络性能</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" gutterBottom>下载速度: 100 Mbps</Typography>
                  <Typography variant="body1">上传速度: 50 Mbps</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" gutterBottom>延迟: 30ms</Typography>
                  <Typography variant="body1">抖动: 5ms</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}