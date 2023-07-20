import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown/Dropdown';

function Filter({ title, currentFilter, filterList }) {
  return (
    <div className="relative mb-3 flex items-center justify-between rounded bg-neutral-200 px-2 py-3">
      <h2>{title}</h2>
      <Dropdown
        title={title}
        currentFilter={currentFilter}
        filterList={filterList}
      />
    </div>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  filterList: PropTypes.instanceOf(Object).isRequired,
};

export default Filter;
