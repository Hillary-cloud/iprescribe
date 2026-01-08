import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Box,
  Stack,
  Typography,
  Paper,
} from '@mui/material';

/* ===============================
   Custom Tooltip (Dark)
================================ */
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;

  const { name, value, color } = payload[0].payload;

  return (
    <Paper
      elevation={4}
      sx={{
        px: 1.5,
        py: 0.75,
        borderRadius: 1,
        bgcolor: '#1F2937',
        color: '#fff',
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: color,
          }}
        />
        <Typography variant="caption">{name}</Typography>
      </Stack>
    </Paper>
  );
};

/* ===============================
   Chart Component
================================ */
const SpecializationChart = ({ data = [] }) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const topValue = data[0]?.value || 0;
  const percent = Math.round((topValue / total) * 100);

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      {/* Title */}
      <Typography
        variant="body2"
        fontWeight={600}
        color="text.primary"
        mb={2}
      >
        Top Specialties in Demand
      </Typography>

      <Stack direction="row" spacing={3} alignItems="center">
        {/* Chart */}
        <Box sx={{ position: 'relative', width: 160, height: 160 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={52}
                outerRadius={70}
                paddingAngle={2}
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <Typography fontSize="1.1rem" fontWeight={700}>
              {percent}%
            </Typography>
          </Box>
        </Box>

        {/* Legend */}
      
<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 1.5,
    flex: 1,
  }}
>
  {data.map((item) => (
    <Stack
      key={item.name}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: item.color,
          }}
        />
        <Typography variant="caption" color="text.secondary">
          {item.name}
        </Typography>
      </Stack>

      <Typography
        variant="caption"
        fontWeight={600}
        color="text.primary"
      >
        {item.value}
      </Typography>
    </Stack>
  ))}
</Box>

      </Stack>
    </Paper>
  );
};

export default SpecializationChart;
