'use client';
import { useState, useMemo } from 'react';
import UlasanFilter from '@/app/admin/ulasan/components/UlasanFilter';
import UlasanList from '@/app/admin/ulasan/components/UlasanList';
import '../UlasanPage.css';
import { ReviewData } from '@/utils/dataTypes/ReviewData';
import { fetchBoolean, getToken } from '@/utils/utils';
import { useRouter } from 'next/navigation';

export default function UlasanSync({ reviews, stats }: { reviews: ReviewData, stats: { good: number, bad: number, avg: number, count: number, highlighted: number } }) {
  const router = useRouter();

  const [highlighted, setHighlighted] = useState(false);
  const [rating, setRating] = useState(0);

  const filteredReviews = useMemo(() => {
    return reviews.data
      .filter(r => highlighted ? r.review.highlighted : true)
      .filter(r => rating == 0 ? true : r.review.rating == rating)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .sort((a, _b) => a.review.highlighted ? -1 : 1);
  }, [reviews, highlighted, rating]);

  const deleteReview = async (e: number) => {
    const header = new Headers();
    header.append('Authorization', (await getToken())!.toString());
    const res = await fetchBoolean('/review/' + e, {
      method: 'DELETE',
      headers: header,
    });

    if (res) router.refresh();
  }

  const highlightReview = async (e: number, h: boolean) => {
    const header = new Headers();
    header.append('Authorization', (await getToken())!.toString());
    header.append('Content-Type', 'application/json');
    const res = await fetchBoolean('/review/' + e, {
      method: 'PUT',
      body: JSON.stringify({
        highlighted: h,
      }),
      headers: header,
    });

    if (res) router.refresh();

  }

  return (
    <>

      <UlasanFilter
        stats={stats}
        highlighted={highlighted}
        rating={rating}
        highlightChange={(e) => setHighlighted(e)}
        ratingChange={(e) => setRating(e)}
      />

      <UlasanList
        reviews={filteredReviews}
        onDelete={(e) => deleteReview(e)}
        onHighlight={(e, b) => highlightReview(e, b)}
      />
    </>
  );
}