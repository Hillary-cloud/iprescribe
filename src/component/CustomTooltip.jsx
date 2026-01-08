import { Paper, Typography, Stack } from '@mui/material';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        p: 1.5,
        borderRadius: 1.5,
        minWidth: 140,
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
