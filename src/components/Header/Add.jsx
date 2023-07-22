import React from 'react';
import PropTypes from 'prop-types';
import Container from '../UI/Container';
import ActiveBtn from '../UI/ActiveBtn';

function Add({ onOpenModal }) {
  const clickHandler = () => onOpenModal();

  return (
    <Container className="inline-flex grow justify-center bg-neutral-50">
      <ActiveBtn type="button" onClick={clickHandler} txt="Add" />
    </Container>
  );
}

Add.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default Add;
