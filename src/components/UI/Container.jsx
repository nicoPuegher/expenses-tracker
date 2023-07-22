import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function Container({ className, children }) {
  return <div className={twMerge('py-3 rounded', className)}>{children}</div>;
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: '',
};

export default Container;
