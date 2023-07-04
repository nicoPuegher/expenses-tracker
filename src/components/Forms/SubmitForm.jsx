import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import inputState from '../utils/submission-validation/input-state';
import checkSubmit from '../utils/submission-validation/check-submit';
import validateSubmit from '../utils/submission-validation/validate-submit';
import inputChange from '../utils/submission-validation/input-change';
import SubmitInputs from './SubmitInputs';
import FormButtons from './FormButtons';

const SubmitForm = React.forwardRef(({ onCloseModal }, ref) => {
  const [inputValues, setInputValues] = useState(inputState);

  const submitHandler = (event) => {
    event.preventDefault();
    checkSubmit(setInputValues);
    if (!validateSubmit(inputValues)) return;
    onCloseModal();
  };

  const changeHandler = (event) => inputChange(event, setInputValues);

  return (
    <form noValidate onSubmit={submitHandler}>
      <div className="mb-3 bg-white text-center">
        <Dialog.Title
          as="h3"
          className="mb-3 text-base font-semibold leading-6 text-gray-900"
        >
          New Expense
        </Dialog.Title>
        <SubmitInputs changeHandler={changeHandler} inputValues={inputValues} />
      </div>
      <FormButtons onCloseModal={() => onCloseModal()} ref={ref} />
    </form>
  );
});

SubmitForm.propTypes = {
  onCloseModal: PropTypes.func,
};

SubmitForm.defaultProps = {
  onCloseModal: () => {},
};

export default SubmitForm;
