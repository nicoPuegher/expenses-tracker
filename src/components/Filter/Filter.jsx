import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';
import filterList from './filterList';

function Filter({ title, option }) {
  return (
    <div className="relative mb-4 flex items-center justify-between rounded bg-gray-300 p-2">
      <h2>{title}</h2>
      <Dropdown option={option} filterList={filterList} />
    </div>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
};

export default Filter;
