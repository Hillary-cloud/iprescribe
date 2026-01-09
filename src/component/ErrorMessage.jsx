import React from 'react';
import { Box, Paper, Typography, Alert, AlertTitle } from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';

const ErrorMessage = () => (
  <Box
    sx={{
      p: 4,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}
  >
    <Paper
      elevation={0}
      sx={{
        maxWidth: 500,
        p: 4,
        bgcolor: 'error.lighter',
        border: '1px solid',
        borderColor: 'error.light',
        borderRadius: 3,
      }}
    >
      <ErrorIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
      
      <Typography variant="h5" fontWeight="bold" color="error.dark" gutterBottom>
        Connection Error
      </Typography>
      
      <Typography variant="body1" color="error.main" sx={{ mb: 3 }}>
        Unable to connect to the server. Please ensure JSON Server is running on port 3000.
      </Typography>
      
      <Alert
        severity="error"
        variant="outlined"
        sx={{
          textAlign: 'left',
          bgcolor: 'error.lighter',
          '& .MuiAlert-message': { width: '100%' },
        }}
      >
        <AlertTitle sx={{ fontWeight: 600, mb: 1 }}>
          Run this command:
        </AlertTitle>
        <Box
          component="code"
          sx={{
            display: 'block',
            p: 1.5,
            bgcolor: 'white',
            borderRadius: 1,
            fontSize: '0.875rem',
            fontFamily: 'monospace',
            color: 'error.dark',
          }}
        >
          Error retrieving data.
        </Box>
      </Alert>
    </Paper>
  </Box>
);

export default ErrorMessage;