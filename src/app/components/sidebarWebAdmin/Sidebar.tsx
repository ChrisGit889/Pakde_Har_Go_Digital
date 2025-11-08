'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Sidebar.css';

const navLinks = [
  { name: 'Pengunjung', href: '/admin/dashboard', icon: '...' },
  { name: 'Menu', href: '/admin/menu', icon: '...' },
  { name: 'Informasi', href: '/admin/informasi', icon: '...' },
  { name: 'Berita', href: '/admin/berita', icon: '...' },
  { name: 'Ulasan', href: '/admin/ulasan', icon: '...' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/images/logopakde.png" alt="Logo Pakde Har" width="120" />
      </div>

      <nav className="sidebar-nav">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href); 
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-button">
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}