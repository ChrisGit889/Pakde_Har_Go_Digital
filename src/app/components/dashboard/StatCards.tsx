'use client';
import React from 'react';

const stats = [
  { 
    value: '100', 
    label: 'Total Pengunjung', 
    icon: '👤',
    color: 'pink',
    comparison: '+15%',
    isUp: true,
  },
  { 
    value: '100', 
    label: 'Produk Di Klik', 
    icon: '🖱️', 
    color: 'blue',
    comparison: '-3%',
    isUp: false,
  },
  { 
    value: '5', 
    label: 'Pengunjung Baru', 
    icon: '✨', 
    color: 'green',
    comparison: '+2',
    isUp: true,
  },
  { 
    value: '10 Menit', 
    label: 'Rata - Rata waktu', 
    icon: '🕒', 
    color: 'purple',
    comparison: '+1m',
    isUp: true,
  },
];

export default function StatCards() {
  return (
    <div className="stat-cards-grid">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card modern">
          <div className={`stat-icon-wrapper ${stat.color}`}>
            <span>{stat.icon}</span> 
          </div>
          <div className="stat-content">
            <label>{stat.label}</label>
            <div className="stat-value">{stat.value}</div>
            <div className={`stat-comparison ${stat.isUp ? 'positive' : 'negative'}`}>
              {stat.isUp ? '↑' : '↓'} {stat.comparison} vs kemarin
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}