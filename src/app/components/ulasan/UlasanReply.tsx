'use client';
import React, { useState } from 'react';
import '@/app/admin/ulasan/UlasanPage.css';

interface Ulasan {
  id: number;
  name: string;
  comment: string;
}

interface ReplyModalProps {
  ulasan: Ulasan | null;
  onClose: () => void;
  onKirim: (balasan: string) => void;
}

export default function UlasanReplyModal({ ulasan, onClose, onKirim }: ReplyModalProps) {
  const [balasan, setBalasan] = useState('');

  if (!ulasan) {
    return null;
  }

  const handleKirim = () => {
    if (!balasan) {
      alert('Harap isi balasan Anda.');
      return;
    }
    onKirim(balasan);
    setBalasan('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content reply-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Balas Ulasan</h3>

        <div className="reply-to-box">
          <strong>{ulasan.name}:</strong>
          <p>"{ulasan.comment}"</p>
        </div>

        <textarea
          className="modal-textarea"
          placeholder="Tulis balasan Anda di sini..."
          rows={5}
          value={balasan}
          onChange={(e) => setBalasan(e.target.value)}
        />
        
        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>Batal</button>
          <button className="modal-button green" onClick={handleKirim}>Kirim Balasan</button>
        </div>
      </div>
    </div>
  );
}