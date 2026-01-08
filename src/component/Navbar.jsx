import React, { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Button, Link, Drawer, IconButton, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import iprescribeLogo from '../images/iprescribe-logo.svg';

const StyledAppBar = styled(AppBar)(({ scrolled }) => ({
    backgroundColor: '#FFFFFF',
    boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
    transform: scrolled ? 'translateY(0)' : 'translateY(0)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    top: 0,
}));

const MobileDrawer = styled(Drawer)({
    '& .MuiDrawer-paper': {
        width: '280px',
        backgroundColor: '#FFFFFF',
        padding: '24px',
    },
});

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar with animation after scrolling past 50px
            if (currentScrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { text: 'Home', href: '#' },
        { text: 'Features', href: '#' },
        { text: 'Contact us', href: '#' },
    ];

    return (
        <>
            <StyledAppBar position="sticky" scrolled={scrolled}>
                <Toolbar sx={{ justifyContent: 'space-between', py: 2, px: { xs: 2, md: 7 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                            component="img"
                            src={iprescribeLogo}
                            alt="iPrescribe Logo"
                            sx={{ width: '62px', height: '72px', objectFit: 'contain' }}
                        />
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'center' }}>
                        {menuItems.map((item) => (
                            <Link
                                key={item.text}
                                href={item.href}
                                underline="none"
                                sx={{
                                    color: '#1a1a1a',
                                    fontSize: '0.9375rem',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: '#283C85',
                                    },
                                }}
                            >
                                {item.text}
                            </Link>
                        ))}
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#283C85',
                                color: 'white',
                                textTransform: 'none',
                                borderRadius: '28px',
                                px: 3.5,
                                py: 1.5,
                                fontSize: '0.9375rem',
                                '&:hover': {
                                    bgcolor: '#1e3280',
                                },
                            }}
                        >
                            Join Waitlist
                        </Button>
                    </Box>

                    {/* Mobile Menu - Join Waitlist Button + Hamburger */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 2, alignItems: 'center' }}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#283C85',
                                color: 'white',
                                textTransform: 'none',
                                borderRadius: '28px',
                                px: 2.5,
                                py: 1,
                                fontSize: '0.875rem',
                                '&:hover': {
                                    bgcolor: '#1e3280',
                                },
                            }}
                        >
                            Join Waitlist
                        </Button>
                        
                        <IconButton
                            sx={{
                                color: '#283C85',
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </StyledAppBar>

            {/* Mobile Drawer */}
            <MobileDrawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        transition: 'transform 0.3s ease-in-out',
                    },
                }}
            >
                {/* Header with Logo and Close Button */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box
                        component="img"
                        src={iprescribeLogo}
                        alt="iPrescribe Logo"
                        sx={{ width: '50px', height: '58px', objectFit: 'contain' }}
                    />
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            color: '#283C85',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'rotate(90deg)',
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Mobile Menu Items */}
                <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} sx={{ padding: 0 }}>
                            <Link
                                href={item.href}
                                underline="none"
                                onClick={handleDrawerToggle}
                                sx={{
                                    color: '#1a1a1a',
                                    fontSize: '1.125rem',
                                    fontWeight: 500,
                                    width: '100%',
                                    py: 1.5,
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: '#283C85',
                                    },
                                }}
                            >
                                {item.text}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </MobileDrawer>
        </>
    );
};

export default Navbar;