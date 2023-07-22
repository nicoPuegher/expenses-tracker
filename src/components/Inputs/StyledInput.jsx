import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import { primary, neutral, error } from '../../utils/theme/theme';

const customBorderWidth = '1px';

const sharedStyles = {
  // Default
  '& label': { color: neutral[400] },
  '& label span': { color: neutral[400] },
  '& div input': { color: neutral[600] },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: neutral[400], borderWidth: customBorderWidth },
    '& .MuiSelect-select': { color: neutral[600] },
  },
  '& .MuiTypography-root': {
    color: neutral[400],
    lineHeight: 1,
    marginTop: '2px',
  },
  '& .MuiSvgIcon-root': { color: neutral[400] },

  // Hover
  '&:hover .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: neutral[600], borderWidth: customBorderWidth },
  },

  // Focus
  '& label.Mui-focused': { color: primary[400] },
  '& label.Mui-focused span': { color: primary[400] },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& fieldset': { borderColor: primary[400], borderWidth: customBorderWidth },
    '& .MuiTypography-root': { color: primary[400] },
    '& .MuiSvgIcon-root': { color: primary[400] },
  },

  // Error
  '& label.Mui-error': { color: error[400] },
  '& label.Mui-error span': { color: error[400] },
  '& p.Mui-error': { color: error[400] },
  '& .MuiOutlinedInput-root.Mui-error': {
    '& fieldset': { borderColor: error[400], borderWidth: customBorderWidth },
    '& .MuiTypography-root': { color: error[400] },
    '& .MuiSvgIcon-root': { color: error[400] },
  },
};

const StyledTextField = styled(TextField)({
  ...sharedStyles,
});

const StyledDatePicker = styled(DatePicker)({
  ...sharedStyles,
});

export { StyledTextField, StyledDatePicker };
