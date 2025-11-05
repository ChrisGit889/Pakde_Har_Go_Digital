import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.judulHalaman}>
        Nasi Goreng <span className={styles.kuning}>Pakde Har</span>
      </h1>

      <h3 className={styles.deskripsisingkatberanda}>
        Bukan sekadar pengganjal lapar. Nikmati porsi brutal dengan bumbu khas yang otentik. 
        Harga pas di kantong, rasa dijamin nendang!
      </h3>
    </div>
  );
}
