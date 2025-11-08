'use client';
import Link from 'next/link';
import DashboardLayout from '@/app/components/DashboardLayout'; 
import BeritaList from '@/app/components/berita/BeritaList'; 
import './BeritaPage.css';

export default function BeritaPage() {
  return (
    <DashboardLayout>
      <div className="berita-page-header">
        <h1 className="page-title">Daftar Berita</h1>
        <Link href="/admin/berita/tambah" className="button-orange">
          Tambah Berita
        </Link>
      </div>

      <div className="berita-list-container">
        <BeritaList />
      </div>
    </DashboardLayout>
  );
}