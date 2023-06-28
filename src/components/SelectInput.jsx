import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import typesList from '../utils/types-list';

function SelectInput({ onChange }) {
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
      onChange={onChange}
      fullWidth
      select
    >
      {selectList}
    </TextField>
  );
}

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
