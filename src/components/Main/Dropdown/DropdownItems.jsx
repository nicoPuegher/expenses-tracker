import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';

function DropdownItems({ filterList, clickHandler }) {
  return filterList.map((item) => (
    <Menu.Item key={item.id}>
      {({ active }) => (
        <Button
          className={`w-full justify-start text-sm shadow-none ring-0 ${
            active ? 'bg-neutral-100' : ''
          }`}
          type=""
          value={item.value}
          onClick={clickHandler}
          txt={`${item.value}`}
          kind=""
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
