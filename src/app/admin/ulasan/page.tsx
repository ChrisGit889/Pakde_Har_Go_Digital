'use server';
import UlasanStats from '@/app/admin/ulasan/components/UlasanStats';
import './UlasanPage.css';
import UlasanSync from './components/UlasanSync';
import { fetchData } from '@/utils/utils';
import { ReviewData } from '@/utils/dataTypes/ReviewData';

export default async function UlasanPage() {
  const reviews: ReviewData = await fetchData('/review/list', { method: 'GET' });

  const stats = {
    good: reviews.data.filter((f) => f.review.rating >= 4).length,
    bad: reviews.data.filter((f) => f.review.rating <= 2).length,
    avg: reviews.data.reduce((f, f2) => f + f2.review.rating, 0) / reviews.data.length,
    count: reviews.data.length,
    highlighted: reviews.data.filter(f => f.review.highlighted).length,
  };


  return (
    <>
      <div className="ulasan-container">
        <h1 className="ulasan-page-title">Penilaian Toko</h1>
        <UlasanStats stats={stats} />
        <UlasanSync reviews={reviews} stats={stats} />
      </div>
    </>
  );
}