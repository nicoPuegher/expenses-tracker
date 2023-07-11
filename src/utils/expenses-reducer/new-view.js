const newView = ({ currentView: { filter } }, { month, monthName }) => {
  const filterView = {
    filter: {
      ...filter,
    },
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
      current: month,
      name: monthName,
    },
  };

  const newCurrentView = filter.active ? filterView : monthView;

  return newCurrentView;
};

export default newView;
