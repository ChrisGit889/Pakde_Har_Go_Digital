'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './Sidebar.css';

const navLinks = [
  { name: 'Pengunjung', href: '/admin/dashboard', icon: '/images/profilePutih.png' },
  { name: 'Menu', href: '/admin/menu', icon: '/images/cutleryPutih.png' },
  { name: 'Informasi', href: '/admin/informasi', icon: '/images/informationPutih.png' },
  { name: 'Berita', href: '/admin/berita', icon: '/images/beritaPutih.png' },
  { name: 'Ulasan', href: '/admin/ulasan', icon: '/images/reviewPutih.png' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/');
  };

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
              <img
                src={link.icon}
                alt={link.name}
                className="nav-icon"
              />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-button" onClick={handleLogout}>
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}