// Lokasi: src/app/components/dashboard/VisitorSourceChart.tsx
'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
// Pastikan BarElement juga diregistrasi
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

// Data dummy untuk Bar Chart
const data = {
  labels: ['Google', 'Instagram', 'Facebook', 'Langsung'],
  datasets: [
    {
      label: 'Jumlah Pengunjung',
      data: [1204, 850, 320, 150], // Data dari widget Anda
      backgroundColor: [ // Gunakan warna tema Anda
        'rgba(255, 165, 0, 0.7)',
        'rgba(255, 165, 0, 0.7)',
        'rgba(255, 165, 0, 0.7)',
        'rgba(255, 165, 0, 0.7)',
      ],
      borderColor: [
        '#FFA500',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y' as const, // <-- INI YANG MEMBUATNYA HORIZONTAL
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Sembunyikan legenda
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      grid: {
        display: false, // Sembunyikan grid Y
      }
    }
  }
};

export default function VisitorSourceChart() {
  return (
    <div className="widget-container">
      <h4 className="widget-title">Sumber Pengunjung</h4>
      <div className="bar-chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}