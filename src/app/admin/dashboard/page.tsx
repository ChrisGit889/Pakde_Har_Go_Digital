import DashboardLayout from '../../components/DashboardLayout'; 
import StatCards from '../../components/dashboard/StatCards';
import SalesChart from '../../components/dashboard/SalesChart';
import ProductRanking from '../../components/dashboard/ProductRanking';
import ReviewList from '../../components/dashboard/ReviewList';
import './DashboardPage.css';

export default function DashboardPengunjungPage() {
  return (
    <DashboardLayout>
      <div className="dashboard-page-grid">
        <div className="dashboard-main-column">
          <StatCards />
          <SalesChart />
          <ProductRanking />
        </div>
        <div className="dashboard-side-column">
          <ReviewList />

        </div>
      </div>
    </DashboardLayout>
  );
}