'use client';
import { Dispatch, SetStateAction } from 'react';
import './AdminMenu.css';
import { Category, CategoryData } from '@/utils/dataTypes/CategoryData';

export default function MenuFilterTabs({ categories, active, onChange }: { categories: CategoryData, active: Category, onChange: Dispatch<SetStateAction<Category>> }) {
  return (
    <div className="menu-filter-tabs">
      {categories.data.map((tab: Category) => (
        <button
          key={tab.name}
          className={`filter-tab ${active.name === tab.name ? 'active' : ''}`}
          onClick={() => onChange(tab)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}