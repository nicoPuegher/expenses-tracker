import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';

function AmountInput({ onChange }) {
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
      onChange={onChange}
      fullWidth
    />
  );
}

AmountInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default AmountInput;
