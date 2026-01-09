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
import useThemeStore from '../store/themeStore';

/* ===============================
   Custom Tooltip
================================ */
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;

  const { name, color } = payload[0].payload;

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
  const mode = useThemeStore((state) => state.mode);
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const topValue = data[0]?.value || 0;
  const percent = total ? Math.round((topValue / total) * 100) : 0;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        border: '1px solid',
        borderColor: mode === 'light' ? 'grey.200' : 'grey.300',
        bgcolor: 'background.paper',
        overflow: 'hidden',
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

      {/* Main Layout */}
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{
          minHeight: { xs: 'auto', md: 180 },
        }}
      >
        {/* Chart Container */}
        <Box 
          sx={{ 
            position: 'relative', 
            width: { xs: 180, sm: 160, md: 140 }, 
            height: { xs: 180, sm: 160, md: 140 },
            flexShrink: 0,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius="55%"
                outerRadius="85%"
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
              pointerEvents: 'none',
            }}
          >
            <Typography 
              fontSize={{ xs: '1.25rem', md: '1.1rem' }}
              fontWeight={700}
              color="text.primary"
            >
              {percent}%
            </Typography>
          </Box>
        </Box>

        {/* Legend */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 1,
            width: '100%',
          }}
        >
          {data.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
            >
              <Stack direction="row" spacing={0.75} alignItems="center" flex={1}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: item.color,
                    flexShrink: 0,
                  }}
                />
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{
                    fontSize: '0.7rem',
                    lineHeight: 1.2,
                  }}
                >
                  {item.name}
                </Typography>
              </Stack>

              <Typography
                variant="caption"
                fontWeight={600}
                color="text.primary"
                sx={{ 
                  fontSize: '0.75rem',
                  minWidth: '18px',
                  textAlign: 'right',
                }}
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