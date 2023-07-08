import React, { useContext } from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import ExpensesContext from '../../../store/expenses-context';
import DropdownBtn from './DropdownBtn';
import DropTransition from './DropTransition';

function Dropdown({ filterList }) {
  const { currentFilter, changeFilter } = useContext(ExpensesContext);

  const clickHandler = (e) => changeFilter('year', e.target.value);

  return (
    <Menu as="div">
      <DropdownBtn currentFilter={currentFilter} />
      <DropTransition filterList={filterList} clickHandler={clickHandler} />
    </Menu>
  );
}

Dropdown.propTypes = {
  filterList: PropTypes.instanceOf(Object).isRequired,
};

export default Dropdown;
