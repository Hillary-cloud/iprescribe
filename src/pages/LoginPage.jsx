import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Link,
  CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useMutation } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import iprescribeLogo from '../images/iprescribe-logo.svg';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Login API function
const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const result = await response.json();

  if (!response.ok || result.status !== 200) {
    throw new Error(result.message || 'Login failed');
  }

  return result;
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // React Query mutation for login
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast.success(data.message || 'Login successful');
      
      // Store token and user data
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));
      
      // Redirect to dashboard after a short delay
      
        window.location.href = '/dashboard';
      
    },
    onError: (error) => {
      toast.error(error.message || 'Network error. Please try again.');
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    loginMutation.mutate({ email, password });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #283C85 0%, #090E1F 100%)',
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: '480px',
          width: '100%',
          height: '518px',
          borderRadius: 1,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          backgroundColor: '#FFFFFF',

        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1,
               
              }}
            />
            <Box
              component="img"
              src={iprescribeLogo}
              alt="iPrescribe Logo"
              sx={{ width: 86, height: 60, position: 'absolute' }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: 700,
              fontSize: '20px',
              mb: 0.5,
              color: '#283C85',
            }}
          >
            Login to iPrescribe Admin
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: 'text.secondary',
              mb: 3,
              fontSize: '14px',
            }}
          >
            Provide the required details to login
          </Typography>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  mb: 0.5,
                  color: '#000',
                  fontWeight: 500,
                }}
              >
                Email Address
              </Typography>
              <TextField
                fullWidth
                placeholder="e.g admin@iprescribeservices.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loginMutation.isPending}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    color: '#000',
                    '& fieldset': {
                      borderColor: '#e5e7eb',
                    },
                    '&:hover fieldset': {
                      borderColor: '#3b82f6',
                    },
                  },
                }}
              />
            </Box>

            <Box sx={{ mb: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  mb: 0.5,
                  color: '#000',
                  fontWeight: 500,
                }}
              >
                Password
              </Typography>
              <TextField
                fullWidth
                placeholder="**************"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loginMutation.isPending}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        disabled={loginMutation.isPending}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    color: '#000',
                    '& fieldset': {
                      borderColor: '#e5e7eb',
                    },
                    '&:hover fieldset': {
                      borderColor: '#3b82f6',
                    },
                  },
                }}
              />
            </Box>

            <Box sx={{ textAlign: 'right', mb: 3 }}>
              <Link
                href="#"
                underline="hover"
                sx={{
                  fontSize: '0.875rem',
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                Forgot password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loginMutation.isPending}
              sx={{
                py: 1.5,
                backgroundColor: '#1e40af',
                color: '#fff',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 1.5,
                '&:hover': {
                  backgroundColor: '#1e3a8a',
                  color: '#fff',
                },
                '&:disabled': {
                  backgroundColor: '#93c5fd',
                },
              }}
            >
              {loginMutation.isPending ? (
                <CircularProgress size={24} sx={{ color: '#fff' }} />
              ) : (
                'Login'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
};

export default LoginPage;