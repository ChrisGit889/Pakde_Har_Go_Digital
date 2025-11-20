'use client';
import React, { useState } from 'react';
import '@/app/admin/informasi/InformasiPage.css';
import { fetchBoolean, getToken } from '@/utils/utils';

export default function KontakModal({ show, onClose }: { show: boolean, onClose: () => void, }) {
  const [kontak, setKontak] = useState({ email: '', phone: '' });

  if (!show) return null;

  const handleSubmit = async () => {
    const headers = new Headers();
    headers.append('Authorization', (await getToken())!);
    headers.append('Content-Type', 'application/json');

    let res1 = true;
    let res2 = true;
    if (kontak.phone) {
      res1 = await fetchBoolean('/contact/phone/', {
        method: 'POST',
        body: JSON.stringify({
          phoneNumber: kontak.phone,
        }),
        headers: headers,
      }).then(res => res);
    }

    if (kontak.email) {
      res2 = await fetchBoolean('/contact/email/', {
        method: 'POST',
        body: JSON.stringify({
          email: kontak.email,
        }),
        headers: headers,
      }).then(res => res);
    }
    if (res1 && res2) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Ubah Kontak</h3>

        <div className="form-section">
          <label htmlFor="kontak">Email</label>
          <input
            type="text"
            id="phone"
            placeholder="opsional"
            value={kontak.email}
            onChange={(e) => setKontak({ ...kontak, email: e.target.value })}
          />
        </div>

        <div className="form-section">
          <label htmlFor="kontak">Nomor HP</label>
          <input
            type="text"
            id="email"
            placeholder="opsional"
            value={kontak.phone}
            onChange={(e) => setKontak({ ...kontak, phone: e.target.value })}
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