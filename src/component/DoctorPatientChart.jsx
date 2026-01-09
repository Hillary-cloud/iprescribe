import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import {
  Box,
  Paper,
  Typography,
  Stack,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

/* ===============================
   Custom Tooltip (MUI Styled)
================================ */
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        p: 1.5,
        borderRadius: 1.5,
        minWidth: 160,
      }}
    >
      <Typography
        variant="caption"
        sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}
      >
        {label}
      </Typography>

      <Stack spacing={0.5}>
        {payload.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="caption" color="text.secondary">
              {item.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontWeight: 600, color: item.fill }}
            >
              {item.value}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
};

/* ===============================
   DoctorPatientChart Component
================================ */
const DoctorPatientChart = ({ data = [] }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        p: 3,
        border: '1px solid',
        borderColor: 'grey.200',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="space-between"
        mb={3}
      >
        <Typography fontWeight={600}>
          Active Doctors vs Active Patients
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Stack direction="row" spacing={1} alignItems="center">
            <FiberManualRecordIcon sx={{ fontSize: 12, color: '#F59E0B' }} />
            <Typography variant="caption">Doctors</Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <FiberManualRecordIcon sx={{ fontSize: 12, color: '#06B6D4' }} />
            <Typography variant="caption">Patients</Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Chart */}
      <Box sx={{ width: '100%', height: { xs: 220, sm: 180, } }}>
        <ResponsiveContainer>
          <BarChart data={data} barGap={4}>
            <CartesianGrid stroke="#F3F4F6" vertical={false} />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: '#6B7280' }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 11, fill: '#6B7280' }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="doctors"
              name="Doctors"
              fill="#F59E0B"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />

            <Bar
              dataKey="patients"
              name="Patients"
              fill="#06B6D4"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};


export default DoctorPatientChart;
