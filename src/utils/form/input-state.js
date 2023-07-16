const inputState = (add, edit) => ({
  title: {
    value: add ? '' : edit.title,
    error: false,
    errorMessage: 'Enter a title.',
  },
  amount: {
    value: add ? '' : edit.amount,
    error: false,
    errorMessage: 'Enter an amount.',
  },
  date: {
    value: add ? '' : edit.date,
    error: false,
    errorMessage: ' 2021 > date < 2024.',
  },
  type: {
    value: add ? '' : edit.type,
    error: false,
    errorMessage: 'Select a type.',
  },
});

export default inputState;
