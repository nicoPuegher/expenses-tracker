import React from 'react';
import PropTypes from 'prop-types';

function ChartBar({ name }) {
  return (
    <section className="flex items-center">
      <div>{name}</div>
      <div className="h-2 w-full bg-black" />
    </section>
  );
}

ChartBar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ChartBar;
