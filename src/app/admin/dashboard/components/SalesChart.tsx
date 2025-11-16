'use client';
import React, { useState, useRef, useEffect } from 'react'; // Import useRef & useEffect
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,
  Filler,
  Point,
  ChartData
} from 'chart.js';
import 'react-datepicker/dist/react-datepicker.css';
import { ViewsData } from '@/utils/dataTypes/ViewsData';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler
);

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

export default function SalesChart({ views }: { views: ViewsData }) {
  const chartRef = useRef<ChartJS<'line'>>(null);
  const tempViews = views.data.toReversed();
  const [chartData, setChartData] = useState<ChartData<"line", (number | Point | null)[], unknown>>({ datasets: [] });

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
    gradient.addColorStop(0, 'rgba(255, 165, 0, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');

    setChartData({
      labels: tempViews.map((v) => v.day.slice(0, 10)),
      datasets: [
        {
          data: tempViews.map(v => v.visits),
          label: 'Pengunjung',
          fill: true,
          borderColor: '#FFA500',
          backgroundColor: gradient,
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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