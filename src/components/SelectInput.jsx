import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import typesList from '../utils/types-list';

function SelectInput() {
  const selectList = typesList.map((type) => (
    <MenuItem key={type.value} value={type.value}>
      {type.value}
    </MenuItem>
  ));

  return (
    <TextField
      id="outlined-basic"
      label="Type"
      variant="outlined"
      size="small"
      defaultValue=""
      fullWidth
      select
    >
      {selectList}
    </TextField>
  );
}

export default SelectInput;
