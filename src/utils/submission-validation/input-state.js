const inputState = () => ({
  title: {
    value: '',
    error: false,
    errorMessage: 'You must enter a title.',
  },
  amount: {
    value: '',
    error: false,
    errorMessage: 'You must enter an amount.',
  },
  date: {
    value: '',
    error: false,
    errorMessage: 'You must select a date.',
  },
  type: {
    value: '',
    error: false,
    errorMessage: 'You must select a type.',
  },
});

export default inputState;
