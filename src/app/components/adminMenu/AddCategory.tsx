'use client';
import React, { useState } from 'react';
import './AdminMenu.css';

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddCategoryModal({ isOpen, onClose }: AddCategoryModalProps) {
  const [kategori, setKategori] = useState('');
  if (!isOpen) {
    return null;
  }

  const handleSimpan = () => {
    if (!kategori) {
      alert('Harap isi nama kategori terlebih dahulu.');
      return;
    }
    console.log('Kategori baru disimpan:', kategori);
    alert('Kategori berhasil disimpan!');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
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
          <button className="modal-button green" onClick={handleSimpan}>
            <span>✓</span> Simpan Perubahan
          </button>
          <button className="modal-button red" onClick={onClose}>
            <span>✕</span> Hapus Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}