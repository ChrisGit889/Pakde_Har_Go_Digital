'use client';
import DashboardLayout from '../../../components/DashboardLayout';
import Link from 'next/link';
import './TambahMenu.css'; 

export default function TambahMenuPage() {
  return (
    <DashboardLayout>
      <div className="form-container">
        <div className="form-header">
          <Link href="/admin/menu" className="back-button">
            <span>&larr;</span> Kembali
          </Link>
        </div>
        <h1 className="form-page-title">Tambah Menu</h1>

        <form className="menu-form">
          <div className="form-section">
            <label className="form-label">Gambar Menu</label>
            <div className="image-upload-section">
              <div className="image-uploader-box">
                <span>➕</span>
                <strong>Tambahkan Gambar</strong>
              </div>
              <button type="button" className="button button-orange">
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
            />
          </div>

          <div className="form-row">
            <div className="form-section-half">
              <label htmlFor="kategoriMenu" className="form-label">
                Pilih kategori Menu
              </label>
              <select id="kategoriMenu">
                <option value="">Isi Kategori Menu disini...</option>
                <option value="nasi">Nasi Goreng</option>
                <option value="mie">Mie Goreng</option>
                <option value="minuman">Minuman</option>
              </select>
            </div>
            <div className="form-section-half">
              <label htmlFor="labelMenu" className="form-label">
                Label Menu
              </label>
              <select id="labelMenu">
                <option value="">Pilih label Menu disini...</option>
                <option value="rekomendasi">Rekomendasi</option>
                <option value="favorit">Favorit</option>
                <option value="baru">Baru</option>
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