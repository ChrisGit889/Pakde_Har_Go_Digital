'use client';
import React from 'react';

const reviews = [
  { name: 'Budi Is Man', role: 'Mahasiswa Untar', stars: 5, text: 'Nasi Goreng Original di sini adalah yang terbaik yang pernah saya coba di Jakarta...' },
  { name: 'Budi Is Man', role: 'Mahasiswa Untar', stars: 5, text: 'Nasi Goreng Original di sini adalah yang terbaik yang pernah saya coba di Jakarta...' },
  { name: 'Budi Is Man', role: 'Mahasiswa Untar', stars: 5, text: 'Nasi Goreng Original di sini adalah yang terbaik yang pernah saya coba di Jakarta...' },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="star-rating">
    {[...Array(count)].map((_, i) => <span key={i} className="star-filled">★</span>)}
    {[...Array(5 - count)].map((_, i) => <span key={i} className="star-empty">★</span>)}
  </div>
);

export default function ReviewList() {
  return (
    <div className="widget-container">
      <div className="widget-header">
        <h2 className="widget-title">Ulasan</h2>
        <button className="options-button">...</button>
      </div>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-card-header">
              <div>
                <h4 className="review-name">{review.name}</h4>
                <p className="review-role">{review.role}</p>
              </div>
              <StarRating count={review.stars} />
            </div>
            <p className="review-text">{review.text}</p>
            <div className="review-actions">
              <button className="review-action-reply">Balas</button>
              <button className="review-action-delete">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}