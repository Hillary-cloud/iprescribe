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
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import dashboardLogo from '../images/dashboard-logo.png';
import useThemeStore from '../store/themeStore';

const MobileHeader = ({ onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

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
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        display: { xs: 'block', lg: 'none' },
        bgcolor: mode === 'light' ? '#ffffff' : '#1a1a1a',
        borderBottom: 1,
        borderColor: mode === 'light' ? 'grey.200' : '#2a2a2a',
      }}
    >
      <Toolbar sx={{ minHeight: '64px !important' }}>
        {/* Menu Button */}
        <IconButton
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, color: mode === 'light' ? '#1a1a1a' : '#ffffff' }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
          <Box
            component="img"
            src={dashboardLogo}
            alt="Dashboard Logo"
            sx={{
              width: 100,
            //   height: 36,
              borderRadius: 2,
              color: mode === 'light' ? '#1a1a1a' : '#ffffff',
            }}
          />
        </Box>

        {/* Theme Toggle */}
        <IconButton
          onClick={toggleTheme}
          sx={{
            bgcolor: mode === 'light' ? '#F5F5F5' : '#2a2a2a',
            mr: 1,
            '&:hover': {
              bgcolor: mode === 'light' ? '#EEEEEE' : '#3a3a3a',
            },
          }}
        >
          {mode === 'light' ? (
            <Brightness4 sx={{ fontSize: '22px', color: '#666666' }} />
          ) : (
            <Brightness7 sx={{ fontSize: '22px', color: '#FFD700' }} />
          )}
        </IconButton>

        {/* Notifications */}
        <IconButton
          sx={{
            bgcolor: mode === 'light' ? '#F5F5F5' : '#2a2a2a',
            mr: 1,
            '&:hover': {
              bgcolor: mode === 'light' ? '#EEEEEE' : '#3a3a3a',
            },
          }}
        >
          <Badge
            color="error"
            variant="dot"
            sx={{
              '& .MuiBadge-dot': {
                backgroundColor: '#FF4444',
              },
            }}
          >
            <NotificationsIcon
              sx={{
                fontSize: '22px',
                color: mode === 'light' ? '#666666' : '#b3b3b3',
              }}
            />
          </Badge>
        </IconButton>

        {/* Profile Avatar */}
        <IconButton
          onClick={handleProfileClick}
          sx={{
            p: 0,
            '&:hover': {
              bgcolor: 'transparent',
            },
          }}
        >
          <Avatar
            src="https://i.pravatar.cc/150?img=12"
            alt="Alexandra"
            sx={{
              width: 36,
              height: 36,
              border: open ? '2px solid #5B93FF' : 'none',
              transition: 'border 0.2s',
            }}
          >
            A
          </Avatar>
        </IconButton>

        {/* Profile Menu */}
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
              bgcolor: mode === 'light' ? '#ffffff' : '#1f1f1f',
            },
          }}
        >
          <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid #F0F0F0' }}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                color: mode === 'light' ? '#1a1a1a' : '#ffffff',
              }}
            >
              Alexandra
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                color: mode === 'light' ? '#999999' : '#b3b3b3',
              }}
            >
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
                bgcolor: mode === 'light' ? '#F5F5F5' : '#2a2a2a',
              },
            }}
          >
            <PersonIcon sx={{ fontSize: '20px', color: '#666666' }} />
            <Typography sx={{ fontSize: '14px' }}>Profile</Typography>
          </MenuItem>

          <Divider sx={{ my: 0.5 }} />

          <MenuItem
            onClick={handleLogout}
            sx={{
              py: 1.5,
              px: 2,
              gap: 1.5,
              '&:hover': {
                bgcolor: '#FFF5F5',
              },
            }}
          >
            <LogoutIcon sx={{ fontSize: '20px', color: '#FF4444' }} />
            <Typography sx={{ fontSize: '14px', color: '#FF4444' }}>
              Logout
            </Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MobileHeader;
