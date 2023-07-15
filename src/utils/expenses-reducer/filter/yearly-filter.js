const yearlyFilter = (state, value) => {
  const updatedState = state;
  const { currentView } = updatedState;

  currentView.filter = {
    active: true,
    current: value,
  };

  currentView.month = {
    active: false,
    current: null,
    name: null,
  };

  return updatedState;
};

export default yearlyFilter;
