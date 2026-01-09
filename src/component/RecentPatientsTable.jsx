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
  TableSortLabel,
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import useThemeStore from '../store/themeStore';

const RecentPatientsTable = ({ patients }) => {
  const [orderBy, setOrderBy] = React.useState('');
  const [order, setOrder] = React.useState('asc');
  const mode = useThemeStore((state) => state.mode);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: mode === 'light'
          ? '0 1px 3px 0 rgb(0 0 0 / 0.1)'
          : '0 1px 3px 0 rgb(0 0 0 / 0.3)',
        border: '1px solid',
        borderColor: mode === 'light' ? 'grey.100' : 'grey.200',
        bgcolor: 'background.paper',
      }}
    >
      <CardContent sx={{ p: 1.5 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1.5,
          }}
        >
          <Typography 
            variant="h6" 
            fontWeight={600} 
            sx={{ fontSize: '0.9375rem' }}
            color="text.primary"
          >
            Recent Patients Sign Up
          </Typography>
          <Button
            endIcon={<ChevronRightIcon sx={{ fontSize: '16px' }} />}
            size="small"
            sx={{
              textTransform: 'none',
              color: 'primary.main',
              fontSize: '0.75rem',
              py: 0.5,
              px: 1,
              minWidth: 'auto',
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
            borderColor: mode === 'light' ? 'grey.200' : 'grey.300',
            borderRadius: 2,
            overflow: 'auto',
            bgcolor: 'background.paper',
          }}
        >
          <Table sx={{ minWidth: 650, tableLayout: 'auto' }}>
            <TableHead>
              <TableRow sx={{ bgcolor: mode === 'light' ? '#F8F9FA' : 'grey.100' }}>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.6875rem',
                    color: mode === 'light' ? '#1F2937' : 'text.primary',
                    py: 0.75,
                    px: 1,
                    whiteSpace: 'nowrap',
                    maxWidth: '60px',
                  }}
                >
                  #
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.6875rem',
                    color: mode === 'light' ? '#1F2937' : 'text.primary',
                    py: 0.75,
                    px: 1,
                    whiteSpace: 'nowrap',
                    maxWidth: '100px',
                  }}
                >
                  <TableSortLabel
                    active={orderBy === 'signUpDate'}
                    direction={orderBy === 'signUpDate' ? order : 'asc'}
                    onClick={() => handleSort('signUpDate')}
                    sx={{ '& .MuiTableSortLabel-icon': { fontSize: '14px' } }}
                  >
                    Sign Up Date
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.6875rem',
                    color: mode === 'light' ? '#1F2937' : 'text.primary',
                    py: 0.75,
                    px: 1,
                    whiteSpace: 'nowrap',
                    maxWidth: '120px',
                  }}
                >
                  <TableSortLabel
                    active={orderBy === 'name'}
                    direction={orderBy === 'name' ? order : 'asc'}
                    onClick={() => handleSort('name')}
                    sx={{ '& .MuiTableSortLabel-icon': { fontSize: '14px' } }}
                  >
                    Patient Name
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.6875rem',
                    color: mode === 'light' ? '#1F2937' : 'text.primary',
                    py: 0.75,
                    px: 1,
                    whiteSpace: 'nowrap',
                    maxWidth: '150px',
                  }}
                >
                  <TableSortLabel
                    active={orderBy === 'email'}
                    direction={orderBy === 'email' ? order : 'asc'}
                    onClick={() => handleSort('email')}
                    sx={{ '& .MuiTableSortLabel-icon': { fontSize: '14px' } }}
                  >
                    Email Address
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.6875rem',
                    color: mode === 'light' ? '#1F2937' : 'text.primary',
                    py: 0.75,
                    px: 1,
                    whiteSpace: 'nowrap',
                    maxWidth: '110px',
                  }}
                >
                  Phone Number
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.6875rem',
                    color: mode === 'light' ? '#1F2937' : 'text.primary',
                    py: 0.75,
                    px: 1,
                    whiteSpace: 'nowrap',
                    maxWidth: '130px',
                  }}
                >
                  <TableSortLabel
                    active={orderBy === 'lastVisit'}
                    direction={orderBy === 'lastVisit' ? order : 'asc'}
                    onClick={() => handleSort('lastVisit')}
                    sx={{ '& .MuiTableSortLabel-icon': { fontSize: '14px' } }}
                  >
                    Last Seen Date & T
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.6875rem',
                    color: mode === 'light' ? '#1F2937' : 'text.primary',
                    py: 0.75,
                    px: 1,
                    whiteSpace: 'nowrap',
                    maxWidth: '100px',
                  }}
                >
                  <TableSortLabel
                    active={orderBy === 'location'}
                    direction={orderBy === 'location' ? order : 'asc'}
                    onClick={() => handleSort('location')}
                    sx={{ '& .MuiTableSortLabel-icon': { fontSize: '14px' } }}
                  >
                    Location
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.6875rem',
                    color: mode === 'light' ? '#1F2937' : 'text.primary',
                    py: 0.75,
                    px: 1,
                    whiteSpace: 'nowrap',
                    maxWidth: '90px',
                  }}
                >
                  <TableSortLabel
                    active={orderBy === 'device'}
                    direction={orderBy === 'device' ? order : 'asc'}
                    onClick={() => handleSort('device')}
                    sx={{ '& .MuiTableSortLabel-icon': { fontSize: '14px' } }}
                  >
                    Device
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.6875rem',
                    color: mode === 'light' ? '#1F2937' : 'text.primary',
                    py: 0.75,
                    px: 1,
                    whiteSpace: 'nowrap',
                    maxWidth: '80px',
                  }}
                >
                  <TableSortLabel
                    active={orderBy === 'status'}
                    direction={orderBy === 'status' ? order : 'asc'}
                    onClick={() => handleSort('status')}
                    sx={{ '& .MuiTableSortLabel-icon': { fontSize: '14px' } }}
                  >
                    Status
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient, i) => (
                <TableRow
                  key={patient.id}
                  sx={{
                    bgcolor: i % 2 === 0 ? '#FFFFFF' : '#F8F9FA',
                    '&:hover': {
                      bgcolor: '#E5E7EB',
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      fontSize: '0.75rem',
                      color: '#374151',
                      py: 1.25,
                      px: 1.5,
                    }}
                  >
                    {i + 1}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '0.75rem',
                      color: '#374151',
                      py: 1.25,
                      px: 1.5,
                    }}
                  >
                    {patient.signUpDate}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: '#111827',
                      py: 1.25,
                      px: 1.5,
                    }}
                  >
                    {patient.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '0.75rem',
                      color: '#6B7280',
                      py: 1.25,
                      px: 1.5,
                    }}
                  >
                    {patient.email}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '0.75rem',
                      color: '#374151',
                      py: 1.25,
                      px: 1.5,
                    }}
                  >
                    {patient.phone}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '0.75rem',
                      color: '#6B7280',
                      py: 1.25,
                      px: 1.5,
                    }}
                  >
                    {patient.lastVisit}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '0.75rem',
                      color: '#374151',
                      py: 1.25,
                      px: 1.5,
                    }}
                  >
                    {patient.location}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '0.75rem',
                      color: '#374151',
                      py: 1.25,
                      px: 1.5,
                    }}
                  >
                    {patient.device}
                  </TableCell>
                  <TableCell sx={{ py: 1.25, px: 1.5 }}>
                    <Chip
                      label={patient.status}
                      size="small"
                      sx={{
                        bgcolor:
                          patient.status === 'Verified'
                            ? '#D1FAE5'
                            : '#FEF3C7',
                        color:
                          patient.status === 'Verified'
                            ? '#065F46'
                            : '#92400E',
                        fontWeight: 600,
                        fontSize: '0.6875rem',
                        height: '22px',
                        borderRadius: '6px',
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
};

export default RecentPatientsTable;