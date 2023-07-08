const monthlyFilter = (state, value) => ({
  ...state,
  currentView: {
    filter: false,
    month: true,
    value,
  },
});

export default monthlyFilter;
