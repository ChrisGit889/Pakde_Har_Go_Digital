import { Image } from "react-bootstrap";
import styles from "../../page.module.css";
import KategoriMenu from "./components/ButtonKategori";
import CardMenu from "./components/CardMenu";
import HalamanUtamaMenu from "./components/HalamanUtamaMenu";

export default function Menu() {
  return (
    <>
      <HalamanUtamaMenu />

      <h2 className={styles.judulHalaman2} id="menuUnggulan">
        Menu Unggulan Kami
      </h2>

      <KategoriMenu />
      <CardMenu />
    </>
  );
}
