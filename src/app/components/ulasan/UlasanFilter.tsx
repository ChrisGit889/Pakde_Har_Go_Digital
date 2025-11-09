'use client';
import React, { useState } from 'react';

interface UlasanFilterProps {
  counts: {
    semua: number;
    pending: number;
    replied: number;
  };
  onStatusChange: (status: string) => void;
  onRatingChange: (rating: number) => void;
}

export default function UlasanFilter({ counts, onStatusChange, onRatingChange }: UlasanFilterProps) {
  const [activeStatus, setActiveStatus] = useState('semua');
  const [activeRating, setActiveRating] = useState(0);

  const handleStatusClick = (status: string) => {
    setActiveStatus(status);
    onStatusChange(status);
  };

  const handleRatingClick = (rating: number) => {
    const newRating = activeRating === rating ? 0 : rating; // Klik lagi untuk batal
    setActiveRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <label>Status</label>
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${activeStatus === 'semua' ? 'active' : ''}`}
            onClick={() => handleStatusClick('semua')}
          >
            Semua ({counts.semua})
          </button>
          <button 
            className={`filter-tab ${activeStatus === 'pending' ? 'active' : ''}`}
            onClick={() => handleStatusClick('pending')}
          >
            Perlu Dibalas ({counts.pending})
          </button>
          <button 
            className={`filter-tab ${activeStatus === 'replied' ? 'active' : ''}`}
            onClick={() => handleStatusClick('replied')}
          >
            Sudah Dibalas ({counts.replied})
          </button>
        </div>
      </div>
      
      <div className="filter-group">
        <label>Penilaian Toko</label>
        <div className="filter-tabs">
          <button 
            className={`filter-tab checkbox-tab ${activeRating === 0 ? 'active' : ''}`}
            onClick={() => handleRatingClick(0)}
          >
            <input type="checkbox" checked={activeRating === 0} readOnly /> Semua
          </button>
          {[5, 4, 3, 2, 1].map(star => (
            <button 
              key={star}
              className={`filter-tab checkbox-tab ${activeRating === star ? 'active' : ''}`}
              onClick={() => handleRatingClick(star)}
            >
              <input type="checkbox" checked={activeRating === star} readOnly /> {star} Bintang
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}