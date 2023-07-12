import React from 'react';
import { Menu } from '@headlessui/react';

function ExpOptions() {
  return (
    <Menu.Items className="absolute right-0 top-0 z-10 h-full w-full rounded bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <div className="w-full py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`block w-full px-4 py-2 text-left text-sm ${
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
              type="button"
              value="valueTest"
              onClick="clickHandler"
            >
              Edit
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`block w-full px-4 py-2 text-left text-sm ${
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
              type="button"
              value="valueTest"
              onClick="clickHandler"
            >
              Delete
            </button>
          )}
        </Menu.Item>
      </div>
    </Menu.Items>
  );
}

export default ExpOptions;
