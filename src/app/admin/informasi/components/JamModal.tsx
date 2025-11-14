'use client';
import { useState } from 'react';
import './InformasiPage.css';
import { getToken, route } from '@/utils/utils';

export default function JamModal({ show, data, onClose }: {
  show: boolean, data: {
    [key: string]: string;
    mon: string,
    tue: string,
    wed: string,
    thu: string,
    fri: string,
    sat: string,
    sun: string,
  }, onClose: () => void
}) {

  const [newSched, setSched] = useState(data);
  const [disabled, setDisabled] = useState(false);

  if (!show) return null;

  const handleSubmit = async () => {
    setDisabled(true);

    for (const i of Object.keys(newSched)) {
      newSched[i] = newSched[i].trim().replaceAll(' ', '');
      if (/^(2[1-4]|(1|0)[0-9]):[0-5][0-9]-(2[1-4]|(1|0)[0-9]):[0-5][0-9]$/.test(newSched[i])) {
        continue
      }
      if (newSched[i].toUpperCase() == 'CLOSED') {
        continue;
      }
      newSched[i] = data[i];
    }

    const headers = new Headers();
    headers.append('Authorization', (await getToken())!);
    headers.append('Content-Type', 'application/json');

    let res = await fetch(await route('/contact/schedule'), {
      method: 'PUT',
      body: JSON.stringify({
        mon: newSched.mon,
        tue: newSched.tue,
        wed: newSched.wed,
        thu: newSched.thu,
        fri: newSched.fri,
        sat: newSched.sat,
        sun: newSched.sun,
      }),
      headers: headers,
    }).then((res) => {
      if (res.status == 200) return true;
      throw Error('Database insertion error!');
    }).catch((e) => {
      console.log(e);
      return false;
    });

    if (res) {
      onClose();
    }
    setDisabled(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Ubah Jam Operasi</h3>

        <div className="jam-modal-grid">
          <label>Senin</label><input type="text" defaultValue={newSched.mon} onChange={(e) => setSched({ ...newSched, mon: e.target.value })} />
          <label>Selasa</label><input type="text" defaultValue={newSched.tue} onChange={(e) => setSched({ ...newSched, tue: e.target.value })} />
          <label>Rabu</label><input type="text" defaultValue={newSched.wed} onChange={(e) => setSched({ ...newSched, wed: e.target.value })} />
          <label>Kamis</label><input type="text" defaultValue={newSched.thu} onChange={(e) => setSched({ ...newSched, thu: e.target.value })} />
          <label>Jumat</label><input type="text" defaultValue={newSched.fri} onChange={(e) => setSched({ ...newSched, fri: e.target.value })} />
          <label>Sabtu</label><input type="text" defaultValue={newSched.sat} onChange={(e) => setSched({ ...newSched, sat: e.target.value })} />
          <label>Minggu</label><input type="text" defaultValue={newSched.sun} onChange={(e) => setSched({ ...newSched, sun: e.target.value })} />
        </div>

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose} disabled={disabled}>Batal</button>
          <button className="modal-button green" onClick={handleSubmit} disabled={disabled}>Simpan</button>
        </div>
      </div>
    </div>
  );
}