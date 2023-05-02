import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart(props) {
  const { data,options ,width,height} = props;


  return (
    <div style={{ width: width, height: height }}>
      <Pie data={data} options={options} />
    </div>
  );
}
