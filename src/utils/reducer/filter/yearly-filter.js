const yearlyFilter = (state, value) => {
  const { currentView } = state;

  currentView.filter = {
    active: true,
    current: value,
  };

  currentView.month = {
    active: false,
    current: null,
    name: null,
    long: null,
  };
};

export default yearlyFilter;
