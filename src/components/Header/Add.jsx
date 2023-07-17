import React from 'react';
import PropTypes from 'prop-types';

function Add({ onOpenModal }) {
  const clickHandler = () => onOpenModal();

  return (
    <div className="mb-3 flex justify-center rounded bg-background py-3">
      <button
        className="rounded bg-primary px-6 py-2 text-primary"
        type="button"
        onClick={clickHandler}
      >
        Add
      </button>
    </div>
  );
}

Add.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default Add;
