import DashboardLayout from '../../components/DashboardLayout';
import AdminMenuTopbar from '../../components/adminMenu/AdminMenuTopbar';
import MenuFilterTabs from '../../components/adminMenu/MenuFilterTabs';
import ProductGrid from '../../components/adminMenu/ProductGrid';
import './MenuPage.css';

export default function AdminMenuPage() {
  return (
    <DashboardLayout>
      <div className="menu-page-container">
        <AdminMenuTopbar />
        <MenuFilterTabs />
        <ProductGrid />
      </div>
    </DashboardLayout>
  );
}