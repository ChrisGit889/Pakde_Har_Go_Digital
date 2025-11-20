'use client';
import Link from 'next/link';
import './AdminMenu.css';
import { Menu } from '@/utils/dataTypes/MenuData';
import { Image } from 'react-bootstrap';

export default function ProductCard({ menu, onDelete }: { menu: Menu, onDelete: (m: Menu) => void }) {
  return (
    <div className="product-card">
      <Image
        src={menu.image.data ? menu.image.data : '/images/placeholder.jpg'}
        alt={menu.food.name}
        className="product-card-image" />
      <div className="product-card-content">
        <div>
          <h4 className="product-card-title">{menu.food.name}</h4>
          <p className="product-card-subtitle">Rasa : {menu.food.flavour}</p>
          <p className="product-card-description">{menu.food.description}</p>
        </div>

        <div className="product-card-actions">
          <Link
            href={`/admin/menu/edit/${menu.id}`}
            className="product-card-button edit"
          >
            <span>✏️</span> Edit
          </Link>

          <button
            className="product-card-button delete"
            onClick={() => onDelete(menu)}
          >
            <span>🗑️</span> Hapus
          </button>
        </div>
      </div>
    </div>
  );
}