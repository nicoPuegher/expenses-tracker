import React from 'react';
import Alert from '@mui/material/Alert';
import PropTypes from 'prop-types';

function Empty({ alert: { month, long, year } }) {
  const txt = `Nothing to show in ${
    month !== null ? long : year
  }, please add one expense!`;

  return <Alert severity="info">{txt}</Alert>;
}

Empty.propTypes = {
  alert: PropTypes.instanceOf(Object).isRequired,
};

export default Empty;
