import { cloneDeep } from 'lodash';

const checkSubmit = (setValues) => {
  setValues((prevValues) => {
    const updatedValues = cloneDeep(prevValues);
    const values = Object.entries(updatedValues);

    values.forEach((value) => {
      const { 1: prop } = value;

      if (prop.value.trim() === '') {
        prop.error = true;
      }
    });

    return updatedValues;
  });
};

export default checkSubmit;
