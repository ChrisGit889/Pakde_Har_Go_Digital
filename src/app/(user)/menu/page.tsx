"use server"
import { CategoryData } from "@/utils/dataTypes/CategoryData";
import styles from "../../page.module.css";
import KategoriMenu from "./components/KategoriMenu";
import HalamanUtamaMenu from "./components/HalamanUtamaMenu";
import { fetchData } from "@/utils/utils";
import { MenuData } from "@/utils/dataTypes/MenuData";

export default async function Menu() {
  const categories: CategoryData = await fetchData('/menu/categories', { method: 'GET' });
  categories.data.unshift({ name: 'Semua', description: 'Semua makanan' });
  const menu: MenuData = await fetchData('/menu/list', { method: 'GET' });

  return (
    <>
      <HalamanUtamaMenu />

      <h2 className={styles.judulHalaman2} id="menuUnggulan">
        Menu Unggulan Kami
      </h2>

      <KategoriMenu categories={categories} menu={menu} />
    </>
  );
}
