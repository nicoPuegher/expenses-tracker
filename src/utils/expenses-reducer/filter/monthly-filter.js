import { cloneDeep } from 'lodash';

const monthlyFilter = (state, value, name) => {
  const updatedState = cloneDeep(state);
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
