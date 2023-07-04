import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import filterList from '../../utils/filter-list';

function Filter({ title, onChangeFilter }) {
  const changeFilterHandler = (newFilter) => {
    onChangeFilter(newFilter);
  };

  return (
    <div className="relative mb-3 flex items-center justify-between rounded bg-gray-300 px-2 py-3">
      <h2>{title}</h2>
      <Dropdown filterList={filterList} onChangeFilter={changeFilterHandler} />
    </div>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
