'use client';
import Link from 'next/link';
import './BeritaDetail.css';
import { BlogData } from '@/utils/dataTypes/BlogData';
import { route } from '@/utils/utils';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BeritaDetailPage() {
  const [data, setData] = useState<BlogData | null>(null);
  const [load, setLoad] = useState<boolean>(false);
  const params = useSearchParams();
  const id = params.get('id');

  if (!id) {
    return <>Page Missing...</>
  }
  const blogId = parseInt(id, 10);

  const asyncFetch = async () => {
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

  useEffect(() => {
    asyncFetch();
  }, []);

  useEffect(() => {
    setLoad(!load);
  }, [data]);

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
      <div className="berita-detail-container">
        <div className="detail-header">
          <Link href="/admin/berita" className="back-button">
            <span>&larr;</span> Kembali
          </Link>
        </div>

        <article className="detail-article-card">
          {
            data.image.data == null ?
              <img
                src={"data:image/jpeg;base64,"}
                alt={data.blog.title}
                className="detail-image"
              />
              :
              <img
                src={`data:image/${data.image.name.split('.')[data.image.name.split('.').length - 1]};base64,` + Buffer.from(data.image.data).toString("base64")}
                alt={data.blog.title}
                className="detail-image"
              />
          }

          <div className="detail-text-content">
            <h1 className="detail-title">{data.blog.title}</h1>
            <div className="detail-content">
              {data.blog.story}
            </div>
          </div>
        </article>

      </div>
    </>
  );
}