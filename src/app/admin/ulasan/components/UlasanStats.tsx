'use client';
import '../UlasanPage.css';

export default function UlasanStats({ stats }: { stats: { good: number, bad: number, avg: number, count: number } }) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <label>Penilaian Diterima</label>
        <div className="stat-value">{stats.count}</div>
      </div>

      <div className="stat-card">
        <label>Tingkat Penilaian Baik (4-5)</label>
        <div className="stat-value green">{stats.good}</div>
      </div>

      <div className="stat-card">
        <label>Penilaian Buruk (1-2)</label>
        <div className="stat-value">{stats.bad}</div>
      </div>

      <div className="stat-card">
        <label>Rata-rata Bintang</label>
        <div className="stat-value highlight">{stats.avg}</div>
      </div>
    </div>
  );
}