const checkSubmit = (inputValues, setInputValues) => {
  let updatedValues = { ...inputValues };
  const keys = Object.keys(inputValues);

  keys.forEach((key, i) => {
    const currKey = keys[i];
    const currVal = inputValues[currKey].value;

    if (currVal.trim() === '') {
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
};

export default checkSubmit;
