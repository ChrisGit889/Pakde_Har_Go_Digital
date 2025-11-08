'use client';
import { useState } from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './TambahMenu.css';

export default function TambahMenuPage() {
  const router = useRouter();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [namaMenu, setNamaMenu] = useState('');
  const [kategoriMenu, setKategoriMenu] = useState('');
  const [labelMenu, setLabelMenu] = useState('');
  const [deskripsiMenu, setDeskripsiMenu] = useState('');
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  const triggerFileInput = () => {
    document.getElementById('imageUpload')?.click();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Harap tambahkan gambar menu.');
      return;
    }
    if (!namaMenu) {
      alert('Harap isi Nama Menu.');
      return;
    }
    if (!kategoriMenu) {
      alert('Harap pilih Kategori Menu.');
      return;
    }
    if (!deskripsiMenu) {
      alert('Harap isi Deskripsi Menu.');
      return;
    }
    console.log('DATA LENGKAP, SIAP DIKIRIM:', {
      file: selectedFile.name,
      nama: namaMenu,
      kategori: kategoriMenu,
      label: labelMenu,
      deskripsi: deskripsiMenu,
    });
    alert('Menu berhasil disimpan!');
    router.push('/admin/menu');
  };

  return (
    <DashboardLayout>
      <div className="form-container">
        <div className="form-header">
          <Link href="/admin/menu" className="back-button">
            <span>&larr;</span> Kembali
          </Link>
        </div>
        <h1 className="form-page-title">Tambah Menu</h1>
        <form className="menu-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <label className="form-label">Gambar Menu</label>
            <div className="image-upload-section">
              <input
                type="file"
                id="imageUpload"
                style={{ display: 'none' }}
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
              />
              <label htmlFor="imageUpload" className="image-uploader-box">
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="image-preview" />
                ) : (
                  <>
                    <span>➕</span>
                    <strong>Tambahkan Gambar</strong>
                  </>
                )}
              </label>
              <button
                type="button"
                className="button button-orange"
                onClick={triggerFileInput}
              >
                Ubah Gambar
              </button>
            </div>
          </div>
          <div className="form-section">
            <label htmlFor="namaMenu" className="form-label">
              Nama Menu
            </label>
            <input
              type="text"
              id="namaMenu"
              placeholder="Isi Nama Menu disini..."
              value={namaMenu}
              onChange={(e) => setNamaMenu(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-section-half">
              <label htmlFor="kategoriMenu" className="form-label">
                Pilih kategori Menu
              </label>
              <select
                id="kategoriMenu"
                value={kategoriMenu}
                onChange={(e) => setKategoriMenu(e.target.value)}
              >
                <option value="">Isi Kategori Menu disini...</option>
                <option value="Nasi Goreng">Nasi Goreng</option>
                <option value="Mie Goreng">Mie Goreng</option>
                <option value="Minuman">Minuman</option>
              </select>
            </div>
            <div className="form-section-half">
              <label htmlFor="labelMenu" className="form-label">
                Label Menu
              </label>
              <select
                id="labelMenu"
                value={labelMenu}
                onChange={(e) => setLabelMenu(e.target.value)}
              >
                <option value="">Pilih label Menu disini...</option>
                <option value="Rekomendasi">Rekomendasi</option>
                <option value="Favorit">Favorit</option>
                <option value="Baru">Baru</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <label htmlFor="deskripsiMenu" className="form-label">
              Isi Deskripsi Menu
            </label>
            <textarea
              id="deskripsiMenu"
              placeholder="Isi Deskripsi disini..."
              rows={8}
              value={deskripsiMenu}
              onChange={(e) => setDeskripsiMenu(e.target.value)}
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="button button-green">
              Simpan Perubahan
            </button>
            <button type="button" className="button button-red">
              Hapus Perubahan
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}