import React, { useState, useContext } from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import inputState from '../../utils/submission-validation/input-state';
import ExpensesContext from '../../store/expenses-context';
import submitHelper from '../../utils/form/submit-helper';
import inputChange from '../../utils/submission-validation/input-change';
import FormInputs from './FormInputs';
import FormButtons from './FormButtons';

const Form = React.forwardRef(({ txt, expData, onCloseModal }, ref) => {
  const initialFormState = inputState(txt === 'Add', expData);
  const formState = useState(initialFormState);
  const context = useContext(ExpensesContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (submitHelper(txt, formState, context) === 'invalid') return;
    onCloseModal();
  };

  const changeHandler = (e) => inputChange(e, formState[1]);

  return (
    <form noValidate onSubmit={submitHandler}>
      <div className="mb-3 bg-white text-center">
        <Dialog.Title
          as="h3"
          className="mb-3 text-base font-semibold leading-6 text-gray-900"
        >
          {`${txt} Expense`}
        </Dialog.Title>
        <FormInputs changeHandler={changeHandler} inputValues={formState[0]} />
      </div>
      <FormButtons txt={txt} onCloseModal={() => onCloseModal()} ref={ref} />
    </form>
  );
});

Form.propTypes = {
  txt: PropTypes.string.isRequired,
  expData: PropTypes.instanceOf(Object),
  onCloseModal: PropTypes.func,
};

Form.defaultProps = {
  expData: {},
  onCloseModal: () => {},
};

export default Form;
