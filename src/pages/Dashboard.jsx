import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import DashboardHeader from '../component/DashboardHeader';
import StatCard from '../component/StatCard';
import ConsultationChart from '../component/ConsultationChart';
import PrescriptionChart from '../component/PrescriptionChart';
import DoctorPatientChart from '../component/DoctorPatientChart';
import SpecializationChart from '../component/SpecializationChart';
import RecentPatientsTable from '../component/RecentPatientsTable';
import ErrorMessage from '../component/ErrorMessage';
import useDashboardData from '../hooks/useDashboardData';

const DashboardContent = () => {
  const { data, isLoading, isError } = useDashboardData();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          p: 3,
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={60} thickness={4} sx={{ mb: 2 }} />
          <Typography variant="body1" color="text.secondary">
            Loading dashboard data...
          </Typography>
        </Box>
      </Box>
    );
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3, lg: 4 },
        bgcolor: 'grey.50',
        minHeight: '100vh',
      }}
    >
      <DashboardHeader />

      {/* Stats Grid - Responsive: 1 column on xs, 2 on sm, 3 on md, 5 on lg */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(5, 1fr)',
          },
          gap: 2,
          mb: 3,
        }}
      >
        {data.stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </Box>

      {/* Charts Row 1 - Responsive: Stack on small, side-by-side on large */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            lg: 'repeat(2, 1fr)',
          },
          gap: 3,
          mb: 3,
        }}
      >
        <ConsultationChart data={data.consultationTrend} />
        <PrescriptionChart data={data.prescriptionTrend} />
      </Box>

      {/* Charts Row 2 - Responsive: Stack on small, 2:1 ratio on large */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            lg: '2fr 1fr',
          },
          gap: 3,
          mb: 3,
        }}
      >
        <DoctorPatientChart data={data.activeDoctors} />
        <SpecializationChart data={data.specializations} />
      </Box>

      {/* Recent Patients */}
      <RecentPatientsTable patients={data.recentPatients} />
    </Box>
  );
};

export default DashboardContent;