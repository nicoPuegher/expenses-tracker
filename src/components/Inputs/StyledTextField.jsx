import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  '& label': { color: '#6b7280' }, // gray-500
  '& label.Mui-error': { color: '#f87171' }, // red-400
  '& label span.Mui-error': { color: '#f87171' }, // red-400
  '& p.Mui-error': { color: '#f87171' }, // red-400
  '& .MuiOutlinedInput-root.Mui-error': {
    '& fieldset': { 'border-color': '#f87171' }, // red-400
  },
  '& .MuiOutlinedInput-root.Mui-error.Mui-focused': {
    '& fieldset': { 'border-color': '#f87171' }, // red-400
  },
});

export default StyledTextField;
