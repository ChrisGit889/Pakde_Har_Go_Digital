'use client';
import { useState } from 'react';
import KontakModal from './KontakModal';
import { Envelope, Telephone } from 'react-bootstrap-icons';
import { useRouter } from 'next/navigation';
import { getToken, route } from '@/utils/utils';

export default function InfoKontak({ contacts }: { contacts: { emails: string[], phones: string[] } }) {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const onChange = () => {
    setShow(true);
  }

  const onClose = () => {
    router.refresh();
    setShow(false);
  }

  const deletePhone = async (id: number) => {
    const headers = new Headers();
    headers.append('Authorization', (await getToken())!);

    let res = await fetch(await route('/contact/phone/' + id), {
      method: 'DELETE',
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
  }

  const deleteEmail = async (id: number) => {
    const headers = new Headers();
    headers.append('Authorization', (await getToken())!);

    let res = await fetch(await route('/contact/email/' + id), {
      method: 'DELETE',
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
  }

  return (
    <div className="info-widget info-kontak">
      <div className="widget-header">
        <h2 className="widget-title-secondary">Kontak</h2>
        <button className="button-orange" onClick={onChange}>Ubah</button>
      </div>

      {
        contacts.phones.map((phone, key) => {
          return (
            <div className="kontak-item" key={key}>
              <div onClick={() => deletePhone(key)} style={{ cursor: 'pointer', userSelect: 'none' }}><Telephone /> {phone}</div>
            </div>
          );
        })
      }

      {
        contacts.emails.map((email, key) => {
          return (
            <div className="kontak-item" key={key}>
              <div onClick={() => deleteEmail(key)} style={{ cursor: 'pointer', userSelect: 'none' }}><Envelope /> {email}</div>
            </div>
          );
        })
      }
      <KontakModal
        show={show}
        onClose={onClose}
      />
    </div>
  );
}