import React from 'react';
import PropTypes from 'prop-types';
import CustomIcon from './CustomIcon';

function ExpenseTag({ name }) {
  return (
    <span className="inline-flex items-center gap-x-1 rounded bg-support-300 px-2 py-1 text-xs font-medium text-support-700">
      <CustomIcon iconType={name} />
      {name}
    </span>
  );
}

ExpenseTag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExpenseTag;
