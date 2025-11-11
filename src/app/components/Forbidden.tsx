'use client';
import React from 'react';
import Link from 'next/link';
import './Forbidden.css';

export default function Forbidden() {
  return (
    <div className="forbidden-container">
      <div className="forbidden-box">
        <div className="forbidden-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="forbidden-title">Akses Ditolak (403)</h1>
        <p className="forbidden-message">
          Anda tidak memiliki otorisasi untuk mengakses halaman ini.
          Silakan login sebagai admin untuk melanjutkan.
        </p>
        <div className="forbidden-actions">
          <Link href="/" className="forbidden-button secondary">
            Kembali ke Beranda
          </Link>
          <Link href="/login" className="forbidden-button primary">
            Login Admin
          </Link>
        </div>
      </div>
    </div>
  );
}