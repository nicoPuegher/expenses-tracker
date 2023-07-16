const monthlyFilter = (state, value, name, long) => {
  const { currentView } = state;

  if (currentView.month.current === value) {
    currentView.filter.active = true;
    currentView.month = {
      active: false,
      current: null,
      name: null,
      long: null,
    };
    return;
  }

  currentView.filter.active = false;

  currentView.month = {
    active: true,
    current: value,
    name,
    long,
  };
};

export default monthlyFilter;
