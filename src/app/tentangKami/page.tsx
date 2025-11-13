"use client";
import styles from "../page.module.css";
import NavbarComponents from "../components/navbarWebUser/navbar";
import Footer from "../components/footerWebUser/footer";
import HalamanUtamatentangKami from "../components/KomponenAboutusKontak/HalamanUtamatentangKami";

export default function Menu() {
  return (
    <div className={styles.container}>
      <NavbarComponents />

      <HalamanUtamatentangKami/>

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
            backgroundColor: "#ffffff",
            cursor: "pointer",
            zIndex: 999,
          }}
        />
      </a>

      <div
        style={{
          maxWidth: "900px",
          margin: "120px auto 80px auto",
          padding: "0 20px",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "40px",
            color: "#000",
          }}
          id="tentangKami"
        >
          Dari Awal yang Sederhana
        </h2>

        <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#000", marginBottom: "22px" }}>
          Perjalanan Pakde Har dimulai pada tahun 2017, ketika Pakde Har mulai membuat nasi goreng
          khas buatannya dari dapur rumah sederhana. Berkat cita rasa bumbu khas dan harga yang ramah
          di kantong mahasiswa, aroma nasi goreng Pakde Har cepat menarik perhatian banyak pelanggan.
        </p>

        <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#000", marginBottom: "22px" }}>
          Setahun kemudian, Pakde mulai berjualan di samping Universitas Tarumanagara — tempat di
          mana kehangatan, tawa, dan cerita para mahasiswa selalu menemani setiap wajan yang
          bergoyang.
        </p>

        <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#000", marginBottom: "22px" }}>
          Kini, Warung Nasi Goreng Pakde Har terus berkembang. Dengan tempat yang telah direnovasi,
          kami tetap berkomitmen menyajikan rasa autentik dan suasana akrab yang telah menjadi ciri
          khas kami sejak awal.
        </p>
      </div>

      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            marginBottom: "10px",
            color: "#000",
          }}
        >
          Berita Harian Kami
        </h2>

        <p style={{ fontSize: "20px", color: "#000", marginBottom: "50px" }}>
          Ikuti berbagai berita dan perkembangan terbaru dari Pakde Har.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            width: "330px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <img
            src="/images/Gerobak_Pakde.jpg"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px", textAlign: "left" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#000" }}>Menu Baru Segera Hadir</h3>
            <p style={{ fontSize: "16px", color: "#000", margin: "10px 0 20px 0" }}>
              Menu terbaru kami, Nasi Goreng Gila Kambing, hadir dengan rasa istimewa yang memadukan
              bumbu khas dan kelezatan daging kambing pilihan.
            </p>
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#ff8c00",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Detail Berita
            </button>
          </div>
        </div>

        <div
          style={{
            width: "330px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <img
            src="/images/Gerobak_Pakde.jpg"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px", textAlign: "left" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#000" }}>Pindah Lokasi</h3>
            <p style={{ fontSize: "16px", color: "#000", margin: "10px 0 20px 0" }}>
              Pada 22 Oktober 2025 Nasi Goreng Pakde Har pindah ke sebelah Indomaret untuk sementara
              dikarenakan ada renovasi.
            </p>
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#ff8c00",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Detail Berita
            </button>
          </div>
        </div>

        <div
          style={{
            width: "330px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <img
            src="/images/Gerobak_Pakde.jpg"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "20px", textAlign: "left" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#000" }}>Nasi Vegetarian</h3>
            <p style={{ fontSize: "16px", color: "#000", margin: "10px 0 20px 0" }}>
              Nikmati kelezatan Nasi Goreng Vegetarian dengan cita rasa autentik dan bahan-bahan segar
              pilihan dan berkualitas.
            </p>
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#ff8c00",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Detail Berita
            </button>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "80px" }}>
        <button
          style={{
            padding: "10px 24px",
            backgroundColor: "white",
            border: "2px solid #ff8c00",
            color: "#000",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Lihat Berita Lainnya
        </button>
      </div>

      <div style={{ marginTop: "120px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "10px", color: "#000" }}>
          Kenali Tim Kami
        </h2>

        <p style={{ fontSize: "20px", color: "#000", marginBottom: "50px" }}>
          Orang dibalik Nasi Goreng Pakde Har
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 20px",
          marginBottom: "80px",
        }}
      >
        <div
          style={{
            width: "400px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <img
            src="/images/Wajah_Pakde.jpg"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />

          <div style={{ padding: "20px", textAlign: "left" }}>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#000", marginBottom: "6px" }}>
              Pakde Har
            </h3>

            <p style={{ fontSize: "16px", color: "#ff8c00", fontWeight: 600, marginBottom: "12px" }}>
              Pendiri & Koki
            </p>

            <p style={{ fontSize: "16px", color: "#000", lineHeight: 1.6 }}>
              Dengan pengalaman berjualan sejak tahun 2017, Pakde Har menghadirkan cita rasa nasi
              goreng dengan rasa yang khas dan harga yang terjangkau.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
