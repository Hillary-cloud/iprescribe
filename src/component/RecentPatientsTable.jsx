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
    TextField,
    MenuItem,
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import useThemeStore from '../store/themeStore';

const RecentPatientsTable = ({ patients }) => {
    const [orderBy, setOrderBy] = React.useState('');
    const [order, setOrder] = React.useState('asc');
    const [search, setSearch] = React.useState('');
    const [statusFilter, setStatusFilter] = React.useState('All');

    const mode = useThemeStore((state) => state.mode);

    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    /** --------------------
     * FILTER LOGIC
     -------------------- */
    const filteredPatients = patients.filter((patient) => {
        const searchMatch =
            patient.name.toLowerCase().includes(search.toLowerCase()) ||
            patient.email.toLowerCase().includes(search.toLowerCase()) ||
            patient.phone.toLowerCase().includes(search.toLowerCase()) ||
            patient.location.toLowerCase().includes(search.toLowerCase());

        const statusMatch =
            statusFilter === 'All' || patient.status === statusFilter;

        return searchMatch && statusMatch;
    });

    return (
        <Card
            sx={{
                borderRadius: 3,
                boxShadow:
                    mode === 'light'
                        ? '0 1px 3px 0 rgb(0 0 0 / 0.1)'
                        : '0 1px 3px 0 rgb(0 0 0 / 0.3)',
                border: '1px solid',
                borderColor: mode === 'light' ? 'grey.100' : 'grey.200',
                bgcolor: 'background.paper',
            }}
        >
            <CardContent sx={{ p: 1.5 }}>
                {/* HEADER */}
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
                        }}
                    >
                        See All
                    </Button>
                </Box>

                {/* FILTERS */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        flexWrap: 'wrap',
                        mb: 1.5,
                    }}
                >
                    <TextField
                        size="small"
                        placeholder="Search patient..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ minWidth: 200 }}
                    />

                    <TextField
                        size="small"
                        select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        sx={{ minWidth: 140 }}
                    >
                        <MenuItem value="All">All Status</MenuItem>
                        <MenuItem value="Verified">Verified</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                    </TextField>
                </Box>

                {/* TABLE */}
                <TableContainer
                    component={Paper}
                    elevation={0}
                    sx={{
                        border: '1px solid',
                        borderColor: mode === 'light' ? 'grey.200' : 'grey.700',
                        borderRadius: 2,
                        overflowX: 'auto',
                        bgcolor: mode === 'light' ? 'grey.50' : 'grey.900',
                    }}
                >
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow
                                sx={{
                                    bgcolor: mode === 'light' ? 'grey.100' : 'grey.800', // Header background
                                }}
                            >
                                {[
                                    '#',
                                    'Sign Up Date',
                                    'Patient Name',
                                    'Email Address',
                                    'Phone Number',
                                    'Last Seen',
                                    'Location',
                                    'Device',
                                    'Status',
                                ].map((head) => (
                                    <TableCell
                                        key={head}
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '0.6875rem',
                                            py: 0.75,
                                            px: 1,
                                            whiteSpace: 'nowrap',
                                            color: mode === 'light' ? 'text.primary' : 'text.secondary', // Header text color
                                        }}
                                    >
                                        {head}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filteredPatients.map((patient, i) => (
                                <TableRow
                                    key={patient.id}
                                    sx={{
                                        bgcolor:
                                            mode === 'light'
                                                ? i % 2 === 0
                                                    ? '#FFFFFF'
                                                    : '#F8F9FA'
                                                : i % 2 === 0
                                                    ? '#1e1e1e'
                                                    : '#2a2a2a', // Alternating row colors for dark mode
                                        '&:hover': {
                                            bgcolor: mode === 'light' ? '#E5E7EB' : '#3a3a3a', // Hover effect
                                        },
                                    }}
                                >
                                    <TableCell sx={{ fontSize: '0.75rem', color: 'text.primary' }}>
                                        {i + 1}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: 'text.primary' }}>
                                        {patient.signUpDate}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', fontWeight: 500, color: 'text.primary' }}>
                                        {patient.name}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                                        {patient.email}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: 'text.primary' }}>
                                        {patient.phone}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: 'text.primary' }}>
                                        {patient.lastVisit}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: 'text.primary' }}>
                                        {patient.location}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: 'text.primary' }}>
                                        {patient.device}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={patient.status}
                                            size="small"
                                            sx={{
                                                bgcolor:
                                                    patient.status === 'Verified'
                                                        ? mode === 'light'
                                                            ? '#D1FAE5'
                                                            : '#065F46'
                                                        : mode === 'light'
                                                            ? '#FEF3C7'
                                                            : '#92400E',
                                                color:
                                                    patient.status === 'Verified'
                                                        ? mode === 'light'
                                                            ? '#065F46'
                                                            : '#D1FAE5'
                                                        : mode === 'light'
                                                            ? '#92400E'
                                                            : '#FEF3C7',
                                                fontWeight: 600,
                                                fontSize: '0.6875rem',
                                                height: 22,
                                                borderRadius: '6px',
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}

                            {filteredPatients.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={9} align="center" sx={{ py: 3 }}>
                                        <Typography fontSize="0.75rem" color="text.secondary">
                                            No patients found
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

            </CardContent>
        </Card>
    );
};

export default RecentPatientsTable;
