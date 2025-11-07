'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
  datasets: [
    {
      label: 'Total Pengunjung',
      data: [150, 230, 224, 300, 190],
      fill: false,
      borderColor: '#FFA500',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function SalesChart() {
  return (
    <div className="widget-container">
      <Line data={data} options={options} />
    </div>
  );
}