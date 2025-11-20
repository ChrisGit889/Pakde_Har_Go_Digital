'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import '../../tambah/TambahMenu.css';
import SuccessModal from '@/app/admin/berita/components/Successmodal';
import { fetchBoolean, fetchData, getToken } from '@/utils/utils';
import { Menu } from '@/utils/dataTypes/MenuData';
import { Image } from 'react-bootstrap';
import { CategoryData } from '@/utils/dataTypes/CategoryData';
import { toBase64 } from '@/utils/clientUtils';

export default function EditMenuPage() {
  const router = useRouter();
  const params = useParams();

  const { id } = params;

  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [flavour, setFlavour] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<Menu>();
  const [categories, setCategories] = useState<CategoryData>();

  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);

  async function asyncFetch() {
    const data: Menu = await fetchData('/menu/' + id, {
      method: 'GET',
    });

    const categories: CategoryData = await fetchData('/menu/categories', {
      method: 'GET'
    });

    if (data) {
      setName(data.food.name || name);
      setDescription(data.food.description || description);
      setFlavour(data.food.flavour || flavour);
      setPreviewUrl(data.image.data ? data.image.data : '/images/placeholder.jpg');
      setCategory(data.food.category || category);
      setPrice(data.food.price || 0);
      setData(data);
    }

    if (categories) {
      setCategories(categories);
    }

    setError(data && categories ? false : true);
    setLoad(true);
  }

  useEffect(() => {
    asyncFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const triggerFileInput = () => { document.getElementById('imageUpload')?.click(); };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!category || !name || !description || !flavour) {
      alert('Lengkapi datanya');
      return;
    }
    setDisabled(true);
    let headers;
    let res1 = true;
    const tok = await getToken();
    if ((data!.image.data == null ? previewUrl != '/images/placeholder.jpg' : previewUrl != data!.image.data) && file != undefined) {
      const fileData = await toBase64(file);
      headers = new Headers();
      headers.append('Authorization', tok!.toString());
      res1 = await fetchBoolean('/menu/' + id + '/image', {
        method: 'PUT',
        body: { data: fileData },
        headers: headers,
      });
    }
    headers = new Headers();
    headers.append('Content-type', "application/json");
    headers.append('Authorization', tok!.toString());
    const res2 = await fetchBoolean('/menu/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        name: name,
        description: description,
        flavour: flavour,
        price: price || null,
        category: category,
      }),
      headers: headers
    });
    if (res1 && res2) setShow(true);
    setDisabled(false);
  };

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

        <h1 className="form-page-title">Edit Menu</h1>

        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-card-content">

            <div className="form-section">
              <label className="form-label">Gambar Menu</label>
              <div className="image-upload-section">
                <input type="file" id="imageUpload" style={{ display: 'none' }} onChange={handleFileChange} />
                <label htmlFor="imageUpload" className="image-uploader-box">
                  {previewUrl ? (
                    <Image src={previewUrl} alt="Image" className="image-preview" />
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
              <label htmlFor="name" className="form-label">Nama Menu</label>
              <input
                type="text" id="name"
                placeholder="Isi Nama Menu disini..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-section">
              <label htmlFor="price" className="form-label">Harga Menu (Rp)</label>
              <input
                type="number" id="price"
                placeholder="20000"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value) ? parseInt(e.target.value) : price)}
              />
            </div>

            <div className="form-row">
              <div className="form-section-half">
                <label htmlFor="category" className="form-label">Pilih kategori Menu</label>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Pilih Kategori...</option>
                  {categories?.data.map((cat) => <option value={cat.name} key={cat.name}>{cat.name}</option>)}
                </select>
              </div>
              <div className="form-section-half">
                <label htmlFor="flavour" className="form-label">Label Menu (Rasa)</label>
                <select id="flavour" value={flavour} onChange={(e) => setFlavour(e.target.value)}>
                  <option value="">Pilih Label...</option>
                  <option value="Pedas / Sedang">Pedas / Sedang</option>
                  <option value="Manis">Manis</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="Description" className="form-label">Isi Deskripsi Menu</label>
              <textarea
                id="description"
                placeholder="Isi Deskripsi disini..."
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
        </form>
      </div>

      <SuccessModal
        isOpen={show}
        onClose={handleModalClose}
        message="Perubahan berhasil disimpan."
      />
    </>
  );
}