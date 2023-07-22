import React from 'react';
import PropTypes from 'prop-types';
import EmptyTheme from './EmptyTheme';

function Empty({ alert: { month, long, year } }) {
  const txt = `Nothing to show in ${month !== null ? long : year}.`;

  return <EmptyTheme severity="info">{txt}</EmptyTheme>;
}

Empty.propTypes = {
  alert: PropTypes.instanceOf(Object).isRequired,
};

export default Empty;
