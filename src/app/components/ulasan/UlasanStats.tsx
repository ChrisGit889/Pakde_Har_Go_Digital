'use client';
import React from 'react';

interface StatsData {
  diterima: number;
  tingkatBaik: string;
  burukBelumDibalas: number;
  baru: number;
}

interface UlasanStatsProps {
  stats: StatsData;
}

export default function UlasanStats({ stats }: UlasanStatsProps) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <label>Penilaian Diterima</label>
        <div className="stat-value">{stats.diterima}</div>
      </div>
      
      <div className="stat-card">
        <label>Tingkat Penilaian Baik</label>
        <div className="stat-value">{stats.tingkatBaik}</div>
      </div>

      <div className="stat-card">
        <label>Penilaian Buruk Belum Dibalas</label>
        <div className="stat-value highlight">{stats.burukBelumDibalas}</div>
        <a href="#" className="stat-link">Lihat &gt;</a>
      </div>

      <div className="stat-card">
        <label>Penilaian Baru</label>
        <div className="stat-value highlight">{stats.baru}</div>
        <a href="#" className="stat-link">Lihat &gt;</a>
      </div>
    </div>
  );
}