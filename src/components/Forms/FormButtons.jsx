import React from 'react';
import PropTypes from 'prop-types';

const FormButtons = React.forwardRef(({ type, onCloseModal }, ref) => (
  <div className="bg-gray-50">
    <button
      type="submit"
      className="inline-flex w-full justify-center rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
    >
      {type}
    </button>
    <button
      type="button"
      className="mt-3 inline-flex w-full justify-center rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
