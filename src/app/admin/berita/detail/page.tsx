'use client';
import { useState, useEffect } from 'react'; 
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; 
import DashboardLayout from '@/app/components/DashboardLayout'; 
import { dummyBerita } from '@/app/components/berita/BeritaList'; 
import './BeritaDetail.css';

interface BeritaData {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  isiLengkap: string;
}

export default function BeritaDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [berita, setBerita] = useState<BeritaData | null>(null);

  useEffect(() => {
    if (id) {
      const beritaId = parseInt(id, 10);
      const data = dummyBerita.find((b) => b.id === beritaId);
      if (data) {
        setBerita(data);
      }
    }
  }, [id]);

  if (!berita) {
    return (
      <DashboardLayout>
        <div className="berita-detail-container">
          <p>Loading...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="berita-detail-container">
        <div className="detail-header">
          <Link href="/admin/berita" className="back-button">
            <span>&larr;</span> Kembali
          </Link>
        </div>

        <article className="detail-article-card">
          <img 
            src={berita.imageUrl} 
            alt={berita.title} 
            className="detail-image" 
          />
          
          <div className="detail-text-content">
            <h1 className="detail-title">{berita.title}</h1>
            <div className="detail-content">
              {berita.isiLengkap}
            </div>
          </div>
        </article>

      </div>
    </DashboardLayout>
  );
}