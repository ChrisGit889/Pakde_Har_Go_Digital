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
  const [searchTerm, setSearchTerm] = useState('');

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
    let productsToFilter = products;

    if (activeCategory !== 'Semua') {
      productsToFilter = productsToFilter.filter(product => product.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      productsToFilter = productsToFilter.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return productsToFilter;
  }, [activeCategory, products, searchTerm]); 

  return (
    <DashboardLayout>
      <div className="menu-page-container">
        <AdminMenuTopbar 
          onAddCategoryClick={() => setIsModalOpen(true)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm} 
        />

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