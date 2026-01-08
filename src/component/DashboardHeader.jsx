import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { CalendarMonth as CalendarIcon, FileDownload as DownloadIcon } from '@mui/icons-material';

const DashboardHeader = () => (
  <Box
    sx={{
      mb: 4,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      alignItems: { xs: 'flex-start', md: 'center' },
      gap: 2,
    }}
  >
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Latest update in the last 7 days,{' '}
        <Typography
          component="span"
          color="primary"
          sx={{ cursor: 'pointer', fontWeight: 500 }}
        >
          check now
        </Typography>
      </Typography>
    </Box>
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<CalendarIcon />}
        sx={{
          borderRadius: 2,
          textTransform: 'none',
          borderColor: 'grey.300',
        }}
      >
        12th Sept - 19th Sept, 2025
      </Button>
      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        sx={{
          borderRadius: 2,
          textTransform: 'none',
        }}
      >
        Export
      </Button>
    </Stack>
  </Box>
);

export default DashboardHeader;