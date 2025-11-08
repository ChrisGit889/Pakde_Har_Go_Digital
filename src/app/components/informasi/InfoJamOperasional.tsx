'use client';
import React from 'react';

export default function InfoJamOperasional() {
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
            <button className="button-ubah">Ubah</button>
          </div>
          <table className="data-table">
            <tbody>
              <tr><td>Senin</td><td>07:00 - 22:00</td></tr>
              <tr><td>Selasa</td><td>07:00 - 22:00</td></tr>
              <tr><td>Rabu</td><td>07:00 - 22:00</td></tr>
              <tr><td>Kamis</td><td>07:00 - 22:00</td></tr>
              <tr><td>Jumat</td><td>07:00 - 22:00</td></tr>
            </tbody>
          </table>
        </div>
        <div className="jam-hari-libur">
          <div className="jam-header">
            <h4>Hari Libur</h4>
            <button className="button-ubah">Ubah</button>
          </div>
          <table className="data-table">
            <tbody>
              <tr><td>Sabtu</td><td>Tutup</td></tr>
              <tr><td>Minggu</td><td>Tutup</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}