import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';

function ExpOption({ value, onClick }) {
  const initial = `block w-full px-4 py-2 text-center text-sm`;
  const hover = 'bg-gray-100 text-gray-900';
  const normal = 'text-gray-700';

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${initial} ${active ? hover : normal}`}
          type="button"
          onClick={onClick}
        >
          {value}
        </button>
      )}
    </Menu.Item>
  );
}

ExpOption.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ExpOption;
