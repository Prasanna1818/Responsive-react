import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
// import './PieChart.css';

const generateRandomData = () => {
  return [
    { name: 'Label 1', value: Math.random() * 100 },
    { name: 'Label 2', value: Math.random() * 100 },
    { name: 'Label 3', value: Math.random() * 100 },
    { name: 'Label 4', value: Math.random() * 100 },
  ];
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const labelNames = ['Interested', 'Average', 'Bad', 'Not Interested'];

const CustomPieChart = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '20px' }}>
      {[...Array(4).keys()].map((index) => (
        <div key={index} style={{ margin: '0 10px' }}>

          <PieChart width={400} height={200}>
            <Pie
              data={generateRandomData()}
              dataKey="value"
              cx={100}
              cy={100}
              innerRadius={30}  
              outerRadius={50}
              fill="#8884d8"
              paddingAngle={5}
              label
            >
              {generateRandomData().map((entry, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Legend align="center" verticalAlign="bottom" />
          </PieChart>
          <p style={{ marginTop: '5px', textAlign: 'center' }}>{labelNames[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomPieChart;
