import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

const NotFound = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        bgcolor: '#f5f5f5', // Light background
        padding: 3,
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="h5" sx={{ margin: '20px 0', color: '#555' }}>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <Box>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{ margin: '10px' }}
          startIcon={<HomeIcon />}
        >
          Go Back to Home
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ margin: '10px' }}
          onClick={goBack}
        >
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
