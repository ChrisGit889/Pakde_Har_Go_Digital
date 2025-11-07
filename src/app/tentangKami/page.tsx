import styles from "../page.module.css";
import NavbarComponents from "../components/navbarWebUser/navbar";

export default function Menu() {
  return (
    <div className={styles.container}>
      <NavbarComponents />
      <div className={styles.container2}>
        <h1 className={styles.judulHalaman}>
          Cerita di Balik Nasi Goreng{" "}
          <span className={styles.kuning}>Pakde Har</span>
        </h1>

        <h3 className={styles.deskripsisingkatberanda}>
          Dari wajan sederhana di pinggir jalan Untar, Pakde Har menghadirkan
          cita rasa nasi goreng yang penuh kenangan dan kehangatan.
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
          bottom: "50px",
        }}
      />

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
      >
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
            backgroundColor: "#ffffffff",
            cursor: "pointer",
          }}
        />
      </a>
    </div>
  );
}
