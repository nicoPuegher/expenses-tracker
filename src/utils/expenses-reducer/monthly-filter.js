const monthlyFilter = (state, value, name) => ({
  ...state,
  currentView: {
    filter: {
      ...state.currentView.filter,
      active: false,
    },
    month: {
      active: true,
      current: value,
      name,
    },
  },
});

export default monthlyFilter;
