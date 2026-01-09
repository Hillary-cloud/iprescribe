// src/theme.js
import { createTheme } from '@mui/material/styles';

// A function that accepts mode and returns the MUI theme
export const getTheme = (mode = 'light') => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Light mode colors
            primary: { main: '#283C85', lighter: '#E3EFFF' },
            background: { default: '#FFFFFF', paper: '#FFFFFF' },
            text: { primary: '#1a1a1a', secondary: '#666666' },
            grey: { 100: '#F8F9FA', 200: '#E0E0E0', 300: '#BDBDBD' },
          }
        : {
            // Dark mode colors
            primary: { main: '#5B93FF', lighter: '#1a2942' },
            background: { default: '#121212', paper: '#1e1e1e' },
            text: { primary: '#ffffff', secondary: '#b3b3b3' },
            grey: { 100: '#2a2a2a', 200: '#3a3a3a', 300: '#4a4a4a' },
          }),
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
          root: { borderRadius: 16, backgroundImage: 'none' },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
    },
  });
};
