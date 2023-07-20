import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';

function DropdownBtn({ currentFilter }) {
  return (
    <Menu.Button className="inline-flex gap-x-1.5 rounded bg-neutral-50 px-3 py-2 text-sm font-semibold text-neutral-600 shadow-sm outline-offset-4 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-100 focus:outline-primary-400">
      {currentFilter}
      <ChevronDownIcon
        className="-mr-1 h-5 w-5 text-neutral-600"
        aria-hidden="true"
      />
    </Menu.Button>
  );
}

DropdownBtn.propTypes = {
  currentFilter: PropTypes.string.isRequired,
};

export default DropdownBtn;
