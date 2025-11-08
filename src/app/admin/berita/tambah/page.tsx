'use client';
import { useState } from 'react'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import DashboardLayout from '@/app/components/DashboardLayout'; 
import './TambahBerita.css'; 
export default function TambahBeritaPage() {
  const router = useRouter(); 
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [deskripsiSingkat, setDeskripsiSingkat] = useState('');
  const [isiBerita, setIsiBerita] = useState('');
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
    if (!selectedFile || !deskripsiSingkat || !isiBerita) {
      alert('Harap lengkapi semua data (Gambar, Deskripsi Singkat, dan Isi Berita).');
      return;
    }
    
    console.log("Data baru siap dikirim:", { 
      file: selectedFile.name, 
      deskripsi: deskripsiSingkat, 
      isi: isiBerita 
    });
    setIsSuccessModalOpen(true);
  };

  const handleModalClose = () => {
    setIsSuccessModalOpen(false);
    router.push('/admin/berita');
  };

  return (
    <DashboardLayout>
      <div className="form-container">
        <div className="form-header">
          <Link href="/admin/berita" className="back-button">
            <span>&larr;</span> Kembali
          </Link>
        </div>

        <h1 className="form-page-title">Tambah Berita</h1>

        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-card-content">
            <div className="form-section">
              <label className="form-label">Gambar Berita</label>
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
                  Ubah Gambar
                </button>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="deskripsiSingkat" className="form-label">
                Deskripsi Singkat
              </label>
              <textarea
                id="deskripsiSingkat"
                placeholder="Isi deskripsi disini..."
                rows={4}
                value={deskripsiSingkat}
                onChange={(e) => setDeskripsiSingkat(e.target.value)}
              ></textarea>
            </div>

            <div className="form-section">
              <label htmlFor="isiBerita" className="form-label">
                Isi Berita
              </label>
              <textarea
                id="isiBerita"
                placeholder="Isi beritamu disini..."
                rows={12}
                value={isiBerita}
                onChange={(e) => setIsiBerita(e.target.value)}
              ></textarea>
            </div>
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