'use client';
import React from 'react';

interface InfoKontakProps {
  kontak: string;
  onUbah: () => void;
}

export default function InfoKontak({ kontak, onUbah }: InfoKontakProps) {
  return (
    <div className="info-widget info-kontak">
      <div className="widget-header">
        <h2 className="widget-title-secondary">Kontak</h2>
        <button className="button-orange" onClick={onUbah}>Ubah</button>
      </div>
      
      <div className="kontak-item">
        <span>📞</span> {kontak}
      </div>
    </div>
  );
}