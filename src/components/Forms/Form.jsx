import React, { useState, useContext } from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import formatEditState from '../../utils/format-helpers/format-edit-state';
import ExpensesContext from '../../store/expenses-context';
import checkSubmit from '../../utils/submission-validation/check-submit';
import formatEditExp from '../../utils/format-helpers/format-edit-exp';
import validateSubmit from '../../utils/submission-validation/validate-submit';
import inputChange from '../../utils/submission-validation/input-change';
import FormInputs from './FormInputs';
import FormButtons from './FormButtons';

const EditForm = React.forwardRef(({ txt, expData, onCloseModal }, ref) => {
  const inputState = formatEditState(expData);
  const [inputValues, setInputValues] = useState(inputState);
  const { changeExpense } = useContext(ExpensesContext);

  const submitHandler = (e) => {
    e.preventDefault();
    checkSubmit(setInputValues);
    if (!validateSubmit(inputValues)) return;
    changeExpense('Edit', expData, formatEditExp(expData, inputValues));
    onCloseModal();
  };

  const changeHandler = (e) => inputChange(e, setInputValues);

  return (
    <form noValidate onSubmit={submitHandler}>
      <div className="mb-3 bg-white text-center">
        <Dialog.Title
          as="h3"
          className="mb-3 text-base font-semibold leading-6 text-gray-900"
        >
          {`${txt} Expense`}
        </Dialog.Title>
        <FormInputs changeHandler={changeHandler} inputValues={inputValues} />
      </div>
      <FormButtons txt={txt} onCloseModal={() => onCloseModal()} ref={ref} />
    </form>
  );
});

EditForm.propTypes = {
  txt: PropTypes.string.isRequired,
  expData: PropTypes.instanceOf(Object),
  onCloseModal: PropTypes.func,
};

EditForm.defaultProps = {
  expData: {},
  onCloseModal: () => {},
};

export default EditForm;
