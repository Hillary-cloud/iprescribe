import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Badge,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  LocalPharmacy as PharmacyIcon,
} from '@mui/icons-material';

const MobileHeader = ({ onMenuClick }) => (
  <AppBar
    position="sticky"
    elevation={0}
    sx={{
      display: { xs: 'block', lg: 'none' },
      bgcolor: 'white',
      borderBottom: 1,
      borderColor: 'grey.200',
    }}
  >
    <Toolbar>
      <IconButton
        edge="start"
        onClick={onMenuClick}
        sx={{ mr: 2, color: 'text.primary' }}
      >
        <MenuIcon />
      </IconButton>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            bgcolor: 'primary.main',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PharmacyIcon sx={{ color: 'white', fontSize: 20 }} />
        </Box>
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          Prescribe
        </Typography>
      </Box>

      <IconButton sx={{ color: 'text.primary' }}>
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Avatar sx={{ ml: 1, width: 36, height: 36, bgcolor: 'primary.main' }}>
        A
      </Avatar>
    </Toolbar>
  </AppBar>
);

export default MobileHeader;