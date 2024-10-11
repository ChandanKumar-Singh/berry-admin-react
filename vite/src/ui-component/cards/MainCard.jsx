import PropTypes from 'prop-types';
import React from 'react';

// Material-UI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// Constants
const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 }
};

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = React.forwardRef(
  (
    {
      border = false,
      boxShadow = true,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle = false,
      secondary,
      shadow = '0 2px 14px 0 rgba(32, 40, 45, 0.2)',
      sx = {},
      title,
      elevation = 0, // Adds elevation prop for further customization
      ...others
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        {...others}
        elevation={elevation} // Apply elevation prop
        sx={{
          // margin: 0,
          border: border ? '1px solid' : 'none',
          borderColor: 'divider',
          transition: 'box-shadow 0.3s', // Smooth transition effect
          ':hover': {
            boxShadow: boxShadow ? shadow : 'inherit',
          },
          ...sx
        }}
      >
        {/* Card header and action */}
        {title && (
          <CardHeader
            sx={headerSX}
            title={
              darkTitle ? (
                <Typography variant="h3" color="text.primary">
                  {title}
                </Typography>
              ) : (
                title
              )
            }
            action={secondary}
          />
        )}

        {/* Header divider */}
        {title && <Divider sx={{ mb: content ? 0 : 3 }} />}
        
        {/* Content section */}
        {content && (
          <CardContent sx={contentSX} className={contentClass} >
            {children}
          </CardContent>
        )}
        
        {/* Render children directly if content is false */}
        {!content && children}
      </Card>
    );
  }
);

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  shadow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  elevation: PropTypes.number, // Elevation prop added
};

export default MainCard;
