/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import SuccessModal from '@/app/admin/berita/components/Successmodal';
import '../tambah/TambahBerita.css';
import { BlogData } from '@/utils/dataTypes/BlogData';
import { fetchBoolean, fetchData, getToken } from '@/utils/utils';
import { Image } from 'react-bootstrap';
import { toBase64 } from '@/utils/clientUtils';

export default function EditBeritaPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [data, setData] = useState<BlogData | null>(null);
  const [load, setLoad] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [story, setStory] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [file, setFile] = useState<File | undefined>(undefined);

  if (!id) {
    return (
      <div className="form-container">
        <p>Data tidak ditemukan (ID Missing)...</p>
      </div>
    );
  }

  const blogId = parseInt(id, 10);

  async function asyncFetch() {
    const data: BlogData = await fetchData('/blog/' + blogId, {
      method: 'GET',
    });

    if (data) {
      setData(data);
    } else {
      setData(null);
    }
  }

  useEffect(() => {
    asyncFetch();
  }, []);

  useEffect(() => {
    if (data != null) {
      setTitle(data.blog.title || '');
      setStory(data.blog.story || '');
      setDescription(data.blog.description || '');
      if (data.image.data != null) {
        setPreviewUrl(data.image.data);
      }
    }
    setLoad(true);
  }, [data]);

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
    if (!title || !story) {
      alert('Judul dan Isi Berita tidak boleh kosong.');
      return;
    }
    let headers;
    let res1 = true;
    const tok = await getToken();
    if ((data!.image.data == null ? true : previewUrl != data!.image.data) && file != undefined) {
      const fileData: string = await toBase64(file);
      headers = new Headers();
      headers.append('Authorization', tok!.toString());
      headers.append('Content-Type', 'application/json');
      res1 = await fetchBoolean('/blog/' + blogId + '/image', {
        method: 'PUT',
        body: JSON.stringify({ data: fileData }),
        headers: headers,
      });
    }
    headers = new Headers();
    headers.append('Content-type', "application/json");
    headers.append('Authorization', tok!.toString());
    const res2 = await fetchBoolean('/blog/' + blogId, {
      method: 'PUT',
      body: JSON.stringify({
        title: title,
        description: description,
        story: story,
      }),
      headers: headers
    });
    if (res1 && res2) setSuccess(true);
  };

  const handleModalClose = () => {
    setSuccess(false);
    router.push('/admin/berita');
  };

  if (!load) {
    return (
      <div className="form-container" style={{ padding: '20px' }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (data == null) {
    return (
      <div className="form-container" style={{ padding: '20px' }}>
        <p>Gagal memuat data berita.</p>
      </div>
    );
  }

  return (
    <>
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
                  {previewUrl ? (
                    <Image src={previewUrl} alt="Preview" className="image-preview" />
                  ) : (
                    <span style={{ fontSize: '3rem', color: '#ccc' }}>🖼️</span>
                  )}
                </label>
                <button type="button" className="button button-orange" onClick={triggerFileInput}>
                  Ubah Gambar
                </button>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="title" className="form-label">
                Judul Berita
              </label>
              <input
                type="text"
                id="title"
                placeholder="Isi judul berita disini..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-section">
              <label htmlFor="description" className="form-label">
                Deskripsi Singkat
              </label>
              <textarea
                id="descripition"
                placeholder="Isi deskripsi singkat berita disini..."
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-section">
              <label htmlFor="story" className="form-label">
                Isi Berita
              </label>
              <textarea
                id="story"
                placeholder="Isi berita lengkap disini..."
                rows={12}
                value={story}
                onChange={(e) => setStory(e.target.value)}
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

      <SuccessModal
        isOpen={success}
        onClose={handleModalClose}
        message="Perubahan Anda berhasil disimpan."
      />
    </>
  );
}