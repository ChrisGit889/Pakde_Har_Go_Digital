'use client';
import React from 'react';
import Sidebar from './sidebarWebAdmin/Sidebar'; 
import './DashboardLayout.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-wrapper">        
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}