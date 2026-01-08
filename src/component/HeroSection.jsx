import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

// Import your icon images
import googlePlayIcon from '../images/playstore.png';
import appStoreIcon from '../images/apple-store.png';
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avarar3.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


// Slide in from left animation
const slideInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const InfoBanner = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    backgroundColor: '#EEF2FF',
    borderRadius: '10px',
    padding: '5.18px',
    marginBottom: '32px',
    maxWidth: {xs:300.33, md: 'none'},
});

const DownloadButton = styled(Button)({
    backgroundColor: 'black',
    color: 'white',
    textTransform: 'none',
    borderRadius: '12px',
    padding: '6px 23px',
    '&:hover': {
        backgroundColor: '#333',
    },
});

const HeroSection = () => {
    return (
        <Box sx={{ flex: 1, maxWidth: 600 }}>
            {/* Info Banner */}
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <InfoBanner>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <Box
                                sx={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    bgcolor: '#FFFFFF',
                                    border: '1px solid white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '16px',
                                    position: 'relative',
                                    zIndex: 3,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={avatar3}
                                    alt="Avatar"
                                    sx={{ width: 24, height: 24 }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    bgcolor: '#FFFFFF',
                                    border: '1px solid white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '16px',
                                    position: 'relative',
                                    marginLeft: '-12px',
                                    zIndex: 2,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={avatar1}
                                    alt="Avatar"
                                    sx={{ width: 24, height: 24 }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    bgcolor: '#FFFFFF',
                                    border: '1px solid white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '16px',
                                    position: 'relative',
                                    marginLeft: '-12px',
                                    zIndex: 1,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={avatar2}
                                    alt="Avatar"
                                    sx={{ width: 24, height: 24 }}
                                />
                            </Box>
                        </Box>
                        <Typography sx={{ fontSize: {xs: '9.07px', md: '14px'}, color: '#424242' }}>
                            Ready to explore iPrescribe?
                        </Typography>
                    </Box>
                    <Link
                        href="#"
                        sx={{
                            color: '#2D4A9E',
                            textDecoration: 'none',
                            fontSize: {xs: '9.07px', md: '14px'},
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        Join Waitlist <ArrowForwardIosIcon sx={{ fontSize: {xs: 8, md: 12}, verticalAlign: 'middle' }} />
                    </Link>
                </InfoBanner>
            </Box>

            {/* Headline */}
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '41.46px', md: '64px' },
                    fontWeight: 500,
                    lineHeight: { xs: '46.65px', md: '72px' },
                    textAlign: { xs: 'center', md: 'left' },
                    color: '#212121',
                     animation: `${slideInLeft} 1s ease-out 0.2s both`,
                }}
            >
                Your Bridge<br />
                Between Care &<br />
                Convenience
            </Typography>

            {/* Description */}
            <Typography
                sx={{
                    fontSize: { xs: '14px', md: '16px' },
                    lineHeight: 1.6,
                    color: '#666',
                    textAlign: { xs: 'center', md: 'left' },
                    mb: 4,
                    maxWidth: 500,
                    animation: `${slideInLeft} 1s ease-out 0.6s both`,
                }}
            >
                Schedule consultations, send or receive e-prescriptions, and manage medications from one secure platform.
            </Typography>

            {/* Download Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, animation: `${slideInLeft} 1s ease-out 1s both`, }}>
                <DownloadButton
                    startIcon={
                        <Box
                            component="img"
                            src={googlePlayIcon}
                            alt="Google Play"
                            sx={{ width: 24, height: 24 }}
                        />
                    }
                >
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{ fontSize: '10px', fontWeight: 400 }}>Coming soon</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Google Play</Typography>
                    </Box>
                </DownloadButton>

                <DownloadButton
                    startIcon={
                        <Box
                            component="img"
                            src={appStoreIcon}
                            alt="App Store"
                            sx={{ width: 24, height: 24 }}
                        />
                    }
                >
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography sx={{ fontSize: '10px', fontWeight: 400 }}>Coming soon</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>App Store</Typography>
                    </Box>
                </DownloadButton>
            </Box>
        </Box>
    );
};

export default HeroSection;