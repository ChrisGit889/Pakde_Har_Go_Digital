'use client';
import React from 'react';

interface AlamatData {
  id: number;
  namaToko: string;
  alamat: string;
}

interface InfoAlamatProps {
  alamat1: AlamatData;
  alamat2: AlamatData;
  onTambah: () => void;
  onUbah: (data: AlamatData) => void;
}

export default function InfoAlamat({ alamat1, alamat2, onTambah, onUbah }: InfoAlamatProps) {
  return (
    <div className="info-widget">
      <div className="widget-header">
        <h2 className="widget-title-secondary">Pengaturan Alamat</h2>
        <button className="button-orange" onClick={onTambah}>
          Tambah Alamat Baru
        </button>
      </div>

      <div className="info-alamat-layout">

        <div className="info-alamat-list">
          <div className="info-alamat-card">
            <div className="alamat-card-header">
              <h4>Alamat 1</h4>
              <button className="button-ubah" onClick={() => onUbah(alamat1)}>
                Ubah
              </button>
            </div>
            <div className="info-item">
              <span className="info-item-label">Nama Toko</span>
              <span className="info-item-value">{alamat1.namaToko}</span>
            </div>
            <div className="info-item">
              <span className="info-item-label">Alamat</span>
              <span className="info-item-value">{alamat1.alamat}</span>
            </div>
          </div>

          <div className="info-alamat-card">
            <div className="alamat-card-header">
              <h4>Alamat 2</h4>
              <button className="button-ubah" onClick={() => onUbah(alamat2)}>
                Ubah
              </button>
            </div>
            <div className="info-item">
              <span className="info-item-label">Nama Toko</span>
              <span className="info-item-value">{alamat2.namaToko}</span>
            </div>
            <div className="info-item">
              <span className="info-item-label">Alamat</span>
              <span className="info-item-value">{alamat2.alamat}</span>
            </div>
          </div>
        </div>

        <div className="info-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d503.0421499950222!2d106.79023182778693!3d-6.169678284486097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1762680234201!5m2!1sid!2sid"
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}