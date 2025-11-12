'use client'; 
import React, { useState, useMemo, useEffect } from 'react'; 
import DashboardLayout from '@/app/components/DashboardLayout'; 
import AdminMenuTopbar from '@/app/components/adminMenu/AdminMenuTopbar';
import MenuFilterTabs from '@/app/components/adminMenu/MenuFilterTabs';
import ProductGrid from '@/app/components/adminMenu/ProductGrid';
import AddCategory from '@/app/components/adminMenu/AddCategory';
import { Product, masterProductList, categories } from './data';
import './MenuPage.css';

export default function AdminMenuPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('myProducts');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(masterProductList);
      localStorage.setItem('myProducts', JSON.stringify(masterProductList));
    }
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Semua') {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory, products]); 

  return (
    <DashboardLayout>
      <div className="menu-page-container">
        <AdminMenuTopbar onAddCategoryClick={() => setIsModalOpen(true)} />
        <MenuFilterTabs 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory} 
        />
        <ProductGrid 
          products={filteredProducts} 
        />
      </div>
      <AddCategory
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </DashboardLayout>
  );
}