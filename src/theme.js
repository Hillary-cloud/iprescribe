import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
    primary: {
      main: '#3B82F6',
      dark: '#2563EB',
      light: '#60A5FA',
      lighter: '#DBEAFE',
    },
    secondary: {
      main: '#8B5CF6',
    },
    error: {
      main: '#EF4444',
      light: '#FCA5A5',
      lighter: '#FEE2E2',
      dark: '#DC2626',
    },
    warning: {
      main: '#F59E0B',
      lighter: '#FEF3C7',
      dark: '#D97706',
    },
    success: {
      main: '#10B981',
      lighter: '#D1FAE5',
      dark: '#059669',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: '"Onest", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;