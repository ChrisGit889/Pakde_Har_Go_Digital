'use client';
import { fetchBoolean, getToken } from '@/utils/utils';
import { Image } from 'react-bootstrap';
import { Employee } from '@/utils/dataTypes/EmployeeData';
import '../../menu/components/AdminMenu.css';
import { Pencil, Trash } from 'react-bootstrap-icons';

export default function EmployeeCard({ employee, onEdit, onRefresh }: { employee: Employee, onEdit: () => void, onRefresh: () => void }) {

  const handleDelete = async () => {
    if (!confirm(`Yakin ingin menghapus ${employee.profile.name}?`)) return;

    const tok = await getToken();
    const headers = new Headers();
    headers.append('Authorization', tok!.toString());
    const res = await fetchBoolean(`/employee/${employee.id}`, {
      method: 'DELETE',
      headers: headers
    });

    if (res) {
      onRefresh();
    } else {
      alert("Gagal menghapus karyawan");
    }
  };

  return (
    <div className="product-card">
      <Image
        src={employee.image?.data || '/images/placeholder.jpg'}
        alt={employee.profile.name}
        className="product-card-image"
      />
      <div className="product-card-content">
        <div>
          <h4 className="product-card-title">{employee.profile.name}</h4>
          <p className="product-card-subtitle" style={{ color: '#ff8c00' }}>{employee.profile.role}</p>
          <p className="product-card-description">{employee.profile.description}</p>
        </div>

        <div className="product-card-actions">
          <button className="product-card-button edit" onClick={onEdit}>
            <span><Pencil /></span> Edit
          </button>
          <button className="product-card-button delete" onClick={handleDelete}>
            <span><Trash /></span> Hapus
          </button>
        </div>
      </div>
    </div>
  );
}