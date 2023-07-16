const newView = ({ currentView }, date) => {
  const { filter, month } = currentView;

  if (filter.active) {
    filter.current = date.year;
    return;
  }

  if (month.active) {
    if (filter.current !== date.year) filter.current = date.year;
    month.current = date.month;
    month.name = date.monthShort;
    month.long = date.monthLong;
  }
};

export default newView;
