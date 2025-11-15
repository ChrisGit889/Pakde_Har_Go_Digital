"use server"

import styles from "../page.module.css";
import MenuUnggulan from "./components/menuUnggulan";
import CeritaKami from "./components/CeritaKami";
import Ulasan from "./components/Ulasan";
import HalamanUtama from "./components/HalamanUtama";
import { fetchData } from "@/utils/utils";

export default async function Home() {

  let foodData = await fetchData('/menu/highlighted', { method: 'GET' });
  if (!foodData) foodData = await fetchData('/menu/list?limit=3', { method: 'GET' }); //failsafe
  else if (foodData.data.length == 0) foodData = await fetchData('/menu/list?limit=3', { method: 'GET' }); //failsafe

  let reviewData = await fetchData('/review/highlighted', { method: 'GET' });
  if (!reviewData) reviewData = await fetchData('/review/list?limit=3', { method: 'GET' }); //failsafe
  else if (reviewData.data.length == 0) reviewData = await fetchData('/review/list?limit=3', { method: 'GET' }); //failsafe


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

      <MenuUnggulan menu={foodData} />
      <CeritaKami />
      <h2 className={styles.judulHalaman2} id="menuUnggulan">
        Ulasan Tentang Pakde Har
      </h2>
      <h3 className={styles.deskripsisingkat2}>
        Biarkan Pembeli yang Berbicara
      </h3>
      <Ulasan review={reviewData} />

    </>
  );
}
