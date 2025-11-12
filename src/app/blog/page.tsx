import styles from "../page.module.css";
import NavbarComponents from "../components/navbarWebUser/navbar";
import KategoriMenu from "../components/KomponenMenu/ButtonKategori";
import { Card } from "react-bootstrap";
import CardMenu from "../components/KomponenMenu/CardMenu";
import Footer from "../components/footerWebUser/footer";
import HalamanUtamaMenu from "../components/KomponenMenu/HalamanUtamaMenu";
import HalamanUtamaBerita from "../components/KomponenBerita/HalamanUtamaBerita";
import BeritaList from "../components/berita/BeritaList";
import KategoriBerita from "../components/KomponenBerita/KategoriBerita";
import CardBerita from "../components/KomponenBerita/CardBerita";

export default function Menu() {
  return (
    <div className={styles.container}>
      <NavbarComponents />
      <HalamanUtamaBerita />

      <KategoriBerita />
      <CardBerita />
      <Footer />
    </div>
  );
}
