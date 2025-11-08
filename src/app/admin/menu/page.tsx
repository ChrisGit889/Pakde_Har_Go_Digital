'use client';
import { useState } from 'react'; 
import DashboardLayout from '../../components/DashboardLayout';
import AdminMenuTopbar from '../../components/adminMenu/AdminMenuTopbar';
import MenuFilterTabs from '../../components/adminMenu/MenuFilterTabs';
import ProductGrid from '../../components/adminMenu/ProductGrid';
import AddCategoryModal from '../../components/adminMenu/AddCategory';
import './MenuPage.css';

export default function AdminMenuPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <DashboardLayout>
      <div className="menu-page-container">
        <AdminMenuTopbar onAddCategoryClick={() => setIsModalOpen(true)} />
        <MenuFilterTabs />
        <ProductGrid />
      </div>
      <AddCategoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </DashboardLayout>
  );
}