'use client';
import { Menu } from '@/utils/dataTypes/MenuData';
import './AdminMenu.css';
import { fetchBoolean, getToken } from '@/utils/utils';

export default function DeleteModal({ show, onClose, item }: { show: boolean, onClose: () => void, item: Menu }) {
  if (!show) return null;

  const onConfirm = async () => {
    const header = new Headers();
    header.append('Authorization', (await getToken())!.toString());
    await fetchBoolean('/menu/' + item.id, {
      method: 'DELETE',
      headers: header,
    });
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content delete-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon-wrapper warning">
          <svg className="modal-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
        </div>

        <div className="modal-text-content">
          <h3>Hapus Menu</h3>
          <p>
            Apakah Anda yakin ingin menghapus <strong>{item.food.name}</strong>?
            Tindakan ini tidak dapat dibatalkan.
          </p>
        </div>

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>
            Batal
          </button>
          <button className="modal-button red" onClick={onConfirm}>
            Ya, Hapus
          </button>
        </div>
      </div>
    </div>
  );
}