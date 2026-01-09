import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import dashboardLogo from '../images/dashboard-logo.png';

const MobileHeader = ({ onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewProfile = () => {
    console.log('Navigate to profile');
    handleClose();
  };

  const handleLogout = () => {
    console.log('Logout');
    handleClose();
  };

  return (
    <>
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
        <Toolbar sx={{ minHeight: '64px !important' }}>
          <IconButton
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            {/* Replace PharmacyIcon with your logo image */}
            <Box
              component="img"
              src={dashboardLogo}
              alt="Prescribe Logo"
              sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
              }}
            />
          
          </Box>

          <IconButton 
            sx={{ 
              color: 'text.primary',
              bgcolor: '#F5F5F5',
              mr: 1,
              '&:hover': {
                bgcolor: '#EEEEEE'
              }
            }}
          >
            <Badge 
              color="error" 
              variant="dot"
              sx={{
                '& .MuiBadge-dot': {
                  backgroundColor: '#FF4444'
                }
              }}
            >
              <NotificationsIcon sx={{ fontSize: '22px' }} />
            </Badge>
          </IconButton>

          <IconButton
            onClick={handleProfileClick}
            sx={{
              p: 0,
              '&:hover': {
                bgcolor: 'transparent'
              }
            }}
          >
            <Avatar 
              src="https://i.pravatar.cc/150?img=12"
              alt="Alexandra"
              sx={{ 
                width: 36, 
                height: 36,
                border: open ? '2px solid #5B93FF' : 'none',
                transition: 'border 0.2s'
              }}
            >
              A
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              mt: 1.5,
              '& .MuiPaper-root': {
                borderRadius: '8px',
                minWidth: '180px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              }
            }}
          >
            <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid #F0F0F0' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>
                Alexandra
              </Typography>
              <Typography sx={{ fontSize: '12px', color: '#999999' }}>
                Admin
              </Typography>
            </Box>
            <MenuItem 
              onClick={handleViewProfile}
              sx={{
                py: 1.5,
                px: 2,
                gap: 1.5,
                '&:hover': {
                  bgcolor: '#F5F5F5'
                }
              }}
            >
              <PersonIcon sx={{ fontSize: '20px', color: '#666666' }} />
              <Typography sx={{ fontSize: '14px', color: '#333333' }}>Profile</Typography>
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem 
              onClick={handleLogout}
              sx={{
                py: 1.5,
                px: 2,
                gap: 1.5,
                '&:hover': {
                  bgcolor: '#FFF5F5'
                }
              }}
            >
              <LogoutIcon sx={{ fontSize: '20px', color: '#FF4444' }} />
              <Typography sx={{ fontSize: '14px', color: '#FF4444' }}>Logout</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MobileHeader;