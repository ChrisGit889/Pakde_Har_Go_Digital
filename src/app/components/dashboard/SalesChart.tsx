'use client';
import React, { useState, useRef, useEffect } from 'react'; // Import useRef & useEffect
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,
  Filler
} from 'chart.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler
);

const dataToday = {
  labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
  datasets: [{ data: [150, 230, 224, 300, 190] }] // Data saja
};
const data7Days = {
  labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
  datasets: [{ data: [1200, 1500, 1300, 1600, 1400, 1800, 1700] }]
};
const data30Days = {
  labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
  datasets: [{ data: [8000, 9500, 8700, 9200] }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: { 
    y: { beginAtZero: true },
    x: { grid: { display: false } }
  },
  tension: 0.4,
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
    }
  }
};

export default function SalesChart() {
  const [activeFilter, setActiveFilter] = useState('today');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const chartRef = useRef<ChartJS<'line'>>(null);
  const [chartData, setChartData] = useState<any>({ datasets: [] });

  useEffect(() => {
    let rawData;
    let chartContextText = "24 Jam Terakhir";
    
    if (activeFilter === '7days') {
      rawData = data7Days;
      chartContextText = "7 Hari Terakhir";
    } else if (activeFilter === '30days') {
      rawData = data30Days;
      chartContextText = "30 Hari Terakhir";
    } else {
      rawData = dataToday;
      chartContextText = "24 Jam Terakhir";
    }

    const chart = chartRef.current;
    if (!chart) return;
    
    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
    gradient.addColorStop(0, 'rgba(255, 165, 0, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');

    setChartData({
      labels: rawData.labels,
      datasets: [
        {
          ...rawData.datasets[0],
          label: 'Pengunjung',
          fill: true,
          borderColor: '#FFA500',
          backgroundColor: gradient,
        },
      ],
    });
  }, [activeFilter, startDate, endDate]);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="widget-container">
      <div className="chart-header">
      </div>
      <div className="chart-body modern">
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </div>
  );
}