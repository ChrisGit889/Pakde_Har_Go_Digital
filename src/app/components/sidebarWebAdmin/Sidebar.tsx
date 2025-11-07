'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Sidebar.css'; // File CSS untuk Sidebar

// Definisikan link navigasi
const navLinks = [
  { name: 'Pengunjung', href: '/admin/dashboard', icon: 'icon-pengunjung.svg' },
  { name: 'Menu', href: '/admin/menu', icon: 'icon-menu.svg' },
  { name: 'Informasi', href: '/admin/informasi', icon: 'icon-informasi.svg' },
  { name: 'Berita', href: '/admin/berita', icon: 'icon-berita.svg' },
  { name: 'Ulasan', href: '/admin/ulasan', icon: 'icon-ulasan.svg' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        {/* Ganti dengan logo Anda */}
        <img src="/images/logopakde.png" alt="Logo Pakde Har" width="120" />
      </div>

      <nav className="sidebar-nav">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              {/* <img src={link.icon} alt={link.name} /> */}
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-button">
          {/* <img src="/icon-keluar.svg" alt="Keluar" /> */}
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}