// Lokasi: src/app/components/adminMenu/AddCategory.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { fetchData, getToken } from '@/utils/utils';
import './AdminMenu.css'; 

interface Category {
  id: number;
  name: string;
  description: string;
}

export default function AddCategory({ show, onClose }: { show: boolean, onClose: () => void }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const res = await fetchData('/menu/categories');
      if (res && Array.isArray(res.data)) {
        setCategories(res.data as Category[]);
      } else if (Array.isArray(res)) {
        setCategories(res as Category[]);
      }
    } catch (error) {
      console.error("Gagal mengambil kategori", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (show) {
      fetchCategories();
    }
  }, [show]);

  const handleCreate = async () => {
    if (!name) {
      alert('Harap isi nama kategori');
      return;
    }
    setIsSubmitting(true);
    try {
      const tok = await getToken();
      const headers = new Headers();
      headers.append('Content-type', "application/json");
      headers.append('Authorization', tok!.toString());
      
      await fetchData('/menu/categories', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ name, description })
      });

      setName('');
      setDescription('');
      fetchCategories();
    } catch (error) {
      console.error("Gagal menambah kategori", error);
      alert("Gagal menambah kategori");
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Yakin ingin menghapus kategori ini?')) return;
    try {
      const tok = await getToken();
      const headers = new Headers();
      headers.append('Authorization', tok!.toString());

      await fetchData(`/menu/categories/${id}`, {
        method: 'DELETE',
        headers: headers
      });
      
      fetchCategories();
    } catch (error) {
      console.error("Gagal menghapus kategori", error);
      alert("Gagal menghapus kategori");
    }
  };

  const startEdit = (cat: Category) => {
    setEditingId(cat.id);
    setEditName(cat.name);
    setEditDescription(cat.description);
  };

  const handleUpdate = async () => {
    if (!editingId) return;
    try {
      const tok = await getToken();
      const headers = new Headers();
      headers.append('Content-type', "application/json");
      headers.append('Authorization', tok!.toString());

      await fetchData(`/menu/categories/${editingId}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({ name: editName, description: editDescription })
      });

      setEditingId(null);
      fetchCategories();
    } catch (error) {
      console.error("Gagal mengupdate kategori", error);
      alert("Gagal mengupdate kategori");
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3>Kelola Kategori</h3>
          <button onClick={onClose} style={{ border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
            <label style={{fontWeight: 'bold', fontSize: '0.9rem'}}>Tambah Baru</label>
            <div style={{ display: 'flex', gap: '8px' }}>
                <input
                    type="text"
                    className="modal-input"
                    placeholder="Nama Kategori..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ flex: 1 }}
                />
                <input
                    type="text"
                    className="modal-input"
                    placeholder="Deskripsi (opsional)..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ flex: 2 }}
                />
                <button 
                    className="modal-button green" 
                    onClick={handleCreate} 
                    disabled={isSubmitting}
                    style={{ whiteSpace: 'nowrap' }}
                >
                    + Tambah
                </button>
            </div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '400px', overflowY: 'auto' }}>
          {isLoading ? <p>Memuat data...</p> : categories.map((cat) => (
            <div key={cat.id} style={{ 
              display: 'flex', alignItems: 'center', gap: '10px', 
              padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#f9fafb' 
            }}>
              
              {editingId === cat.id ? (
                <>
                  <input className="modal-input" value={editName} onChange={(e) => setEditName(e.target.value)} style={{ flex: 1 }} />
                  <input className="modal-input" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} style={{ flex: 2 }} />
                  <button className="modal-button green" onClick={handleUpdate}>Simpan</button>
                  <button className="modal-button secondary" onClick={() => setEditingId(null)}>Batal</button>
                </>
              ) : (
                <>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>{cat.name}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>{cat.description}</div>
                  </div>
                  <button onClick={() => startEdit(cat)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }} title="Edit">✏️</button>
                  <button onClick={() => handleDelete(cat.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }} title="Hapus">🗑️</button>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="modal-actions" style={{ marginTop: '20px' }}>
          <button className="modal-button secondary" onClick={onClose} style={{ width: '100%' }}>Selesai</button>
        </div>

      </div>
    </div>
  );
}
