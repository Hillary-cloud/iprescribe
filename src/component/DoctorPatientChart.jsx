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
        backgroundColor: '#fff',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: 'grey.900' }}
        >
          Active Doctors vs Active Patients
        </Typography>

        {/* Legend */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <FiberManualRecordIcon sx={{ fontSize: 12, color: '#F59E0B' }} />
            <Typography variant="caption" color="text.secondary">
              Doctors
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <FiberManualRecordIcon sx={{ fontSize: 12, color: '#06B6D4' }} />
            <Typography variant="caption" color="text.secondary">
              Patients
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* Chart */}
      <Box sx={{ width: '100%', height: 150 }}>
        <ResponsiveContainer>
          <BarChart data={data} barGap={0}>
            <CartesianGrid
              stroke="#F3F4F6"
              vertical={false}
            />

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

            {/* Hover Summary */}
            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="doctors"
              name="Doctors"
              fill="#F59E0B"
              radius={[4, 4, 0, 0]}
              barSize={8}
            />

            <Bar
              dataKey="patients"
              name="Patients"
              fill="#06B6D4"
              radius={[4, 4, 0, 0]}
              barSize={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default DoctorPatientChart;
