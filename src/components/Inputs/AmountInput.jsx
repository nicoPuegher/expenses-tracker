import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';
import StyledTextField from './StyledTextField';

function AmountInput({ value, onChange, error, helperText }) {
  return (
    <StyledTextField
      id="outlined-basic"
      name="amount"
      type="number"
      label="Amount"
      value={value}
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      onChange={(e) => onChange(e.target)}
      onBlur={(e) => onChange(e.target)}
      error={error}
      helperText={helperText}
      fullWidth
      required
    />
  );
}

AmountInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};

export default AmountInput;
