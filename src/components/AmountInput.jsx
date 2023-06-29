import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';

function AmountInput({ onChange, error, helperText }) {
  return (
    <TextField
      id="outlined-basic"
      name="amount"
      label="Amount"
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
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};

export default AmountInput;
