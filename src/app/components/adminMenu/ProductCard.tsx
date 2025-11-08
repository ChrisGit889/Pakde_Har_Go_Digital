'use client';
import React from 'react';
import './AdminMenu.css';

interface Product {
  id: number;
  name: string;
  img: string;
  rasa: string;
  desc: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-card-image" />
      <div className="product-card-content">
        <h4 className="product-card-title">{product.name}</h4>
        <p className="product-card-subtitle">Rasa : {product.rasa}</p>
        <p className="product-card-description">{product.desc}</p>
        
        <div className="product-card-actions">
          <button className="product-card-button edit">
            <span>✏️</span> Edit
          </button>
          <button className="product-card-button delete">
            <span>🗑️</span> Hapus
          </button>
        </div>
      </div>
    </div>
  );
}