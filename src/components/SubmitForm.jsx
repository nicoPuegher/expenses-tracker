import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import AmountInput from './AmountInput';
import DateInput from './DateInput';
import SelectInput from './SelectInput';
import FormButtons from './FormButtons';

function SubmitForm({ onCloseModal }) {
  const [inputValues, setInputValues] = useState({
    title: {
      value: '',
      error: false,
      errorMessage: 'You must enter a title.',
    },
    amount: {
      value: '',
      error: false,
      errorMessage: 'You must enter an amount.',
    },
    date: {
      value: '',
      error: false,
      errorMessage: 'You must select a date.',
    },
    type: {
      value: '',
      error: false,
      errorMessage: 'You must select a type.',
    },
  });

  const submitHandler = (event) => {
    event.preventDefault();
    let updatedValues = { ...inputValues };
    const keys = Object.keys(inputValues);

    keys.forEach((key, i) => {
      const currKey = keys[i];
      const currVal = inputValues[currKey].value;

      if (currVal === '') {
        const updatedKey = {
          ...updatedValues[currKey],
          error: true,
        };

        updatedValues = {
          ...updatedValues,
          [currKey]: updatedKey,
        };
      }
    });

    setInputValues(updatedValues);
    // onCloseModal();
  };

  const changeHandler = (event) => {
    const { name, value } = event;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name],
        value,
      },
    }));
  };

  return (
    <form noValidate onSubmit={submitHandler}>
      <div className="mb-3 bg-white text-center">
        <Dialog.Title
          as="h3"
          className="mb-3 text-base font-semibold leading-6 text-gray-900"
        >
          New Expense
        </Dialog.Title>
        <div className="flex flex-col gap-3">
          <TitleInput
            onChange={changeHandler}
            error={inputValues.title.error}
            helperText={
              inputValues.title.error ? inputValues.title.errorMessage : ''
            }
          />
          <AmountInput
            onChange={changeHandler}
            error={inputValues.amount.error}
            helperText={
              inputValues.amount.error ? inputValues.amount.errorMessage : ''
            }
          />
          <DateInput
            onChange={changeHandler}
            error={inputValues.date.error}
            helperText={
              inputValues.date.error ? inputValues.date.errorMessage : ''
            }
          />
          <SelectInput
            onChange={changeHandler}
            error={inputValues.type.error}
            helperText={
              inputValues.type.error ? inputValues.type.errorMessage : ''
            }
          />
        </div>
      </div>
      <FormButtons onCloseModal={() => onCloseModal()} />
    </form>
  );
}

SubmitForm.propTypes = {
  onCloseModal: PropTypes.func,
};

SubmitForm.defaultProps = {
  onCloseModal: () => {},
};

export default SubmitForm;
