import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '../images/Social-icons-facebook.png';
import InstagramIcon from '../images/Social-icons-instagram.png';
import WhatsAppIcon from '../images/Social-icons-whatsapp.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import iprescribeLogo2 from '../images/iprescribe-logo2.png';

const FooterContainer = styled(Box)({
  backgroundColor: '#283C85',
  padding: '60px 40px 40px',
  color: '#F5F5F5',
});

const EmailInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#3D4F94',
    borderRadius: '50px',
    color: 'white',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
    padding: '12px 16px',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.7)',
      opacity: 1,
    },
  },
  '& .MuiInputAdornment-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
}));

const SubmitButton = styled(Button)({
  backgroundColor: 'white',
  color: '#283C85',
  textTransform: 'none',
  borderRadius: '50px',
  padding: '12px 32px',
  fontWeight: 600,
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

const SocialIconButton = styled(IconButton)({
  backgroundColor: 'white',
  color: '#3B5998',
  width: 40,
  height: 40,
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

const Footer = () => {
  const [email, setEmail] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate API call with random success/error
    const isSuccess = Math.random() > 0.3; // 70% success rate
    
    if (isSuccess) {
      setSnackbarMessage('🎉 Successfully joined the waitlist! Check your email.');
      setSnackbarSeverity('success');
      setEmail('');
    } else {
      setSnackbarMessage('❌ Oops! Something went wrong. Please try again.');
      setSnackbarSeverity('error');
    }
    
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <FooterContainer>
      {/* Waitlist Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '41px', md: '48px' },
            fontWeight: 500,
            mb: 2,
          }}
        >
          Join Our Waitlist
        </Typography>
        
        <Typography
          sx={{
            fontSize: { xs: '13px', md: '14px' },
            mb: 4,
            opacity: 0.9,
            maxWidth: 457,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Be the first one to know about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.
        </Typography>

        {/* Email Input Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            gap: 1,
            maxWidth: 500,
            mx: 'auto',
            backgroundColor: '#3D4F94',
            borderRadius: '50px',
            padding: '4px',
            alignItems: 'center',
          }}
        >
          <Box sx={{ flex: 1, pl: 1 }}>
            <EmailInput
              fullWidth
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              InputProps={{
                startAdornment: (
                  <EmailOutlinedIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.7)', fontSize: 20 }} />
                ),
              }}
            />
          </Box>
          <SubmitButton type="submit" variant="contained">
            Submit
          </SubmitButton>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          pt: 4,
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Logo and Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, order: { xs: 1, md: 1 } }}>
          <Box
            component="img"
            src={iprescribeLogo2}
            alt="iPrescribe Logo"
            sx={{ width: '62px', height: '72px', objectFit: 'contain' }}
          />
        </Box>

        {/* Social Media Icons - Order 2 on mobile, 3 on desktop */}
        <Box sx={{ display: 'flex', gap: 1.5, order: { xs: 2, md: 3 } }}>
          <SocialIconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Box
              component="img"
              src={FacebookIcon}
              alt="Facebook"
              sx={{ width: '20px', height: '20px', objectFit: 'contain' }}
            />
          </SocialIconButton>
          
          <SocialIconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Box
              component="img"
              src={InstagramIcon}
              alt="Instagram"
              sx={{ width: '20px', height: '20px', objectFit: 'contain' }}
            />
          </SocialIconButton>
          
          <SocialIconButton
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Box
              component="img"
              src={WhatsAppIcon}
              alt="WhatsApp"
              sx={{ width: '20px', height: '20px', objectFit: 'contain' }}
            />
          </SocialIconButton>
        </Box>

        {/* Copyright - Order 3 on mobile, 2 on desktop */}
        <Typography
          sx={{
            fontSize: '14px',
            opacity: 0.8,
            order: { xs: 3, md: 2 },
          }}
        >
          © 2025, All Rights Reserved
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;