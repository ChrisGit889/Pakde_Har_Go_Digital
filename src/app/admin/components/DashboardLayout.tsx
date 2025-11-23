'use client';
import React from 'react';
import Sidebar from './Sidebar';
import './DashboardLayout.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-container">

      {/* Bagian 1: Sidebar Kiri */}
      <Sidebar />

      {/* Bagian 2: Konten Utama (Kanan) */}
      <div className="main-wrapper">

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}