import React from 'react';
import ChartBars from './ChartBars';

function Chart() {
  return (
    <div className="mb-3 rounded-md bg-neutral-50 py-3 md:mb-4 2xl:mb-5">
      <div className="grid grid-cols-2 lg:h-28 lg:grid-cols-12 lg:gap-1 lg:px-0.5">
        <ChartBars />
      </div>
    </div>
  );
}

export default Chart;
