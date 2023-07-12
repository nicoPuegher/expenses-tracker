const newView = ({ currentView: { filter } }, { month, monthName, year }) => {
  const filterView = {
    filter: {
      ...filter,
      current: year,
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
