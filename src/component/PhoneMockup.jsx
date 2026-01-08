import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

import phoneMockupImage from '../images/phone-mockup.png';

// Slide in from right animation
const slideInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

// Floating animation
const float = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
`;

const PhoneMockup = () => {
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                animation: `${slideInRight} 1s ease-out`,
            }}
        >
            <Box
                component="img"
                src={phoneMockupImage}
                alt="Phone Mockup"
                sx={{
                    width: {
                        xs: "381.59px",
                        md: "547.02px",
                    },
                    height: {
                        xs: "378px",
                        md: "540px",
                    },
                    objectFit: "contain",
                    animation: `${float} 3s ease-in-out infinite`,
                    animationDelay: '1s',
                }}
            />
        </Box>
    );
};

export default PhoneMockup;