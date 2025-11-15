'use server';
import AdminMenuSync from './components/AdminMenuSync';
import { fetchData } from '@/utils/utils';

export default async function AdminMenuPage() {

  const data = await fetchData('/menu/list', {
    method: 'GET',
  });

  const categories = await fetchData('/menu/categories', {
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