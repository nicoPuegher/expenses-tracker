import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';

function DropdownItems({ filterList, clickHandler }) {
  return filterList.map((item) => (
    <Menu.Item key={item.id}>
      {({ active }) => (
        <button
          className={`block w-full px-4 py-2 text-left text-sm ${
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
          }`}
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
