'use client';
import React from 'react';

interface InfoJamOperasionalProps {
  jamKerja: any;
  jamLibur: any;
  onUbahJamKerja: () => void;
  onUbahJamLibur: () => void;
}

export default function InfoJamOperasional({ 
  jamKerja, 
  jamLibur, 
  onUbahJamKerja, 
  onUbahJamLibur 
}: InfoJamOperasionalProps) {
  
  return (
    <div className="info-widget info-jam-operasional">
      <div className="widget-header">
        <h2 className="widget-title-secondary">Pengaturan Jam Operasional</h2>
        <button className="button-orange">Tambah Tanggal Baru</button>
      </div>
      
      <div className="jam-layout">
        <div className="jam-hari-kerja">
          <div className="jam-header">
            <h4>Hari Kerja</h4>
            <button className="button-ubah" onClick={onUbahJamKerja}>Ubah</button>
          </div>
          <div className="info-item"><span className="info-item-label">Senin</span><span className="info-item-value">07:00 - 22:00</span></div>
          <div className="info-item"><span className="info-item-label">Selasa</span><span className="info-item-value">07:00 - 22:00</span></div>
          <div className="info-item"><span className="info-item-label">Rabu</span><span className="info-item-value">07:00 - 22:00</span></div>
          <div className="info-item"><span className="info-item-label">Kamis</span><span className="info-item-value">07:00 - 22:00</span></div>
          <div className="info-item"><span className="info-item-label">Jumat</span><span className="info-item-value">07:00 - 22:00</span></div>
        </div>
        
        <div className="jam-hari-libur">
          <div className="jam-header">
            <h4>Hari Libur</h4>
            <button className="button-ubah" onClick={onUbahJamLibur}>Ubah</button>
          </div>
          <div className="info-item"><span className="info-item-label">Sabtu</span><span className="info-item-value">Tutup</span></div>
          <div className="info-item"><span className="info-item-label">Minggu</span><span className="info-item-value">Tutup</span></div>
        </div>
      </div>
    </div>
  );
}