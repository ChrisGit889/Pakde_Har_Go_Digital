'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './TambahMenu.css';
import SuccessModal from '@/app/components/berita/Successmodal';
import { Product, masterProductList } from '../data';

export default function TambahMenuPage() {
  const router = useRouter();
  const [namaMenu, setNamaMenu] = useState('');
  const [kategoriMenu, setKategoriMenu] = useState('');
  const [labelMenu, setLabelMenu] = useState('');
  const [deskripsiMenu, setDeskripsiMenu] = useState('');
  const [hargaMenu, setHargaMenu] = useState<number | ''>('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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
    if (!namaMenu || !kategoriMenu || !hargaMenu || !deskripsiMenu) {
      alert('Harap lengkapi Nama, Kategori, Harga, dan Deskripsi.');
      return;
    }
    const storedProducts = localStorage.getItem('myProducts');
    const products: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : masterProductList;

    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const newProduct: Product = {
      id: newId,
      name: namaMenu,
      img: previewUrl || '/images/default-image.png',
      rasa: labelMenu,
      desc: deskripsiMenu,
      category: kategoriMenu,
      harga: hargaMenu || 0,
    };


    products.push(newProduct);
    localStorage.setItem('myProducts', JSON.stringify(products));
    setIsSuccessModalOpen(true);
  };

  const handleModalClose = () => {
    setIsSuccessModalOpen(false);
    router.push('/admin/menu');
  };

  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <Link href="/admin/menu" className="back-button">
            <span>&larr;</span> Kembali
          </Link>
        </div>

        <h1 className="form-page-title">Tambah Menu</h1>

        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-card-content">
            {/* Gambar Menu */}
            <div className="form-section">
              <label className="form-label">Gambar Menu</label>
              <div className="image-upload-section">
                <input
                  type="file"
                  id="imageUpload"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor="imageUpload" className="image-uploader-box">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="image-preview" />
                  ) : (
                    <span className="upload-placeholder-icon">🖼️</span>
                  )}
                </label>
                <button
                  type="button"
                  className="button button-orange"
                  onClick={triggerFileInput}
                >
                  {previewUrl ? 'Ubah Gambar' : 'Pilih Gambar'}
                </button>
              </div>
            </div>

            {/* Nama Menu */}
            <div className="form-section">
              <label htmlFor="namaMenu" className="form-label">
                Nama Menu
              </label>
              <input
                type="text"
                id="namaMenu"
                value={namaMenu}
                onChange={(e) => setNamaMenu(e.target.value)}
              />
            </div>

            <div className="form-section">
              <label htmlFor="hargaMenu" className="form-label">
                Harga Menu (Rp)
              </label>
              <input
                type="number"
                id="hargaMenu"
                value={hargaMenu}
                onChange={(e) => setHargaMenu(parseFloat(e.target.value) || '')}
              />
            </div>

            <div className="form-row">
              <div className="form-section-half">
                <label htmlFor="kategoriMenu" className="form-label">
                  Pilih Kategori Menu
                </label>
                <select
                  id="kategoriMenu"
                  value={kategoriMenu}
                  onChange={(e) => setKategoriMenu(e.target.value)}
                >
                  <option value="">Pilih Kategori...</option>
                  <option value="Nasi Goreng">Nasi Goreng</option>
                  <option value="Mie Goreng">Mie Goreng</option>
                  <option value="Minuman">Minuman</option>
                </select>
              </div>

              <div className="form-section-half">
                <label htmlFor="labelMenu" className="form-label">
                  Label Menu (Rasa)
                </label>
                <select
                  id="labelMenu"
                  value={labelMenu}
                  onChange={(e) => setLabelMenu(e.target.value)}
                >
                  <option value="">Pilih Label...</option>
                  <option value="Pedas / Sedang">Pedas / Sedang</option>
                  <option value="Manis">Manis</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="deskripsiMenu" className="form-label">
                Isi Deskripsi Menu
              </label>
              <textarea
                id="deskripsiMenu"
                rows={8}
                value={deskripsiMenu}
                onChange={(e) => setDeskripsiMenu(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="button button-green">
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleModalClose}
        message="Menu baru berhasil disimpan."
      />
    </>
  );
}
