import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import AmountInput from './AmountInput';
import DateInput from './DateInput';
import SelectInput from './SelectInput';

function SubmitInputs({ changeHandler, inputValues }) {
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

SubmitInputs.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  inputValues: PropTypes.instanceOf(Object).isRequired,
};

export default SubmitInputs;
