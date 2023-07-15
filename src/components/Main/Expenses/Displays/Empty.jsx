import React from 'react';
import Alert from '@mui/material/Alert';
import PropTypes from 'prop-types';

function Empty({ type, alert: { month, name, year } }) {
  const infoTxt = 'Nothing to show, please add one expense!';
  const errorTxt = `No expenses found in ${month !== null ? name : year}.`;
  const txt = type === 'info' ? infoTxt : errorTxt;

  return <Alert severity={type}>{txt}</Alert>;
}

Empty.propTypes = {
  type: PropTypes.string.isRequired,
  alert: PropTypes.instanceOf(Object).isRequired,
};

export default Empty;
