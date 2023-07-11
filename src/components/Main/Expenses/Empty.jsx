import React from 'react';
import Alert from '@mui/material/Alert';
import PropTypes from 'prop-types';

function Empty({ month, name, year }) {
  const txt = `No transactions found in ${month !== null ? name : year}.`;
  return <Alert severity="error">{txt}</Alert>;
}

Empty.propTypes = {
  month: PropTypes.number,
  name: PropTypes.string,
  year: PropTypes.string.isRequired,
};

Empty.defaultProps = {
  month: null,
  name: null,
};

export default Empty;
