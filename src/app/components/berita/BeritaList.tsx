'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SuccessModal from './Successmodal'; 

export const dummyBerita = [
  {
    id: 1,
    title: 'Menu Baru Segera Hadir',
    excerpt: 'Menu terbaru kami, Nasi Goreng Gila Kambing...',
    imageUrl: '/images/Nasi_Goreng_Ayam.jpg',
    isiLengkap: 'Kami dengan bangga memperkenalkan menu terbaru...' 
  },
  {
    id: 2,
    title: 'Pindah Lokasi',
    excerpt: 'Pada 22 Oktober 2025 Nasi Goreng Pakde Har pindah...',
    imageUrl: '/images/Gerobak_Pakde.jpg',
    isiLengkap: 'Isi berita lengkap untuk Pindah Lokasi...'
  },
];

export default function BeritaList() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleDeleteClick = () => {
    console.log("Berita dihapus!");
    setIsSuccessModalOpen(true);
  };

  return (
    <>
      {dummyBerita.map((berita) => (
        <div key={berita.id} className="berita-card">
          <img src={berita.imageUrl} alt={berita.title} className="berita-card-image" />
          
          <div className="berita-content">
            <div className="berita-content-top">
              <h3>{berita.title}</h3>
              <p>{berita.excerpt}</p>
            </div>
            
            <div className="berita-actions">
              <Link href={`/admin/berita/edit?id=${berita.id}`} className="button-ubah">
                Edit
              </Link>
              
              <button 
                className="button-delete" 
                onClick={handleDeleteClick}
              >
                Hapus
              </button>

              <Link href={`/admin/berita/detail?id=${berita.id}`} className="button-orange">
                Lihat Detail
              </Link>
            </div>
          </div>
        </div>
      ))}

      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)} 
        message="Berita Anda berhasil dihapus."
      />
    </>
  );
}