'use client';
import React from 'react';

const stats = [
  { value: '100', label: 'Total Pengunjung', colorClass: 'stat-card-pink', icon: '👤' },
  { value: '100', label: 'Produk Di Klik', colorClass: 'stat-card-pink', icon: '🖱️' },
  { value: '5', label: 'Pengunjung Baru', colorClass: 'stat-card-green', icon: '✨' },
  { value: '10 Menit', label: 'Rata - Rata waktu', colorClass: 'stat-card-purple', icon: '🕒' },
];

export default function StatCards() {
  return (
    <div className="widget-container">
      <div className="widget-header">
        <h2 className="widget-title">Penjualan Hari Ini</h2>
        <button className="export-button">Ekspor</button>
      </div>
      <div className="stat-cards-grid">
        {stats.map((stat) => (
          <div key={stat.label} className={`stat-card ${stat.colorClass}`}>
            <div className="stat-card-icon">{stat.icon}</div>
            <div className="stat-card-value">{stat.value}</div>
            <div className="stat-card-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}