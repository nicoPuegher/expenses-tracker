const newView = ({ currentView: { filter } }, { month }) => {
  const newCurrentView = filter
    ? { filter: true, month: false, current: null }
    : { filter: false, month: true, current: month };

  return newCurrentView;
};
export default newView;
