'use client';
import DashboardLayout from '@/app/components/DashboardLayout'; 
import StatCards from '@/app/components/dashboard/StatCards';
import SalesChart from '@/app/components/dashboard/SalesChart';
import './DashboardPage.css';

export default function DashboardPengunjungPage() {
  return (
    <DashboardLayout>
      <div className="modern-dashboard-layout">
        <div className="main-column">
          <h1 className="page-title">Dashboard Pengunjung</h1>
          <StatCards />
          <SalesChart />
        </div>

        <div className="sidebar-column">
          <div className="widget-container">
            <h4 className="widget-title">Sumber Pengunjung</h4>
            <ul className="widget-list">
              <li><span>Google</span> <span>1,204</span></li>
              <li><span>Instagram</span> <span>850</span></li>
              <li><span>Facebook</span> <span>320</span></li>
              <li><span>Langsung</span> <span>150</span></li>
            </ul>
          </div>
          
          <div className="widget-container">
            <h4 className="widget-title">Perangkat Pengguna</h4>
             <ul className="widget-list">
              <li><span>Desktop</span> <span>40%</span></li>
              <li><span>Mobile</span> <span>60%</span></li>
            </ul>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}