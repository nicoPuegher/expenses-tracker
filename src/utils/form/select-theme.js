import { createTheme } from '@mui/material';
import { neutral } from '../theme/theme';

const selectTheme = createTheme({
  components: {
    // Select list parent
    MuiList: {
      styleOverrides: {
        root: {
          color: neutral[600],
          backgroundColor: neutral[50],
        },
      },
    },
  },
});

export default selectTheme;
