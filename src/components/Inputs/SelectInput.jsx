import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import typesList from '../../utils/lists/types-list';
import { StyledTextField } from './StyledInput';

function SelectInput({ value, onChange, error, helperText }) {
  const selectList = typesList.map((type) => (
    <MenuItem key={type.value} value={type.value}>
      {type.value}
    </MenuItem>
  ));

  return (
    <StyledTextField
      id="outlined-basic"
      name="type"
      label="Type"
      value={value}
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
    </StyledTextField>
  );
}

SelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};

export default SelectInput;
