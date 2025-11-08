'use client';
import React from 'react';
import Link from 'next/link';
import './AdminMenu.css';

export default function AdminMenuTopbar() {
  return (
    <div className="admin-menu-topbar">
      <h1 className="admin-menu-title">Daftar Produk</h1>

      <div className="search-wrapper">
        <span>🔍</span>
        <input type="text" placeholder="Cari Menu" />
      </div>

      <div className="button-group">
        <button className="admin-button secondary">
          <span>+</span> Tambah Kategori
        </button>
        <Link href="/admin/menu/tambah" className="admin-button primary">
          <span>+</span> Tambah Menu
        </Link>
      </div>
    </div>
  );
}