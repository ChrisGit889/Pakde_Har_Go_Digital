"use client";
import { Image } from "react-bootstrap";
import HalamanUtamaKontak from "./components/halamanUtamaKontak";
import { useEffect, useState } from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import { fetchBoolean, fetchData } from "@/utils/utils";
import { ContactsData } from "@/utils/dataTypes/ContactData";

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
  sun: 'Minggu'
};

export default function Kontak() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [work, setWork] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>('');

  const [data, setData] = useState<ContactsData>();

  const [disabled, setDisabled] = useState(false);

  async function asyncFetch() {
    const data: ContactsData = await fetchData('/contact', { method: 'GET' });
    if (data) {
      setData(data);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    asyncFetch();
  }, []);

  async function handleSubmit() {
    if (!name || !email || !phone || !rating || !description) {
      alert("Isilah semua kolom input!");
      return;
    }

    setDisabled(true);
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const res = await fetchBoolean('/review', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        name: name,
        email: email,
        phone_number: phone,
        details: work,
        review_rating: rating,
        review_description: description,
      })
    });

    if (res) {
      alert('Review berhasil ditambahkan');
    } else {
      alert('Terjadi kesalahan halaman');
    }
    setDisabled(false);
  }


  return (
    <>

      <HalamanUtamaKontak />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "40px",
          padding: "0 20px",
        }}
        id="kontak"
      >
        <div
          style={{
            width: "500px",
            height: "fit-content",
            background: "white",
            borderRadius: "10px",
            padding: "30px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "25px",
              marginBottom: "22px",
            }}
          >
            <div style={{ flex: 1 }}>
              <label style={{ color: "black", fontSize: "15px" }}>Nama*</label>
              <input
                placeholder="Nama"
                value={name}
                style={{
                  width: "100%",
                  height: "42px",
                  marginTop: "6px",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "14px",
                }}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ color: "black", fontSize: "15px" }}>
                Alamat email*
              </label>
              <input
                placeholder="example@gmail.com"
                value={email}
                style={{
                  width: "100%",
                  height: "42px",
                  marginTop: "6px",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "14px",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "25px",
              marginBottom: "22px",
            }}
          >
            <div style={{ flex: 1 }}>
              <label style={{ color: "black", fontSize: "15px" }}>
                Nomor Telepon
              </label>
              <input
                placeholder="089999999999"
                value={phone}
                style={{
                  width: "100%",
                  height: "42px",
                  marginTop: "6px",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "14px",
                }}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ color: "black", fontSize: "15px" }}>
                Pekerjaan*
              </label>
              <select
                value={work}
                style={{
                  width: "100%",
                  height: "42px",
                  marginTop: "6px",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "14px",
                }}
                onChange={(e) => setWork(e.target.value)}
              >
                <option value={''}>Rahasia</option>
                <option value={'stu'}>Mahasiswa</option>
                <option value={'work'}>Karyawan</option>
                <option value={'other'}>Lainnya</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: "22px" }}>
            <label style={{ color: "black", fontSize: "15px" }}>
              Nilai Rating*
            </label>
            <div
              style={{
                marginTop: "6px",
                fontSize: "22px",
                color: "black",
              }}
            >{
                Array(5).fill(0).map((val, index) => {
                  return <span className="px-1" key={index} onClick={() => setRating(index + 1)}>{index < rating ? <StarFill /> : <Star />}</span>;
                })
              }
            </div>
          </div>

          <div style={{ marginBottom: "22px" }}>
            <label style={{ color: "black", fontSize: "15px" }}>
              Isi Ulasan*
            </label>
            <textarea
              placeholder="Isi pesanmu disini....."
              value={description}
              style={{
                width: "100%",
                height: "160px",
                marginTop: "6px",
                padding: "12px",
                resize: "none",
                borderRadius: "6px",
                border: "1px solid #ccc",
                backgroundColor: "white",
                color: "black",
                fontSize: "14px",
              }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            style={{
              backgroundColor: "#ff8c00",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
            }}
            onClick={handleSubmit}
            disabled={disabled}
          >
            Kirim ulasan
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d503.0421499950222!2d106.79023182778693!3d-6.169678284486097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1762680234201!5m2!1sid!2sid"
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              width: "380px",
              height: "350px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          />
          {/* <Image
            src="/images/GoogleMapAlamat_Pakde.png"
            alt=''
            style={{
              width: "380px",
              height: "350px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }} 
          />*/}

          <div
            style={{
              width: "380px",
              background: "white",
              padding: "22px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              color: "black",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>Kunjungi kami</h3>

            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <Image
                src="/images/location_on.png"
                alt=''
                style={{ width: "20px", marginTop: "3px", filter: "brightness(0) saturate(100%)" }}
              />

              <p style={{ lineHeight: 1.3, fontSize: "12px", marginBottom: "8px" }}>
                {data ? data.addresses[0].name : null}
                <br />
                {data ? data.addresses[0].address : null}
              </p>
            </div>

            <h4 style={{ marginTop: "4px", marginBottom: "4px" }}>Jam Operasional :</h4>


            {data ? Object.entries(data.schedule).map((data) => {
              return <p style={{ margin: "0", fontSize: "13px" }} key={data[0]}>
                {conversion[data[0]]} : {data[1]}
              </p>
            }) : null}
          </div>
        </div>
      </div>

    </>
  );
}
