import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import classNames from '../../../utils/dropdown/class-names';

function DropdownItems({ filterList, clickHandler }) {
  return filterList.map((item) => (
    <Menu.Item key={item.id}>
      {({ active }) => (
        <button
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            'w-full block px-4 py-2 text-sm text-left'
          )}
          type="button"
          value={item.value}
          onClick={clickHandler}
        >
          {item.value}
        </button>
      )}
    </Menu.Item>
  ));
}

DropdownItems.propTypes = {
  filterList: PropTypes.instanceOf(Object).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default DropdownItems;
