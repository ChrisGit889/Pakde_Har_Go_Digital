'use client';
import React from 'react';

export default function InfoAlamat() {
  return (
    <div className="info-widget">
      <div className="widget-header">
        <h2 className="widget-title-secondary">Pengaturan Alamat</h2>
        <button className="button-orange">Tambah Alamat Baru</button>
      </div>
      <div className="info-alamat-layout">
        <div className="info-alamat-list">
          <div className="info-alamat-card">
            <div className="alamat-card-header">
              <h4>Alamat 1</h4>
              <button className="button-ubah">Ubah</button>
            </div>
            <table className="data-table">
              <tbody>
                <tr>
                  <td>Nama Toko</td>
                  <td>Nasi Goreng Pakde Har</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>Sebelah Alfa-X S.Parman, Jl. Taman S. Parman, RT.7/RW.8, Grogol...</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="info-alamat-card">
            <div className="alamat-card-header">
              <h4>Alamat 2</h4>
              <button className="button-ubah">Ubah</button>
            </div>
            <table className="data-table">
              <tbody>
                <tr>
                  <td>Nama Toko</td>
                  <td>Nasi Goreng Pakde Har</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>Sebelah Alfa-X S.Parman...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="info-map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.69177997975!2d106.79389831476885!3d-6.172081995530467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f68c33f1b06d%3A0x86c2fc44e39266e!2sAlfa-X%20S.Parman!5e0!3m2!1sen!2sid!4v1678886400000" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  );
}