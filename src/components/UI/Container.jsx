import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function Container({ className, children }) {
  return (
    <div
      className={twMerge('rounded-md p-3 md:px-4 lg:px-5 lg:py-3.5', className)}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: '',
};

export default Container;
