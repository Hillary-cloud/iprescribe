import React from 'react';
import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    IconButton,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Dashboard,
    People,
    LocalHospital,
    LocalPharmacy,
    Payment,
    Settings,
    Security,
    Assessment,
    Article,
    Notifications,
    Language,
    Close,
} from '@mui/icons-material';
import dashboardLogo from '../images/dashboard-logo.png';
import useThemeStore from '../store/themeStore';

const drawerWidth = 260;

const Sidebar = ({ isOpen, onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const mode = useThemeStore((state) => state.mode);

    const mainMenu = [
        { text: 'Dashboard', icon: <Dashboard />, active: true },
        { text: 'User Management', icon: <People /> },
        { text: 'Consult. & Presp.', icon: <LocalHospital /> },
        { text: 'Pharm. & Orders Mgt.', icon: <LocalPharmacy /> },
        { text: 'Payments', icon: <Payment /> },
    ];

    const adminMenu = [
        { text: 'Settings', icon: <Settings /> },
        { text: 'Roles & Permissions', icon: <Security /> },
        { text: 'Activity Log', icon: <Assessment /> },
        { text: 'Blog / Health Tips', icon: <Article /> },
        { text: 'Notifications Mgt.', icon: <Notifications /> },
        { text: 'Website Updates', icon: <Language /> },
    ];

    const drawerContent = (
        <Box
            sx={{
                width: drawerWidth,
                display: 'flex',
                flexDirection: 'column',
                background: mode === 'light' 
                    ? 'linear-gradient(180deg, #283C85 0%, #090E1F 100%)'
                    : 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
                color: '#E5E7EB',
            }}
        >
            {/* Logo */}
            <Box
                sx={{
                    px: 3,
                    py: 3,
                    position: 'relative',
                }}
            >
                <Box
                    component="img"
                    src={dashboardLogo}
                    alt="Dashboard Logo"
                    sx={{
                        width: '100%',
                        maxWidth: 160,
                    }}
                />

                {isMobile && (
                    <IconButton
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            color: '#fff',
                        }}
                    >
                        <Close />
                    </IconButton>
                )}
            </Box>

            {/* Menu */}
            <Box sx={{ px: 2, flexGrow: 1, overflow: 'visible' }}>
                {/* Main Menu */}
                <Typography
                    variant="caption"
                    sx={{
                        color: '#9CA3AF',
                        fontWeight: 600,
                        px: 2,
                        mb: 1,
                        display: 'block',
                    }}
                >
                    Main Menu
                </Typography>

                <List disablePadding>
                    {mainMenu.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                            <ListItemButton
                                sx={{
                                    height: 44,
                                    borderRadius: '999px 0 0 999px',
                                    width: item.active ? 320 : '100%',
                                    mr: item.active ? -2 : 0,
                                    px: 2.5,
                                    bgcolor: item.active 
                                        ? (mode === 'light' ? '#FFFFFF' : '#2a2a2a')
                                        : 'transparent',
                                    color: item.active 
                                        ? (mode === 'light' ? '#1D4ED8' : '#5B93FF')
                                        : '#E5E7EB',
                                    '&:hover': {
                                        bgcolor: item.active
                                            ? (mode === 'light' ? '#FFFFFF' : '#2a2a2a')
                                            : 'rgba(255,255,255,0.08)',
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 36,
                                        color: item.active 
                                            ? (mode === 'light' ? '#1D4ED8' : '#5B93FF')
                                            : '#E5E7EB',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        fontSize: '0.85rem',
                                        fontWeight: item.active ? 600 : 500,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                {/* Admin Menu */}
                <Typography
                    variant="caption"
                    sx={{
                        color: '#9CA3AF',
                        fontWeight: 600,
                        px: 2,
                        mt: 3,
                        mb: 1,
                        display: 'block',
                    }}
                >
                    Admin Menu
                </Typography>

                <List disablePadding>
                    {adminMenu.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                            <ListItemButton
                                sx={{
                                    height: 44,
                                    borderRadius: 999,
                                    px: 2.5,
                                    color: '#E5E7EB',
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.08)',
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{ minWidth: 36, color: '#E5E7EB' }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        fontSize: '0.85rem',
                                        fontWeight: 500,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );

    return isMobile ? (
        <Drawer open={isOpen} onClose={onClose}>
            {drawerContent}
        </Drawer>
    ) : (
        <Box sx={{ width: drawerWidth, flexShrink: 0 }}>
            {drawerContent}
        </Box>
    );
};

export default Sidebar;