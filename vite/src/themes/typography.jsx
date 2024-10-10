/**
 * Typography settings for the theme
 * @param {Object} theme - Theme customization object containing typography settings.
 * @returns {Object} - An object containing typography styles for Material-UI components.
 */

export default function themeTypography(theme) {
  // Provide a default value for shadows if not defined
  const shadows = theme?.shadows || ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'];

  return {
    fontFamily: theme?.customization?.fontFamily || "'Roboto', sans-serif", // Default font family
    h1: {
      fontSize: '2.125rem',
      fontWeight: 700,
      color: theme.heading,
      lineHeight: '1.2', // Improved line height for readability
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: theme.heading,
      lineHeight: '1.3',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: theme.heading,
      lineHeight: '1.4',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 600,
      color: theme.heading,
      lineHeight: '1.5',
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.heading,
      lineHeight: '1.5',
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 500,
      color: theme.heading,
      lineHeight: '1.6',
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.textDark,
      lineHeight: '1.4', // Consistent line height
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: theme.darkTextSecondary,
      lineHeight: '1.5',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: theme.darkTextSecondary,
      lineHeight: '1.6',
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em',
    },
    body2: {
      fontSize: '0.875rem', // Unified font size for body text
      fontWeight: 400,
      lineHeight: '1.5em',
      color: theme.darkTextPrimary,
    },
    button: {
      textTransform: 'capitalize', // Maintain standard button case
      fontWeight: 500, // Added weight for button text
      lineHeight: '1.75', // Increased line height for better touch target
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      '& > label': {
        top: 23,
        left: 0,
        color: theme.grey500,
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      '& > div > input': {
        padding: '30.5px 14px 11.5px !important',
      },
      '& legend': {
        display: 'none',
      },
      '& fieldset': {
        top: 0,
      },
    },
    mainContent: {
      backgroundColor: theme.background,
      width: '100%',
      minHeight: 'calc(100vh - 88px)',
      flexGrow: 1,
      padding: '20px',
      marginTop: '88px',
      marginRight: '20px',
      borderRadius: `${theme?.customization?.borderRadius}px`,
      boxShadow: shadows[1], // Added shadow for depth
    },
    menuCaption: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.heading,
      padding: '6px',
      textTransform: 'capitalize',
      marginTop: '10px',
    },
    subMenuCaption: {
      fontSize: '0.6875rem',
      fontWeight: 500,
      color: theme.darkTextSecondary,
      textTransform: 'capitalize',
    },
    commonAvatar: {
      cursor: 'pointer',
      borderRadius: '8px',
      border: `1px solid ${theme.colors?.grey200}`, // Border for clarity
    },
    smallAvatar: {
      width: '22px',
      height: '22px',
      fontSize: '1rem',
    },
    mediumAvatar: {
      width: '34px',
      height: '34px',
      fontSize: '1.2rem',
    },
    largeAvatar: {
      width: '44px',
      height: '44px',
      fontSize: '1.5rem',
    },
    // New styles for emphasis and accessibility
    emphasis: {
      fontSize: '1rem',
      fontWeight: 600,
      color: theme.heading,
      textDecoration: 'underline', // Emphasized text style
    },
    errorMessage: {
      fontSize: '0.75rem',
      color: theme.colors?.errorMain,
      fontWeight: 400,
      lineHeight: '1.5',
    },
    link: {
      fontSize: '0.875rem',
      color: theme.colors?.primaryMain,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline', // Underline on hover
      },
    },
    // Additional styles for list items
    listItemText: {
      fontSize: '0.875rem',
      color: theme.textDark,
    },
  };
}
