import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function ActiveBtn({ className, type, onClick, txt }) {
  return (
    <button
      className={twMerge(
        'rounded bg-primary-400 px-5 py-2.5 font-semibold text-primary-50 shadow-sm shadow-neutral-300 hover:bg-primary-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-400 lg:px-6',
        className
      )}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {txt}
    </button>
  );
}

ActiveBtn.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  txt: PropTypes.string.isRequired,
};

ActiveBtn.defaultProps = {
  className: '',
  onClick: () => {},
};

export default ActiveBtn;
