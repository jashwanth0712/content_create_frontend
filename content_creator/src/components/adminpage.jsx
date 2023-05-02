import React from 'react';
import LeftBar from './admin_components/leftpart';
import { PieChart } from './admin_components/piechart';
const  numElements =10;
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};
  // Function to generate random data
  const generateData = () => {
    const data = {
      labels: [],
      datasets: [
        {
          label: '#',
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 2,
        },
      ],
    };

    for (let i = 0; i < numElements; i++) {
      const label = `Label ${i}`;
      const value = Math.floor(Math.random() * 100) + 1; // Random value between 1-100
      const color = getRandomColor();
      
      data.labels.push(label);
      data.datasets[0].data.push(value);
      data.datasets[0].backgroundColor.push(color.background);
      data.datasets[0].borderColor.push(color.border);
    }

    return data;
  };

  // Function to generate random colors
  const getRandomColor = () => {
    const background = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`;
    const border = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;

    return { background, border };
  };
  
  const data = generateData();

const AdminPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="flex absolute left-0 top-0 h-full">
        <LeftBar />
        <PieChart   data={data} options={options} width={'28vw'} height={'28vh'}/>
        <PieChart  data={data} options={options} width={'28vw'} height={'28vh'}/>
      </div>
      <div className="ml-auto">
      <PieChart  data={data} options={options}width={'45vw'} height={'45vh'} />


        </div>

    </div>
  );
};




export default AdminPage;
