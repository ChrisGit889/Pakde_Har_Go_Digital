'use client';
import React, { useState, useEffect } from 'react';
import '../../admin/informasi/InformasiPage.css'; 

interface AlamatModalProps {
  isOpen: boolean;
  onClose: () => void;
  alamatData: {
    namaToko: string;
    alamat: string;
  } | null;
}

export default function AlamatModal({ isOpen, onClose, alamatData }: AlamatModalProps) {
  const [namaToko, setNamaToko] = useState('');
  const [alamat, setAlamat] = useState('');

  useEffect(() => {
    if (alamatData) {
      setNamaToko(alamatData.namaToko);
      setAlamat(alamatData.alamat);
    } else {
      setNamaToko('');
      setAlamat('');
    }
  }, [alamatData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log("Menyimpan:", { namaToko, alamat });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{alamatData ? 'Ubah Alamat' : 'Tambah Alamat Baru'}</h3>
        
        <div className="form-section">
          <label htmlFor="namaToko">Nama Toko</label>
          <input 
            type="text" 
            id="namaToko" 
            value={namaToko} 
            onChange={(e) => setNamaToko(e.target.value)}
          />
        </div>
        
        <div className="form-section">
          <label htmlFor="alamat">Alamat</label>
          <textarea 
            id="alamat" 
            rows={4} 
            value={alamat} 
            onChange={(e) => setAlamat(e.target.value)}
          ></textarea>
        </div>

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>Batal</button>
          <button className="modal-button green" onClick={handleSubmit}>Simpan</button>
        </div>
      </div>
    </div>
  );
}