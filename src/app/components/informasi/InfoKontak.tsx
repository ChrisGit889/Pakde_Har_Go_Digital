'use client';
import React from 'react';
export default function InfoKontak() {
  return (
    <div className="info-widget info-kontak">
      <div className="widget-header">
        <h2 className="widget-title-secondary">Kontak</h2>
        <button className="button-orange">Tambah</button>
      </div>
      <div className="kontak-item">
        <span>📞</span> 08123456789
      </div>
    </div>
  );
}