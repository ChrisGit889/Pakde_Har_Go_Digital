'use client';
import Link from 'next/link';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-box">
        <img src="/images/LogoPakDe.png" alt="Logo Pakde Har" width="150" />
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Halaman Tidak Ditemukan</h2>
        <p className="not-found-message">
          Maaf, halaman yang Anda cari tidak ditemukan. Mungkin telah dihapus atau alamatnya salah 🙏
        </p>

        <Link href="/" className="not-found-button">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}