import Image from "next/image";
import styles from "./page.module.css";
import Card from "react-bootstrap/Card";
import NavbarComponents from "./components/navbarWebUser/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavbarComponents />
      <div className={styles.container2}>
        <h1 className={styles.judulHalaman}>
          Nasi Goreng <span className={styles.kuning}>Pakde Har</span>
        </h1>

        <h3 className={styles.deskripsisingkatberanda}>
          Bukan sekadar pengganjal lapar. Nikmati porsi brutal dengan bumbu khas
          yang otentik. Harga pas di kantong, rasa dijamin nendang!
        </h3>
        <a href="#menuUnggulan">
          <button className={styles.tombolJelajahi}>Ayo Jelajahi !</button>
        </a>
        <img src="/images/PanahBawah.png" className={styles.panahBawah} />
      </div>
      <h2 className={styles.judulHalaman2} id="menuUnggulan">
        Menu Unggulan Kami
      </h2>
      <h3 className={styles.deskripsisingkat2}>
        Cobain menu favorit yang paling laris dan bikin ketagihan, dijamin bakal
        bikin kamu pengen nambah terus!
      </h3>
      <a
        href="https://wa.me/6287812134731"
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
