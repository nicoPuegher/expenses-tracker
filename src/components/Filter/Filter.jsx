import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';
import filterList from './filterList';

function Filter({ title }) {
  const changeFilterHandler = (newYear) => {
    console.log(newYear);
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
};

export default Filter;
