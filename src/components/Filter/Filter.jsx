import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';
import filterList from './filterList';

function Filter({ title, options }) {
  return (
    <section className="flex items-center justify-between">
      <h2>{title}</h2>
      <Dropdown options={options} filterList={filterList} />
    </section>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};

export default Filter;
