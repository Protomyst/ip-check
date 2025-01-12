import { Typography, Box, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { LocationOn, Speed, Security, VpnLock } from '@mui/icons-material';
import { useIPInfo } from '../hooks/useIPInfo';
import React from 'react';

export default function Home() {
  const { ip, location, asn, org, loading } = useIPInfo();

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
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">位置信息</Typography>
              </Box>
              <Typography variant="body1" gutterBottom>IP 地址: {ip}</Typography>
              <Typography variant="body1">所在地: {location}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Security color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">网络信息</Typography>
              </Box>
              <Typography variant="body1">ASN: {asn}</Typography>
              <Typography variant="body1">组织: {org}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <VpnLock color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">代理检测</Typography>
              </Box>
              <Typography variant="body1">代理状态: 未检测到代理</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Speed color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">网络速度</Typography>
              </Box>
              <Typography variant="body1">网速: 100 Mbps (示例)</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}