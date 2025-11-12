'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Nasi Goreng Ayam', 'Nasi Goreng Spesial', 'Mie Goreng'],
  datasets: [
    {
      label: ' Jumlah Klik',
      data: [350, 210, 120], // Data contoh
      backgroundColor: [
        '#FFA500',
        '#FFC107',
        '#FF7043',
      ],
      borderColor: [
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
      ],
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        font: {
          family: 'sans-serif',
        },
        boxWidth: 20,
        padding: 20,
      },
    },
  },
  cutout: '70%',
};

export default function MenuDonutChart() {
  return (
    <div className="widget-container">
      <h4 className="widget-title">Menu Paling Sering Diklik</h4>
      <div className="donut-chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}