import React from 'react';
import ChartBars from './ChartBars';

function Chart() {
  return (
    <div className="mb-3 rounded bg-neutral-100 py-2">
      <div className="grid grid-cols-2">
        <ChartBars />
      </div>
    </div>
  );
}

export default Chart;
