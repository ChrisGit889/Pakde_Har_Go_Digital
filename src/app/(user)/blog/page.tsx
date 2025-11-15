"use server"

import HalamanUtamaBerita from "./components/HalamanUtamaBerita";
import KategoriBerita from "./components/KategoriBerita";
import CardBerita from "./components/CardBerita";

export default async function Menu() {
  return (
    <>
      <HalamanUtamaBerita />

      <KategoriBerita />
      <CardBerita />
    </>
  );
}
