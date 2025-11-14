'use client';
import React, { useState, useEffect } from 'react';
import '@/app/admin/informasi/InformasiPage.css';
import { getToken, route } from '@/utils/utils';

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
      res1 = await fetch(await route('/contact/phone/'), {
        method: 'POST',
        body: JSON.stringify({
          phoneNumber: kontak.phone,
        }),
        headers: headers,
      }).then((res) => {
        if (res.status == 200) return true;
        throw Error('Database insertion error!');
      }).catch((e) => {
        console.log(e);
        return false;
      });
    }

    if (kontak.email) {
      res2 = await fetch(await route('/contact/email/'), {
        method: 'POST',
        body: JSON.stringify({
          email: kontak.email,
        }),
        headers: headers,
      }).then((res) => {
        if (res.status == 200) return true;
        throw Error('Database insertion error!');
      }).catch((e) => {
        console.log(e);
        return false;
      });
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