'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './TambahMenu.css';
import SuccessModal from '@/app/admin/berita/components/Successmodal';
import { fetchBoolean, fetchData, getToken } from '@/utils/utils';
import { Image } from 'react-bootstrap';
import { CategoryData } from '@/utils/dataTypes/CategoryData';

export default function TambahMenuPage() {
  const router = useRouter();

  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [flavour, setFlavour] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<CategoryData | null>(null);

  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);

  async function asyncFetch() {
    const categories: CategoryData = await fetchData('/menu/categories', {
      method: 'GET'
    });
    if (categories) {
      setCategories(categories);
    }
    setError(categories ? false : true);
    setLoad(true);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    asyncFetch();
  }, []);

  if (!load) return null;

  if (error) return <>An Error has occured!</>;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempFile = event.target.files?.[0];
    if (tempFile) {
      setPreviewUrl(URL.createObjectURL(tempFile));
      setFile(tempFile);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('imageUpload')?.click();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !category || !description || !flavour) {
      alert('Lengkapi datanya');
      return;
    }

    setDisabled(true);

    let headers, id;
    const tok = await getToken();
    headers = new Headers();
    headers.append('Content-type', "application/json");
    headers.append('Authorization', tok!.toString());
    const res2 = await fetchData('/menu/', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        description: description,
        flavour: flavour,
        price: price || null,
        category: category,
      }),
      headers: headers
    }).then((res) => {
      if (res) {
        id = res.foodId;
        return true;
      }
      return false;
    });
    let res1 = true;
    console.log("id is " + id);
    if (file) {
      headers = new Headers();
      const formdata = new FormData()
      formdata.append('uploaded_img', file!);
      headers.append('Authorization', tok!.toString());
      res1 = await fetchBoolean('/menu/' + id + '/image', {
        method: 'PUT',
        body: formdata,
        headers: headers,
      });
    }

    if (res1 && res2) setShow(true);
    else {
      headers = new Headers();
      headers.append('Authorization', tok!.toString());
      await fetchBoolean('/menu/' + id, {
        method: 'DELETE',
        headers: headers
      });
    }
    setDisabled(false);
  }

  const handleModalClose = () => {
    setShow(false);
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
                    <Image src={previewUrl} alt="Preview" className="image-preview" />
                  ) : (
                    <Image src={'/images/placeholder.jpg'} alt="Preview" className="image-preview" />
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
              <label htmlFor="name" className="form-label">
                Nama Menu
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-section">
              <label htmlFor="price" className="form-label">
                Harga Menu (Rp)
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value) || price)}
              />
            </div>

            <div className="form-row">
              <div className="form-section-half">
                <label htmlFor="category" className="form-label">
                  Pilih Kategori Menu
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Pilih Kategori...</option>
                  {categories?.data.map((cat) => <option value={cat.name} key={cat.name}>{cat.name}</option>)}
                </select>
              </div>

              <div className="form-section-half">
                <label htmlFor="flavour" className="form-label">
                  Label Menu (Rasa)
                </label>
                <select
                  id="flavour"
                  value={flavour}
                  onChange={(e) => setFlavour(e.target.value)}
                >
                  <option value="">Pilih Label...</option>
                  <option value="Pedas / Sedang">Pedas / Sedang</option>
                  <option value="Manis">Manis</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="description" className="form-label">
                Isi Deskripsi Menu
              </label>
              <textarea
                id="description"
                rows={8}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="button button-green" disabled={disabled}>
              Simpan
            </button>
          </div>
        </form >
      </div >

      <SuccessModal
        isOpen={show}
        onClose={handleModalClose}
        message="Menu baru berhasil disimpan."
      />
    </>
  );
}
