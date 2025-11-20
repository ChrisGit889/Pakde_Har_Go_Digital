'use client';
import { useState } from 'react';
import './AdminMenu.css';
import { fetchData, getToken } from '@/utils/utils';

export default function AddCategory({ show, onClose }: { show: boolean, onClose: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [disabled, setDisabled] = useState(false);

  if (!show) {
    return null;
  }

  const handleCreate = async () => {
    if (!name) {
      alert('Harap isi nama kategori.');
      return;
    }

    if (!description) {
      alert('Harap isi deskripsi kategori.');
      return;
    }

    setDisabled(true);

    const tok = await getToken();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let id;
    const headers = new Headers();
    headers.append('Content-type', "application/json");
    headers.append('Authorization', tok!.toString());
    const res = await fetchData('/menu/categories', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        name: name,
        description: description,
      })
    }).then((res) => {
      if (res.id) {
        id = res.id;
        return true;
      }
      return false;
    });

    if (res) {
      onClose();
    }
    setDisabled(false);
  };

  const handleClose = () => {
    setName('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Tambah category</h3>
        <input
          type="text"
          className="modal-input"
          placeholder="Isi category baru di sini..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="modal-input"
          placeholder="Isi deskripsi kategori di sini..."
          value={description}
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={handleClose} disabled={disabled}>
            Batal
          </button>
          <button className="modal-button green" onClick={handleCreate} disabled={disabled}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}