// Lokasi file: src/app/components/DashboardLayout.tsx
'use client';
import React from 'react';
// Pastikan path ke Sidebar.tsx sudah benar
import Sidebar from './Sidebar';
import './DashboardLayout.css'; // Pastikan CSS ini ada

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-container">

      {/* Bagian 1: Sidebar Kiri */}
      <Sidebar />

      {/* Bagian 2: Konten Utama (Kanan) */}
      <div className="main-wrapper">

        {/* <Topbar /> <-- KODE YANG MENYEBABKAN MASALAH SUDAH DIHAPUS DARI SINI */}

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}