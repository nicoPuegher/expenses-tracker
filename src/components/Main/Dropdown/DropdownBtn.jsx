import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';

function DropdownBtn({ currentFilter }) {
  return (
    <Menu.Button className="inline-flex items-center gap-x-0.5 rounded bg-neutral-50 px-5 py-2.5 font-semibold text-neutral-600 shadow-sm shadow-neutral-900 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-200 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-400">
      {currentFilter}
      <ChevronDownIcon
        className="-mr-2 h-5 w-5 text-neutral-600"
        aria-hidden="true"
      />
    </Menu.Button>
  );
}

DropdownBtn.propTypes = {
  currentFilter: PropTypes.string.isRequired,
};

export default DropdownBtn;
