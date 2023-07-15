const monthlyFilter = (state, value, name) => {
  const updatedState = state;
  const { currentView } = updatedState;

  currentView.filter.active = false;

  currentView.month = {
    active: true,
    current: value,
    name,
  };

  return updatedState;
};

export default monthlyFilter;
