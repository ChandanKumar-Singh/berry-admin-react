/**
 * Color intention for the Material-UI theme customization.
 * This function allows for defining a complete color palette, enabling a consistent theme throughout the application.
 *
 * @param {Object} theme - Theme customization object containing color, typography, and other settings.
 * @returns {Object} - A palette object for the Material-UI theme.
 */
export default function themePalette(theme) {
  return {
    // Theme mode (light or dark)
    mode: theme?.customization?.navType || 'light',

    // Common colors for the theme
    common: {
      black: theme.colors?.darkPaper || '#000000', // Common black color
      white: theme.colors?.lightPaper || '#FFFFFF' // Common white color
    },

    // Primary color palette with extended variants
    primary: {
      light: theme.colors?.primaryLight || '#FFE0B2', // Light shade of primary
      main: theme.colors?.primaryMain || '#F06D32', // Main primary color
      dark: theme.colors?.primaryDark || '#C75B22', // Dark primary color
      contrastText: theme.colors?.primaryContrast || '#FFFFFF', // Text color on primary backgrounds
      100: theme.colors?.primary100 || '#FFD180', // Lighter variant
      200: theme.colors?.primary200 || '#F8BBD0', // Light shade variant
      500: theme.colors?.primary500 || '#F57C00', // Mid-shade variant
      800: theme.colors?.primary800 || '#A63A2D', // Darker shade variant
    },

    // Secondary color palette with extended variants
    secondary: {
      light: theme.colors?.secondaryLight || '#FFEB3B', // Light shade of secondary
      main: theme.colors?.secondaryMain || '#F6AF5EFF', // Main secondary color
      dark: theme.colors?.secondaryDark || '#F57F20', // Dark secondary color
      contrastText: theme.colors?.secondaryContrast || '#212121', // Text color on secondary backgrounds
      200: theme.colors?.secondary200 || '#FFF176', // Light shade variant
      500: theme.colors?.secondary500 || '#FFB74D', // Mid-shade variant
      800: theme.colors?.secondary800 || '#F9A825', // Darker shade variant
    },

    // Error color palette
    error: {
      light: theme.colors?.errorLight || '#EF5350', // Light error color
      main: theme.colors?.errorMain || '#F44336', // Main error color
      dark: theme.colors?.errorDark || '#C62828', // Dark error color
      contrastText: '#FFFFFF' // Ensure legibility on error backgrounds
    },

    // Success color palette for positive messages
    success: {
      light: theme.colors?.successLight || '#81C784', // Light success color
      main: theme.colors?.successMain || '#4CAF50', // Main success color
      dark: theme.colors?.successDark || '#388E3C', // Dark success color
      contrastText: '#FFFFFF' // Text color for success backgrounds
    },

    // Warning color palette for alerts
    warning: {
      light: theme.colors?.warningLight || '#FFEB3B', // Light warning color
      main: theme.colors?.warningMain || '#FFC107', // Main warning color
      dark: theme.colors?.warningDark || '#FFA000', // Dark warning color
      contrastText: '#212121' // Text color for warning backgrounds
    },

    // Grey color palette for neutral and background elements
    grey: {
      50: theme.colors?.grey50 || '#FAFAFA',
      100: theme.colors?.grey100 || '#F5F5F5',
      300: theme.colors?.grey300 || '#E0E0E0', // Added lighter grey variant
      500: theme.darkTextSecondary || '#9E9E9E',
      600: theme.heading || '#757575',
      700: theme.darkTextPrimary || '#616161',
      900: theme.textDark || '#212121',
    },

    // Background color palette with additional layers for different surfaces
    background: {
      paper: theme.colors?.backgroundPaper || '#FFFFFF', // Main paper background
      default: theme.colors?.backgroundDefault || '#F5F5F5', // Default background
      level1: theme.colors?.backgroundLevel1 || '#FAFAFA', // Extra background level
      level2: theme.colors?.backgroundLevel2 || '#F0F0F0', // Secondary background level
    },

    // Text color palette with primary and secondary variants
    text: {
      primary: theme.darkTextPrimary || '#212121', // Text color for primary surfaces
      secondary: theme.darkTextSecondary || '#757575', // Text color for secondary surfaces
      disabled: theme.colors?.textDisabled || '#BDBDBD', // Disabled text color
      hint: theme.colors?.hint || '#BDBDBD', // Color for hint text
      contrastText: theme.colors?.textContrast || '#FFFFFF', // Ensure contrast text for dark backgrounds
    },

    // Divider colors for separating elements
    divider: theme.colors?.divider || '#E0E0E0', // Divider color for consistent separation
  };
}
