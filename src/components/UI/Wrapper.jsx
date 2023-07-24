import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function Wrapper({ className, children }) {
  return (
    <div
      className={twMerge(
        'mx-auto flex max-w-4xl px-2 md:p-5 2xl:py-8',
        className
      )}
    >
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
  className: '',
};

export default Wrapper;
