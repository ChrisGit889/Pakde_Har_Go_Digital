"use client";
import styles from "../page.module.css";
import NavbarComponents from "../components/navbarWebUser/navbar";

export default function Menu() {
  return (
    <div className={styles.container}>
      <NavbarComponents />

      <div className={styles.container2}>
        <h1 className={styles.judulHalaman}>
          Cerita di Balik Nasi Goreng <span className={styles.kuning}>Pakde Har</span>
        </h1>

        <h3 className={styles.deskripsisingkatberanda}>
          Dari wajan sederhana di pinggir jalan Untar, Pakde Har menghadirkan cita rasa nasi goreng
          yang penuh kenangan dan kehangatan.
        </h3>

        <button className={styles.tombolJelajahi}>Tentang Pakde</button>
      </div>

      <img
        src="/images/PanahBawah.png"
        style={{
          display: "block",
          margin: "0 auto",
          width: "40px",
          height: "auto",
          position: "relative",
          bottom: "6vh",
        }}
      />

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
        >
          Dari Awal yang Sederhana
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.7,
            color: "#000",
            marginBottom: "22px",
          }}
        >
          Perjalanan Pakde Har dimulai pada tahun 2017, ketika Pakde Har mulai membuat nasi goreng khas
          buatannya dari dapur rumah sederhana. Berkat cita rasa bumbu khas dan harga yang ramah di
          kantong mahasiswa, aroma nasi goreng Pakde Har cepat menarik perhatian banyak pelanggan.
        </p>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.7,
            color: "#000",
            marginBottom: "22px",
          }}
        >
          Setahun kemudian, Pakde mulai berjualan di samping Universitas Tarumanagara — tempat di mana
          kehangatan, tawa, dan cerita para mahasiswa selalu menemani setiap wajan yang bergoyang.
        </p>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.7,
            color: "#000",
            marginBottom: "22px",
          }}
        >
          Kini, Warung Nasi Goreng Pakde Har terus berkembang. Dengan tempat yang telah direnovasi, kami
          tetap berkomitmen menyajikan rasa autentik dan suasana akrab yang telah menjadi ciri khas kami
          sejak awal.
        </p>
            </div>

      <div
        style={{
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            marginBottom: "10px",
            color: "black",
          }}
        >
          Berita Harian Kami
        </h2>
        <p
          style={{
            fontSize: "20px",
            color: "black",
            marginBottom: "50px",
          }}
        >
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
          }}
        >
          <img src="/images/Gerobak_Pakde.jpg" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
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
          }}
        >
          <img src="/images/Gerobak_Pakde.jpg" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
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
          }}
        >
          <img src="/images/Gerobak_Pakde.jpg" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
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

    </div>
  );
}