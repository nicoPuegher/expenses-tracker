import { cloneDeep } from 'lodash';

const inputChange = (e, setValues) => {
  setValues((prevValues) => {
    const updatedValues = cloneDeep(prevValues);
    const { name, value } = e;

    updatedValues[name].value = value;
    updatedValues[name].error = value.trim() === '';

    return updatedValues;
  });
};

export default inputChange;
