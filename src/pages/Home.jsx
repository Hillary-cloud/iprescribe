import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';
import PhoneMockup from '../component/PhoneMockup';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <Box sx={{ minHeight: '100vh', width: '100%' }}>
            {/* Navigation Bar */}
            <Navbar />

            {/* Main Content */}

            <Box sx={{
                background: 'linear-gradient(to bottom, #FFFFFF 0%, #D4DDFF 100%)', mt: { xs: 6, md: 8 }, pb: 8, px: { xs: 3, md: 7 },
                display: 'flex',
                gap: { xs: 4, md: 7 },
                alignItems: 'center',
                flexDirection: { xs: 'column', lg: 'row' }
            }}>
                {/* Left Section - Hero Content */}
                <HeroSection />

                {/* Right Section - Phone Mockups */}
                <PhoneMockup />
            </Box>
            <Box >
            <Footer/>
            </Box>

        </Box>
    );
};

export default Home;