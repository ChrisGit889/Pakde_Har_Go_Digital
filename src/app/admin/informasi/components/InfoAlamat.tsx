'use client';

import { useEffect, useState } from "react";
import AlamatModal from "./AlamatModal";
import { useRouter } from "next/navigation";

export default function InfoAlamat({ data }: { data: { name: string, address: string }[] }) {

  const router = useRouter();

  const [id, setId] = useState<number | null>(null);
  const [modalData, setModalData] = useState<{ name: string, address: string }>({ name: '', address: '' });
  const [modifying, setModifying] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);

  function onAdd() {
    setId(null);
    setModifying(false);
    setModalShow(true);
  }

  function createOnChange(id: number) {
    return () => {
      setId(id);
      setModifying(true);
      setModalData({
        ...modalData,
        name: data[id].name,
        address: data[id].address,
      })
      setModalShow(true);
    };
  }

  function onClose() {
    setModalShow(false);
    router.refresh();
  }

  return (
    <div className="info-widget">
      <div className="widget-header">
        <h2 className="widget-title-secondary">Pengaturan Alamat</h2>
        <button className="button-orange" onClick={onAdd}>
          Tambah Alamat Baru
        </button>
      </div>

      <div className="info-alamat-layout">
        <div className="info-alamat-list">
          {
            data.map((addr, index) => {
              return (
                <div className="info-alamat-card" key={index}>
                  <div className="alamat-card-header">
                    <h4>Alamat {index + 1}</h4>
                    <button className="button-ubah" onClick={createOnChange(index)}>
                      Ubah
                    </button>
                  </div>
                  <div className="info-item">
                    <span className="info-item-label">Nama Toko</span>
                    <span className="info-item-value">{addr.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-item-label">Alamat</span>
                    <span className="info-item-value">{addr.address}</span>
                  </div>
                </div>
              )
            })
          }
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

      <AlamatModal
        id={id!}
        show={modalShow}
        data={modalData}
        modify={modifying}
        onClose={onClose}

      />
    </div>
  );
}