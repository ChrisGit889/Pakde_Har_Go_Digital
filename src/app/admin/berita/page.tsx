'use server';
import Link from 'next/link';
import BeritaList from '@/app/admin/berita/components/BeritaList';
import './BeritaPage.css';

export default async function BeritaPage() {
  return (
    <>
      <div className="berita-page-header">
        <h1 className="page-title">Daftar Berita</h1>
        <Link href="/admin/berita/tambah" className="button-orange">
          Tambah Berita
        </Link>
      </div>

      <div className="berita-list-container">
        <BeritaList />
      </div>
    </>
  );
}