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
        <div>
          <h4 className="product-card-title">{product.name}</h4>
          <p className="product-card-subtitle">Rasa : {product.rasa}</p>
          <p className="product-card-description">{product.desc}</p>
        </div>
        <div className="product-card-actions">
          <button className="product-card-button edit">
            <img 
              src="/images/edit.png"
              alt="Edit"
              className="button-icon"
            />
            Edit
          </button>
          <button className="product-card-button delete">
            <img 
              src="/images/delete.png"
              alt="Hapus"
              className="button-icon"
            />
            Hapus
          </button>

        </div>
      </div>
    </div>
  );
}