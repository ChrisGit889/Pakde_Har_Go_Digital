'use client';
import Link from 'next/link';
import './BeritaDetail.css';
import { BlogData } from '@/utils/dataTypes/BlogData';
import { fetchData } from '@/utils/utils';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

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
    const data: BlogData = await fetchData('/blog/' + blogId, {
      method: 'GET',
    }).then((res) => {
      return res;
    });

    if (data) {
      setData(data);
    } else {
      setData(null);
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    asyncFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setLoad(!load);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Image
            src={data.image.data ? data.image.data : '/images/placeholder.jpg'}
            alt={data.blog.title}
            className="detail-image"
          />

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