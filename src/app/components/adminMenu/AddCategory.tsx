'use client';
import React, { useState } from 'react';
import './AdminMenu.css';

interface AddCategoryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddCategory({ isOpen, onClose }: AddCategoryProps) {
  const [kategori, setKategori] = useState('');
  if (!isOpen) {
    return null;
  }

  const handleSimpan = () => {
    if (!kategori) {
      alert('Harap isi nama kategori.');
      return;
    }
    console.log('Kategori baru disimpan:', kategori);
    setKategori('');
    onClose();
  };

  const handleClose = () => {
    setKategori('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Tambah Kategori</h3>
        <input 
          type="text" 
          className="modal-input" 
          placeholder="Isi Kategori baru di sini..." 
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        />
        
        <div className="modal-actions">
          <button className="modal-button secondary" onClick={handleClose}>
            Batal
          </button>
          <button className="modal-button green" onClick={handleSimpan}>
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}