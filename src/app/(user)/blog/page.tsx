"use server"
import HalamanUtamaBerita from "./components/HalamanUtamaBerita";
import KategoriBerita from "./components/KategoriBerita";
import { fetchData } from "@/utils/utils";
import { CategoryData } from "@/utils/dataTypes/CategoryData";
import { BlogData } from "@/utils/dataTypes/BlogData";

export default async function Menu() {
  const categories: CategoryData = await fetchData('/blog/categories', { method: 'GET' });
  const blogs: BlogData[] = (await fetchData('/blog/list', { method: 'GET' })).data;
  categories.data.unshift({ name: 'Semua', description: 'Semua makanan' });

  return (
    <>
      <HalamanUtamaBerita />

      <KategoriBerita categories={categories} blogs={blogs} />

    </>
  );
}
