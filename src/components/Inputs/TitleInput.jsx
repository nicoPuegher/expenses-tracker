import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledTextField = styled(TextField)({});

function TitleInput({ value, onChange, error, helperText }) {
  return (
    <StyledTextField
      id="outlined-basic"
      name="title"
      label="Title"
      value={value}
      variant="outlined"
      size="small"
      onChange={(e) => onChange(e.target)}
      onBlur={(e) => onChange(e.target)}
      error={error}
      helperText={helperText}
      fullWidth
      required
    />
  );
}

TitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};

export default TitleInput;
