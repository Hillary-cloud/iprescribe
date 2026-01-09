import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashboardContent from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Sidebar from './component/Sidebar';
import MobileHeader from './component/MobileHeader';
import useStore from './store/useStore';
import useThemeStore from './store/themeStore';
import { getTheme } from './theme';

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

function App() {
  const mode = useThemeStore((state) => state.mode);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, retry: 1, staleTime: 5 * 60 * 1000 },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
