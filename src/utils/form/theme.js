import { createTheme } from '@mui/material';
import { primary, neutral } from '../theme/theme';

const theme = createTheme({
  components: {
    // Calendar container box
    MuiPickersLayout: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[50],
        },
      },
    },

    // Calendar header text
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          color: neutral[600],
        },
      },
    },
  },
});

export default theme;
