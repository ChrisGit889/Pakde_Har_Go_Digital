'use client';
import React from 'react';
import Link from 'next/link';
import './AdminMenu.css';

interface Product {
  id: number, name: string, img: string, rasa: string, desc: string, category: string,
}
interface ProductCardProps {
  product: Product;
  onDeleteClick: (product: Product) => void;
}

export default function ProductCard({ product, onDeleteClick }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-card-image" />
      <div className="product-card-content">
        <div>
          <h4 className="product-card-title">{product.name}</h4>
          <p className="product-card-subtitle">Rasa : {product.rasa}</p>
          <p className="product-card-description">{product.desc}</p>
        </div>
        
        <div className="product-card-actions">
          <Link 
            href={`/admin/menu/edit/${product.id}`} 
            className="product-card-button edit"
          >
            <span>✏️</span> Edit
          </Link>
          
          <button 
            className="product-card-button delete" 
            onClick={() => onDeleteClick(product)}
          >
            <span>🗑️</span> Hapus
          </button>
        </div>
      </div>
    </div>
  );
}