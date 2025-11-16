'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Menu } from '@/utils/dataTypes/MenuData';

ChartJS.register(ArcElement, Tooltip, Legend);
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

export default function MenuDonutChart({ menus }: { menus: Menu[] }) {
  const data = {
    labels: menus.map((m) => m.food.name),
    datasets: [
      {
        label: ' Jumlah Klik',
        data: menus.map((m) => Math.round(m.food.visitors / 2)),
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

  return (
    <div className="widget-container">
      <h4 className="widget-title">Menu Paling Sering Diklik</h4>
      <div className="donut-chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}