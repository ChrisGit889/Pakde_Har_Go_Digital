'use client';
import React, { useState, useEffect } from 'react';
import './InformasiPage.css';

interface JamModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: string;
  jamData: any;
}

export default function JamModal({ isOpen, onClose, mode, jamData }: JamModalProps) {
  if (!isOpen) return null;
  const handleSubmit = () => {
    onClose();
  };

  const isHariKerja = mode === 'kerja';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{isHariKerja ? 'Ubah Jam Kerja' : 'Ubah Hari Libur'}</h3>
        {isHariKerja ? (
          <div className="jam-modal-grid">
            <label>Senin</label><input type="text" defaultValue="07:00 - 22:00" />
            <label>Selasa</label><input type="text" defaultValue="07:00 - 22:00" />
            <label>Rabu</label><input type="text" defaultValue="07:00 - 22:00" />
            <label>Kamis</label><input type="text" defaultValue="07:00 - 22:00" />
            <label>Jumat</label><input type="text" defaultValue="07:00 - 22:00" />
          </div>
        ) : (
          <div className="jam-modal-grid">
            <label>Sabtu</label><input type="text" defaultValue="Tutup" />
            <label>Minggu</label><input type="text" defaultValue="Tutup" />
          </div>
        )}

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>Batal</button>
          <button className="modal-button green" onClick={handleSubmit}>Simpan</button>
        </div>
      </div>
    </div>
  );
}