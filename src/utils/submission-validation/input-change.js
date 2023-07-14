import { cloneDeep } from 'lodash';

const inputChange = (event, setInputValues) => {
  setInputValues((prevValues) => {
    const updatedValues = cloneDeep(prevValues);
    const { name, value } = event;

    updatedValues[name].value = value;
    updatedValues[name].error = value.trim() === '';

    return updatedValues;
  });
};

export default inputChange;
