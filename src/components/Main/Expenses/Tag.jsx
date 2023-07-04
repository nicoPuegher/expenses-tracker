import React from 'react';
import PropTypes from 'prop-types';
import CustomIcon from './CustomIcon';

function Tag({ name, color }) {
  const classes = `${color} inline-flex items-center rounded px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 gap-x-1`;

  return (
    <span className={classes}>
      <CustomIcon iconType={name} />
      {name}
    </span>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tag;
