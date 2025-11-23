// Lokasi: src/app/components/adminMenu/AddCategory.tsx
'use client';
import { useState } from 'react';
import { fetchBoolean, getToken } from '@/utils/utils';
import './AdminMenu.css';
import { Category, CategoryData } from '@/utils/dataTypes/CategoryData';
import { Pencil, Trash } from 'react-bootstrap-icons';
import { useRouter } from 'next/navigation';

export default function AddCategory({ show, onClose, cat }: { show: boolean, onClose: () => void, cat: CategoryData }) {
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleCreate = async () => {
    if (!name) {
      alert('Harap isi nama kategori');
      return;
    }
    setIsSubmitting(true);

    const tok = await getToken();
    const headers = new Headers();
    headers.append('Content-type', "application/json");
    headers.append('Authorization', tok!.toString());

    const res = await fetchBoolean('/menu/categories', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ name, description })
    });

    if (res) {
      setName('');
      setDescription('');
      router.refresh();
    }
    else {
      alert("Gagal menambah kategori, pastikan kategori memiliki nama yang unik");
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus kategori ini?')) return;
    const tok = await getToken();
    const headers = new Headers();
    headers.append('Authorization', tok!.toString());

    const res = await fetchBoolean(`/menu/categories/${id.replaceAll(' ', '%20')}`, {
      method: 'DELETE',
      headers: headers
    });
    if (res) {
      router.refresh();
    } else {
      alert("Gagal menghapus kategori pastikan sudah tidak ada menu dengan kategori ini");
    }
  };

  const startEdit = (cat: Category) => {
    setEditingId(cat.name);
    setEditName(cat.name);
    setEditDescription(cat.description);
  };

  const handleUpdate = async () => {
    if (!editingId) return;

    const tok = await getToken();
    const headers = new Headers();
    headers.append('Content-type', "application/json");
    headers.append('Authorization', tok!.toString());

    const res = await fetchBoolean(`/menu/categories/${editingId.replaceAll(' ', "%20")}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ name: editName, description: editDescription })
    });

    if (res) {
      setEditingId(null);
      router.refresh();
    }
    else alert("Gagal mengupdate kategori, pastikan nama kategori unik");

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
          <label style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Tambah Baru</label>
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
          {cat.data.map((cat) => cat.name == 'Semua' ? null : (
            <div key={cat.name} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#f9fafb'
            }}>

              {editingId === cat.name ? (
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
                  <button onClick={() => startEdit(cat)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }} title="Edit"><Pencil /></button>
                  <button onClick={() => handleDelete(cat.name)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }} title="Hapus"><Trash /></button>
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
