'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddEmployee from './AddEmployee';
import EmployeeCard from './EmployeeCard';
import '../../menu/components/AdminMenu.css';
import { Employee, EmployeeData } from '@/utils/dataTypes/EmployeeData';

export default function AdminEmployeeSync({ employees }: { employees: EmployeeData }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<Employee | null>(null);

  const handleRefresh = () => {
    router.refresh();
  };

  const openAddModal = () => {
    setEditData(null);
    setIsModalOpen(true);
  };

  const openEditModal = (emp: Employee) => {
    setEditData(emp);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="admin-menu-topbar" style={{ marginBottom: '24px' }}>
        <h1 className="admin-menu-title">Daftar Karyawan</h1>
        <div className="button-group">
          <button className="admin-button primary" onClick={openAddModal}>
            + Tambah Karyawan
          </button>
        </div>
      </div>

      <div className="product-grid">
        {employees && employees.data.length > 0 ? (
          employees.data.map((emp) => (
            <EmployeeCard
              key={emp.id}
              employee={emp}
              onEdit={() => openEditModal(emp)}
              onRefresh={handleRefresh}
            />
          ))
        ) : (
          <p>Belum ada data karyawan.</p>
        )}
      </div>

      <AddEmployee
        show={isModalOpen}
        onClose={() => {
          setEditData(null);
          setIsModalOpen(false);
          handleRefresh();
        }}
        editData={editData}
      />
    </>
  );
}