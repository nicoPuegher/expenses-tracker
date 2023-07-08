import React, { Fragment, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import ExpensesContext from '../../../store/expenses-context';
import DropdownBtn from './DropdownBtn';
import DropdownItems from './DropdownItems';

function Dropdown({ filterList }) {
  const { currentFilter, changeFilter } = useContext(ExpensesContext);

  const clickHandler = (e) => changeFilter('year', e.target.value);

  return (
    <Menu as="div">
      <DropdownBtn currentFilter={currentFilter} />
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="py-1">
            <DropdownItems
              filterList={filterList}
              clickHandler={clickHandler}
            />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

Dropdown.propTypes = {
  filterList: PropTypes.instanceOf(Object).isRequired,
};

export default Dropdown;
