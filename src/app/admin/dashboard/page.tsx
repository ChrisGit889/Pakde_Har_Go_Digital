'use server';
import StatCards from '@/app/admin/dashboard/components/StatCards';
import SalesChart from '@/app/admin/dashboard/components/SalesChart';
import MenuDonutChart from '@/app/admin/dashboard/components/MenuDonutChart';
import VisitorSourceChart from '@/app/components/dashboard/VisitorSourceChart';
import './DashboardPage.css';
import { MenuData } from '@/utils/dataTypes/MenuData';
import { ViewsData } from '@/utils/dataTypes/ViewsData';
import { fetchData } from '@/utils/utils';

export default async function DashboardPengunjungPage() {
  const menuData: MenuData = await fetchData('/menu/list', { method: 'GET' });
  const views: ViewsData = await fetchData('/menu/views', { method: 'GET' });


  return (
    <>
      <div className="visitor-dashboard-container">

        <div className="admin-page-header">
          <h1 className="page-title">Dashboard Pengunjung</h1>
        </div>
        <StatCards views={views} menus={menuData.data} />
        <SalesChart views={views} />

        <div className="widget-grid">
          <VisitorSourceChart />
          <MenuDonutChart menus={menuData.data} />
        </div>

      </div>
    </>
  );
}