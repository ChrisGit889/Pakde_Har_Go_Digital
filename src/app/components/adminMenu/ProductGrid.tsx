'use client';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import DeleteModal from './Delete';
import './AdminMenu.css';

interface Product {
  id: number, name: string, img: string, rasa: string, desc: string, category: string,
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const openDeleteModal = (product: Product) => {
    setProductToDelete(product);
  };
  const closeDeleteModal = () => {
    setProductToDelete(null);
  };
  const confirmDelete = () => {
    if (productToDelete) {
      console.log(`Menghapus produk: ${productToDelete.name}`);
      closeDeleteModal();
    }
  };

  return (
    <>
      <div className="product-grid">
        {products.length === 0 ? (
          <p>Tidak ada produk dalam kategori ini.</p>
        ) : (
          products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onDeleteClick={openDeleteModal} 
            />
          ))
        )}
      </div>

      <DeleteModal 
        isOpen={!!productToDelete}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        productName={productToDelete?.name || ''}
      />
    </>
  );
}