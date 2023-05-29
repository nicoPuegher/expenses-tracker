import React from 'react';
import PropTypes from 'prop-types';

function Tag({ name, color }) {
  const classes = `${color} inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10`;
  return <span className={classes}>{name}</span>;
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tag;
