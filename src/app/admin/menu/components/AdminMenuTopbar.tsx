'use client';
import Link from 'next/link';
import './AdminMenu.css';
import { Image } from 'react-bootstrap';

export default function AdminMenuTopbar({ onAddCategoryClick, search, setSearch }: { onAddCategoryClick: () => void, search: string, setSearch: (str: string) => void }) {
  return (
    <div className="admin-menu-topbar">
      <h1 className="admin-menu-title">Daftar Produk</h1>
      <div className="topbar-right-group">
        <div className="search-wrapper">
          <Image
            src="/images/search.png"
            alt="Cari"
            className="topbar-icon"
          />
          <input
            type="text"
            placeholder="Cari Menu"
            value={search}
            onChange={(e) => setSearch(e.target.value || '')}
          />
        </div>

        <div className="button-group">
          <button className="admin-button secondary" onClick={onAddCategoryClick}>
            <Image
              src="/images/add.png"
              alt="Edit Kategori"
              className="topbar-icon"
            />
            Edit Kategori
          </button>

          <Link href="/admin/menu/tambah" className="admin-button secondary">
            <Image
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