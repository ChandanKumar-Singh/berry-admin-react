import { CheckCircleRounded, Clear, ErrorRounded, InfoRounded, WarningRounded } from '@mui/icons-material';
import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IconReplace } from '@tabler/icons-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastPosition = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};

class Toasts {
  constructor() {
    // General default options with box-shadow and denser padding
    this.defaultOptions = {
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'custom-toast',
      style: {
        boxShadow: '-10px -10px 100px #BCABABFF', // 3D effect
        padding: '12px 16px',
        margin: '10px',
        fontSize: '1rem',
        backgroundColor: '#FFFFFF',
        color: '#000000'
      },
      position: toastPosition.TOP_RIGHT
    };

    // Specific default options for each toast type
    this.successOptions = {
      autoClose: 3000,
      icon: <CheckCircleRounded sx={{ color: 'green' }} />,
      ...this.defaultOptions
    };

    this.errorOptions = {
      position: toastPosition.BOTTOM_CENTER,
      autoClose: 5000,
      hideProgressBar: true,
      icon: <ErrorRounded sx={{ color: 'red' }} />,
      ...this.defaultOptions
    };

    this.infoOptions = {
      autoClose: 4000,
      icon: <InfoRounded sx={{ color: 'blue' }} />,
      ...this.defaultOptions
    };

    this.warningOptions = {
      autoClose: 6000,
      icon: <WarningRounded sx={{ color: 'orange' }} />,
      ...this.defaultOptions
    };
  }

  // Toast methods
  s(message, options = {}) {
    toast.success(this.renderToastContent(message, this.successOptions), { ...this.successOptions, ...options });
  }

  e(message, options = {}) {
    toast.error(this.renderToastContent(message, this.errorOptions), { ...this.errorOptions, ...options });
  }

  i(message, options = {}) {
    toast.info(this.renderToastContent(message, this.infoOptions), { ...this.infoOptions, ...options });
  }

  w(message, options = {}) {
    toast.warn(this.renderToastContent(message, this.warningOptions), { ...this.warningOptions, ...options });
  }

  d(message, options = {}) {
    toast(message, { ...this.defaultOptions, ...options });
  }

  custom(content, options = {}) {
    toast(content, { ...this.defaultOptions, ...options });
  }

  // Render Toast Content
  renderToastContent(message, icon) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'start' }}>
        <Typography sx={{ flexGrow: 1, paddingLeft: '8px', fontWeight: 500 }}>{message}</Typography>
        <Clear size={50} />
      </Box>
    );
  }
}

export const toasts = new Toasts();

export const ToastContent = ({ message, type, onRetry }) => {
  const iconByType = {
    success: <CheckCircleRounded sx={{ color: 'green' }} />,
    error: <ErrorRounded sx={{ color: 'red' }} />,
    info: <InfoRounded sx={{ color: 'blue' }} />,
    warning: <WarningRounded sx={{ color: 'orange' }} />,
    loading: <CircularProgress size={24} sx={{ color: 'gray' }} />
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'
      }}
    >
      {/* Icon Based on Type */}
      {/* <Box>{iconByType[type]}</Box> */}

      {/* Message */}
      <Typography sx={{ flexGrow: 1, fontWeight: 500, fontSize: '16px', color: '#000000' }}>{message}</Typography>

      {/* Optional Retry Button */}
      {onRetry && (
        <Button
          onClick={onRetry}
          sx={{
            ml: 2,
            backgroundColor: 'gray',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'darkgray'
            }
          }}
          variant="contained"
          size="small"
        >
          Retry
        </Button>
      )}
    </Box>
  );
};
