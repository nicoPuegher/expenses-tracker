const monthlyFilter = (state, value, name, long) => {
  const { currentView } = state;

  currentView.filter.active = false;

  currentView.month = {
    active: true,
    current: value,
    name,
    long,
  };
};

export default monthlyFilter;
