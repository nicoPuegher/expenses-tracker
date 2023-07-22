import React from 'react';
import PropTypes from 'prop-types';
import ActiveBtn from '../UI/ActiveBtn';
import InactiveBtn from '../UI/InactiveBtn';

const FormButtons = React.forwardRef(({ type, onCloseModal }, ref) => (
  <div className="">
    <ActiveBtn className="w-full" type="submit" txt={type} />
    <InactiveBtn
      className="mt-3 w-full"
      onClick={() => onCloseModal()}
      txt="Cancel"
      ref={ref}
    />
  </div>
));

FormButtons.propTypes = {
  type: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default FormButtons;
