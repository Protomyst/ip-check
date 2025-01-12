import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  
  // 添加这个 useEffect 来更新 body 的 data-theme 属性
  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#2196f3',
        light: '#64b5f6',
        dark: '#1976d2',
      },
      secondary: {
        main: '#f50057',
        light: '#ff4081',
        dark: '#c51162',
      },
      background: {
        default: darkMode ? '#303030' : '#f5f7fa',
        paper: darkMode ? 'rgba(66, 66, 66, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      },
    },
    typography: {
      h4: {
        fontWeight: 600,
        letterSpacing: 0.5,
      },
      h6: {
        fontWeight: 500,
        letterSpacing: 0.25,
      },
      body1: {
        lineHeight: 1.8,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: darkMode 
              ? '0 8px 16px rgba(0, 0, 0, 0.3)'
              : '0 8px 16px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer', // 添加这一行
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(10px)',
            background: darkMode
              ? 'rgba(10, 13, 44, 0.85)'  // 更深的蓝色背景，增加不透明度
              : 'rgba(255, 255, 255, 0.9)',
            boxShadow: darkMode
              ? '0 3px 5px rgba(0, 0, 0, 0.3)'
              : '0 3px 5px rgba(0, 0, 0, 0.2)',
            color: darkMode ? '#fff' : '#000',
            '& .MuiIconButton-root': {  // 修改图标按钮颜色
              color: darkMode ? '#fff' : '#000',
            }
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: darkMode ? 'rgba(255, 255, 255, 0.95)' : undefined, // 提高文字对比度
          }
        }
      }
    },
    shape: {
      borderRadius: 8,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="background-effects" /> {/* 添加这一行 */}
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IP 检测工具
          </Typography>
          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: 4,
          mb: 4,
          position: 'relative', // 添加这一行
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;