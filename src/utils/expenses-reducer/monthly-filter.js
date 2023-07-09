const monthlyFilter = (state, value) => ({
  ...state,
  currentView: {
    filter: false,
    month: true,
    current: value,
  },
});

export default monthlyFilter;
