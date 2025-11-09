'use client';
import React from 'react';

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`star-icon ${i <= rating ? 'filled' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 0 0-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.54 1.118l-3.368-2.447a1 1 0 0 0-1.176 0l-3.368 2.447c-.784.57-1.838-.197-1.54-1.118l1.286-3.96a1 1 0 0 0-.364-1.118L2.25 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.286-3.96Z" />
      </svg>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

interface Ulasan {
  id: number;
  name: string;
  productImage: string;
  productName: string;
  rating: number;
  timestamp: string;
  comment: string;
  reply: string | null;
  status: string;
  origin: string;
  orderId: string;
}

interface UlasanListProps {
  ulasanList: Ulasan[];
  onBalasClick: (ulasan: Ulasan) => void;
}

export default function UlasanList({ ulasanList, onBalasClick }: UlasanListProps) {
  
  if (ulasanList.length === 0) {
    return (
      <div className="ulasan-list-container ulasan-list-empty">
        <p>Tidak ada ulasan yang cocok dengan filter Anda.</p>
      </div>
    );
  }

  return (
    <div className="ulasan-list-container">
      <div className="ulasan-list-header">
        <div className="col-info">Informasi Produk</div>
        <div className="col-penilaian">Penilaian Pembeli</div>
        <div className="col-tindakan">Tindakan</div>
      </div>

      {ulasanList.map((ulasan) => (
        <div key={ulasan.id} className="ulasan-list-card">
          <div className="col-info">
            <div className="user-info">
              <span>{ulasan.name}</span>
            </div>
            <div className="product-info">
              <img src={ulasan.productImage} alt={ulasan.productName} className="product-image" />
              <div className="product-details">
                <strong>{ulasan.productName}</strong>
                <span>Variasi: Pedas Sedang</span>
              </div>
            </div>
          </div>

          <div className="col-penilaian">
            <StarRating rating={ulasan.rating} />
            <span className="timestamp">{ulasan.timestamp}</span>
            <p className="comment-text">{ulasan.comment}</p>
            {ulasan.reply && (
              <div className="reply-box">
                <strong>Respons Penjual:</strong>
                <p>{ulasan.reply}</p>
              </div>
            )}
          </div>

          <div className="col-tindakan">
            {ulasan.status === 'pending' && (
              <button 
                className="button-balas" 
                onClick={() => onBalasClick(ulasan)}
              >
                Balas
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}