const newView = ({ currentView }, { month: monthDate, monthName, year }) => {
  const { filter, month } = currentView;

  if (filter.active) {
    filter.current = year;
    return;
  }

  if (month.active) {
    month.current = monthDate;
    month.name = monthName;
  }
};

export default newView;
