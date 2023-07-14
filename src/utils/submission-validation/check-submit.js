import { cloneDeep } from 'lodash';

const checkSubmit = (setInputValues) => {
  setInputValues((prevValues) => {
    const updatedValues = cloneDeep(prevValues);
    const inputValues = Object.entries(updatedValues);

    inputValues.forEach((inputValue) => {
      const { 1: values } = inputValue;

      if (values.value.trim() === '') {
        values.error = true;
      }
    });

    return updatedValues;
  });
};

export default checkSubmit;
