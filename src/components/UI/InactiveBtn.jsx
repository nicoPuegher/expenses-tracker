import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const InactiveBtn = React.forwardRef(
  ({ className, value, onClick, txt, children }, ref) => (
    <button
      className={twMerge(
        'rounded bg-neutral-50 px-5 py-2.5 text-sm text-neutral-600 shadow-sm shadow-neutral-300 hover:bg-neutral-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-400 lg:px-6',
        className
      )}
      value={value}
      type="button"
      onClick={onClick}
      ref={ref}
    >
      {txt}
      {children}
    </button>
  )
);

InactiveBtn.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  txt: PropTypes.string,
  children: PropTypes.node,
};

InactiveBtn.defaultProps = {
  className: '',
  value: 0,
  txt: '',
  children: null,
};

export default InactiveBtn;
