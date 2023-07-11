const yearlyFilter = (state, value) => ({
  ...state,
  currentView: {
    filter: {
      active: true,
      current: value,
    },
    month: {
      active: false,
      current: null,
      name: null,
    },
  },
});

export default yearlyFilter;
