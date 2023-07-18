import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';

const slate700 = '#334155';
const slate400 = '#94a3b8';
const red400 = '#f87171';
const indigo400 = '#818cf8';

const StyledTextField = styled(TextField)({
  // Default
  '& label': { color: slate400 },
  '& label span': { color: slate400 },
  '& div input': { color: slate700 },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: slate400 },
  },
  '& .MuiTypography-root': { color: slate400 },

  // Hover
  '&:hover .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: slate700 },
  },

  // Error
  '& label.Mui-error': { color: red400 },
  '& label span.Mui-error': { color: red400 },
  '& p.Mui-error': { color: red400 },
  '& .MuiOutlinedInput-root.Mui-error': {
    '& fieldset': { borderColor: red400 },
    '& .MuiTypography-root': { color: red400 },
  },

  // Error & Focus
  '& label.Mui-error.Mui-focused': { color: red400 },
  '& label span.Mui-error.Mui-focused': { color: red400 },
  '& .MuiOutlinedInput-root.Mui-error.Mui-focused': {
    '& fieldset': { borderColor: red400 },
    '& .MuiTypography-root': { color: red400 },
  },

  // Focus
  '& label.Mui-focused': { color: indigo400 },
  '& label span.Mui-focused': { color: indigo400 },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& fieldset': { borderColor: indigo400 },
    '& .MuiTypography-root': { color: indigo400 },
  },
});

const StyledDatePicker = styled(DatePicker)({
  // Default
  '& label': { color: slate400 },
  '& label span': { color: slate400 },
  '& div input': { color: slate700 },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: slate400 },
  },
  '& .MuiTypography-root': { color: slate400 },
  '& .MuiSvgIcon-root': { color: slate400 },

  // Hover
  '&:hover .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: slate700 },
  },

  // Error
  '& label.Mui-error': { color: red400 },
  '& label span.Mui-error': { color: red400 },
  '& p.Mui-error': { color: red400 },
  '& .MuiOutlinedInput-root.Mui-error': {
    '& fieldset': { borderColor: red400 },
    '& .MuiTypography-root': { color: red400 },
    '& .MuiSvgIcon-root': { color: red400 },
  },

  // Error & Focus
  '& label.Mui-error.Mui-focused': { color: red400 },
  '& label span.Mui-error.Mui-focused': { color: red400 },
  '& .MuiOutlinedInput-root.Mui-error.Mui-focused': {
    '& fieldset': { borderColor: red400 },
    '& .MuiTypography-root': { color: red400 },
  },

  // Focus
  '& label.Mui-focused': { color: indigo400 },
  '& label span.Mui-focused': { color: indigo400 },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& fieldset': { bordeColor: indigo400 },
    '& .MuiTypography-root': { color: indigo400 },
  },
});

export default StyledTextField;
export { StyledDatePicker };