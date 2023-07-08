import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';

function DropdownBtn({ currentFilter }) {
  return (
    <div>
      <Menu.Button className="inline-flex gap-x-1.5 rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {currentFilter}
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Menu.Button>
    </div>
  );
}

DropdownBtn.propTypes = {
  currentFilter: PropTypes.number.isRequired,
};

export default DropdownBtn;
