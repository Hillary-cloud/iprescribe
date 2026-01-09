import React from 'react';
import { Card, CardContent, Box, Typography, Button } from '@mui/material';
import { FileDownload as DownloadIcon } from '@mui/icons-material';

const ChartCard = ({ title, children, onDownload }) => (
  <Card
    sx={{
      borderRadius: 1,
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      
      transition: 'box-shadow 0.3s',
      '&:hover': {
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      },
    }}
  >
    <CardContent sx={{ p: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        {onDownload && (
          <Button
            onClick={onDownload}
            startIcon={<DownloadIcon sx={{ fontSize: 18 }} />}
            size="small"
            sx={{
              textTransform: 'none',
              color: 'primary.main',
              fontSize: '0.875rem',
              '&:hover': {
                bgcolor: 'primary.lighter',
              },
            }}
          >
            Download
          </Button>
        )}
      </Box>
      {children}
    </CardContent>
  </Card>
);

export default ChartCard;