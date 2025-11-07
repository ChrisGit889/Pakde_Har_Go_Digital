// file: src/app/components/DashboardLayout.tsx
'use client';
import React from 'react';
import Sidebar from './sidebarWebAdmin/Sidebar';
import Topbar from './navbarWebUser/navbar';
import './DashboardLayout.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-wrapper">
        <Topbar />
        
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}