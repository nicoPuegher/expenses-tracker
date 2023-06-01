import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';
import filterList from './filterList';

function Filter({ title, option, background }) {
  const classes = `sticky top-0 p-2 flex items-center justify-between ${background}`;

  return (
    <div className={classes}>
      <h2>{title}</h2>
      <Dropdown option={option} filterList={filterList} />
    </div>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  background: PropTypes.string,
};

Filter.defaultProps = {
  background: '',
};

export default Filter;
