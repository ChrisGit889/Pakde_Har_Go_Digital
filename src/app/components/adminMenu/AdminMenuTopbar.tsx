'use client';
import React from 'react';
import Link from 'next/link'; 
import './AdminMenu.css';

interface AdminMenuTopbarProps {
  onAddCategoryClick: () => void;
}

export default function AdminMenuTopbar({ onAddCategoryClick }: AdminMenuTopbarProps) {
  return (
    <div className="admin-menu-topbar">
      <h1 className="admin-menu-title">Daftar Produk</h1>
      <div className="topbar-right-group">
        <div className="search-wrapper">
          <img 
            src="/images/search.png"
            alt="Cari"
            className="topbar-icon" 
          />
          <input type="text" placeholder="Cari Menu" />
        </div>

        <div className="button-group">
          <button className="admin-button secondary" onClick={onAddCategoryClick}>
            <img 
              src="/images/add.png"
              alt="Tambah Kategori"
              className="topbar-icon"
            />
            Tambah Kategori
          </button>
          
          <Link href="/admin/menu/tambah" className="admin-button secondary">
            <img 
              src="/images/cutlery.png"
              alt="Tambah Menu"
              className="topbar-icon"
            />
            Tambah Menu
          </Link>
        </div>
      </div>
    </div>
  );
}