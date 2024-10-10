/**
 * Color intention that you want to use in your theme.
 * This function defines the color palette for the Material-UI theme,
 * allowing for comprehensive customization and theming options.
 * 
 * @param {Object} theme - Theme customization object containing color and typography settings.
 * @returns {Object} - A palette object for use in the Material-UI theme.
 */
export default function themePalette(theme) {
  return {
    // Theme mode (light or dark)
    mode: theme?.customization?.navType || 'light',

    // Common colors for the theme
    common: {
      black: theme.colors?.darkPaper || '#000000', // Default to black if undefined
      white: theme.colors?.lightPaper || '#FFFFFF', // Adding common white color
    },

    // Primary color definitions
    primary: {
      light: theme.colors?.primaryLight || '#FFE0B2', // Default light color
      main: theme.colors?.primaryMain || '#F06D32', // Default main primary color
      dark: theme.colors?.primaryDark || '#C75B22', // Default dark primary color
      200: theme.colors?.primary200 || '#F8BBD0', // Light shade variant
      800: theme.colors?.primary800 || '#A63A2D' // Dark shade variant
    },

    // Secondary color definitions
    secondary: {
      light: theme.colors?.secondaryLight || '#FFEB3B', // Default light color
      main: theme.colors?.secondaryMain || '#F6AF5EFF', // Default main secondary color
      dark: theme.colors?.secondaryDark || '#F57F20', // Default dark secondary color
      200: theme.colors?.secondary200 || '#FFF176', // Light shade variant
      800: theme.colors?.secondary800 || '#F9A825' // Dark shade variant
    },

    // Error color definitions
    error: {
      light: theme.colors?.errorLight || '#EF5350',
      main: theme.colors?.errorMain || '#F44336',
      dark: theme.colors?.errorDark || '#C62828'
    },

    // Orange color definitions (if needed for custom usage)
    orange: {
      light: theme.colors?.orangeLight || '#FFCC80',
      main: theme.colors?.orangeMain || '#FF9800',
      dark: theme.colors?.orangeDark || '#F57C00'
    },

    // Warning color definitions
    warning: {
      light: theme.colors?.warningLight || '#FFEB3B',
      main: theme.colors?.warningMain || '#FFC107',
      dark: theme.colors?.warningDark || '#FFA000'
    },

    // Success color definitions
    success: {
      light: theme.colors?.successLight || '#81C784',
      200: theme.colors?.success200 || '#A5D6A7',
      main: theme.colors?.successMain || '#4CAF50',
      dark: theme.colors?.successDark || '#388E3C'
    },

    // Grey color definitions
    grey: {
      50: theme.colors?.grey50 || '#FAFAFA',
      100: theme.colors?.grey100 || '#F5F5F5',
      500: theme.darkTextSecondary || '#9E9E9E',
      600: theme.heading || '#757575',
      700: theme.darkTextPrimary || '#616161',
      900: theme.textDark || '#212121'
    },

    // Dark color definitions (for dark mode)
    dark: {
      light: theme.colors?.darkTextPrimary || '#BDBDBD',
      main: theme.colors?.darkLevel1 || '#424242',
      dark: theme.colors?.darkLevel2 || '#212121',
      800: theme.colors?.darkBackground || '#303030',
      900: theme.colors?.darkPaper || '#212121'
    },

    // Text color definitions
    text: {
      primary: theme.darkTextPrimary || '#212121', // Default to dark primary text color
      secondary: theme.darkTextSecondary || '#757575', // Default to dark secondary text color
      dark: theme.textDark || '#000000', // Default to black for dark text
      hint: theme.colors?.grey100 || '#BDBDBD' // Hint text color
    },

    // Background color definitions
    background: {
      paper: theme.paper || '#FFFFFF', // Default to white paper color
      default: theme.backgroundDefault || '#F5F5F5' // Default background color
    }
  };
}
