import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashboardContent from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Sidebar from './component/Sidebar';
import MobileHeader from './component/MobileHeader';
import useStore from './store/useStore';
import useThemeStore from './store/themeStore';

// Protected Route Component
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

// Layout Component
const DashboardLayout = ({ children }) => {
  const { drawerOpen, toggleDrawer } = useStore();

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar isOpen={drawerOpen} onClose={toggleDrawer} />
      
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <MobileHeader onMenuClick={toggleDrawer} />
        <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

// Custom Theme Provider Component
const CustomThemeProvider = ({ children }) => {
  const mode = useThemeStore((state) => state.mode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Light mode colors
                primary: {
                  main: '#283C85',
                  lighter: '#E3EFFF',
                },
                background: {
                  default: '#FFFFFF',
                  paper: '#FFFFFF',
                },
                text: {
                  primary: '#1a1a1a',
                  secondary: '#666666',
                },
                grey: {
                  100: '#F8F9FA',
                  200: '#E0E0E0',
                  300: '#BDBDBD',
                },
              }
            : {
                // Dark mode colors
                primary: {
                  main: '#5B93FF',
                  lighter: '#1a2942',
                },
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
                text: {
                  primary: '#ffffff',
                  secondary: '#b3b3b3',
                },
                grey: {
                  100: '#2a2a2a',
                  200: '#3a3a3a',
                  300: '#4a4a4a',
                },
              }),
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <CustomThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {/* Public Route */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            
            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <DashboardContent />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            
            {/* Default redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </CustomThemeProvider>
  );
}

export default App;