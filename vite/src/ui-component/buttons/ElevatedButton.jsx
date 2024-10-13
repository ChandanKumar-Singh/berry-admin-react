// UpdateButton.js
import React from 'react';
import { Button } from '@mui/material';

const ElevatedButton = ({ title, onClick, loading, enabled }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            disabled={loading || !onClick || (enabled !== undefined ? true : !enabled)}
            size='small'
        >
            {title}
        </Button>
    );
};

export default ElevatedButton;
