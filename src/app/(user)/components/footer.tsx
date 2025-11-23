"use server";
import { ContactsData } from '@/utils/dataTypes/ContactData';
import { fetchData } from '@/utils/utils';
import Link from 'next/link';
import { Image } from 'react-bootstrap';

async function Footer() {

  const contacts: ContactsData = await fetchData('/contact', {
    method: 'GET'
  });

  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient( #FFA500, #FF4500)",
        color: "white",
        padding: "25px 40px",
        marginTop: "60px",
        fontSize: "14px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <div style={{ maxWidth: "300px" }}>
          <h4 style={{ marginBottom: "12px" }}>Nasi goreng Pakde Har</h4>
          <p style={{ lineHeight: "1.6" }}>
            Nasi goreng Indonesia yang autentik disajikan dengan penuh semangat sejak 2017.
            Rasakan cita rasa nasi goreng dengan sentuhan Pakde yang bikin nagih!
          </p>
        </div>
        <div>
          <h3 style={{ marginBottom: "12px" }}>Menu Pintasan</h3>
          <p><Link href="/" style={{ color: "white", textDecoration: "none" }}>Beranda</Link></p>
          <p><Link href="/menu" style={{ color: "white", textDecoration: "none" }}>Menu</Link></p>
          <p><Link href="/tentangKami" style={{ color: "white", textDecoration: "none" }}>Tentang Kami</Link></p>
          <p><Link href="/kontak" style={{ color: "white", textDecoration: "none" }}>Kontak</Link></p>
          <p><Link href="/login" style={{ color: "white", textDecoration: "none" }}>Admin</Link></p>
        </div>
        <div style={{ maxWidth: "300px" }}>
          <h3 style={{ marginBottom: "12px" }}>Hubungi Kami</h3>

          <div style={{ display: "flex", gap: "12px" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative", top: "2px" }}>
              <Image alt='' src="/images/location_on.png" style={{ width: "20px" }} />
              <Image alt='' src="/images/call.png" style={{ width: "20px", position: "relative", top: "43px" }} />
              <Image alt='' src="/images/mail.png" style={{ width: "20px", position: "relative", top: "47px" }} />
              <Image alt='' src="/images/access_time.png" style={{ width: "20px", position: "relative", top: "50px" }} />
            </div>

            <div>
              <p>
                {contacts.addresses[0].address ? contacts.addresses[0].address : ''}
              </p>
              <p>{contacts.phoneNumbers[0] ? contacts.phoneNumbers[0] : ''}</p>
              <p>PakDeHar@gmail.com</p>
              <Link href="/kontak">
                <strong>Lihat jadwal</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;