import styles from "../page.module.css";
import NavbarComponents from "../components/navbarWebUser/navbar";

export default function Menu() {
  return (
    <div className={styles.container}>
      <NavbarComponents />
      <div className={styles.containerKontak}>
        <h1 className={styles.judulHalaman}>Hubungi Kami</h1>

        <h3 className={styles.deskripsisingkatberanda}>
          Punya pertanyaan atau saran ? Kirim pesan ke kami dan kami siap
          melayani dengan sepenuh hati
        </h3>
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
