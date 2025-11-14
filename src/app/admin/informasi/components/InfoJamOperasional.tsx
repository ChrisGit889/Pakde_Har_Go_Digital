'use client';

import { useState } from "react";
import JamModal from "./JamModal";
import { useRouter } from "next/navigation";

const conversion: {
  [key: string]: string;
  mon: string,
  tue: string,
  wed: string,
  thu: string,
  fri: string,
  sat: string,
  sun: string,
} = {
  mon: 'Senin',
  tue: 'Selasa',
  wed: 'Rabu',
  thu: 'Kamis',
  fri: 'Jumat',
  sat: 'Sabtu',
  sun: 'Minggu,'
};

export default function InfoJamOperasional({ schedule }: {
  schedule: {
    [key: string]: string;
    mon: string,
    tue: string,
    wed: string,
    thu: string,
    fri: string,
    sat: string,
    sun: string,
  }
}) {
  const router = useRouter();

  const [modalShow, setShow] = useState<boolean>(false);

  const onChange = () => {
    setShow(true);
  }

  const onClose = () => {
    router.refresh();
    setShow(false);
  }

  return (
    <div className="info-widget info-jam-operasional">
      <div className="widget-header">
        <h2 className="widget-title-secondary">Pengaturan Jam Operasional</h2>
        <button className="button-orange" onClick={onChange}>Ubah Jam Operasional</button>
      </div>

      <div className="jam-layout">
        <div className="jam-hari-kerja">
          <div className="jam-header">
            <h4>Hari Kerja</h4>
          </div>
          {
            Object.entries(schedule).map((o) => {
              if (o[1] == 'CLOSED') return null;
              return (<div className="info-item" key={o[0]}><span className="info-item-label">{conversion[o[0]]}</span><span className="info-item-value">{o[1]}</span></div>);
            })
          }
        </div>

        <div className="jam-hari-libur">
          <div className="jam-header">
            <h4>Hari Libur</h4>
          </div>
          {
            Object.entries(schedule).map((o) => {
              if (o[1] == 'CLOSED') return (<div className="info-item" key={o[0]}><span className="info-item-label">{conversion[o[0]]}</span><span className="info-item-value">Tutup</span></div>);
              return null;
            })
          }
        </div>
      </div>
      <JamModal
        data={schedule}
        show={modalShow}
        onClose={onClose}
      />
    </div>
  );
}