const updateView = ({ currentView }, date) => {
  const { filter, month } = currentView;

  if (filter.active) {
    filter.current = date.year.num;
    return;
  }

  if (month.active) {
    if (filter.current !== date.year.num) filter.current = date.year.num;
    month.current = date.month.num;
    month.name = date.month.short;
    month.long = date.month.long;
  }
};

export default updateView;
