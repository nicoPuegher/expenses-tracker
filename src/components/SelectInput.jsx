import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import typesList from '../utils/types-list';

function SelectInput({ onChange, error, helperText }) {
  const selectList = typesList.map((type) => (
    <MenuItem key={type.value} value={type.value}>
      {type.value}
    </MenuItem>
  ));

  return (
    <TextField
      id="outlined-basic"
      name="type"
      label="Type"
      variant="outlined"
      size="small"
      defaultValue=""
      onChange={(e) => onChange(e.target)}
      onBlur={(e) => onChange(e.target)}
      error={error}
      helperText={helperText}
      fullWidth
      select
      required
    >
      {selectList}
    </TextField>
  );
}

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};

export default SelectInput;
