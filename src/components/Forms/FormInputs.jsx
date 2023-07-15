import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from '../Inputs/TitleInput';
import AmountInput from '../Inputs/AmountInput';
import DateInput from '../Inputs/DateInput';
import SelectInput from '../Inputs/SelectInput';

function FormInputs({ changeHandler, inputValues: values }) {
  return (
    <div className="flex flex-col gap-3">
      <TitleInput
        value={values.title.value}
        onChange={changeHandler}
        error={values.title.error}
        helperText={values.title.error ? values.title.errorMessage : ''}
      />
      <AmountInput
        value={values.amount.value}
        onChange={changeHandler}
        error={values.amount.error}
        helperText={values.amount.error ? values.amount.errorMessage : ''}
      />
      <DateInput
        value={values.date.value}
        onChange={changeHandler}
        error={values.date.error}
        helperText={values.date.error ? values.date.errorMessage : ''}
      />
      <SelectInput
        value={values.type.value}
        onChange={changeHandler}
        error={values.type.error}
        helperText={values.type.error ? values.type.errorMessage : ''}
      />
    </div>
  );
}

FormInputs.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  inputValues: PropTypes.instanceOf(Object).isRequired,
};

export default FormInputs;
