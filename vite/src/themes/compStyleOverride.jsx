import { sizing } from "@mui/system";
import { paddingDefault } from "store/constant";

/**
 * Customizes Material-UI component styles for the application theme.
 * This function returns an object that overrides default styles for various
 * Material-UI components, allowing for a more cohesive look and feel.
 *
 * @param {Object} theme - Theme customization object containing color and typography settings.
 * @returns {Object} - An object containing style overrides for Material-UI components.
 */
export default function componentStyleOverrides(theme) {
  const bgColor = theme.colors?.grey50 || '#F5F5F5'; // Default background color

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600, // Enhanced font weight for emphasis
          borderRadius: '30px', // Softer, rounded corners
          textTransform: 'none', // Avoid uppercase text
          padding: '10px 20px', // Comfortable padding
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Add shadow for a raised effect
          transition: 'all 0.3s ease-in-out', // Smooth transition for interactive states

          // Dynamic background and border based on the button variant and theme mode
          backgroundColor: theme.colors.primaryMain,
          color: theme.colors.primaryContrast,

          // Hover effects
          '&:hover': {
            backgroundColor: theme.colors.primaryDark, // Darken background on hover
            boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
          },

          // Active state for better user feedback
          '&:active': {
            backgroundColor: theme.colors.primaryDark, // Darken background on active state
            boxShadow: 'none', // Remove shadow on active state
          },

          // Disabled state for non-interactive buttons
          '&:disabled': {
            backgroundColor: theme.colors.grey300, // Adjust background color when disabled
            color: theme.colors.grey500, // Adjust text color when disabled
            boxShadow: 'none', // Remove shadow when disabled
          },
        },

        // Variant styles (outlined buttons)
        outlined: {
          borderColor: theme.colors.primaryMain, // Border color for outlined buttons
          color: theme.colors.primaryMain, // Text color for outlined buttons

          '&:hover': {
            borderColor: theme.colors.primaryDark, // Darken border on hover
            color: theme.colors.primaryDark, // Darken text color on hover
          }
        },

        // Size variants (small, medium, large)
        sizeSmall: {
          padding: '6px 16px', // Small padding for smaller buttons
          fontSize: '0.875rem' // Slightly smaller font size
        },
        sizeLarge: {
          padding: '12px 24px', // Larger padding for bigger buttons
          fontSize: '1.125rem' // Larger font size
        },

        // Button start and end icons with spacing adjustments
        startIcon: {
          marginRight: theme.spacing(1), // Adjust spacing between icon and text
        },
        endIcon: {
          marginLeft: theme.spacing(1), // Adjust spacing for end icons
        },
      },
    },


    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: `${theme.customization?.borderRadius}px`, // Make paper corners rounded
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors?.textDark,
          padding: '24px',
          borderBottom: `1px solid ${theme.colors?.grey200}`, // Add a bottom border
        },
        title: {
          fontSize: '1.125rem',
          fontWeight: 600, // Slightly bolder title
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: `${paddingDefault}px`, // Default padding for content
          backgroundColor: bgColor, // Use background color
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px',
          justifyContent: 'flex-end', // Align actions to the right
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.menuSelected,
            backgroundColor: theme.menuSelectedBack,
            '&:hover': {
              backgroundColor: theme.menuSelectedBack,
            },
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected,
            },
          },
          '&:hover': {
            backgroundColor: theme.menuSelectedBack,
            color: theme.menuSelected,
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          minWidth: '36px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          '&::placeholder': {
            color: theme.darkTextSecondary,
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: `${theme.customization?.borderRadius}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors?.grey400,
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors?.primaryLight,
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: '15.5px 14px',
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `${theme.customization?.borderRadius}px`,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors?.grey300,
          },
        },
        mark: {
          backgroundColor: theme.paper,
          width: '4px',
        },
        valueLabel: {
          color: theme.colors?.primaryLight,
          background: theme.colors?.grey700, // Background for value label
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors?.primaryDark,
          background: theme.colors?.primary200,
          border: `2px solid ${theme.colors?.grey200}`, // Border around avatars
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit',
          },
          borderRadius: '16px', // Round chips
          fontWeight: 500,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors?.grey700,
          fontSize: '0.875rem', // Slightly smaller tooltip font
        },
      },
    },
  };
}
