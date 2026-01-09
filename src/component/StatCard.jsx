import React from 'react';
import { Card, CardContent, Box, Typography, Stack } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import people from '../images/people.png';

const StatCard = ({ stat }) => {
    const isPositive = stat.change > 0;
    const Icon = isPositive ? TrendingUpIcon : TrendingDownIcon;

    return (
        <Card
            sx={{
                borderRadius: 1,
                boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                border: '1px solid',
                borderColor: 'grey.100',
                bgcolor: stat.bgColor || '#FFFFFF',
                transition: 'all 0.3s',
                '&:hover': {
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    transform: 'translateY(-2px)',
                },
            }}
        >
            <CardContent
                sx={{
                    p: 1.5,
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1,
                    }}
                >
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={500}
                        sx={{ fontSize: '0.7rem', lineHeight: 1 }}
                    >
                        {stat.title}
                    </Typography>

                    <Box
                        sx={{
                            width: 26,
                            height: 26,
                            borderRadius: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: `${stat.color}15`,
                        }}
                    >
                        <Box
                            component="img"
                            src={people}
                            alt="People Icon"
                            sx={{
                                width: 14,
                                height: 14,
                            }}
                        />
                    </Box>

                </Box>

                {/* Value */}
                <Typography
                    variant="h6"
                    fontWeight={600}
                    color='#333'
                    sx={{ mb: 0.75, lineHeight: 1.2 }}
                >
                    {stat.value}
                </Typography>

                {/* Trend */}
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <Icon
                        sx={{
                            fontSize: 14,
                            color: isPositive ? 'success.main' : 'error.main',
                        }}
                    />
                    <Typography
                        variant="caption"
                        fontWeight={600}
                        sx={{
                            color: isPositive ? 'success.main' : 'error.main',
                            fontSize: '0.7rem',
                            lineHeight: 1,
                        }}
                    >
                        {Math.abs(stat.change * 100).toFixed(1)}%
                    </Typography>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontSize: '10px', lineHeight: 1 }}
                    >
                        {stat.period}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default StatCard;
