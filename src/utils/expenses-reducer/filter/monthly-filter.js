const monthlyFilter = (state, value, name) => {
  const { currentView } = state;

  currentView.filter.active = false;

  currentView.month = {
    active: true,
    current: value,
    name,
  };
};

export default monthlyFilter;
