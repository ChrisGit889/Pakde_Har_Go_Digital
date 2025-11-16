'use client';
import React, { useState, useMemo, useEffect } from 'react';
import AdminMenuTopbar from '@/app/components/adminMenu/AdminMenuTopbar';
import MenuFilterTabs from '@/app/components/adminMenu/MenuFilterTabs';
import ProductGrid from '@/app/components/adminMenu/ProductGrid';
import EditCategory from '@/app/components/adminMenu/EditCategory';
import { Product, masterProductList } from './data';
import './MenuPage.css';

const INITIAL_CATEGORIES = ['Semua', 'Nasi Goreng', 'Mie Goreng', 'Minuman'];

export default function AdminMenuPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<string[]>(INITIAL_CATEGORIES);

  useEffect(() => {
    const storedProducts = localStorage.getItem('myProducts');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(masterProductList);
      localStorage.setItem('myProducts', JSON.stringify(masterProductList));
    }

    const storedCategories = localStorage.getItem('myCategories');
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    } else {
      setCategories(INITIAL_CATEGORIES);
      localStorage.setItem('myCategories', JSON.stringify(INITIAL_CATEGORIES));
    }
  }, []);

  const handleUpdateCategories = (newCategories: string[]) => {
    const filtered = newCategories.filter(cat => cat !== 'Semua');
    const finalCategories = ['Semua', ...filtered];    
    setCategories(finalCategories);
    localStorage.setItem('myCategories', JSON.stringify(finalCategories));
    if (!finalCategories.includes(activeCategory)) {
      setActiveCategory('Semua');
    }
  };

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
    <>
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

      <EditCategory
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCategories={categories}
        onUpdateCategories={handleUpdateCategories}
      />
    </>
  );
}