'use server';
import { cookies } from 'next/headers';
import AdminMenuSync from './components/AdminMenuSync';
import { fetchData } from '@/utils/utils';
import { CategoryData } from '@/utils/dataTypes/CategoryData';

export default async function AdminMenuPage() {
  const x = (await cookies()).getAll();

  const data = await fetchData('/menu/list', {
    method: 'GET',
  });

  const categories: CategoryData = await fetchData('/menu/categories', {
    method: 'GET'
  });
  categories.data.unshift({ name: 'Semua', description: 'Semua menu' });

  return (
    <>
      <AdminMenuSync
        data={data}
        categories={categories}
      />
    </>
  );
}