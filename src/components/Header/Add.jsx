import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';

function Add({ onOpenModal }) {
  const clickHandler = () => onOpenModal();

  return (
    <div className="mb-3 flex justify-center rounded bg-neutral-50 py-3">
      <Button type="" onClick={clickHandler} txt="Add" />
    </div>
  );
}

Add.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default Add;
