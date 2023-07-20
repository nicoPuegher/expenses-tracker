import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';

const FormButtons = React.forwardRef(({ type, onCloseModal }, ref) => (
  <div className="bg-gray-50">
    <Button className="w-full" type="submit" txt={type} kind="active" />
    <Button
      className="mt-3 w-full"
      type=""
      onClick={() => onCloseModal()}
      txt="Cancel"
      kind="inactive"
      ref={ref}
    />
  </div>
));

FormButtons.propTypes = {
  type: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default FormButtons;
