import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const gray = '#6b7280'; // gray-500
const slate = '#334155'; // slate-700
const red = '#f87171'; // red-400
const indigo = '#818cf8'; // indigo-400

const StyledTextField = styled(TextField)({
  // Default
  '& label': { color: gray },
  '& div input': { color: slate },

  // Error
  '& label.Mui-error': { color: red },
  '& label span.Mui-error': { color: red },
  '& p.Mui-error': { color: red },
  '& .MuiOutlinedInput-root.Mui-error': {
    '& fieldset': { 'border-color': red },
  },

  // Error & Focus
  '& label.Mui-error.Mui-focused': { color: red },
  '& label span.Mui-error.Mui-focused': { color: red },
  '& .MuiOutlinedInput-root.Mui-error.Mui-focused': {
    '& fieldset': { 'border-color': red },
  },

  // Focus
  '& label.Mui-focused': { color: indigo },
  '& label span.Mui-focused': { color: indigo },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& fieldset': { 'border-color': indigo },
  },
});

export default StyledTextField;
