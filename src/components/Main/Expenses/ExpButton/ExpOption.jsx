import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';

function ExpOption({ value, onClick }) {
  const initial = `block w-full text-sm font-semibold ${
    value === 'Edit' ? 'text-primary-400' : 'text-error-400'
  }`;
  const hover = 'bg-neutral-100';
  const normal = 'bg-neutral-50';

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
