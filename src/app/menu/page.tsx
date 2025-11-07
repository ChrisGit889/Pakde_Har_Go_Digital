import styles from "../page.module.css";
import NavbarComponents from "../components/navbarWebUser/navbar";

export default function Menu() {
  return (
    <div className={styles.container}>
      <NavbarComponents />
      <div className={styles.container2}>
        <h1 className={styles.judulHalaman}>
          Menu <span className={styles.kuning}>Kami</span>
        </h1>

        <h3 className={styles.deskripsisingkatberanda}>
          Temukan berbagai nasi goreng lezat yang disajikan dengan cinta dan
          rasa
        </h3>
        <a href="#menuUnggulan">
          <button className={styles.tombolJelajahi}>Lihat Menu</button>
        </a>
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

      <h2 className={styles.judulHalaman2} id="menuUnggulan">
        Menu Unggulan Kami
      </h2>

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
