import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from '../Inputs/TitleInput';
import AmountInput from '../Inputs/AmountInput';
import DateInput from '../Inputs/DateInput';
import SelectInput from '../Inputs/SelectInput';

function FormInputs({ changeHandler, inputValues }) {
  return (
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
        helperText={inputValues.date.error ? inputValues.date.errorMessage : ''}
      />
      <SelectInput
        onChange={changeHandler}
        error={inputValues.type.error}
        helperText={inputValues.type.error ? inputValues.type.errorMessage : ''}
      />
    </div>
  );
}

FormInputs.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  inputValues: PropTypes.instanceOf(Object).isRequired,
};

export default FormInputs;
