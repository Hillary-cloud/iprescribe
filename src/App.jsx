import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme';
import DashboardContent from './pages/Dashboard';
import Sidebar from './component/Sidebar';
import MobileHeader from './component/MobileHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useStore from './store/useStore';

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

  const { drawerOpen, toggleDrawer } = useStore();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <Sidebar isOpen={drawerOpen} onClose={toggleDrawer} />
          
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <MobileHeader onMenuClick={toggleDrawer} />
            <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }}>
              <DashboardContent />
            </Box>
          </Box>
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;