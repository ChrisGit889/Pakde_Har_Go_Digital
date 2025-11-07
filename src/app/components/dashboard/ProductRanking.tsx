'use client';
import React from 'react';

const products = [
  { rank: 1, img: '/images/nasi-goreng-ayam.jpg', name: 'Nasi Goreng Ayam', visitors: 1000 },
  { rank: 2, img: '/images/nasi-goreng-spesial.jpg', name: 'Nasi Goreng Spesial', visitors: 1000 },
  { rank: 3, img: '/images/nasi-goreng-gila.jpg', name: 'Nasi Goreng Gila', visitors: 1000 },
];

export default function ProductRanking() {
  return (
    <div className="widget-container">
      <div className="widget-header">
        <h2 className="widget-title">Peringkat Produk</h2>
      </div>
      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Peringkat</th>
              <th>Gambar</th>
              <th>Nama</th>
              <th className="text-right">Jumlah Pengunjung</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.rank}>
                <td>{product.rank}</td>
                <td>
                  <img src={product.img} alt={product.name} className="product-table-img" />
                </td>
                <td>{product.name}</td>
                <td className="text-right">{product.visitors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}