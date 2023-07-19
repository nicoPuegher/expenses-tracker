import { createTheme } from '@mui/material';

const slate50 = '#f8fafc';
const slate700 = '#334155';
const slate400 = '#94a3b8';
const red400 = '#f87171';
const indigo400 = '#818cf8';

const theme = createTheme({
  components: {
    // Calendar container box
    MuiPickersLayout: {
      styleOverrides: {
        root: {
          backgroundColor: slate50,
        },
      },
    },
  },
});

export default theme;
