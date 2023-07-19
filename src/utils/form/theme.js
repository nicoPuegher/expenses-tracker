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

    // Calendar header arrow button
    MuiPickersCalendarHeader: {
      styleOverrides: {
        switchViewButton: {
          color: neutral[400],
        },
      },
    },

    // Calendar header previous & next buttons
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        button: {
          color: neutral[400],
        },
      },
    },

    // Calendar header year selected & hover
    MuiPickersYear: {
      styleOverrides: {
        yearButton: {
          '&.Mui-selected': {
            color: primary[50],
            backgroundColor: primary[400],
          },
          '&:hover.Mui-selected': {
            backgroundColor: primary[500],
          },
          '&:focus-within.Mui-selected': {
            backgroundColor: primary[400],
          },
        },
      },
    },

    // Calendar header month
    MuiPickersMonth: {
      styleOverrides: {
        monthButton: {
          '&.Mui-selected': {
            color: primary[50],
            backgroundColor: primary[400],
          },
          '&:hover.Mui-selected': {
            backgroundColor: primary[500],
          },
          '&:focus-within.Mui-selected': {
            backgroundColor: primary[400],
          },
        },
      },
    },
  },
});

export default theme;
