import styles from "../page.module.css";
import NavbarComponents from "../components/navbarWebUser/navbar";
import KategoriMenu from "../components/KomponenMenu/ButtonKategori";
import { Card } from "react-bootstrap";
import CardMenu from "../components/KomponenMenu/CardMenu";
import Footer from "../components/footerWebUser/footer";
import HalamanUtamaMenu from "../components/KomponenMenu/HalamanUtamaMenu";

export default function Menu() {
  return (
    <div className={styles.container}>
      <NavbarComponents />
      <HalamanUtamaMenu />

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

      <KategoriMenu />
      <CardMenu/>  
      <Footer />
    </div>
  );
}
