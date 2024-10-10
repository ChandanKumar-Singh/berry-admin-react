import { ButtonBase } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
        Go Back to Home
      </Link>
      {/* /// go back  */}
      <ButtonBase style={{ marginTop: '20px' }} onClick={goBack}>
        Go Back to Home
      </ButtonBase>
    </div>
  );
};

export default NotFound;
