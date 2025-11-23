'use server';
import AdminEmployeeSync from '@/app/components/dashboard/AdminEmployeeSync'; // Kita akan buat ini
import { fetchData } from '@/utils/utils';

export default async function AdminEmployeePage() {
  const employeesData = await fetchData('/employee/list', {
    method: 'GET',
  });

  return (
    <AdminEmployeeSync
      employees={Array.isArray(employeesData) ? employeesData : employeesData.data}
    />
  );
}