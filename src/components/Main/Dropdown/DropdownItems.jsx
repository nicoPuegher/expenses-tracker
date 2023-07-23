import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import InactiveBtn from '../../UI/InactiveBtn';

function DropdownItems({ filterList, clickHandler }) {
  return filterList.map((item, i) => (
    <Menu.Item key={item.id}>
      {({ active }) => (
        <InactiveBtn
          className={`block w-full rounded-none ${
            i === 0 ? 'rounded-t-sm' : 'rounded-b-sm'
          } ${
            active ? 'bg-neutral-100' : ''
          } text-left shadow-none focus:outline-none`}
          value={item.value}
          onClick={clickHandler}
          txt={`${item.value}`}
        />
      )}
    </Menu.Item>
  ));
}

DropdownItems.propTypes = {
  filterList: PropTypes.instanceOf(Object).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default DropdownItems;
