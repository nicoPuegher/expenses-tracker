import React from 'react';
import PropTypes from 'prop-types';

function FormButtons({ onCloseModal }) {
  return (
    <div className="bg-gray-50">
      <button
        type="submit"
        className="inline-flex w-full justify-center rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
      >
        Add
      </button>
      <button
        type="button"
        className="mt-3 inline-flex w-full justify-center rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => onCloseModal()}
      >
        Cancel
      </button>
    </div>
  );
}

FormButtons.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default FormButtons;
