import React from 'react';
import ChartDropdown from '../ChartDropdown/ChartDropdown';

function ChartNav() {
  const optionsList = {
    0: 2023,
    1: 2022,
    2: 2021,
  };

  return (
    <section className="flex items-center justify-between">
      <h2>Analytics</h2>
      <ChartDropdown options="Year" optionsList={optionsList} />
    </section>
  );
}

export default ChartNav;
