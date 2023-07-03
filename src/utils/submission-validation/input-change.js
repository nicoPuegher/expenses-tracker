const inputChange = (event, setInputValues) => {
  const { name, value } = event;

  setInputValues((prevValues) => ({
    ...prevValues,
    [name]: {
      ...prevValues[name],
      value,
      error: value.trim() === '',
    },
  }));
};

export default inputChange;
