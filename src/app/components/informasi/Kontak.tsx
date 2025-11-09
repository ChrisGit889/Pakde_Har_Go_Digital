'use client';
import React, { useState, useEffect } from 'react';
import '@/app/admin/informasi/InformasiPage.css'; 

interface KontakModalProps {
  isOpen: boolean;
  onClose: () => void;
  kontakData: string | null;
}

export default function KontakModal({ isOpen, onClose, kontakData }: KontakModalProps) {  
  const [kontak, setKontak] = useState('');

  useEffect(() => {
    setKontak(kontakData || ''); 
  }, [kontakData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log("Kontak baru:", kontak);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Ubah Kontak</h3>
        
        <div className="form-section">
          <label htmlFor="kontak">Nomor Telepon</label>
          <input 
            type="text" 
            id="kontak" 
            value={kontak} 
            onChange={(e) => setKontak(e.target.value)}
          />
        </div>

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>Batal</button>
          <button className="modal-button green" onClick={handleSubmit}>Simpan</button>
        </div>
      </div>
    </div>
  );
}