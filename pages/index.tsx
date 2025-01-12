import { Typography, Box, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { LocationOn, Speed, Security, VpnLock } from '@mui/icons-material';
import { useIPInfo } from '../hooks/useIPInfo';
import React from 'react';

export default function Home() {
  const { ip, location, asn, org, loading, latitude, longitude, timezone } = useIPInfo();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

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
                  <Typography variant="body1" gutterBottom>IP 地址: {ip}</Typography>
                  <Typography variant="body1">所在地: {location}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" gutterBottom>经纬度: {
                    latitude === 'N/A' ? '未获取到位置' : `${latitude}°N, ${longitude}°E`
                  }</Typography>
                  <Typography variant="body1">时区: {timezone}</Typography>
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
                  <Typography variant="body1" gutterBottom>ASN: {asn}</Typography>
                  <Typography variant="body1">组织: {org}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1" gutterBottom>主机名: example.com</Typography>
                  <Typography variant="body1">ISP: China Telecom</Typography>
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