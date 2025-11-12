'use client';
import React from 'react';
import './AdminMenu.css';

interface MenuFilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuFilterTabs({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: MenuFilterTabsProps) {
  const tabs = ['Semua', ...categories];
  return (
    <div className="menu-filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`filter-tab ${activeCategory === tab ? 'active' : ''}`}
          onClick={() => onCategoryChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}