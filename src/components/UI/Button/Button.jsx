import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, type, onClick, txt }) {
  return (
    <button
      className={`${className} rounded bg-primary-400 px-6 py-2 text-primary-50 outline-offset-4 hover:bg-primary-500 focus:outline-indigo-400`}
      type={type ? 'submit' : 'button'}
      onClick={onClick}
    >
      {txt}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  txt: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
