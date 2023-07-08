const yearlyFilter = (state, value) => ({
  ...state,
  currentYearFilter: value,
  currentView: {
    filter: true,
    month: false,
    value: null,
  },
});

export default yearlyFilter;
