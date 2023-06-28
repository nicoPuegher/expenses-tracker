import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function AmountInput() {
  return (
    <TextField
      id="outlined-basic"
      label="Amount"
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      fullWidth
    />
  );
}

export default AmountInput;
