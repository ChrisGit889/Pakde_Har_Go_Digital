'use client';
import { useState, useEffect } from 'react'; 
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation'; 
import DashboardLayout from '@/app/components/DashboardLayout'; 
import { dummyBerita } from '@/app/components/berita/BeritaList'; 
import '../tambah/TambahBerita.css'; 

export default function EditBeritaPage() {
  const router = useRouter(); 
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); 
  const [judul, setJudul] = useState('');
  const [isiBerita, setIsiBerita] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const beritaId = parseInt(id, 10);
      const dataToEdit = dummyBerita.find((b) => b.id === beritaId);

      if (dataToEdit) {
        setJudul(dataToEdit.title);
        setIsiBerita(dataToEdit.isiLengkap);
        setPreviewUrl(dataToEdit.imageUrl);
      }
    }
  }, [id]); 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  const triggerFileInput = () => {
    document.getElementById('imageUpload')?.click();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!judul || !isiBerita) {
      alert('Judul dan Isi Berita tidak boleh kosong.');
      return;
    }
    console.log("Perubahan disimpan:", { id, judul, isiBerita });
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
        <h1 className="form-page-title">Edit Berita</h1>
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-card-content">
            <div className="form-section">
              <label className="form-label">Gambar Berita</label>
              <div className="image-upload-section">
                <input type="file" id="imageUpload" style={{ display: 'none' }} onChange={handleFileChange} />
                <label htmlFor="imageUpload" className="image-uploader-box">
                  {previewUrl && (
                    <img src={previewUrl} alt="Preview" className="image-preview" />
                  )}
                </label>
                <button type="button" className="button button-orange" onClick={triggerFileInput}>
                  Ubah Gambar
                </button>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="judulBerita" className="form-label">
                Judul Berita
              </label>
              <input
                type="text"
                id="judulBerita"
                placeholder="Isi judul berita disini..."
                value={judul} 
                onChange={(e) => setJudul(e.target.value)}
              />
            </div>

            <div className="form-section">
              <label htmlFor="isiBerita" className="form-label">
                Isi Berita
              </label>
              <textarea
                id="isiBerita"
                placeholder="Isi berita lengkap disini..."
                rows={12}
                value={isiBerita} 
                onChange={(e) => setIsiBerita(e.target.value)}
              ></textarea>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="button button-orange">
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
      
    </DashboardLayout>
  );
}