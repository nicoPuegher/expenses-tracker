const newView = ({ currentView: { filter }, month: { currentMonth } }) => {
  const filterView = {
    ...filter,
    month: {
      active: false,
      current: null,
      name: null,
    },
  };

  const monthView = {
    filter: {
      ...filter,
      active: false,
    },
    month: {
      active: true,
      current: currentMonth,
      name: '',
    },
  };

  const newCurrentView = filter.active ? filterView : monthView;

  return newCurrentView;
};

export default newView;
