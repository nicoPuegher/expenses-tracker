import React from 'react';
import TextField from '@mui/material/TextField';

function TitleInput() {
  return (
    <TextField
      id="outlined-basic"
      label="Title"
      variant="outlined"
      size="small"
      fullWidth
    />
  );
}

export default TitleInput;
