import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

function TitleInput({ onChange }) {
  return (
    <TextField
      id="outlined-basic"
      name="title"
      label="Title"
      variant="outlined"
      size="small"
      onChange={onChange}
      fullWidth
    />
  );
}

TitleInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TitleInput;
