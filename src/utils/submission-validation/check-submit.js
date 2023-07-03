const checkSubmit = (setInputValues) => {
  let updatedValues;

  setInputValues((prevValues) => {
    updatedValues = { ...prevValues };
    const keys = Object.keys(prevValues);

    keys.forEach((key, i) => {
      const currKey = keys[i];
      const currVal = prevValues[currKey].value;

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

    return updatedValues;
  });
};

export default checkSubmit;
