/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import SuccessModal from '@/app/admin/berita/components/Successmodal';
import '../tambah/TambahBerita.css';
import { BlogData } from '@/utils/dataTypes/BlogData';
import { getToken, route } from '@/utils/utils';
import { Image } from 'react-bootstrap';

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
    return <>Page Missing...</>;
  }

  async function asyncFetch() {
    const data: BlogData = await fetch(await route('/blog/' + blogId), {
      method: 'GET',
    }).then((res) => {
      if (res.status == 200) {
        return res.json();
      }
      throw Error('Database Err!');
    }).catch((e) => {
      console.log(e);
      return null;
    });

    if (data) {
      setData(data);
    } else {
      setData(null);
    }
  }

  const blogId = parseInt(id, 10);

  useEffect(() => {
    asyncFetch();
  }, []);

  useEffect(() => {
    if (data != null) {
      setTitle(data.blog.title || '');
      setStory(data.blog.story || '');
      setDescription(data.blog.description || '');
      if (data.image.data != null) {
        setPreviewUrl(`data:image/${data.image.name.split('.')[data.image.name.split('.').length - 1]};base64,${Buffer.from(data.image.data).toString("base64")}`);
      }
    }
    setLoad(!load);
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
    if ((data!.image.name == null ? true : previewUrl != `data:image/${data!.image.name.split('.')[data!.image.name.split('.').length - 1]};base64,${Buffer.from(data!.image.data).toString("base64")}`) && file != undefined) {
      headers = new Headers();
      const formdata = new FormData()
      formdata.append('uploaded_img', file!);
      headers.append('Authorization', tok!.toString());
      res1 = await fetch(await route('/blog/' + blogId + '/image'), {
        method: 'PUT',
        body: formdata,
        headers: headers,
      }).then((res) => {
        if (res.status == 200) return true;
        throw Error("Something went wrong");
      }).catch((e) => {
        console.log(e);
        return false;
      });
    }
    headers = new Headers();
    headers.append('Content-type', "application/json");
    headers.append('Authorization', tok!.toString());
    const res2 = await fetch(await route('/blog/' + blogId), {
      method: 'PUT',
      body: JSON.stringify({
        title: title,
        description: description,
        story: story,
      }),
      headers: headers
    }).then((res) => {
      if (res.status == 200) return true;
      throw Error("Something went wrong");
    }).catch((e) => {
      console.log(e);
      return false;
    });
    if (res1 && res2) setSuccess(true);
  };

  const handleModalClose = () => {
    setSuccess(false);
    router.push('/admin/berita');
  };

  if (!load) {
    return (
      <>
        <div className="berita-detail-container">
          <p>Loading</p>
        </div>
      </>
    );
  }

  if (data == null) {
    return (
      <>
        <div className="berita-detail-container">
          <p>Error loading blog</p>
        </div>
      </>
    )
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
                  {previewUrl && (
                    <Image src={previewUrl} alt="Preview" className="image-preview" />
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