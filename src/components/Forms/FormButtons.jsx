import React from 'react';
import PropTypes from 'prop-types';

const FormButtons = React.forwardRef(({ type, onCloseModal }, ref) => (
  <div className="bg-gray-50">
    <button
      type="submit"
      className="inline-flex w-full justify-center rounded bg-primary-400 px-3 py-2 text-sm font-semibold text-primary-50 shadow-sm outline-offset-4 hover:bg-primary-500 focus:outline-indigo-400"
    >
      {type}
    </button>
    <button
      type="button"
      className="mt-3 inline-flex w-full justify-center rounded bg-neutral-50 px-3 py-2 text-sm font-semibold text-neutral-600 shadow-sm outline-offset-4 ring-1 ring-inset ring-slate-200 focus:outline-indigo-400"
      onClick={() => onCloseModal()}
      ref={ref}
    >
      Cancel
    </button>
  </div>
));

FormButtons.propTypes = {
  type: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default FormButtons;
