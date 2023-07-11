import React from 'react';
import Alert from '@mui/material/Alert';
import PropTypes from 'prop-types';

function Empty({ alert: { month, name, year } }) {
  const txt = `No transactions found in ${month !== null ? name : year}.`;
  return <Alert severity="error">{txt}</Alert>;
}

Empty.propTypes = {
  alert: PropTypes.instanceOf(Object).isRequired,
};

export default Empty;
