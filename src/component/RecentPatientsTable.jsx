import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Paper,
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';

const RecentPatientsTable = ({ patients }) => (
  <Card
    sx={{
      borderRadius: 3,
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      border: '1px solid',
      borderColor: 'grey.100',
    }}
  >
    <CardContent sx={{ p: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Recent Patients Sign Up
        </Typography>
        <Button
          endIcon={<ChevronRightIcon />}
          size="small"
          sx={{
            textTransform: 'none',
            color: 'primary.main',
            fontSize: '0.875rem',
            '&:hover': {
              bgcolor: 'primary.lighter',
            },
          }}
        >
          See All
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: '1px solid',
          borderColor: 'grey.200',
          borderRadius: 2,
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>#</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Sign Up Date</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Patient Name</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Email Address</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Phone Number</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Last Visit Date & T</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Location</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Device</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient, i) => (
              <TableRow
                key={patient.id}
                sx={{
                  '&:hover': { bgcolor: 'grey.50' },
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell sx={{ fontSize: '0.875rem' }}>{i + 1}</TableCell>
                <TableCell sx={{ fontSize: '0.875rem' }}>{patient.signUpDate}</TableCell>
                <TableCell sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                  {patient.name}
                </TableCell>
                <TableCell sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                  {patient.email}
                </TableCell>
                <TableCell sx={{ fontSize: '0.875rem' }}>{patient.phone}</TableCell>
                <TableCell sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                  {patient.lastVisit}
                </TableCell>
                <TableCell sx={{ fontSize: '0.875rem' }}>{patient.location}</TableCell>
                <TableCell sx={{ fontSize: '0.875rem' }}>{patient.device}</TableCell>
                <TableCell>
                  <Chip
                    label={patient.status}
                    size="small"
                    sx={{
                      bgcolor: patient.status === 'Verified' ? 'success.lighter' : 'warning.lighter',
                      color: patient.status === 'Verified' ? 'success.dark' : 'warning.dark',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </Card>
);

export default RecentPatientsTable;