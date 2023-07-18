import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiPickersLayout: {
      styleOverrides: {
        root: {
          backgroundColor: 'green',
        },
      },
    },
  },
});

export default theme;
