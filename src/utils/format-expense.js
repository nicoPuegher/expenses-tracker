const expense = (inputValues) => ({
  title: inputValues.title.value,
  amount: inputValues.amount.value,
  date: inputValues.date.value,
  type: inputValues.type.value,
});

export default expense;
