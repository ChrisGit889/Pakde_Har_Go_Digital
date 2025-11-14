'use client';
import React, { useState, useEffect } from 'react';
import '../InformasiPage.css';
import { getToken, route } from '@/utils/utils';

export default function AlamatModal({ id, data, modify, show, onClose }: { id: number, data: { address: string, name: string }, modify: boolean, show: boolean, onClose: () => void }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [submitDisabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    console.log(data);
    if (show) if (modify) {
      setName(data.name);
      setAddress(data.address);
    } else {
      setName('');
      setAddress('');
    }
  }, [show]);

  if (!show) return null;

  const onDelete = async () => {
    setDisabled(true);
    const headers = new Headers();
    headers.append('Authorization', (await getToken())!);
    headers.append('Content-Type', 'application/json');
    let res = await fetch(await route('/contact/address/' + id), {
      method: 'DELETE',
      headers: headers,
    }).then((res) => {
      if (res.status == 200) return true;
      throw Error('Database change error!');
    }).catch((e) => {
      console.log(e);
      return false;
    });

    if (res) {
      onClose();
    }
    setDisabled(false);
  }

  const handleModify = async () => {
    setDisabled(true);
    const headers = new Headers();
    headers.append('Authorization', (await getToken())!);
    headers.append('Content-Type', 'application/json');
    let res = await fetch(await route('/contact/address/' + id), {
      method: 'PUT',
      body: JSON.stringify({
        name: name,
        address: address,
      }),
      headers: headers,
    }).then((res) => {
      if (res.status == 200) return true;
      throw Error('Database change error!');
    }).catch((e) => {
      console.log(e);
      return false;
    });

    if (res) {
      onClose();
    }
    setDisabled(false);
  }

  const handleMake = async () => {
    setDisabled(true);
    const headers = new Headers();
    headers.append('Authorization', (await getToken())!);
    headers.append('Content-Type', 'application/json');

    let res = await fetch(await route('/contact/address'), {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        address: address,
      }),
      headers: headers,
    }).then((res) => {
      if (res.status == 200) return true;
      throw Error('Database insertion error!');
    }).catch((e) => {
      console.log(e);
      return false;
    });

    if (res) {
      onClose();
    }
    setDisabled(false);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{modify ? 'Ubah Alamat' : 'Tambah Alamat Baru'}</h3>

        <div className="form-section">
          <label htmlFor="namaToko">Nama Toko</label>
          <input
            type="text"
            id="namaToko"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label htmlFor="alamat">Alamat</label>
          <textarea
            id="alamat"
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>Batal</button>
          <button className="modal-button red" onClick={onDelete}>Buang</button>
          <button className="modal-button green" onClick={modify ? handleModify : handleMake} disabled={submitDisabled}>Simpan</button>
        </div>
      </div>
    </div>
  );
}