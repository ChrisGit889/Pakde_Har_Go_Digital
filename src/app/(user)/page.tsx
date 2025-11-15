"use server"

import { Image } from 'react-bootstrap';
import styles from "../page.module.css";
import MenuUnggulan from "./components/menuUnggulan";
import CeritaKami from "./components/CeritaKami";
import Ulasan from "./components/Ulasan";
import HalamanUtama from "./components/HalamanUtama";

export default async function Home() {
  return (
    <>
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
        <Image
          src="/images/whatsapp.svg"
          alt=''
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

    </>
  );
}
