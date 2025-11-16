'use client';

export default function UlasanFilter({ stats, highlighted, rating, highlightChange, ratingChange }: { stats: { good: number, bad: number, avg: number, count: number, highlighted: number }, highlighted: boolean, rating: number, highlightChange: (e: boolean) => void, ratingChange: (e: number) => void }) {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <label>Status</label>
        <div className="filter-tabs">
          <button
            className={`filter-tab ${!highlighted ? 'active' : ''}`}
            onClick={() => highlightChange(!highlighted)}
          >
            Semua ({stats.count})
          </button>
          <button
            className={`filter-tab ${highlighted ? 'active' : ''}`}
            onClick={() => highlightChange(!highlighted)}
          >
            Highlight ({stats.highlighted})
          </button>
        </div>
      </div>

      <div className="filter-group">
        <label>Penilaian Toko</label>
        <div className="filter-tabs">
          <button
            className={`filter-tab checkbox-tab ${rating === 0 ? 'active' : ''}`}
            onClick={() => ratingChange(0)}
          >
            <input type="checkbox" checked={rating === 0} readOnly /> Semua
          </button>
          {[5, 4, 3, 2, 1].map(star => (
            <button
              key={star}
              className={`filter-tab checkbox-tab ${rating === star ? 'active' : ''}`}
              onClick={() => ratingChange(rating == star ? 0 : star)}
            >
              <input type="checkbox" checked={rating === star} readOnly /> {star} Bintang
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}