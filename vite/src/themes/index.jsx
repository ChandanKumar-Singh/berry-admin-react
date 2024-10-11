import { createTheme } from '@mui/material/styles';

// assets
import colors from 'assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';
import {
  primaryLight,
  primaryMain,
  secondaryMain,
  // Import other colors as needed
} from './colors';

/**
 * Represents the theme style and structure as per Material-UI
 * @param {Object} customization - customization parameter object for dynamic theme modifications
 * @returns {Object} - Returns a Material-UI theme object
 */
export const theme = (customization) => {
  // Retrieve the color variables from the SCSS file
  const color = colors;

  // Define theme options
  const themeOption = {
    // IMPORTANT: Manipulate theme colors from here
    colors: {
      ...color,
      primaryMain: primaryMain, // Main primary color
      secondaryMain: secondaryMain, // Main secondary color
      primaryLight: primaryLight, // Light variant of the primary color
      // Additional colors can be added here
    },
    // Define other theme properties
    heading: color.grey900, // Color for headings
    paper: color.paper, // Background color for paper components
    backgroundDefault: color.paper, // Default background color
    background: color.primaryLight, // Main background color
    /// TODO : Change the background color
    // background: '#197ADBFF', // Main background color
    darkTextPrimary: color.grey700, // Primary dark text color
    darkTextSecondary: color.grey500, // Secondary dark text color
    textDark: color.grey900, // Dark text color for general use
    menuSelected: color.secondaryDark, // Selected menu item color
    menuSelectedBack: color.secondaryLight, // Background color for selected menu items
    divider: color.grey200, // Divider color
    customization, // Customization options passed in
  };

  // Create theme options
  const themeOptions = {
    direction: 'ltr', // Text direction (ltr or rtl)
    palette: themePalette(themeOption), // Define the color palette
    mixins: {
      toolbar: {
        minHeight: '48px', // Minimum height for toolbar
        padding: '16px', // Padding for toolbar
        '@media (min-width: 600px)': {
          minHeight: '48px', // Adjust minimum height for larger screens
        },
      },
    },
    typography: themeTypography(themeOption), // Define typography styles
  };

  // Create the theme using Material-UI's createTheme function
  const themes = createTheme(themeOptions);

  // Apply component style overrides based on the theme options
  themes.components = componentStyleOverrides(themeOption);

  return themes; // Return the complete theme object
};

export default theme;
