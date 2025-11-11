import Image from "next/image";
import styles from "./page.module.css";
import Card from "react-bootstrap/Card";
import NavbarComponents from "./components/navbarWebUser/navbar";
import MenuCards from "./components/KomponenBeranda/menuUnggulan";
import MenuUnggulan from "./components/KomponenBeranda/menuUnggulan";
import CeritaKami from "./components/KomponenBeranda/CeritaKami";
import Ulasan from "./components/KomponenBeranda/Ulasan";
import Footer from "./components/footerWebUser/footer";
import HalamanUtama from "./components/KomponenBeranda/HalamanUtama";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavbarComponents />
      <HalamanUtama />
      <h2 className={styles.judulHalaman2} id="menuUnggulan">
        Menu Unggulan Kami
      </h2>
      <h3 className={styles.deskripsisingkat2}>
        Cobain menu favorit yang paling laris dan bikin ketagihan, dijamin bakal
        bikin kamu pengen nambah terus!
      </h3>
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
      <MenuUnggulan />
      <CeritaKami />
      <h2 className={styles.judulHalaman2} id="menuUnggulan">
        Ulasan Tentang Pakde Har
      </h2>
      <h3 className={styles.deskripsisingkat2}>
        Biarkan Pembeli yang Berbicara
      </h3>
      <Ulasan />
      <Footer />
    </div>
  );
}
