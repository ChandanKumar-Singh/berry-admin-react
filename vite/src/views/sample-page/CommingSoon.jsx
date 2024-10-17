import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';

const ComingSoonPage = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`, // Using theme colors
                    color: theme.palette.common.white,
                    textAlign: 'center',
                    padding: theme.spacing(4),
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        marginBottom: theme.spacing(2),
                    }}
                >
                    Coming Soon
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '1.5rem',
                        marginBottom: theme.spacing(4),
                    }}
                >
                    We're working hard to bring you something amazing. Stay tuned!
                </Typography>
                <Button
                    sx={{
                        padding: theme.spacing(1.5, 4),
                        borderRadius: '50px',
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.common.white,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        transition: '0.3s ease',
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.dark,
                        },
                    }}
                >
                    Notify Me
                </Button>
            </Box>
        </Container>
    );
};

export default ComingSoonPage;
