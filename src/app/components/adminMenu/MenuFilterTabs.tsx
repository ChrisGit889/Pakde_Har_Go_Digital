'use client';
import React, { useState } from 'react';
import './AdminMenu.css';

const tabs = ['Semua', 'Nasi Goreng', 'Mie Goreng', 'Minuman']; // Sesuaikan

export default function MenuFilterTabs() {
  const [activeTab, setActiveTab] = useState('Semua');

  return (
    <div className="menu-filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}