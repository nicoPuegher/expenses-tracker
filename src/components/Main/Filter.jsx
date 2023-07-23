import React from 'react';
import PropTypes from 'prop-types';
import Container from '../UI/Container';
import Dropdown from './Dropdown/Dropdown';

function Filter({ title, currentFilter, filterList }) {
  return (
    <Container className="mb-3 flex items-center justify-between bg-neutral-800 text-neutral-200">
      <h2>{title}</h2>
      <Dropdown
        title={title}
        currentFilter={currentFilter}
        filterList={filterList}
      />
    </Container>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  filterList: PropTypes.instanceOf(Object).isRequired,
};

export default Filter;
