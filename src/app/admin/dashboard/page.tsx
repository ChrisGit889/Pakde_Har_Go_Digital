'use client';
import DashboardLayout from '@/app/components/DashboardLayout'; 
import StatCards from '@/app/components/dashboard/StatCards';
import SalesChart from '@/app/components/dashboard/SalesChart';
import './DashboardPage.css';

export default function DashboardPengunjungPage() {
  return (
    <DashboardLayout>
      <div className="visitor-dashboard-container">
        <div className="admin-page-header">
          <h1 className="page-title">Dashboard Pengunjung</h1>
        </div>

        <StatCards />
        <SalesChart />
      </div>
    </DashboardLayout>
  );
}