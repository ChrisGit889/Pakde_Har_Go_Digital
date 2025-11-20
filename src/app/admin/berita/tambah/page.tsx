'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './TambahBerita.css';
import { fetchBoolean, fetchData, getToken } from '@/utils/utils';
import SuccessModal from '@/app/admin/berita/components/Successmodal';
import { toBase64 } from '@/utils/clientUtils';
import { Image } from 'react-bootstrap';

export default function TambahBeritaPage() {
  const router = useRouter();

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [story, setStory] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [file, setFile] = useState<File | undefined>(undefined);

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

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setStory('');
    setPreviewUrl(null);
    setFile(undefined);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!description || !story || !title) {
      alert('Harap lengkapi Judul , Deskripsi Singkat, dan Isi Berita!');
      return;
    }

    const tok = await getToken();

    let headers;
    let id;
    headers = new Headers();
    headers.append('Content-type', "application/json");
    headers.append('Authorization', tok!.toString());
    const res2 = await fetchData('/blog/', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: description,
        story: story,
      }),
      headers: headers
    }).then((res) => {
      if (res.blogId) {
        id = res.blogId;
      }
      return true;
    });

    let res1 = true;
    if (res2 && file) {
      const fileData = await toBase64(file);
      headers = new Headers();
      headers.append('Authorization', tok!.toString());
      headers.append('Content-Type', 'application/json');
      res1 = await fetchBoolean('/blog/' + id + '/image', {
        method: 'PUT',
        body: JSON.stringify({ data: fileData }),
        headers: headers,
      }).then((res) => res);
    }

    if (res1 && res2) setSuccess(true);
    else {
      await fetchBoolean('/blog/' + id, {
        method: 'DELETE',
        headers: headers,
      }).then((res) => res);
    }
  };

  const handleModalClose = () => {
    setSuccess(false);
    router.push('/admin/berita');
  };

  return (
    <>
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
                  <Image src={previewUrl ? previewUrl : '/images/placeholder.jpg'} alt="Preview" className="image-preview" />
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
                id="description"
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
            <button type="submit" className="button button-green">
              Simpan Perubahan
            </button>
            <button type="button" className="button button-red" onClick={handleReset}>
              Hapus Perubahan
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