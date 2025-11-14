'use server';
import InfoAlamat from '@/app/admin/informasi/components/InfoAlamat';
import InfoJamOperasional from '@/app/admin/informasi/components/InfoJamOperasional';
import InfoKontak from '@/app/admin/informasi/components/InfoKontak';
import './InformasiPage.css';
import { ContactsData } from '@/utils/dataTypes/ContactData';
import { route } from '@/utils/utils';

export default async function InformasiPage() {

  let emails: string[] = [];
  let places: {
    name: string,
    address: string
  }[] = [];
  let phones: string[] = [];
  let schedule: {
    mon: string,
    tue: string,
    wed: string,
    thu: string,
    fri: string,
    sat: string,
    sun: string,
  } | null = null;

  async function asyncFetch() {
    const data: ContactsData = await fetch(await route('/contact'), {
      method: 'GET',
    }).then((res) => {
      if (res.status == 200) {
        return res.json();
      }
      throw Error('Database Err!');
    }).catch((e) => {
      console.log(e);
      return null;
    });


    if (data) {
      emails = data.emails;
      places = data.addresses;
      phones = data.phoneNumbers;
      schedule = data.schedule;
    }
  }
  await asyncFetch();
  return (
    <>
      <h1 className="page-title">Pengaturan Informasi</h1>
      <div className="informasi-container">
        <InfoAlamat data={places} />

        <div className="info-row">
          <InfoJamOperasional
            schedule={schedule!}
          />
          {/* <InfoKontak
            kontak={dummyKontak}
            onUbah={() => { }}
          /> */}
        </div>
      </div>
    </>
  );
}