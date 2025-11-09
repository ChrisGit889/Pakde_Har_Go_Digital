'use client';
import React from 'react';
import ProductCard from './ProductCard';
import './AdminMenu.css';

const products = [
  { id: 1, name: 'Nasi Goreng Ayam', img: '/images/Nasi_Goreng_Ayam.jpg', rasa: 'Pedas / Sedang', desc: 'Nasi Goreng Ayam dibuat dari nasi pilihan yang digoreng dengan bumbu rempah khas, potongan daging ayam segar'},
  { id: 2, name: 'Nasi Goreng Ayam', img: '/images/Nasi_Goreng_Ayam.jpg', rasa: 'Pedas / Sedang', desc: 'Deskripsi...' },
  { id: 3, name: 'Nasi Goreng Ayam', img: '/images/Nasi_Goreng_Ayam.jpg', rasa: 'Pedas / Sedang', desc: 'Deskripsi...' },
  { id: 4, name: 'Nasi Goreng Ayam', img: '/images/Nasi_Goreng_Ayam.jpg', rasa: 'Pedas / Sedang', desc: 'Deskripsi...' },
  { id: 5, name: 'Nasi Goreng Ayam', img: '/images/Nasi_Goreng_Ayam.jpg', rasa: 'Pedas / Sedang', desc: 'Deskripsi...' },
  { id: 6, name: 'Nasi Goreng Ayam', img: '/images/Nasi_Goreng_Ayam.jpg', rasa: 'Pedas / Sedang', desc: 'Deskripsi...' },
];

export default function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}