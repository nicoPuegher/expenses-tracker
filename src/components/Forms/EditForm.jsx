import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import formatEdit from '../../utils/format-helpers/format-edit-values';

// import inputState from '../../utils/submission-validation/input-state';

// import ExpensesContext from '../../store/expenses-context';
// import checkSubmit from '../../utils/submission-validation/check-submit';
// import validateSubmit from '../../utils/submission-validation/validate-submit';
// import formatExpense from '../../utils/format-helpers/format-expense';
import inputChange from '../../utils/submission-validation/input-change';
import FormInputs from './FormInputs';
import FormButtons from './FormButtons';

const EditForm = React.forwardRef(({ expData, onCloseModal }, ref) => {
  const inputState = formatEdit(expData);
  const [inputValues, setInputValues] = useState(inputState);
  console.log(inputValues);

  const submitHandler = (e) => {
    e.preventDefault();
    // checkSubmit(setInputValues);
    // if (!validateSubmit(inputValues)) return;
    // addExpense(formatExpense(inputValues));
    // onCloseModal();
  };

  const changeHandler = (e) => inputChange(e, setInputValues);

  return (
    <form noValidate onSubmit={submitHandler}>
      <div className="mb-3 bg-white text-center">
        <Dialog.Title
          as="h3"
          className="mb-3 text-base font-semibold leading-6 text-gray-900"
        >
          Edit Expense
        </Dialog.Title>
        <FormInputs changeHandler={changeHandler} inputValues={inputValues} />
      </div>
      <FormButtons txt="Edit" onCloseModal={() => onCloseModal()} ref={ref} />
    </form>
  );
});

EditForm.propTypes = {
  expData: PropTypes.instanceOf(Object).isRequired,
  onCloseModal: PropTypes.func,
};

EditForm.defaultProps = {
  onCloseModal: () => {},
};

export default EditForm;
