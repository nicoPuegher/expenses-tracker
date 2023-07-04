const inputState = () => ({
  title: {
    value: '',
    error: false,
    errorMessage: 'Enter a title.',
  },
  amount: {
    value: '',
    error: false,
    errorMessage: 'Enter an amount.',
  },
  date: {
    value: '',
    error: false,
    errorMessage: ' 2020 > date < 2024.',
  },
  type: {
    value: '',
    error: false,
    errorMessage: 'Select a type.',
  },
});

export default inputState;
