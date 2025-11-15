'use client';
import { useState } from 'react';
import ProductCard from './ProductCard';
import DeleteModal from './DeleteModal';
import './AdminMenu.css';
import { Menu } from '@/utils/dataTypes/MenuData';
import { useRouter } from 'next/navigation';

export default function ProductGrid({ menu }: { menu: Menu[] }) {

  const router = useRouter();
  const [productToDelete, setProductToDelete] = useState<Menu | null>(null);

  const openDeleteModal = (product: Menu) => {
    setProductToDelete(product);
  };

  const onClose = () => {
    setProductToDelete(null);
    router.refresh();
  };

  return (
    <>
      <div className="product-grid">
        {menu.length === 0 ? (
          <p>Tidak ada produk dalam kategori ini.</p>
        ) : (
          menu.map((m) => (
            <ProductCard
              key={m.id}
              menu={m}
              onDelete={openDeleteModal}
            />
          ))
        )}
      </div>

      <DeleteModal
        show={!!productToDelete}
        onClose={onClose}
        item={productToDelete!}
      />
    </>
  );
}