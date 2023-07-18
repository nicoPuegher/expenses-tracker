import React, { useState, useContext } from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import inputState from '../../utils/form/input-state';
import ExpensesContext from '../../store/expenses-context';
import submitHelper from '../../utils/form/submit-helper';
import inputChange from '../../utils/form/input-change';
import FormInputs from './FormInputs';
import FormButtons from './FormButtons';

const Form = React.forwardRef(({ type, expData, onCloseModal }, ref) => {
  const initialFormState = inputState(type === 'Add', expData);
  const formState = useState(initialFormState);
  const context = useContext(ExpensesContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (submitHelper(type, formState, expData, context) === 'invalid') return;
    onCloseModal();
  };

  const changeHandler = (e) => inputChange(e, formState[1]);

  return (
    <form noValidate onSubmit={submitHandler}>
      <div className="mb-3 bg-main-light text-center">
        <Dialog.Title
          as="h3"
          className="mb-3 text-base font-semibold leading-6 text-main-dark"
        >
          {`${type} Expense`}
        </Dialog.Title>
        <FormInputs values={formState[0]} changeHandler={changeHandler} />
      </div>
      <FormButtons type={type} onCloseModal={() => onCloseModal()} ref={ref} />
    </form>
  );
});

Form.propTypes = {
  type: PropTypes.string.isRequired,
  expData: PropTypes.instanceOf(Object),
  onCloseModal: PropTypes.func,
};

Form.defaultProps = {
  expData: {},
  onCloseModal: () => {},
};

export default Form;
