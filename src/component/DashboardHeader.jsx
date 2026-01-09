import React, { useState } from 'react';
import { Box, Typography, Button, Stack, Avatar, IconButton, Badge, Menu, MenuItem, Divider, Tooltip } from '@mui/material';
import { CalendarMonth as CalendarIcon, FileDownload as DownloadIcon, Notifications as NotificationsIcon, Person as PersonIcon, Logout as LogoutIcon, Brightness4, Brightness7 } from '@mui/icons-material';
import useThemeStore from '../store/themeStore';

const DashboardHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    console.log('Navigate to profile');
    handleClose();
  };

  const handleLogoutClick = () => {
    console.log('Logout');
    handleClose();
  };

  return (
    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
      {/* Top Navigation Bar with Notification and Profile */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          mb: 3,
          gap: 2
        }}
      >
        {/* Theme Toggle Button */}
        <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
          <IconButton
            onClick={toggleTheme}
            sx={{
              bgcolor: mode === 'light' ? '#F5F5F5' : '#2a2a2a',
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
        </Tooltip>

        <IconButton
          sx={{
            bgcolor: mode === 'light' ? '#F5F5F5' : '#2a2a2a',
            '&:hover': {
              bgcolor: mode === 'light' ? '#EEEEEE' : '#3a3a3a'
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
            <NotificationsIcon sx={{ color: mode === 'light' ? '#666666' : '#b3b3b3', fontSize: '22px' }} />
          </Badge>
        </IconButton>
        
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1.5,
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: '8px',
            transition: 'background-color 0.2s',
            '&:hover': {
              bgcolor: mode === 'light' ? '#F5F5F5' : '#2a2a2a'
            }
          }}
          onMouseEnter={handleMouseEnter}
        >
          <Avatar
            src="https://i.pravatar.cc/150?img=12"
            alt="Alexandra"
            sx={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: mode === 'light' ? '#1a1a1a' : '#ffffff', lineHeight: 1.2 }}>
              Alexandra
            </Typography>
            <Typography sx={{ fontSize: '12px', color: mode === 'light' ? '#999999' : '#b3b3b3', lineHeight: 1.2 }}>
              Admin
            </Typography>
          </Box>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleClose,
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            mt: 1,
            '& .MuiPaper-root': {
              borderRadius: '8px',
              minWidth: '180px',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }
          }}
        >
          <MenuItem 
            onClick={handleProfileClick}
            sx={{
              py: 1.5,
              px: 2,
              gap: 1.5,
              '&:hover': {
                bgcolor: mode === 'light' ? '#F5F5F5' : '#2a2a2a'
              }
            }}
          >
            <PersonIcon sx={{ fontSize: '20px', color: mode === 'light' ? '#666666' : '#b3b3b3' }} />
            <Typography sx={{ fontSize: '14px', color: mode === 'light' ? '#333333' : '#ffffff' }}>Profile</Typography>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem 
            onClick={handleLogoutClick}
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
      </Box>

      {/* Dashboard Header Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 2,
          mb: 4
        }}
      >
        <Box>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600,
              fontSize: '28px',
              color: mode === 'light' ? '#1a1a1a' : '#ffffff',
              mb: 0.5
            }}
          >
            Dashboard
          </Typography>
          <Typography 
            variant="body2" 
            sx={{
              color: mode === 'light' ? '#666666' : '#b3b3b3',
              fontSize: '14px'
            }}
          >
            Latest update for the last 7 days,{' '}
            <Typography
              component="span"
              sx={{ 
                color: '#5B93FF',
                cursor: 'pointer',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              check now
            </Typography>
          </Typography>
        </Box>
        <Stack direction="row" spacing={1.5}>
          <Button
            variant="outlined"
            startIcon={<CalendarIcon sx={{ fontSize: '20px' }} />}
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              borderColor: mode === 'light' ? '#E0E0E0' : '#3a3a3a',
              color: mode === 'light' ? '#333333' : '#ffffff',
              px: 2,
              py: 1,
              fontSize: '14px',
              fontWeight: 500,
              '&:hover': {
                borderColor: mode === 'light' ? '#BDBDBD' : '#4a4a4a',
                bgcolor: mode === 'light' ? '#F5F5F5' : '#2a2a2a'
              }
            }}
          >
            12th Sept - 15th Sept, 2025
          </Button>
          <Button
            variant="contained"
            
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              bgcolor: '#283C85',
              color: mode === 'light' ? '#FFFFFF' : '#FFFFFF',
              px: 2.5,
              py: 1,
              fontSize: '14px',
              fontWeight: 500,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#4A7EE8',
                boxShadow: 'none'
              }
            }}
          >
            Export
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default DashboardHeader;