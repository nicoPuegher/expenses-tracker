import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import { primary, neutral } from '../../utils/theme/theme';

const sharedStyles = {
  // Default
  '& label': { color: neutral[400] },
  '& label span': { color: neutral[400] },
  '& div input': { color: neutral[600] },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: neutral[400] },
  },
  '& .MuiTypography-root': {
    color: neutral[400],
    lineHeight: 1,
    marginTop: '2px',
  },
  '& .MuiSvgIcon-root': { color: neutral[400] },
};

const StyledTextField = styled(TextField)({
  ...sharedStyles,
});

const StyledDatePicker = styled(DatePicker)({
  ...sharedStyles,
});

export { StyledTextField, StyledDatePicker };
