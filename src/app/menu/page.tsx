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
        Temukan berbagai nasi goreng lezat yang disajikan dengan cinta dan rasa
      </h3>
      <a href="#menuUnggulan"><button className={styles.tombolJelajahi}>Lihat Menu</button></a>
    </div>

    

    <h2 className={styles.judulHalaman2} id="menuUnggulan">
        Menu Unggulan Kami
      </h2>
    </div>
  );
}
