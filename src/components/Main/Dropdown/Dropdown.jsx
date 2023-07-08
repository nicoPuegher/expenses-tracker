import React, { useContext } from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import ExpensesContext from '../../../store/expenses-context';
import DropdownBtn from './DropdownBtn';
import DropTransition from './DropTransition';

function Dropdown({ title, currentFilter, filterList }) {
  const { changeFilter } = useContext(ExpensesContext);

  const clickHandler = (e) => changeFilter(title, e.target.value);

  return (
    <Menu as="div">
      <DropdownBtn currentFilter={currentFilter} />
      <DropTransition filterList={filterList} clickHandler={clickHandler} />
    </Menu>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  filterList: PropTypes.instanceOf(Object).isRequired,
};

export default Dropdown;
