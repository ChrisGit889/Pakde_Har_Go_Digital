'use client';
import { useState, useEffect } from 'react'; 
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import DashboardLayout from '@/app/components/DashboardLayout';
import { Product, masterProductList } from '../../data'; 
import '../../tambah/TambahMenu.css'; 
import SuccessModal from '@/app/components/berita/Successmodal';

export default function EditMenuPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [namaMenu, setNamaMenu] = useState('');
  const [kategoriMenu, setKategoriMenu] = useState('');
  const [labelMenu, setLabelMenu] = useState('');
  const [deskripsiMenu, setDeskripsiMenu] = useState('');
  const [hargaMenu, setHargaMenu] = useState<number | ''>('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  useEffect(() => {
    if (id) {
      const productId = parseInt(Array.isArray(id) ? id[0] : id, 10);
      const storedProducts = localStorage.getItem('myProducts');
      const products: Product[] = storedProducts ? JSON.parse(storedProducts) : masterProductList;
      const product = products.find(p => p.id === productId);
      
      if (product) {
        setNamaMenu(product.name);
        setDeskripsiMenu(product.desc);
        setPreviewUrl(product.img);
        setKategoriMenu(product.category);
        setLabelMenu(product.rasa); 
        setHargaMenu(product.harga || '');
      }
    }
  }, [id]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  const triggerFileInput = () => { document.getElementById('imageUpload')?.click(); };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Menyimpan perubahan untuk ID:", id);
    setIsSuccessModalOpen(true);
  };
  
  const handleModalClose = () => {
    setIsSuccessModalOpen(false);
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

        <h1 className="form-page-title">Edit Menu</h1>

        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-card-content">
            
            <div className="form-section">
              <label className="form-label">Gambar Menu</label>
              <div className="image-upload-section">
                <input type="file" id="imageUpload" style={{ display: 'none' }} onChange={handleFileChange} />
                <label htmlFor="imageUpload" className="image-uploader-box">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="image-preview" />
                  ) : (
                    <span className="upload-placeholder-icon">☺️</span>
                  )}
                </label>
                <button type="button" className="button button-orange" onClick={triggerFileInput}>
                  Ubah Gambar
                </button>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="namaMenu" className="form-label">Nama Menu</label>
              <input
                type="text" id="namaMenu"
                placeholder="Isi Nama Menu disini..."
                value={namaMenu}
                onChange={(e) => setNamaMenu(e.target.value)}
              />
            </div>

            <div className="form-section">
              <label htmlFor="hargaMenu" className="form-label">Harga Menu (Rp)</label>
              <input
                type="number" id="hargaMenu"
                placeholder="Cth: 25000"
                value={hargaMenu}
                onChange={(e) => setHargaMenu(parseFloat(e.target.value) || '')}
              />
            </div>

            <div className="form-row">
              <div className="form-section-half">
                <label htmlFor="kategoriMenu" className="form-label">Pilih kategori Menu</label>
                <select id="kategoriMenu" value={kategoriMenu} onChange={(e) => setKategoriMenu(e.target.value)}>
                  <option value="">Pilih Kategori...</option>
                  <option value="Nasi Goreng">Nasi Goreng</option>
                  <option value="Mie Goreng">Mie Goreng</option>
                  <option value="Minuman">Minuman</option>
                </select>
              </div>
              <div className="form-section-half">
                <label htmlFor="labelMenu" className="form-label">Label Menu (Rasa)</label>
                <select id="labelMenu" value={labelMenu} onChange={(e) => setLabelMenu(e.target.value)}>
                  <option value="">Pilih Label...</option>
                  <option value="Pedas / Sedang">Pedas / Sedang</option>
                  <option value="Manis">Manis</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="deskripsiMenu" className="form-label">Isi Deskripsi Menu</label>
              <textarea
                id="deskripsiMenu"
                placeholder="Isi Deskripsi disini..."
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
        message="Perubahan berhasil disimpan."
      />
    </DashboardLayout>
  );
}