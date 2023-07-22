import { createTheme } from '@mui/material';
import { primary, neutral } from '../theme/theme';

const dateTheme = createTheme({
  typography: {
    fontFamily: 'inherit',
  },

  components: {
    // Main content box
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '0.375rem',
        },
      },
    },

    // Calendar container box
    MuiDialogContent: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[50],
        },
      },
    },

    // Calendar content box
    MuiModal: {
      styleOverrides: {
        root: {
          '@media (max-width: 319px)': {
            '&.MuiDialog-root': {
              margin: '0.5rem',
            },
            '&.MuiDialog-root .MuiDialog-paper': {
              minWidth: '100%',
            },
          },
        },
      },
    },

    // Calendar top toolbar
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          span: {
            color: neutral[400],
          },
          h4: {
            color: primary[400],
          },
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
            color: primary[50],
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
            color: primary[50],
            backgroundColor: primary[400],
          },
        },
      },
    },

    // Calendar body single letter days
    MuiDayCalendar: {
      styleOverrides: {
        weekDayLabel: {
          color: neutral[400],
        },
      },
    },

    // Calendar body number days
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: neutral[600],
          '&:focus-within': {
            color: primary[50],
            borderColor: neutral[600],
            backgroundColor: primary[400],
          },
          '&.Mui-selected': {
            backgroundColor: primary[400],
          },
          '&:hover.Mui-selected': {
            backgroundColor: primary[500],
          },
          '&:focus-within.Mui-selected': {
            color: primary[50],
            backgroundColor: primary[400],
          },
        },
      },
    },

    // Calendar bottom actionbar
    MuiDialogActions: {
      styleOverrides: {
        root: {
          '& button:first-of-type': {
            color: neutral[600],
          },
          '& button:last-of-type': {
            color: primary[400],
          },
        },
      },
    },
  },
});

export default dateTheme;
