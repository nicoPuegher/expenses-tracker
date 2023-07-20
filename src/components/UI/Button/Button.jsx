import React from 'react';
import PropTypes from 'prop-types';

const Button = React.forwardRef(
  ({ className, type, onClick, txt, kind }, ref) => {
    const btn =
      kind === 'active' ? (
        <button
          className={`${className} inline-flex items-center justify-center rounded bg-primary-400 px-6 py-2 text-sm font-semibold text-primary-50 shadow-sm outline-offset-4 hover:bg-primary-500 focus:outline-primary-400`}
          type={type ? 'submit' : 'button'}
          onClick={onClick}
        >
          {txt}
        </button>
      ) : (
        <button
          className={`${className} inline-flex items-center justify-center rounded bg-neutral-50 px-6 py-2 text-sm text-neutral-600 shadow-sm outline-offset-4 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-100 focus:outline-primary-400`}
          type={type ? 'submit' : 'button'}
          onClick={onClick}
          ref={ref}
        >
          {txt}
        </button>
      );

    return btn;
  }
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  txt: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
};

export default Button;
