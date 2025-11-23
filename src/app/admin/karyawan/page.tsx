'use server';
import AdminEmployeeSync from './components/AdminEmployeeSync';
import { fetchData } from '@/utils/utils';

export default async function AdminEmployeePage() {
  const employeesData = await fetchData('/employee/list', {
    method: 'GET',
  });

  return (
    <AdminEmployeeSync
      employees={employeesData}
    />
  );
}