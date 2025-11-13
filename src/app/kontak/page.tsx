"use client";
import styles from "../page.module.css";
import NavbarComponents from "../components/navbarWebUser/navbar";
import Footer from "../components/footerWebUser/footer";
import HalamanUtamaKontak from "../components/KomponenAboutusKontak/halamanUtamaKontak";

export default function Kontak() {
  return (
    <div className={styles.container}>
      <NavbarComponents />

      <HalamanUtamaKontak/>

      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/whatsapp.svg"
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "4px solid #ffffff",
            backgroundColor: "white",
            cursor: "pointer",
            zIndex: 99,
          }}
        />
      </a>

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
                placeholder="John doe"
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
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ color: "black", fontSize: "15px" }}>
                Alamat email*
              </label>
              <input
                placeholder="John@gmail.com"
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
                placeholder="081234567890"
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
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ color: "black", fontSize: "15px" }}>
                Pekerjaan*
              </label>
              <select
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
              >
                <option>Rahasia</option>
                <option>Mahasiswa</option>
                <option>Karyawan</option>
                <option>Lainnya</option>
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
            >
              ☆ ☆ ☆ ☆ ☆
            </div>
          </div>

          <div style={{ marginBottom: "22px" }}>
            <label style={{ color: "black", fontSize: "15px" }}>
              Isi Ulasan*
            </label>
            <textarea
              placeholder="Isi pesanmu disini....."
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
          <img
            src="/images/GoogleMapAlamat_Pakde.png"
            style={{
              width: "380px",
              height: "350px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          />

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
              <img
                src="/images/location_on.png"
                style={{ width: "20px", marginTop: "3px", filter: "brightness(0) saturate(100%)" }}
              />

              <p style={{ lineHeight: 1.3, fontSize: "12px", marginBottom: "8px" }}>
                Sebelah Alfa X S Parman
                <br />
                Jl. Taman S. Parman, RT.7/RW.8, Grogol, Kec. Grogol Petamburan,
                Kota Jakarta Barat, DKI Jakarta 11440
              </p>
            </div>

            <h4 style={{ marginTop: "4px", marginBottom: "4px" }}>Jam Operasional :</h4>

            <p style={{ margin: "0", fontSize: "13px" }}>
              Senin–Jumat : 07:00 – 22:00
            </p>
            <p style={{ margin: "0", fontSize: "13px" }}>
              Sabtu–Minggu : Tutup
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
